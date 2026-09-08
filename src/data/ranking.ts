import { Award, Crown, Medal, type LucideIcon } from "lucide-react";
import type { Medalha, RankingEntry } from "../types";

/**
 * Jogadores de referência (fixos), apenas para inf visual
 * competitivo ao ranking. O usuário real  entra
 * dinamicamente ao responder as missões do Dashboard ou o quiz do FAQ
 */
export const rankingReferencia: Omit<RankingEntry, "posicao" | "medalha">[] = [
  { usuario: "TárikZada", pontos: 980 },
  { usuario: "Caerinha", pontos: 860 },
  { usuario: "Ceará", pontos: 730 },
  { usuario: "Moussa", pontos: 610 },
  { usuario: "Alma", pontos: 540 },
  { usuario: "Tárik melhor aluno", pontos: 430 },
  { usuario: "Usuário Anônimo", pontos: 330 },
];

export interface MedalhaVisual {
  icon: LucideIcon;
  color: string;
  label: string;
}

/** Ícone e cor de cada medalha. Posições sem medalha retornam null. */
export const medalhaVisual: Record<Medalha, MedalhaVisual | null> = {
  ouro: { icon: Crown, color: "#fbbf24", label: "Medalha de ouro" },
  prata: { icon: Medal, color: "#cbd5e1", label: "Medalha de prata" },
  bronze: { icon: Award, color: "#d97706", label: "Medalha de bronze" },
  none: null,
};

function medalhaPorPosicao(posicao: number): Medalha {
  if (posicao === 1) return "ouro";
  if (posicao === 2) return "prata";
  if (posicao === 3) return "bronze";
  return "none";
}

/**
 * Combina o ranking de referência com o jogador atual (nome + pontos
 * vindos do GameContext), reordena por pontuação e recalcula medalhas.
 */
export function buildRanking(username: string, pontosUsuario: number): RankingEntry[] {
  const todos = [...rankingReferencia, { usuario: username, pontos: pontosUsuario }];

  const combinados = new Map<string, number>();
  for (const entrada of todos) {
    combinados.set(entrada.usuario, (combinados.get(entrada.usuario) ?? 0) + entrada.pontos);
  }

  return Array.from(combinados.entries())
    .map(([usuario, pontos]) => ({ usuario, pontos }))
    .sort((a, b) => b.pontos - a.pontos)
    .map((entrada, index) => ({
      posicao: index + 1,
      usuario: entrada.usuario,
      pontos: entrada.pontos,
      medalha: medalhaPorPosicao(index + 1),
    }));
}
