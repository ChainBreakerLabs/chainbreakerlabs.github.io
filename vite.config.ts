import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: { target: 'es2022' },
  server: { port: 5178, strictPort: true },
  preview: { port: 4178, strictPort: true },
});
