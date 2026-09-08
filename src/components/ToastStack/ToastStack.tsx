import { Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useGame } from "../../context/GameContext";

export default function ToastStack() {
  const { toasts, dismissToast } = useGame();

  return (
    <div className="pointer-events-none fixed bottom-24 left-1/2 z-[60] flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 px-4">
      {toasts.map((toast) => (
        <Toast key={toast.id} id={toast.id} message={toast.message} onDone={dismissToast} />
      ))}
    </div>
  );
}

function Toast({
  id,
  message,
  onDone,
}: {
  id: number;
  message: string;
  onDone: (id: number) => void;
}) {
  useEffect(() => {
    const timeout = setTimeout(() => onDone(id), 3200);
    return () => clearTimeout(timeout);
  }, [id, onDone]);

  return (
    <div className="animate-float-slow pointer-events-none flex items-center justify-center gap-2 rounded-xl border border-soul-gold/40 bg-soul-900/95 px-4 py-3 text-center font-semibold text-soul-gold shadow-[0_0_20px_rgba(251,191,36,0.35)]">
      <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
