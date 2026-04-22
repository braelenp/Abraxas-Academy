import { Buffer } from 'buffer';
import process from 'process';

declare global {
  interface Window {
    Buffer?: typeof Buffer;
    process?: typeof process;
  }
}

if (!window.Buffer) {
  window.Buffer = Buffer;
}

if (!window.process) {
  window.process = process;
}
