import { Leaf, type LucideIcon } from "lucide-react";

export interface Missao {
  id: string;
  pergunta: string;
  icon: LucideIcon;
  pontos: number;
  placeholder: string;
}

/**
 * Perguntas da "Central de Missões" do Dashboard.
 * Não há tratamento de erro proposital so pra funfar que mostra
 * já é aceita e concede pontos, apenas para demonstrar o funcionamento
 * do sistema de gamificação 
 */
export const missoes: Missao[] = [
  { id: "m1", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m2", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m3", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m4", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m5", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m6", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m7", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m8", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m9", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m10", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m11", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m12", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m13", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m14", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
  { id: "m15", pergunta: "x?", icon: Leaf, pontos: 30, placeholder: "Ex: x" },
];