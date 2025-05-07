// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Certifique-se de que o Vite cria os arquivos de produção na pasta 'dist' ou outra que você preferir
  },
  base: '/StyleWeather/', // Ou '/styleweather/' caso seu projeto esteja em uma subpasta na produção
});
