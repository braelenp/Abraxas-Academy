// Polyfills for Node.js modules used in browser
import { Buffer } from 'buffer';
import process from 'process';

declare global {
  interface Window {
    Buffer: typeof Buffer;
    process: typeof process;
  }
}

// Ensure polyfills are available globally
globalThis.Buffer = Buffer;
globalThis.process = process;

// Also set on window for legacy code
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
  (window as any).process = process;
}
