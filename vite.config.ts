import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      process: 'process/browser',
      buffer: 'buffer',
    },
  },
  define: {
    global: 'globalThis',
    'process.browser': true,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
    include: [
      'process/browser',
      'buffer',
      '@metaplex-foundation/js',
      '@solana/web3.js',
    ],
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
