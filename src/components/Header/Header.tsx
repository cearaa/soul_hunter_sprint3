import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getPageAccent } from "../../theme/pageAccent";

interface NavItem {
  label: string;
  to: string;
  emoji: string;
}

const navItems: NavItem[] = [
  { label: "Home", to: "/", emoji: "🏠" },
  { label: "Integrantes", to: "/integrantes", emoji: "🧑‍🚀" },
  { label: "Sobre", to: "/sobre", emoji: "📖" },
  { label: "FAQ", to: "/faq", emoji: "❓" },
  { label: "Contato", to: "/contato", emoji: "✉️" },
  { label: "Dashboard", to: "/dashboard", emoji: "🎯" },
  { label: "Ranking", to: "/ranking", emoji: "🏆" },
  { label: "Fantasma", to: "/fantasma", emoji: "👻" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const accent = getPageAccent(location.pathname);

  function toggleMenu() {
    setMenuOpen((current) => !current);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r ${accent.stripe} shadow-lg transition-colors duration-700`}
    >
      <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between py-3">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-tight text-white"
        >
          <span className="text-2xl">👻</span>
          <span className="neon-text">SoulHunter</span>
        </NavLink>

        <button
          className="rounded-lg border border-white/30 px-3 py-1 text-2xl text-white md:hidden"
          id="menuToggle"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          ☰
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute right-4 top-[64px] z-50 w-60 flex-col gap-1 rounded-2xl border border-white/10 bg-soul-900/95 p-3 shadow-2xl backdrop-blur md:static md:flex md:w-auto md:flex-row md:gap-1 md:border-none md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none`}
          id="navMenu"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              aria-label={item.label}
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-all duration-300 hover:bg-white/15 hover:text-white md:text-[0.92rem] ${
                  isActive ? "bg-white/20 font-bold text-white shadow-inner" : ""
                }`
              }
            >
              <span aria-hidden="true">{item.emoji}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
