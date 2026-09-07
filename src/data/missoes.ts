export interface Missao {
  id: string;
  pergunta: string;
  emoji: string;
  pontos: number;
  placeholder: string;
}

/**
 * Perguntas da central de missoes do Dashboard
 * Não há tratamento de erro proposital so pra ganhar os ponto
 * já é aceita e so serve pra mostarr que funfa sem api externa, apenas na pura lógica de negócio papai
 */
export const missoes: Missao[] = [
  { id: "m1", pergunta: "Quantos KG você reciclou hoje?", emoji: "♻️", pontos: 40, placeholder: "Ex: 2kg" },
  { id: "m2", pergunta: "Quantos KM de caminhada você andou essa semana?", emoji: "🚶", pontos: 35, placeholder: "Ex: 5km" },
  { id: "m3", pergunta: "Quantos fantasmas você capturou essa semana?", emoji: "👻", pontos: 50, placeholder: "Ex: 3" },
  { id: "m4", pergunta: "Quantas vezes você usou transporte público este mês?", emoji: "🚇", pontos: 30, placeholder: "Ex: 12 vezes" },
  { id: "m5", pergunta: "Quantas garrafas plásticas você evitou usar hoje?", emoji: "🧴", pontos: 25, placeholder: "Ex: 2" },
  { id: "m6", pergunta: "Qual estação de metrô você mais visita caçando almas?", emoji: "🗺️", pontos: 20, placeholder: "Ex: Sé" },
  { id: "m7", pergunta: "Quantas árvores você acha que já ajudou a preservar?", emoji: "🌳", pontos: 45, placeholder: "Ex: 1" },
  { id: "m8", pergunta: "Quantos minutos você economizou de carona hoje?", emoji: "⏱️", pontos: 20, placeholder: "Ex: 15min" },
  { id: "m9", pergunta: "Qual sua alma (fantasma) favorita até agora?", emoji: "💜", pontos: 15, placeholder: "Ex: Lord Voldemetro" },
  { id: "m10", pergunta: "Quantos amigos você convidou para o SoulHunter?", emoji: "🤝", pontos: 30, placeholder: "Ex: 4" },
  { id: "m11", pergunta: "Quantas missões diárias você completou essa semana?", emoji: "📅", pontos: 35, placeholder: "Ex: 6" },
  { id: "m12", pergunta: "Quanto CO₂ você acha que evitou emitir hoje (em kg)?", emoji: "🌫️", pontos: 40, placeholder: "Ex: 1,5kg" },
  { id: "m13", pergunta: "Quantos itens você separou para reciclagem essa semana?", emoji: "🗑️", pontos: 25, placeholder: "Ex: 10 itens" },
  { id: "m14", pergunta: "Qual foi a melhor skin de fantasma que você já viu?", emoji: "🎨", pontos: 15, placeholder: "Ex: James Bones dourado" },
  { id: "m15", pergunta: "Quantos pontos de coleta de recicláveis você conhece na sua região?", emoji: "📍", pontos: 30, placeholder: "Ex: 3" },
];
