import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'C:/Users/PC HOME/Testando-React-no-Django/core/main/static/js',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.jsx'),
      output: {
        entryFileNames: 'main.js', // <---- Nome fixo!
        assetFileNames: '[name].[ext]' // evita hashes nos arquivos de estilo ou outros
      }
    }
  }
});
