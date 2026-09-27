const clamp = (value: number, minimum = 0, maximum = 1): number =>
  Math.min(maximum, Math.max(minimum, value));

/** Scroll is the authoritative timeline. No scroll hijacking or artificial delays. */
export function initializeMotion(): () => void {
  const story = document.querySelector<HTMLElement>('#story');
  const hero = document.querySelector<HTMLElement>('.hero-art');
  const frames = Array.from(document.querySelectorAll<HTMLElement>('.story-frame'));
  const captions = Array.from(document.querySelectorAll<HTMLElement>('.story-caption'));
  const bars = Array.from(
    document.querySelectorAll<HTMLElement>('.story-progress > span'),
  );
  const count = document.querySelector<HTMLElement>('#story-current');
  const canvas = document.querySelector<HTMLCanvasElement>('#story-particles');
  const context = canvas?.getContext('2d') ?? null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let frameId = 0;
  let width = 0;
  let height = 0;
  let chapter = -1;
  let disposed = false;

  function drawParticles(progress: number): void {
    if (!context || !canvas) return;
    context.clearRect(0, 0, width, height);
    // A bounded deterministic field moves with the story, not an endless timer.
    const openness = Math.sin(progress * Math.PI);
    for (let index = 0; index < 24; index += 1) {
      const angle = index * 2.399963;
      const distance = (0.05 + index * 0.008) * width * (0.5 + progress * 1.5);
      const x = width * 0.49 + Math.cos(angle + progress * 0.8) * distance;
      const y = height * 0.48 + Math.sin(angle + progress * 0.8) * distance * 0.6;
      context.fillStyle = `rgba(103,133,48,${openness * (0.12 + (index % 4) * 0.08)})`;
      context.beginPath();
      context.arc(x, y, 0.9 + (index % 3) * 0.45, 0, Math.PI * 2);
      context.fill();
    }
  }

  function update(): void {
    frameId = 0;
    if (disposed || !story || reducedMotion.matches || document.hidden) return;
    const rectangle = story.getBoundingClientRect();
    const headerHeight =
      document.querySelector<HTMLElement>('#header')?.offsetHeight ?? 78;
    const stickyHeight = window.innerHeight - headerHeight;
    const distance = Math.max(1, story.offsetHeight - stickyHeight);
    const progress = clamp((headerHeight - rectangle.top) / distance);
    const step = progress * 2;
    frames.forEach((frame, index) => {
      frame.style.opacity = String(clamp(1 - Math.abs(step - index)));
      frame.style.setProperty('--scene-scale', String(1.03 + progress * 0.07));
      frame.style.setProperty('--scene-rotation', `${-1 + progress * 2}deg`);
    });
    const nextChapter = Math.min(2, Math.floor(progress * 3));
    if (nextChapter !== chapter) {
      chapter = nextChapter;
      captions.forEach((caption, index) => {
        const active = index === chapter;
        caption.classList.toggle('is-current', active);
        caption.setAttribute('aria-hidden', String(!active));
      });
      if (count) count.textContent = String(chapter + 1).padStart(2, '0');
    }
    bars.forEach((bar, index) =>
      bar.style.setProperty('--fill', String(clamp(progress * 3 - index))),
    );
    drawParticles(progress);
  }

  function schedule(): void {
    if (!frameId && !disposed && !document.hidden)
      frameId = window.requestAnimationFrame(update);
  }

  function resize(): void {
    if (canvas && context) {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    schedule();
  }

  function resetMotionPreference(): void {
    chapter = -1;
    if (reducedMotion.matches) {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
      captions.forEach((caption) => caption.removeAttribute('aria-hidden'));
      hero?.style.removeProperty('--pointer-x');
      hero?.style.removeProperty('--pointer-y');
      document
        .querySelectorAll('.reveal')
        .forEach((element) => element.classList.remove('is-pending'));
    } else resize();
  }

  function movePointer(event: PointerEvent): void {
    if (
      reducedMotion.matches ||
      !finePointer.matches ||
      !hero ||
      window.scrollY > window.innerHeight
    )
      return;
    hero.style.setProperty(
      '--pointer-x',
      `${(event.clientX / window.innerWidth - 0.5) * 12}px`,
    );
    hero.style.setProperty(
      '--pointer-y',
      `${(event.clientY / window.innerHeight - 0.5) * 8}px`,
    );
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-pending');
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.05 },
  );
  if (!reducedMotion.matches) {
    document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
      // Content already in view never waits for an entrance animation.
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add('is-pending');
        revealObserver.observe(element);
      }
    });
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', movePointer, { passive: true });
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', resetMotionPreference);
  resize();
  resetMotionPreference();

  return () => {
    disposed = true;
    if (frameId) cancelAnimationFrame(frameId);
    revealObserver.disconnect();
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', movePointer);
    document.removeEventListener('visibilitychange', schedule);
    reducedMotion.removeEventListener('change', resetMotionPreference);
  };
}
