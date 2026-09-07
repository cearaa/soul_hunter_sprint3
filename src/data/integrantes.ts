import carlosFoto from "../assets/img/carlos.jpeg";
import fabricioFoto from "../assets/img/fabricio.png";
import giovanniFoto from "../assets/img/giovanni.jpeg";
import italoFoto from "../assets/img/italo.jpeg";
import tarikFoto from "../assets/img/tarik.jpeg";
import type { Integrante } from "../types";

export const integrantes: Integrante[] = [
  {
    id: "tarik-moussa-alma",
    nome: "Tárik Moussa Alma",
    rm: "571411",
    turma: "1TDSPH",
    foto: tarikFoto,
    fotoPosition: "center 12%",
    github: "https://github.com/cearaa",
    linkedin: "https://www.linkedin.com/in/rikk-alma",
    bio: "Responsável pela arquitetura de componentes e integração das páginas migradas para React nesta Sprint. Também comandou a nova identidade visual noturna do SoulHunter.",
    fantasmaFavorito: "Lord Voldemetro",
  },
  {
    id: "giovanni-azevedo",
    nome: "Giovanni Azevedo",
    rm: "572894",
    turma: "1TDSPH",
    foto: giovanniFoto,
    github: "https://github.com/GiovanniDEVazevedo",
    linkedin: "https://www.linkedin.com/in/giovanni-azevedo-760753353/",
    bio: "Atuou na estilização com Tailwind CSS e na responsividade das telas mobile, tablet e desktop, garantindo que nenhum fantasma escapasse do layout.",
    fantasmaFavorito: "Passe-Man",
  },
  {
    id: "italo-neto",
    nome: "Ítalo Neto",
    rm: "572912",
    turma: "1TDSPH",
    foto: italoFoto,
    github: "https://github.com/I-neeto99",
    linkedin: "https://www.linkedin.com/in/italo-neto-390579345/",
    bio: "Implementou a navegação com React Router, as rotas dinâmicas da aplicação e o sistema de missões do Dashboard.",
    fantasmaFavorito: "James Bones",
  },
  {
    id: "fabricio-aquiles",
    nome: "Fabrício Aquiles Sales da Silva",
    rm: "570985",
    turma: "1TDSPH",
    foto: fabricioFoto,
    github: "https://github.com/fabricioaquiles",
    linkedin: "https://www.linkedin.com/in/fabricioaquiles/",
    bio: "Cuidou do formulário de contato com React Hook Form e das validações tipadas em TypeScript, deixando tudo pronto para receber sinais de outras dimensões.",
    fantasmaFavorito: "Pura Alma",
  },
  {
    id: "carlos-tsucamoto",
    nome: "Carlos Eduardo Tsucamoto Chiarelli",
    rm: "569574",
    turma: "1TDSPH",
    foto: carlosFoto,
    github: "https://github.com/carlostsucamoto",
    linkedin: "https://www.linkedin.com/in/carlostsucamoto/",
    bio: "Responsável pela organização do projeto em componentes reutilizáveis e pastas, mantendo a caçada de fantasmas arquiteturalmente impecável.",
    fantasmaFavorito: "Lord Voldemetro",
  },
];
