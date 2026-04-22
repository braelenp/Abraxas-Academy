import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const processBrowserPath = fileURLToPath(new URL('./node_modules/process/browser.js', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      process: processBrowserPath,
      'process/browser': processBrowserPath,
      'process/browser.js': processBrowserPath,
    },
  },
  define: {
    global: 'globalThis',
    'process.env': {},
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
