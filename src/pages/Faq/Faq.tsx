import { useState } from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";


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
      
      </div>
    </section>
  );
}
