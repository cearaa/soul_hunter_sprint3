import { useState } from "react";
import { Link } from "react-router-dom";
import githubIcon from "../../assets/img/icones/github.png";
import linkedinIcon from "../../assets/img/icones/linkedin.png";
import Ghost from "../../components/Ghost/Ghost";
import GhostField from "../../components/Ghost/GhostField";
import { integrantes } from "../../data/integrantes";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const ghostColors = ["#22d3ee", "#8b5cf6", "#d946ef", "#fbbf24", "#2dd4bf"];

export default function Integrantes() {
  useDocumentTitle("Integrantes");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function toggleExpanded(id: string) {
    setExpandedId((current) => (current === id ? null : id));
  }

  return (
    <section className="relative overflow-hidden py-12">
      <GhostField
        ghosts={[
          { top: "5%", left: "4%", size: 55, color: "#8b5cf6", opacity: 0.3, variant: 2 },
          { bottom: "8%", right: "5%", size: 65, color: "#22d3ee", opacity: 0.3, variant: 1 },
        ]}
      />
      <div className="relative mx-auto w-[90%] max-w-6xl text-center">
        <span className="mb-3 inline-block rounded-full border border-soul-violet/40 bg-soul-violet/10 px-4 py-1 text-sm font-semibold text-soul-violet-soft">
          🧑‍🚀 A equipe por trás da caçada
        </span>
        <h2 className="mb-3 text-3xl font-bold text-white sm:text-5xl">Integrantes</h2>
        <p className="mx-auto mb-10 max-w-2xl text-white/70">
          Clique em <strong>"Ver mais sobre essa pessoinha"</strong> para conhecer o papel de
          cada caçador(a) no desenvolvimento do SoulHunter.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrantes.map((integrante, index) => {
            const isExpanded = expandedId === integrante.id;
            const ghostColor = ghostColors[index % ghostColors.length];

            return (
              <div
                key={integrante.id}
                className="glass-card group relative overflow-hidden text-left transition-transform duration-300 hover:-translate-y-1"
                style={{ boxShadow: isExpanded ? `0 0 26px ${ghostColor}33` : undefined }}
              >
                <div className="absolute right-3 top-3 z-10 opacity-70">
                  <Ghost color={ghostColor} size={34} variant={((index % 3) + 1) as 1 | 2 | 3} />
                </div>

                <Link to={`/integrantes/${integrante.id}`} className="block">
                  <img
                    src={integrante.foto}
                    alt={integrante.nome}
                    style={{ objectPosition: integrante.fotoPosition ?? "center" }}
                    className="h-[240px] w-full object-cover"
                  />
                </Link>

                <div className="p-4">
                  <h3 className="font-semibold text-white">
                    <Link to={`/integrantes/${integrante.id}`} className="hover:text-soul-cyan">
                      {integrante.nome}
                    </Link>
                  </h3>
                  <p className="text-sm text-white/60">RM: {integrante.rm}</p>
                  <p className="text-sm text-white/60">Turma: {integrante.turma}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={integrante.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub de ${integrante.nome}`}
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      <img src={githubIcon} alt="ícone do GitHub" className="h-8 w-8 rounded-full bg-white p-1" />
                    </a>
                    <a
                      href={integrante.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`LinkedIn de ${integrante.nome}`}
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      <img src={linkedinIcon} alt="ícone do LinkedIn" className="h-8 w-8 rounded-full bg-white p-1" />
                    </a>
                  </div>

                  <button
                    onClick={() => toggleExpanded(integrante.id)}
                    className="mt-4 flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: ghostColor }}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Mostrar menos ▲" : "Ver mais sobre esse BBzão ▼"}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 border-t border-white/10 pt-3 text-sm text-white/75">
                      <p className="mb-2">{integrante.bio}</p>
                      <p className="flex items-center gap-1 text-white/60">
                        <span aria-hidden="true">👻</span> Alma favorita:{" "}
                        <span className="font-semibold text-white/85">
                          {integrante.fantasmaFavorito}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
