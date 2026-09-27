export type Language = 'es' | 'en' | 'pt';

const es = {
  skip: 'Ir al contenido',
  mainNav: 'Navegación principal',
  mobileNav: 'Navegación móvil',
  brandHome: 'ChainBreaker Labs, inicio',
  languageLabel: 'Idioma',
  menuOpen: 'Abrir menú',
  menuClose: 'Cerrar menú',
  navManifesto: 'El manifiesto',
  navUniverse: 'Nuestro universo',
  navVision: 'La visión',
  navProduct: 'Conoce Infinyte',
  heroEyebrow: 'UN LABORATORIO DE POSIBILIDADES',
  heroTitle: 'Tu vida.',
  heroTitleSerif: 'Sin cadenas.',
  heroDescription:
    'Creamos tecnología que rompe límites y abre posibilidades. Para que vivas por elección, no por imposición.',
  heroCta: 'Explora nuestro universo',
  heroNote: 'Grandes cambios. Un primer paso.',
  artLabel: 'EL INICIO DE ALGO DIFERENTE',
  scrollCue: 'DESLIZA. CAMBIA LA PERSPECTIVA.',
  heroBottom: 'Independientes por naturaleza. Libres por diseño.',
  tickerOne: 'MENOS LÍMITES',
  tickerTwo: 'MÁS POSIBILIDADES',
  tickerThree: 'TU PRÓXIMO CAPÍTULO',
  manifestoEyebrow: '01 / EL MANIFIESTO',
  manifestoOne: 'Hay cadenas',
  manifestoTwo: 'que no se ven.',
  manifestoThree: 'Y posibilidades',
  manifestoFour: 'que aún no imaginas.',
  manifestoAside: 'CREEMOS EN LO QUE PUEDES LLEGAR A SER.',
  manifestoDescription:
    'La incertidumbre, las rutinas que pesan, las decisiones que nunca sentimos nuestras. Nacimos para transformar esos límites en puntos de partida. Diseñamos herramientas que te devuelven algo esencial: la capacidad de elegir.',
  storyLabel: 'De las cadenas a la libertad',
  storyEyebrow: 'LA TRANSFORMACIÓN EMPIEZA CONTIGO',
  storyArtLabel: 'EL MATERIAL DE LA LIBERTAD',
  chapterOneLabel: '01 — RECONOCER',
  chapterOneTitle: 'El primer límite es el que aceptamos.',
  chapterOneBody:
    'Vivir en automático también es una cadena. Reconocerla es empezar a cambiar.',
  chapterTwoLabel: '02 — CUESTIONAR',
  chapterTwoTitle: 'Nada cambia. Hasta que tú cambias.',
  chapterTwoBody:
    'Una decisión consciente puede abrir lo que parecía cerrado. La tecnología debe ayudarte a tomarla.',
  chapterThreeLabel: '03 — ELEGIR',
  chapterThreeTitle: 'El espacio que queda es tuyo para crear.',
  chapterThreeBody:
    'Más claridad. Más intención. Más libertad para escribir tu siguiente capítulo.',
  universeEyebrow: '02 / NUESTRO UNIVERSO',
  universeAside: 'IDEAS QUE SE CONVIERTEN EN HERRAMIENTAS.',
  universeTitle: 'Una gran visión.',
  universeTitleSerif: 'Un comienzo real.',
  universeDescription:
    'La libertad tiene muchas dimensiones. Empezamos por una que transforma tu día a día: tu relación con el dinero.',
  productStatus: 'NUESTRO PRIMER PASO',
  productTagline: 'Tu dinero, con intención. Tu futuro, en tus manos.',
  productDescription:
    'Un espacio para entender tus finanzas, organizar tus compromisos y dar dirección a tus metas. Menos incertidumbre. Más decisiones que se sienten tuyas.',
  productTagOne: 'Finanzas personales',
  productTagTwo: 'Claridad financiera',
  productCta: 'Descubre Infinyte',
  floatingOne: 'más claridad.',
  floatingTwo: 'más tú.',
  productDemo: 'INTERFAZ REAL · INFINYTE',
  nextTitle: 'El universo sigue creciendo.',
  nextDescription: 'Nuevas preguntas. Nuevos caminos. La misma intención.',
  nextAside: 'ESTO APENAS COMIENZA.',
  visionEyebrow: '03 / EL HORIZONTE',
  visionTitle: 'La libertad no tiene',
  visionTitleSerif: 'una sola forma.',
  pillarFinance: 'Financiera.',
  pillarFinanceBody:
    'Que tu dinero amplíe tus posibilidades, en lugar de decidir por ti.',
  pillarFinanceNote: 'NUESTRO PUNTO DE PARTIDA',
  pillarPersonal: 'Personal y espiritual.',
  pillarPersonalBody:
    'Espacio para crecer, encontrar sentido y vivir en sintonía con lo que importa.',
  pillarPersonalNote: 'PARTE DE NUESTRA VISIÓN',
  pillarProfessional: 'Profesional.',
  pillarProfessionalBody:
    'Que tu potencial encuentre caminos. Y tu trabajo, un propósito que sientas propio.',
  pillarProfessionalNote: 'PARTE DE NUESTRA VISIÓN',
  visionBottom:
    'Nuestra visión: un ecosistema tecnológico que libere el potencial humano. Una herramienta. Una decisión. Una persona a la vez.',
  closingEyebrow: 'EL SIGUIENTE PASO ES TUYO',
  closingTitle: 'Elige tu',
  closingTitleSerif: 'próximo capítulo.',
  closingBody:
    'No necesitas tener todas las respuestas. Solo un lugar por donde empezar.',
  closingCta: 'Empieza con Infinyte',
  footerPurpose: 'Tecnología con propósito. Libertad por diseño.',
  backTop: 'Volver al inicio',
  privacy: 'Privacidad de Infinyte',
  pageTitle: 'ChainBreaker Labs — Tu vida. Sin cadenas.',
} as const;

