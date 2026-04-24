/**
 * CRITICAL: Polyfills must load FIRST before any other code
 * This file ensures Node.js APIs are available in the browser
 */

// Import polyfills from npm packages
import { Buffer } from 'buffer';
import process from 'process';

// Define global types
declare global {
  interface Window {
    Buffer: typeof Buffer;
    process: typeof process;
  }
  var Buffer: typeof Buffer;
  var process: typeof process;
}

// Phase 1: Set on globalThis (used by most modern code)
(globalThis as any).Buffer = Buffer;
(globalThis as any).process = process;

// Phase 2: Set on window (for older code that uses window directly)
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
  window.process = process as any;
}

// Phase 3: Ensure process.browser is set for proper detection
if ((globalThis as any).process) {
  (globalThis as any).process.browser = true;
  (globalThis as any).process.env = (globalThis as any).process.env || {};
}

// Phase 4: Make Buffer accessible without qualification
const BufferGlobal = Buffer;
(globalThis as any).Buffer = BufferGlobal;

// Verify globals are set
if (!((globalThis as any).Buffer && (globalThis as any).process)) {
  console.warn('Warning: Polyfills may not have loaded correctly');
}

export {};
