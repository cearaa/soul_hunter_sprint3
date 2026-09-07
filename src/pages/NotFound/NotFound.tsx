import ButtonLink from "../../components/Button/ButtonLink";
import GhostField from "../../components/Ghost/GhostField";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Página não encontrada");

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden py-24 text-center">
      <GhostField
        ghosts={[
          { top: "15%", left: "10%", size: 60, color: "#22d3ee", opacity: 0.4, variant: 1 },
          { bottom: "15%", right: "12%", size: 55, color: "#8b5cf6", opacity: 0.4, variant: 2 },
        ]}
      />
      <div className="relative">
        <h2 className="mb-4 text-6xl font-bold text-soul-cyan neon-text">404</h2>
        <p className="mb-8 text-lg text-white/80">
          Ops! Esse fantasma fugiu — essa página não existe no SoulHunter.
        </p>
        <ButtonLink to="/">Voltar para a Home</ButtonLink>
      </div>
    </section>
  );
}
