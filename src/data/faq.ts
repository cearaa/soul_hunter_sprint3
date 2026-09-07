import type { FaqItem } from "../types";

export interface FaqQuiz {
  pergunta: string;
  opcoes: string[];
  respostaCorretaIndex: number;
  pontos: number;
}

export const faqItems: (FaqItem & { quiz?: FaqQuiz })[] = [
  {
    id: "o-que-e",
    pergunta: "O que é o SoulHunter?",
    resposta:
      "A Soul Hunter é onde o entretenimento encontra o transporte público. Cace criaturas com base em perguntas diárias e troque seus pontos por passagens de transporte público.",
    quiz: {
      pergunta: "Quer revisar? O que dá pra trocar pelos pontos do SoulHunter?",
      opcoes: ["Passagens de transporte público", "Criptomoedas", "Nada, é só por diversão"],
      respostaCorretaIndex: 0,
      pontos: 20,
    },
  },
  {
    id: "onde-encontro",
    pergunta: "Onde eu encontro as almas?",
    resposta:
      "As almas estão espalhadas pelas estações de São Paulo, e podem ser encontradas a partir das nossas dicas diárias.",
    quiz: {
      pergunta: "Teste seu conhecimento: onde as almas costumam aparecer?",
      opcoes: ["Nas estações de metrô", "Só dentro do aplicativo", "Em qualquer lugar do Brasil"],
      respostaCorretaIndex: 0,
      pontos: 20,
    },
  },
  {
    id: "como-ganhar-pontos",
    pergunta: "Como ganhar pontos?",
    resposta: "Encontrando almas das mais diversas raridades.",
  },
  {
    id: "alma-repetida",
    pergunta: "O que acontece se eu capturar a mesma alma duas vezes?",
    resposta:
      "Aqui na SoulHunter nada é desperdiçado, você consegue juntar suas almas repetidas ou não e trocá-las por outras almas de raridades melhores.",
    quiz: {
      pergunta: "E aí, lembra? Almas repetidas podem ser...",
      opcoes: ["Trocadas por almas melhores", "Descartadas para sempre", "Vendidas fora da plataforma"],
      respostaCorretaIndex: 0,
      pontos: 25,
    },
  },
  {
    id: "usar-pontos",
    pergunta: "O que eu faço com os meus pontos?",
    resposta:
      "Você usa eles na vida real! O saldo da sua Carteira pode ser convertido diretamente em passagens de metrô.",
  },
  {
    id: "qual-skin",
    pergunta: "Qual a melhor skin de fantasma?",
    resposta:
      "Isso é motivo de debate acalorado entre os caçadores! Cada alma tem sua própria personalidade visual — de brilhos dourados a auras roxas sobrenaturais — e a 'melhor' costuma ser aquela que combina com o seu estilo de caça.",
    quiz: {
      pergunta: "Na sua opinião de caçador(a), qual desses é o critério mais SoulHunter para escolher uma skin?",
      opcoes: ["Raridade e brilho da aura", "Preço", "Não importa, todo fantasma é só estética"],
      respostaCorretaIndex: 0,
      pontos: 20,
    },
  },
];
