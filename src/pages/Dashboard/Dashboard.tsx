import GhostField from "../../components/Ghost/GhostField";
import { useGame } from "../../context/GameContext";
import { buildRanking } from "../../data/ranking";
import { missoes } from "../../data/missoes";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import MissionPanel from "./MissionPanel";

export default function Dashboard() {
  useDocumentTitle("Dashboard");
  const { username, points, missionsCompleted } = useGame();

  const ranking = buildRanking(username, points);
  const minhaPosicao = ranking.find((entrada) => entrada.usuario === username)?.posicao ?? "—";

  const missoesRespondidas = Math.min(missionsCompleted, missoes.length);
  const progresso = Math.round((missoesRespondidas / missoes.length) * 100);

  return (
    <section className="relative overflow-hidden py-10">
      <GhostField
        ghosts={[
          { top: "4%", right: "4%", size: 50, color: "#8b5cf6", opacity: 0.25, variant: 2 },
          { bottom: "6%", left: "4%", size: 45, color: "#22d3ee", opacity: 0.25, variant: 1 },
        ]}
      />
      <div className="relative mx-auto w-[92%] max-w-6xl">
        <div className="mb-8 text-center">
          <span className="mb-3 inline-block rounded-full border border-soul-cyan/40 bg-soul-cyan/10 px-4 py-1 text-sm font-semibold text-soul-cyan">
            🎯 Central de missões
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">Dashboard</h2>
          <p className="mt-2 text-white/70">
            Tudo começa zerado — responda missões ao lado para ver seus números subirem em
            tempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="glass-card p-5 text-center">
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-white/60">
                  Pontuação
                </h3>
                <p className="text-3xl font-bold text-soul-cyan neon-text">{points}</p>
              </div>
              <div className="glass-card p-5 text-center">
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-white/60">
                  Posição no Ranking
                </h3>
                <p className="text-3xl font-bold text-soul-gold neon-text">#{minhaPosicao}</p>
              </div>
              <div className="glass-card p-5 text-center">
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-white/60">
                  Missões
                </h3>
                <p className="text-3xl font-bold text-soul-violet-soft neon-text">
                  {missoesRespondidas} completas
                </p>
              </div>
            </div>

            <div className="glass-card mt-6 p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold text-white">Progresso geral</h3>
                <span className="text-sm text-white/60">{progresso}%</span>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-soul-cyan via-soul-teal to-soul-violet transition-all duration-1000 ease-out"
                  style={{ width: `${progresso}%` }}
                  role="progressbar"
                  aria-valuenow={progresso}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="mt-2 text-xs text-white/50">
                {missoesRespondidas} de {missoes.length} missões respondidas nesta sessão.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="glass-card overflow-hidden p-0">
                <div className="h-40 bg-gradient-to-t from-soul-cyan to-soul-violet" />
                <div className="p-4">
                  <h4 className="font-semibold text-white">Atividade recente</h4>
                  <p className="text-sm text-white/60">
                    Cada missão respondida aparece instantaneamente no seu histórico de pontos.
                  </p>
                </div>
              </div>
              <div className="glass-card overflow-hidden p-0">
                <div className="h-40 bg-gradient-to-t from-soul-magenta to-soul-gold" />
                <div className="p-4">
                  <h4 className="font-semibold text-white">Próxima recompensa</h4>
                  <p className="text-sm text-white/60">
                    Continue respondendo missões para desbloquear novas almas raras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <MissionPanel />
        </div>
      </div>
    </section>
  );
}
