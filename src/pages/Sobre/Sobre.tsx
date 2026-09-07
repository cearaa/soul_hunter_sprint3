
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Sobre() {
  useDocumentTitle("Sobre");

  return (
    <section className="relative overflow-hidden py-12">
      <GhostField
        ghosts={[
          { top: "4%", right: "6%", size: 60, color: "#2dd4bf", opacity: 0.35, variant: 2 },
          { bottom: "8%", left: "5%", size: 50, color: "#8b5cf6", opacity: 0.35, variant: 3 },
        ]}
      />
      <div className="relative mx-auto w-[90%] max-w-6xl text-center">
        <span className="mb-3 inline-block rounded-full border border-soul-teal/40 bg-soul-teal/10 px-4 py-1 text-sm font-semibold text-soul-teal">
          📖 O universo por trás do jogo
        </span>
        <h2 className="mb-3 text-3xl font-bold text-white sm:text-5xl">Sobre o Projeto</h2>
        <p className="mx-auto mb-10 max-w-2xl text-white/70">
          Nesta Sprint, o SoulHunter deixou de ser um conjunto de páginas estáticas para se
          tornar uma aplicação viva: componentizada, tipada e com uma identidade visual própria.
          Explore abaixo cada pilar do projeto.
        </p>

        
          </div>
    </section>
  );
}
