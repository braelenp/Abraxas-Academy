import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/app/academy', label: 'Academy', rune: 'ᚱ' },
  { to: '/app/join', label: 'Genesis', rune: '☍' },
  { to: '/app/cadabra', label: 'Cadabra', rune: '✦' },
  { to: '/app/profile', label: 'ID', rune: '𓂀' },
] as const;

export function AppPrimaryNav() {
  return (
    <nav className="z-40 mx-auto flex w-full max-w-md flex-none border-t border-cyan-300/15 bg-black/88 px-2 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} className="flex flex-1 items-center justify-center">
          {({ isActive }) => (
            <div className={`flex w-full flex-col items-center rounded-2xl px-2 py-2 transition ${isActive ? 'bg-cyan-300/12 text-cyan-100 shadow-[0_0_24px_rgba(0,245,255,0.14)]' : 'text-slate-400 hover:text-slate-200'}`}>
              <span className={`text-base ${isActive ? 'text-cyan-200 drop-shadow-[0_0_12px_rgba(0,245,255,0.7)]' : 'text-violet-200/60'}`}>{item.rune}</span>
              <span className="mt-1 text-[11px] font-semibold tracking-wide">{item.label}</span>
              <span className={`mt-1 h-1 w-8 rounded-full transition ${isActive ? 'bg-[linear-gradient(90deg,rgba(0,245,255,0.8),rgba(153,69,255,0.9))]' : 'bg-transparent'}`} />
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
