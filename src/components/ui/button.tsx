import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'border border-cyan-300/45 bg-cyan-300/12 text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.18)] hover:bg-cyan-300/18',
  secondary: 'border border-violet-400/35 bg-violet-500/12 text-violet-100 shadow-[0_0_24px_rgba(153,69,255,0.18)] hover:bg-violet-500/18',
  ghost: 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10',
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'ui-action inline-flex h-11 items-center justify-center rounded-2xl px-4 text-sm font-semibold tracking-wide transition disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
