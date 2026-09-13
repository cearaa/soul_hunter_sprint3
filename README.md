# SoulHunter

![Versão](https://img.shields.io/badge/version-0.0.0-blue)

## Descrição do projeto

O **Soul Hunter** é uma plataforma gamificada do ecossistema **SoulUp** que transforma a cidade em um mapa de exploração real. Jogadores participam de desafios, coletam itens digitais, cumprem missões e recebem recompensas reais enquanto adotam hábitos mais sustentáveis no dia a dia — andando mais a pé, usando transporte público e reciclando.

Nesta Sprint, o projeto deixou de ser um conjunto de páginas estáticas para se tornar uma **SPA (Single Page Application)** moderna: componentizada, tipada e com identidade visual própria no tema noturno.

### Funcionalidades

- **Missões diárias** — desafios sobre reciclagem, caminhada e caça de almas que geram pontos.
- **Pergunta do dia** — validação e integração com o cálculo de pontos e progresso.
- **Ranking competitivo** — suba na tabela em tempo real conforme conclui missões.
- **Impacto sustentável** — estatísticas de reciclagem, transporte público e redução de CO₂.
- **Caça de almas** — fantasmas com raridades e personalidades únicas espalhadas pelas estações de metrô.
- **Trocas e recompensas** — converta pontos em passagens de transporte público.
- **Central de Missões** — dashboard com progresso das tarefas diárias.
- **Página de contato** — formulário tipado com validação via React Hook Form.
- **Rotas dinâmicas** — página de detalhes de cada integrante caçador.

## Tecnologias utilizadas

| Tecnologia | Descrição |
| --- | --- |
| [React](https://react.dev) | Biblioteca de interface |
| [Vite](https://vite.dev) | Build e desenvolvimento ultrarrápido |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática em toda a aplicação |
| [Tailwind CSS](https://tailwindcss.com) | Estilização e responsividade |
| [React Router DOM](https://reactrouter.com) | Navegação SPA, rotas estáticas e dinâmicas |
| [React Hook Form](https://react-hook-form.com) | Formulários e validação tipada |
| [Lucide React](https://lucide.dev) | Ícones |

## Estrutura de pastas

```
soul_hunter_sprint3/
├── docs/
│   └── screenshots/          # Capturas de tela do projeto
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── img/              # Imagens: integrantes, almas, ícones
│   ├── components/           # Componentes reutilizáveis
│   │   ├── BackToTop/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── ExpandableCard/
│   │   ├── Footer/
│   │   ├── FormField/
│   │   ├── Ghost/
│   │   ├── Header/
│   │   ├── Layout/
│   │   └── ToastStack/
│   ├── context/
│   │   └── GameContext.tsx   # Estado global do jogo (100% estado local)
│   ├── data/                 # Dados: almas, contato, faq, integrantes, missoes, ranking
│   ├── hooks/
│   │   └── useDocumentTitle.ts
│   ├── pages/                # Páginas da aplicação
│   │   ├── Contato/
│   │   ├── Dashboard/
│   │   ├── Fantasma/
│   │   ├── Faq/
│   │   ├── Home/
│   │   ├── IntegranteDetalhe/
│   │   ├── Integrantes/
│   │   ├── NotFound/
│   │   ├── Ranking/
│   │   └── Sobre/
│   ├── theme/
│   │   └── pageAccent.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx               # Rotas da aplicação
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Como executar localmente

Pré-requisito: [Node.js](https://nodejs.org) instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/cearaa/soul_hunter_sprint3.git

# 2. Entre na pasta do projeto
cd soul_hunter_sprint3

# 3. Instale as dependências
npm install

# 4. Rode o projeto em modo desenvolvimento
npm run dev
```

Acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

### Scripts disponíveis

```bash
npm run dev      # Ambiente de desenvolvimento
npm run build    # Compila TypeScript e gera o build de produção
npm run lint     # Verifica o código com ESLint
npm run preview  # Pré-visualiza o build de produção
```

## Link do GitHub

Repositório: [https://github.com/cearaa/soul_hunter_sprint3](https://github.com/cearaa/soul_hunter_sprint3)

## Integrantes do grupo

| Nome | RM | Turma | GitHub |
| --- | --- | --- | --- |
| Tárik Moussa Alma | 571411 | 1TDSPH | [cearaa](https://github.com/cearaa) |
| Giovanni Azevedo | 572894 | 1TDSPH | [GiovanniDEVazevedo](https://github.com/GiovanniDEVazevedo) |
| Italo Neto | 572912 | 1TDSPH | [I-neeto99](https://github.com/I-neeto99) |
| Fabrício Aquiles Sales da Silva | 570985 | 1TDSPH | [fabricioaquiles](https://github.com/fabricioaquiles) |
| Carlos Eduardo Tsucamoto Chiarelli | 569574 | 1TDSPH | [carlostsucamoto](https://github.com/carlostsucamoto) |