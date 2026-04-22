import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Zap, User, Crown } from 'lucide-react';

const navItems = [
  { to: '/app/home', label: 'Home', icon: Home, rune: '⌂' },
  { to: '/app/curriculum', label: 'Curriculum', icon: BookOpen, rune: 'ᚱ' },
  { to: '/app/cadabra', label: 'Cadabra', icon: Zap, rune: '✦' },
  { to: '/app/profile', label: 'Profile', icon: User, rune: '𓂀' },
  { to: '/app/regime', label: 'Regime', icon: Crown, rune: '👑' },
] as const;

export function BottomNav() {
  return (
    <nav className="z-40 flex w-full flex-none border-t border-cyan-300/15 bg-black/88 px-1 py-1 backdrop-blur-xl">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} className="flex flex-1 items-center justify-center">
          {({ isActive }) => (
            <div
              className={`flex w-full flex-col items-center rounded-xl px-1.5 py-2 transition ${
                isActive
                  ? 'bg-cyan-300/12 text-cyan-100 shadow-[0_0_24px_rgba(0,245,255,0.14)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span
                className={`text-lg ${
                  isActive
                    ? 'text-cyan-200 drop-shadow-[0_0_12px_rgba(0,245,255,0.7)]'
                    : 'text-violet-200/60'
                }`}
              >
                {item.rune}
              </span>
              <span className="mt-0.5 text-[10px] font-semibold tracking-wide">{item.label}</span>
              <span
                className={`mt-1 h-0.5 w-6 rounded-full transition ${
                  isActive ? 'bg-[linear-gradient(90deg,rgba(0,245,255,0.8),rgba(153,69,255,0.9))]' : 'bg-transparent'
                }`}
              />
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
