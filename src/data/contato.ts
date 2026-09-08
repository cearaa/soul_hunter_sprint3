import type { MotivoContato, UrgenciaContato } from "../types";

export interface MotivoOption {
  value: MotivoContato;
  label: string;
  emoji: string;
}

export interface UrgenciaOption {
  value: UrgenciaContato;
  label: string;
  emoji: string;
  /** Cor hexadecimal usada em bordas, brilho e textos do nível */
  color: string;
  /** Prazo estimado de resposta exibido ao usuário */
  prazo: string;
  descricao: string;
}

export const motivosContato: MotivoOption[] = [
  { value: "duvida", label: "Dúvida sobre o jogo ou a plataforma", emoji: "❓" },
  { value: "sugestao", label: "Sugestão de melhoria", emoji: "💡" },
  { value: "parceria", label: "Parceria ou patrocínio", emoji: "🤝" },
  { value: "bug", label: "Reportar um bug", emoji: "🐛" },
  { value: "outro", label: "Outro assunto", emoji: "👻" },
];

export const urgenciasContato: UrgenciaOption[] = [
  {
    value: "baixa",
    label: "Baixa",
    emoji: "🌱",
    color: "#2dd4bf",
    prazo: "até 5 dias úteis",
    descricao: "Sem pressa — pode entrar na fila normal da equipe.",
  },
  {
    value: "media",
    label: "Média",
    emoji: "⚡",
    color: "#fbbf24",
    prazo: "até 3 dias úteis",
    descricao: "Importante, mas não trava sua caçada.",
  },
  {
    value: "alta",
    label: "Alta",
    emoji: "🔥",
    color: "#fb923c",
    prazo: "até 24 horas",
    descricao: "Está atrapalhando o uso da plataforma.",
  },
  {
    value: "urgente",
    label: "Urgente",
    emoji: "🚨",
    color: "#d946ef",
    prazo: "no mesmo dia",
    descricao: "Algo crítico — a equipe é acionada imediatamente.",
  },
];
