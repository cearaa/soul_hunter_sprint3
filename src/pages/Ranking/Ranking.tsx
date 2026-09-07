import GhostField from "../../components/Ghost/GhostField";
import { useGame } from "../../context/GameContext";
import { buildRanking, medalhaEmoji } from "../../data/ranking";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Ranking() {
  useDocumentTitle("Ranking");
  const { username, points } = useGame();

  const ranking = buildRanking(username, points);

  return (
    <section className="relative overflow-hidden py-12">
      <GhostField
        ghosts={[
          { top: "6%", left: "5%", size: 55, color: "#fbbf24", opacity: 0.3, variant: 1 },
          { bottom: "8%", right: "6%", size: 60, color: "#d946ef", opacity: 0.3, variant: 3 },
        ]}
      />
      <div className="relative mx-auto w-[90%] max-w-4xl text-center">
        <span className="mb-3 inline-block rounded-full border border-soul-gold/40 bg-soul-gold/10 px-4 py-1 text-sm font-semibold text-soul-gold">
          🏆 Hall da fama
        </span>
        <h2 className="mb-3 text-3xl font-bold text-white sm:text-5xl">Ranking</h2>
        <p className="mb-8 text-white/70">
          Responda missões no{" "}
          <a href="/dashboard" className="text-soul-cyan underline">
            Dashboard
          </a>{" "}
          ou no quiz do FAQ para subir posições — sua linha aparece destacada abaixo.
        </p>

        <div className="w-full overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[460px] border-collapse overflow-hidden rounded-2xl">
            <thead>
              <tr>
                <th className="border border-white/10 bg-soul-800 px-3 py-3 text-white sm:px-6 sm:py-4">
                  #
                </th>
                <th className="border border-white/10 bg-soul-800 px-3 py-3 text-white sm:px-6 sm:py-4">
                  Usuário
                </th>
                <th className="border border-white/10 bg-soul-800 px-3 py-3 text-white sm:px-6 sm:py-4">
                  Pontos
                </th>
                <th className="border border-white/10 bg-soul-800 px-3 py-3 text-white sm:px-6 sm:py-4">
                  Medalha
                </th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((entrada) => {
                const isVoce = entrada.usuario === username;
                return (
                  <tr
                    key={entrada.usuario}
                    data-level={entrada.medalha}
                    className={isVoce ? "bg-soul-cyan/15" : "bg-white/[0.02]"}
                  >
                    <td className="border border-white/10 px-3 py-3 text-white/85 sm:px-4 sm:py-4">
                      {entrada.posicao}º
                    </td>
                    <td className="border border-white/10 px-3 py-3 font-medium text-white/90 sm:px-4 sm:py-4">
                      {entrada.usuario} {isVoce && <span className="text-soul-cyan">(você)</span>}
                    </td>
                    <td className="border border-white/10 px-3 py-3 text-white/85 sm:px-4 sm:py-4">
                      {entrada.pontos}
                    </td>
                    <td className="border border-white/10 px-3 py-3 text-xl sm:px-4 sm:py-4 sm:text-2xl">
                      {medalhaEmoji[entrada.medalha]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-white/50">
          Os demais nomes da tabela são caçadores de referência, fixos apenas para dar contexto
          competitivo ao ranking.
        </p>
      </div>
    </section>
  );
}
