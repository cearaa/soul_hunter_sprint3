interface Feature {
  title: string;
  description: string;
  emoji: string;
  color: string;
}

const features: Feature[] = [
  {
    title: "Missões diárias",
    description:
      "Responda desafios sobre reciclagem, caminhada e caça de almas para ganhar pontos todos os dias na Central de Missões do Dashboard.",
    emoji: "🎯",
    color: "#22d3ee",
  },
  {
    title: "Ranking competitivo",
    description:
      "Suba no ranking em tempo real: cada missão concluída te aproxima do topo da tabela — e dos caçadores lendários.",
    emoji: "🏆",
    color: "#fbbf24",
  },
  {
    title: "Impacto sustentável",
    description:
      "Acompanhe estatísticas reais de reciclagem, uso de transporte público e redução de CO₂ enquanto joga.",
    emoji: "🌱",
    color: "#2dd4bf",
  },
  {
    title: "Caça de almas",
    description:
      "Explore estações de metrô espalhadas pela cidade e capture fantasmas com raridades e personalidades únicas.",
    emoji: "👻",
    color: "#8b5cf6",
  },
  {
    title: "Trocas e recompensas",
    description:
      "Converta pontos acumulados em passagens de transporte público reais — o jogo literalmente te leva a algum lugar.",
    emoji: "🎟️",
    color: "#d946ef",
  },
  {
    title: "Comunidade de caçadores",
    description:
      "Convide amigos, compare progressos e descubra quem realmente entende de almas raras na sua região.",
    emoji: "🤝",
    color: "#67e8f9",
  },
];

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "12k+", label: "Caçadores ativos" },
  { value: "85k+", label: "Missões concluídas" },
  { value: "4.3k", label: "Almas capturadas" },
  { value: "97%", label: "Satisfação" },
];

interface Step {
  title: string;
  description: string;
  emoji: string;
}

const steps: Step[] = [
  { title: "Crie seu perfil", description: "Defina seu nome de caçador direto no Dashboard.", emoji: "🪪" },
  { title: "Cumpra missões", description: "Responda perguntas sobre hábitos sustentáveis do seu dia.", emoji: "✅" },
  { title: "Capture almas", description: "Explore estações e desbloqueie fantasmas raros.", emoji: "👻" },
  { title: "Suba no ranking", description: "Acompanhe sua posição competindo com outros caçadores.", emoji: "📈" },
];
