import {
  BookOpen,
  CircleHelp,
  Ghost,
  House,
  Mail,
  Menu,
  Target,
  Trophy,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getPageAccent } from "../../theme/pageAccent";

interface NavItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { label: "Home", to: "/", icon: House },
  { label: "Integrantes", to: "/integrantes", icon: Users },
  { label: "Sobre", to: "/sobre", icon: BookOpen },
  { label: "FAQ", to: "/faq", icon: CircleHelp },
  { label: "Contato", to: "/contato", icon: Mail },
  { label: "Dashboard", to: "/dashboard", icon: Target },
  { label: "Ranking", to: "/ranking", icon: Trophy },
  { label: "Fantasma", to: "/fantasma", icon: Ghost },
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
          <Ghost className="h-7 w-7" strokeWidth={2.2} aria-hidden="true" />
          <span className="neon-text">SoulHunter</span>
        </NavLink>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white md:hidden"
          id="menuToggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
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
              <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
