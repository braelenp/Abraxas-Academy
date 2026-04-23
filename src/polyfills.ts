// Polyfills for Node.js modules used in browser
// This MUST run before any other code
import { Buffer } from 'buffer';
import process from 'process';

declare global {
  interface Window {
    Buffer: typeof Buffer;
    process: typeof process;
  }
  var Buffer: typeof Buffer;
  var process: typeof process;
}

// Set up globals immediately
(globalThis as any).Buffer = Buffer;
(globalThis as any).process = process;

// Also set on window for compatibility
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
  window.process = process as any;
}

// Ensure process.browser is set for browser detection
if ((globalThis as any).process && !(globalThis as any).process.browser) {
  (globalThis as any).process.browser = true;
}

export {};