export type TranslationKey = keyof typeof es;
type Dictionary = Record<TranslationKey, string>;

const en: Dictionary = {
  skip: 'Skip to content',
  mainNav: 'Main navigation',
  mobileNav: 'Mobile navigation',
  brandHome: 'ChainBreaker Labs, home',
  languageLabel: 'Language',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  navManifesto: 'The manifesto',
  navUniverse: 'Our universe',
  navVision: 'The vision',
  navProduct: 'Meet Infinyte',
  heroEyebrow: 'A LABORATORY OF POSSIBILITIES',
  heroTitle: 'Your life.',
  heroTitleSerif: 'Unchained.',
  heroDescription:
    'We create technology that breaks limits and opens possibilities. So you can live by choice, on your own terms.',
  heroCta: 'Explore our universe',
  heroNote: 'Big changes. One first step.',
  artLabel: 'THE START OF SOMETHING DIFFERENT',
  scrollCue: 'SCROLL. CHANGE YOUR PERSPECTIVE.',
  heroBottom: 'Independent by nature. Free by design.',
  tickerOne: 'FEWER LIMITS',
  tickerTwo: 'MORE POSSIBILITIES',
  tickerThree: 'YOUR NEXT CHAPTER',
  manifestoEyebrow: '01 / THE MANIFESTO',
  manifestoOne: 'Some chains',
  manifestoTwo: 'are invisible.',
  manifestoThree: 'Some possibilities',
  manifestoFour: 'are still unimaginable.',
  manifestoAside: 'WE BELIEVE IN WHO YOU CAN BECOME.',
  manifestoDescription:
    'Uncertainty. Routines that weigh you down. Decisions that never feel like your own. We were born to turn those limits into starting points. We design tools that give you back something essential: the ability to choose.',
  storyLabel: 'From chains to freedom',
  storyEyebrow: 'TRANSFORMATION STARTS WITH YOU',
  storyArtLabel: 'THE MATERIAL OF FREEDOM',
  chapterOneLabel: '01 — RECOGNIZE',
  chapterOneTitle: 'The first limit is the one we accept.',
  chapterOneBody:
    'Living on autopilot is a chain, too. Recognizing it is the beginning of change.',
  chapterTwoLabel: '02 — QUESTION',
  chapterTwoTitle: 'Nothing changes. Until you do.',
  chapterTwoBody:
    'One conscious decision can open what seemed closed. Technology should help you make it.',
  chapterThreeLabel: '03 — CHOOSE',
  chapterThreeTitle: 'The space that remains is yours to create.',
  chapterThreeBody:
    'More clarity. More intention. More freedom to write your next chapter.',
  universeEyebrow: '02 / OUR UNIVERSE',
  universeAside: 'IDEAS THAT BECOME TOOLS.',
  universeTitle: 'A bigger vision.',
  universeTitleSerif: 'A real beginning.',
  universeDescription:
    'Freedom has many dimensions. We start with one that shapes your everyday life: your relationship with money.',
  productStatus: 'OUR FIRST STEP',
  productTagline: 'Your money, with intention. Your future, in your hands.',
  productDescription:
    'A space to understand your finances, organize your commitments and give direction to your goals. Less uncertainty. More decisions that feel like your own.',
  productTagOne: 'Personal finance',
  productTagTwo: 'Financial clarity',
  productCta: 'Discover Infinyte',
  floatingOne: 'more clarity.',
  floatingTwo: 'more you.',
  productDemo: 'ACTUAL INTERFACE · INFINYTE',
  nextTitle: 'The universe keeps growing.',
  nextDescription: 'New questions. New paths. The same intention.',
  nextAside: 'THIS IS JUST THE BEGINNING.',
  visionEyebrow: '03 / THE HORIZON',
  visionTitle: 'Freedom takes',
  visionTitleSerif: 'more than one form.',
  pillarFinance: 'Financial.',
  pillarFinanceBody:
    'Let your money expand your possibilities, instead of deciding for you.',
  pillarFinanceNote: 'OUR STARTING POINT',
  pillarPersonal: 'Personal & spiritual.',
  pillarPersonalBody: 'Room to grow, find meaning and live in tune with what matters.',
  pillarPersonalNote: 'PART OF OUR VISION',
  pillarProfessional: 'Professional.',
  pillarProfessionalBody:
    'Let your potential find new paths. And your work, a purpose that feels like your own.',
  pillarProfessionalNote: 'PART OF OUR VISION',
  visionBottom:
    'Our vision: a technology ecosystem that unlocks human potential. One tool. One decision. One person at a time.',
  closingEyebrow: 'THE NEXT STEP IS YOURS',
  closingTitle: 'Choose your',
  closingTitleSerif: 'next chapter.',
  closingBody: 'You do not need every answer. Just somewhere to begin.',
  closingCta: 'Start with Infinyte',
  footerPurpose: 'Technology with purpose. Freedom by design.',
  backTop: 'Back to the top',
  privacy: 'Infinyte privacy',
  pageTitle: 'ChainBreaker Labs — Your life. Unchained.',
};

