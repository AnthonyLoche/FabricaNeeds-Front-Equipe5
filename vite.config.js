import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      pagesDir: 'src/views', // Defina o diretório onde estão seus componentes de página Vue
      extensions: ['vue'], // Defina as extensões de arquivo para seus componentes Vue
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
