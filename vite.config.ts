import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Helper to inject polyfills into the entry chunk
function polyfillPlugin() {
  return {
    name: 'polyfill-inject',
    apply: 'build',
    transform(code: string, id: string) {
      // Inject into the entry module
      if (id.includes('src/main.tsx')) {
        const polyfill = `
import './polyfills';
`;
        return {
          code: polyfill + code,
          map: null,
        };
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), polyfillPlugin()],
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
