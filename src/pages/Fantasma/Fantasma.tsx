import { Eye, Ghost as GhostIcon, House } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import GhostField, { type GhostSpec } from "../../components/Ghost/GhostField";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const ghostRain: GhostSpec[] = [
  { top: "5%", left: "5%", size: 60, color: "#d946ef", variant: 1, delay: 0 },
  { top: "10%", left: "80%", size: 50, color: "#8b5cf6", variant: 2, delay: 0.4 },
  { top: "30%", left: "20%", size: 40, color: "#22d3ee", variant: 3, delay: 0.9 },
  { top: "60%", left: "70%", size: 65, color: "#fbbf24", variant: 1, delay: 0.2 },
  { top: "75%", left: "10%", size: 45, color: "#2dd4bf", variant: 2, delay: 1.2 },
  { top: "50%", left: "50%", size: 55, color: "#d946ef", variant: 3, delay: 0.6, opacity: 0.6 },
  { top: "20%", left: "45%", size: 35, color: "#67e8f9", variant: 1, delay: 1.5 },
  { top: "85%", left: "55%", size: 50, color: "#8b5cf6", variant: 2, delay: 0.3 },
  { top: "40%", left: "5%", size: 30, color: "#fbbf24", variant: 3, delay: 1.8 },
  { top: "8%", left: "35%", size: 42, color: "#2dd4bf", variant: 1, delay: 0.7 },
];

export default function Fantasma() {
  useDocumentTitle("???");
  const [step, setStep] = useState<"confirm" | "ragebait">("confirm");
  const navigate = useNavigate();

  if (step === "confirm") {
    return (
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-soul-950 py-16 text-center">
        <GhostField ghosts={ghostRain} />
        <div className="relative glass-card mx-4 max-w-md p-10">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-soul-magenta/15 text-soul-magenta shadow-[0_0_28px_rgba(217,70,239,0.4)]">
            <GhostIcon className="h-12 w-12" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white">
            Você tem certeza de que quer entrar?
          </h2>
          <p className="mb-8 text-white/70">
            Essa aba não é como as outras... uma vez dentro, não tem mais volta.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => navigate("/")}>
              Não, tô com medo
            </Button>
            <Button onClick={() => setStep("ragebait")}>Sim, eu aguento</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-soul-950 py-16 text-center">
      <GhostField
        ghosts={[...ghostRain, ...ghostRain.map((g) => ({ ...g, top: undefined, bottom: g.top }))]}
      />
      <div className="relative">
        <h1 className="mb-6 animate-pulse-glow text-5xl font-black uppercase tracking-widest text-soul-magenta neon-text sm:text-7xl">
          RAGE BAIT
        </h1>
        <p className="mb-2 text-xl text-white">RAGEBAITADO DEMAISSSSSSSS</p>
        <p className="mx-auto mb-8 max-w-md text-white/70">
          RAGEBAITADO FESSOR. O SoulHunter agradece a paciência (e a nota boa, se possível{" "}
          <Eye className="inline h-4 w-4 align-[-2px]" aria-hidden="true" />).
        </p>
        <Button onClick={() => navigate("/")}>
          <House className="h-5 w-5" aria-hidden="true" />
          Voltar para a Home
        </Button>
      </div>
    </section>
  );
}
