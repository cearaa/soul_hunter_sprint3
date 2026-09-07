import { useLocation } from "react-router-dom";
import { getPageAccent } from "../../theme/pageAccent";

export default function Footer() {
  const location = useLocation();
  const accent = getPageAccent(location.pathname);

  return (
    <footer
      className={`border-t border-white/10 bg-gradient-to-r ${accent.stripe} px-6 py-6 text-center text-white transition-colors duration-700`}
    >
      <p className="font-semibold">
        👻 SoulHunter <span className="opacity-70">·</span> {accent.label}
      </p>
      <p className="mt-1 text-sm text-white/80">
        &copy; 2026 SoulHunter — Plataforma Sustentável Gamificada. Todos os fantasmas reservados.
      </p>
    </footer>
  );
}
