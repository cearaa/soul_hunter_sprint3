import { useState, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from "react";
import { useGame } from "../../context/GameContext";

interface FaqQuizBlockProps {
  faqId: string;
  quiz: FaqQuiz;
}

export default function FaqQuizBlock({ faqId, quiz }: FaqQuizBlockProps) {
  const { awardPoints, answeredMissionIds } = useGame();
  const [selected, setSelected] = useState<number | null>(null);

  const missionId = `faq-${faqId}`;
  const jaRespondeu = answeredMissionIds.includes(missionId);
  const acertou = selected === quiz.respostaCorretaIndex;

  function handleAnswer(index: number) {
    if (jaRespondeu) return;
    setSelected(index);
    awardPoints(
      missionId,
      quiz.pontos,
      index === quiz.respostaCorretaIndex
        ? `Certíssimo! +${quiz.pontos} pontos 🎉`
        : `Já que você tentou, tome uns pontos 🎉 (+${quiz.pontos})`,
    );
  }

  return (
    <div className="mt-3 rounded-xl border border-soul-magenta/30 bg-soul-magenta/5 p-4">
      <p className="mb-3 text-sm font-semibold text-soul-magenta">
        ✨ Quer revisar? Teste seu conhecimento!
      </p>
      <p className="mb-3 text-sm text-white/85">{quiz.pergunta}</p>
      <div className="flex flex-col gap-2">
        {quiz.opcoes.map((opcao: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: number | null) => {
          const isSelected = selected === index;
          const showCorrect = jaRespondeu && index === quiz.respostaCorretaIndex;
          return (
            <button
              key={opcao}
              onClick={() => handleAnswer(index)}
              disabled={jaRespondeu}
              className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors duration-200 disabled:cursor-not-allowed ${
                showCorrect
                  ? "border-green-400/60 bg-green-400/10 text-green-300"
                  : isSelected
                    ? "border-soul-magenta/60 bg-soul-magenta/10 text-white"
                    : "border-white/15 text-white/80 hover:border-soul-magenta/40 hover:bg-white/5"
              }`}
            >
              {opcao}
            </button>
          );
        })}
      </div>

      {jaRespondeu && (
        <p className="mt-3 text-sm font-semibold text-soul-gold">
          {acertou
            ? "Certíssimo! Você manja mesmo de SoulHunter. 🎉"
            : "Já que você tentou, tome uns pontos 🎉"}
        </p>
      )}
    </div>
  );
}
