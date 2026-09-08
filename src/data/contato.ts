import {
  Bug,
  CircleHelp,
  Flame,
  Ghost,
  Handshake,
  Leaf,
  Lightbulb,
  Siren,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { MotivoContato, UrgenciaContato } from "../types";

export interface MotivoOption {
  value: MotivoContato;
  label: string;
  icon: LucideIcon;
}

export interface UrgenciaOption {
  value: UrgenciaContato;
  label: string;
  icon: LucideIcon;
  /** Cor hexadecimal usada em bordas, brilho e textos do nível */
  color: string;
  /** Prazo estimado de resposta exibido ao usuário */
  prazo: string;
  descricao: string;
}

export const motivosContato: MotivoOption[] = [
  { value: "duvida", label: "Dúvida sobre o jogo ou a plataforma", icon: CircleHelp },
  { value: "sugestao", label: "Sugestão de melhoria", icon: Lightbulb },
  { value: "parceria", label: "Parceria ou patrocínio", icon: Handshake },
  { value: "bug", label: "Reportar um bug", icon: Bug },
  { value: "outro", label: "Outro assunto", icon: Ghost },
];

export const urgenciasContato: UrgenciaOption[] = [
  {
    value: "baixa",
    label: "Baixa",
    icon: Leaf,
    color: "#2dd4bf",
    prazo: "até 5 dias úteis",
    descricao: "Sem pressa — pode entrar na fila normal da equipe.",
  },
  {
    value: "media",
    label: "Média",
    icon: Zap,
    color: "#fbbf24",
    prazo: "até 3 dias úteis",
    descricao: "Importante, mas não trava sua caçada.",
  },
  {
    value: "alta",
    label: "Alta",
    icon: Flame,
    color: "#fb923c",
    prazo: "até 24 horas",
    descricao: "Está atrapalhando o uso da plataforma.",
  },
  {
    value: "urgente",
    label: "Urgente",
    icon: Siren,
    color: "#d946ef",
    prazo: "no mesmo dia",
    descricao: "Algo crítico — a equipe é acionada imediatamente.",
  },
];
