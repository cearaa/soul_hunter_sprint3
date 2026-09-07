import { useState } from "react";
import GhostField from "../../components/Ghost/GhostField";
import { faqItems } from "../../data/faq";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import FaqQuizBlock from "./FaqQuizBlock";

export default function Faq() {
  useDocumentTitle("FAQ");
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  function toggleItem(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section className="relative overflow-hidden py-12">
      <GhostField
        ghosts={[
          { top: "6%", left: "4%", size: 55, color: "#d946ef", opacity: 0.35, variant: 1 },
          { bottom: "10%", right: "6%", size: 65, color: "#8b5cf6", opacity: 0.3, variant: 2 },
        ]}
      />
      <div className="relative mx-auto w-[90%] max-w-4xl text-center">
        <span className="mb-3 inline-block rounded-full border border-soul-magenta/40 bg-soul-magenta/10 px-4 py-1 text-sm font-semibold text-soul-magenta">
          ❓ Dúvidas de caçador(a)
        </span>
        <h2 className="mb-3 text-3xl font-bold text-white sm:text-5xl">
          Perguntas Frequentes
        </h2>
        <p className="mb-10 text-white/70">
          Além de tirar dúvidas, algumas perguntas trazem um mini quiz — acerte ou erre, você
          ganha pontos do mesmo jeito. 👻
        </p>

        <div className="space-y-3 text-left">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="glass-card overflow-hidden transition-all duration-300"
              >
                <button
                  className="flex w-full items-center justify-between p-4 text-left text-lg font-bold text-white"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  {item.pergunta}
                  <span className="text-2xl text-soul-magenta">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4">
                    <p className="text-white/75">{item.resposta}</p>
                    {item.quiz && <FaqQuizBlock faqId={item.id} quiz={item.quiz} />}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
