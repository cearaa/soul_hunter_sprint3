import { CircleCheck, Ghost as GhostIcon, Target } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useGame } from "../../context/GameContext";
import { missoes } from "../../data/missoes";

export default function MissionPanel() {
  const { username, setUsername, answeredMissionIds, awardPoints } = useGame();
  const [nomeInput, setNomeInput] = useState(username === "Visitante" ? "" : username);
  const [nomeConfirmado, setNomeConfirmado] = useState(username !== "Visitante");
  const [respostas, setRespostas] = useState<Record<string, string>>({});

  function handleConfirmarNome(event: FormEvent) {
    event.preventDefault();
    setUsername(nomeInput);
    setNomeConfirmado(true);
  }

  function handleResponder(missionId: string, pontos: number) {
    const resposta = respostas[missionId];
    if (!resposta || resposta.trim() === "") return;
    awardPoints(missionId, pontos, `+${pontos} pontos!`);
  }

  const respondidas = answeredMissionIds.filter((id) => !id.startsWith("faq-")).length;

  return (
    <div className="glass-card flex h-full flex-col overflow-hidden p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white">
          <Target className="h-5 w-5 text-soul-cyan" aria-hidden="true" />
          Central de Missões
        </h3>
        <span className="rounded-full bg-soul-cyan/15 px-3 py-1 text-xs font-semibold text-soul-cyan">
          {respondidas}/{missoes.length}
        </span>
      </div>

      {!nomeConfirmado ? (
        <form onSubmit={handleConfirmarNome} className="flex flex-col gap-3">
          <p className="text-sm text-white/70">
            Antes de começar, como você quer ser chamado(a) no ranking?
          </p>
          <input
            type="text"
            value={nomeInput}
            onChange={(event) => setNomeInput(event.target.value)}
            placeholder="Seu nome de caçador(a)"
            className="rounded-lg border border-white/15 bg-soul-900/60 px-4 py-2 text-white placeholder:text-white/40 focus:border-soul-cyan focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-soul-cyan to-soul-violet px-4 py-2 font-semibold text-soul-950 transition-transform hover:-translate-y-0.5"
          >
            Confirmar e começar a caçada
            <GhostIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      ) : (
        <>
          <p className="mb-3 text-sm text-white/70">
            Caçador(a) <strong className="text-soul-cyan">{username}</strong>, responda o que
            quiser — qualquer resposta já garante seus pontos!
          </p>
          <div className="flex-1 space-y-3 overflow-y-auto pr-1" style={{ maxHeight: "420px" }}>
            {missoes.map((missao) => {
              const jaRespondida = answeredMissionIds.includes(missao.id);
              return (
                <div
                  key={missao.id}
                  className={`rounded-xl border p-3 transition-colors ${
                    jaRespondida
                      ? "border-soul-teal/40 bg-soul-teal/5"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <p className="mb-2 flex items-center gap-2 text-sm font-medium text-white/90">
                    <missao.icon className="h-4 w-4 shrink-0 text-soul-teal" aria-hidden="true" />
                    {missao.pergunta}
                  </p>
                  {jaRespondida ? (
                    <p className="flex items-center gap-1 text-xs font-semibold text-soul-teal">
                      <CircleCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      Concluída (+{missao.pontos} pontos)
                    </p>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={respostas[missao.id] ?? ""}
                        onChange={(event) =>
                          setRespostas((current) => ({
                            ...current,
                            [missao.id]: event.target.value,
                          }))
                        }
                        placeholder={missao.placeholder}
                        className="min-w-0 flex-1 rounded-lg border border-white/15 bg-soul-900/60 px-3 py-1.5 text-sm text-white placeholder:text-white/40 focus:border-soul-cyan focus:outline-none"
                      />
                      <button
                        onClick={() => handleResponder(missao.id, missao.pontos)}
                        className="shrink-0 rounded-lg bg-soul-cyan/20 px-3 py-1.5 text-xs font-semibold text-soul-cyan transition-colors hover:bg-soul-cyan/30"
                      >
                        +{missao.pontos} pts
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