const pt: Dictionary = {
  skip: 'Ir para o conteúdo',
  mainNav: 'Navegação principal',
  mobileNav: 'Navegação móvel',
  brandHome: 'ChainBreaker Labs, início',
  languageLabel: 'Idioma',
  menuOpen: 'Abrir menu',
  menuClose: 'Fechar menu',
  navManifesto: 'O manifesto',
  navUniverse: 'Nosso universo',
  navVision: 'A visão',
  navProduct: 'Conheça o Infinyte',
  heroEyebrow: 'UM LABORATÓRIO DE POSSIBILIDADES',
  heroTitle: 'Sua vida.',
  heroTitleSerif: 'Sem correntes.',
  heroDescription:
    'Criamos tecnologia que rompe limites e abre possibilidades. Para você viver por escolha, não por imposição.',
  heroCta: 'Explore nosso universo',
  heroNote: 'Grandes mudanças. Um primeiro passo.',
  artLabel: 'O INÍCIO DE ALGO DIFERENTE',
  scrollCue: 'ROLE. MUDE A PERSPECTIVA.',
  heroBottom: 'Independentes por natureza. Livres por design.',
  tickerOne: 'MENOS LIMITES',
  tickerTwo: 'MAIS POSSIBILIDADES',
  tickerThree: 'SEU PRÓXIMO CAPÍTULO',
  manifestoEyebrow: '01 / O MANIFESTO',
  manifestoOne: 'Há correntes',
  manifestoTwo: 'que não se veem.',
  manifestoThree: 'E possibilidades',
  manifestoFour: 'que você ainda não imagina.',
  manifestoAside: 'ACREDITAMOS EM QUEM VOCÊ PODE SE TORNAR.',
  manifestoDescription:
    'A incerteza, as rotinas que pesam, as decisões que nunca parecem nossas. Nascemos para transformar esses limites em pontos de partida. Criamos ferramentas que devolvem algo essencial: a capacidade de escolher.',
  storyLabel: 'Das correntes à liberdade',
  storyEyebrow: 'A TRANSFORMAÇÃO COMEÇA COM VOCÊ',
  storyArtLabel: 'O MATERIAL DA LIBERDADE',
  chapterOneLabel: '01 — RECONHECER',
  chapterOneTitle: 'O primeiro limite é aquele que aceitamos.',
  chapterOneBody:
    'Viver no automático também é uma corrente. Reconhecê-la é começar a mudar.',
  chapterTwoLabel: '02 — QUESTIONAR',
  chapterTwoTitle: 'Nada muda. Até você mudar.',
  chapterTwoBody:
    'Uma decisão consciente pode abrir o que parecia fechado. A tecnologia deve ajudar você a tomá-la.',
  chapterThreeLabel: '03 — ESCOLHER',
  chapterThreeTitle: 'O espaço que fica é seu para criar.',
  chapterThreeBody:
    'Mais clareza. Mais intenção. Mais liberdade para escrever seu próximo capítulo.',
  universeEyebrow: '02 / NOSSO UNIVERSO',
  universeAside: 'IDEIAS QUE SE TORNAM FERRAMENTAS.',
  universeTitle: 'Uma grande visão.',
  universeTitleSerif: 'Um começo real.',
  universeDescription:
    'A liberdade tem muitas dimensões. Começamos por uma que transforma seu dia a dia: sua relação com o dinheiro.',
  productStatus: 'NOSSO PRIMEIRO PASSO',
  productTagline: 'Seu dinheiro, com intenção. Seu futuro, em suas mãos.',
  productDescription:
    'Um espaço para entender suas finanças, organizar seus compromissos e dar direção às suas metas. Menos incerteza. Mais decisões que parecem suas.',
  productTagOne: 'Finanças pessoais',
  productTagTwo: 'Clareza financeira',
  productCta: 'Descubra o Infinyte',
  floatingOne: 'mais clareza.',
  floatingTwo: 'mais você.',
  productDemo: 'INTERFACE REAL · INFINYTE',
  nextTitle: 'O universo continua crescendo.',
  nextDescription: 'Novas perguntas. Novos caminhos. A mesma intenção.',
  nextAside: 'ISSO É SÓ O COMEÇO.',
  visionEyebrow: '03 / O HORIZONTE',
  visionTitle: 'A liberdade tem',
  visionTitleSerif: 'mais de uma forma.',
  pillarFinance: 'Financeira.',
  pillarFinanceBody:
    'Que seu dinheiro amplie suas possibilidades, em vez de decidir por você.',
  pillarFinanceNote: 'NOSSO PONTO DE PARTIDA',
  pillarPersonal: 'Pessoal e espiritual.',
  pillarPersonalBody:
    'Espaço para crescer, encontrar sentido e viver em sintonia com o que importa.',
  pillarPersonalNote: 'PARTE DA NOSSA VISÃO',
  pillarProfessional: 'Profissional.',
  pillarProfessionalBody:
    'Que seu potencial encontre caminhos. E seu trabalho, um propósito que você sinta como seu.',
  pillarProfessionalNote: 'PARTE DA NOSSA VISÃO',
  visionBottom:
    'Nossa visão: um ecossistema tecnológico que libere o potencial humano. Uma ferramenta. Uma decisão. Uma pessoa de cada vez.',
  closingEyebrow: 'O PRÓXIMO PASSO É SEU',
  closingTitle: 'Escolha seu',
  closingTitleSerif: 'próximo capítulo.',
  closingBody: 'Você não precisa ter todas as respostas. Só um lugar por onde começar.',
  closingCta: 'Comece com Infinyte',
  footerPurpose: 'Tecnologia com propósito. Liberdade por design.',
  backTop: 'Voltar ao início',
  privacy: 'Privacidade do Infinyte',
  pageTitle: 'ChainBreaker Labs — Sua vida. Sem correntes.',
};

export const translations: Record<Language, Dictionary> = { es, en, pt };
let currentLanguage: Language = 'es';

export function isLanguage(value: string): value is Language {
  return value === 'es' || value === 'en' || value === 'pt';
}

function isTranslationKey(value: string): value is TranslationKey {
  return Object.hasOwn(es, value);
}

export function translate(key: TranslationKey): string {
  return translations[currentLanguage][key];
}

export function setLanguage(language: Language): void {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = translate('pageTitle');
  for (const element of document.querySelectorAll<HTMLElement>('[data-i18n]')) {
    const key = element.dataset.i18n;
    if (key && isTranslationKey(key)) element.textContent = translate(key);
  }
  for (const element of document.querySelectorAll<HTMLElement>('[data-i18n-aria]')) {
    const key = element.dataset.i18nAria;
    if (key && isTranslationKey(key))
      element.setAttribute('aria-label', translate(key));
  }
}
