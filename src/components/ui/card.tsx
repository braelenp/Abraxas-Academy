import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('glow-panel rounded-[1.75rem] border border-cyan-300/20 bg-black/45 p-5 backdrop-blur-xl', className)} {...props} />;
}
