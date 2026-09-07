import ExpandableCard from "../../components/ExpandableCard/ExpandableCard";
import GhostField from "../../components/Ghost/GhostField";
import { almas } from "../../data/almas";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Sobre() {
  useDocumentTitle("Sobre");

  return (
    <section className="relative overflow-hidden py-12">
      <GhostField
        ghosts={[
          { top: "4%", right: "6%", size: 60, color: "#2dd4bf", opacity: 0.35, variant: 2 },
          { bottom: "8%", left: "5%", size: 50, color: "#8b5cf6", opacity: 0.35, variant: 3 },
        ]}
      />
      <div className="relative mx-auto w-[90%] max-w-6xl text-center">
        <span className="mb-3 inline-block rounded-full border border-soul-teal/40 bg-soul-teal/10 px-4 py-1 text-sm font-semibold text-soul-teal">
          📖 O universo por trás do jogo
        </span>
        <h2 className="mb-3 text-3xl font-bold text-white sm:text-5xl">Sobre o Projeto</h2>
        <p className="mx-auto mb-10 max-w-2xl text-white/70">
          Nesta Sprint, o SoulHunter deixou de ser um conjunto de páginas estáticas para se
          tornar uma aplicação viva: componentizada, tipada e com uma identidade visual própria.
          Explore abaixo cada pilar do projeto.
        </p>

        <div className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          <ExpandableCard
            emoji="🧭"
            title="Contexto"
            color="#2dd4bf"
            summary={
              <p>
                O Soul Hunter é uma plataforma gamificada do ecossistema SoulUp que transforma a
                cidade em um mapa de exploração real.
              </p>
            }
            more={
              <p>
                Usuários participam de desafios, coletam itens digitais, cumprem missões e
                recebem recompensas reais enquanto adotam hábitos mais sustentáveis no dia a dia —
                andando mais a pé, usando transporte público e reciclando. A ideia é literalmente
                dar vida (e pontos) para atitudes que já fazem bem à cidade.
              </p>
            }
          />

          <ExpandableCard
            emoji="🎮"
            title="Gamificação"
            color="#22d3ee"
            summary={<p>Mecânicas de jogo para tornar sustentabilidade divertida e viciante.</p>}
            more={
              <p>
                Geolocalização para explorar a cidade, fantasmas digitais escondidos em estações,
                missões diárias, pontos, rankings competitivos e recompensas exclusivas
                desbloqueáveis — tudo desenhado para criar um hábito prazeroso, não uma obrigação.
              </p>
            }
          />

          <ExpandableCard
            emoji="🌍"
            title="Soluções Sustentáveis"
            color="#fbbf24"
            summary={<p>Impacto social e ambiental real por trás de cada missão cumprida.</p>}
            more={
              <ul className="list-disc space-y-1 pl-5">
                <li>Uso de transporte público</li>
                <li>Redução do uso excessivo de veículos</li>
                <li>Participação em ações ambientais</li>
                <li>Exploração consciente de espaços urbanos</li>
                <li>Engajamento e competição saudável da comunidade</li>
              </ul>
            }
          />

          <ExpandableCard
            emoji="⚛️"
            title="Tecnologias desta Sprint"
            color="#8b5cf6"
            summary={<p>Evolução total do front-end: de páginas estáticas para uma SPA moderna.</p>}
            more={
              <ul className="list-disc space-y-1 pl-5">
                <li>React — biblioteca de interface</li>
                <li>Vite — build e desenvolvimento ultrarrápido</li>
                <li>TypeScript — tipagem estática em toda a aplicação</li>
                <li>Tailwind CSS — estilização e responsividade</li>
                <li>React Router DOM — navegação SPA, rotas estáticas e dinâmicas</li>
                <li>React Hook Form — formulários e validação tipada</li>
              </ul>
            }
          />

          <ExpandableCard
            emoji="🏆"
            title="Gamificação em números"
            color="#d946ef"
            summary={<p>O Dashboard e o Ranking mostram a solução funcionando de verdade.</p>}
            more={
              <p>
                Ao responder às missões da Central de Missões (Dashboard), seus pontos são
                somados em tempo real e você entra automaticamente na tabela de Ranking,
                competindo lado a lado com os caçadores de referência. Tudo isso sem consumir
                nenhuma API externa nesta Sprint — é 100% estado local em React.
              </p>
            }
          />

          <ExpandableCard
            emoji="👻"
            title="As Almas"
            color="#67e8f9"
            summary={<p>Cada fantasma tem raridade, personalidade e habilidades únicas.</p>}
            more={
              <p>
                Durante a exploração, os jogadores encontram almas espalhadas pelas estações do
                metrô usando dicas misteriosas diárias. Colecionar, comparar e trocar almas é
                parte fundamental da experiência SoulHunter.
              </p>
            }
          />
        </div>

        <div className="glass-card relative mt-10 overflow-hidden p-8">
          <h3 className="mb-6 text-xl font-semibold text-white">Almas Colecionáveis</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {almas.map((alma) => (
              <div key={alma.id} className="text-center">
                <img
                  src={alma.imagem}
                  alt={alma.nome}
                  className="mx-auto w-[120px] rounded-xl border border-white/10 shadow-[0_0_18px_rgba(139,92,246,0.3)] transition-transform duration-300 hover:scale-110"
                />
                <p className="mt-2 font-semibold text-white/85">{alma.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
