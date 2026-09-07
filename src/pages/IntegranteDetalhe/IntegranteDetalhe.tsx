import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import githubIcon from "../../assets/img/icones/github.png";
import linkedinIcon from "../../assets/img/icones/linkedin.png";
import Button from "../../components/Button/Button";
import GhostField from "../../components/Ghost/GhostField";
import { integrantes } from "../../data/integrantes";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function IntegranteDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const integrante = integrantes.find((item) => item.id === id);

  useDocumentTitle(integrante ? integrante.nome : "Integrante não encontrado");

  useEffect(() => {
    if (!integrante) {
      const timeout = setTimeout(() => navigate("/integrantes"), 2500);
      return () => clearTimeout(timeout);
    }
  }, [integrante, navigate]);

  if (!integrante) {
    return (
      <section className="mx-auto w-[90%] max-w-6xl py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">Integrante não encontrado</h2>
        <p className="mb-6 text-white/70">
          Esse fantasma sumiu no ar. Você será redirecionado para a lista de integrantes...
        </p>
        <Button onClick={() => navigate("/integrantes")}>
          Voltar agora para Integrantes
        </Button>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-12">
      <GhostField
        ghosts={[
          { top: "8%", left: "8%", size: 55, color: "#8b5cf6", opacity: 0.3, variant: 1 },
          { bottom: "10%", right: "10%", size: 60, color: "#22d3ee", opacity: 0.3, variant: 2 },
        ]}
      />
      <div className="relative mx-auto w-[90%] max-w-3xl text-center">
        <img
          src={integrante.foto}
          alt={integrante.nome}
          style={{ objectPosition: integrante.fotoPosition ?? "center" }}
          className="mx-auto mb-6 h-64 w-64 rounded-2xl border border-white/10 object-cover shadow-[0_0_30px_rgba(139,92,246,0.35)]"
        />
        <h2 className="mb-1 text-3xl font-bold text-white neon-text">{integrante.nome}</h2>
        <p className="mb-1 text-white/70">RM: {integrante.rm}</p>
        <p className="mb-4 text-white/70">Turma: {integrante.turma}</p>
        <p className="mx-auto mb-2 max-w-xl text-white/80">{integrante.bio}</p>
        <p className="mb-6 text-soul-violet-soft">
          👻 Alma favorita: <strong>{integrante.fantasmaFavorito}</strong>
        </p>

        <div className="mb-8 flex items-center justify-center gap-3">
          <a
            href={integrante.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub de ${integrante.nome}`}
          >
            <img src={githubIcon} alt="ícone do GitHub" className="h-10 w-10 rounded-full bg-white p-1.5" />
          </a>
          <a
            href={integrante.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`LinkedIn de ${integrante.nome}`}
          >
            <img src={linkedinIcon} alt="ícone do LinkedIn" className="h-10 w-10 rounded-full bg-white p-1.5" />
          </a>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => navigate(-1)}>Voltar</Button>
          <Link
            to="/integrantes"
            className="font-semibold text-soul-cyan hover:underline"
          >
            Ver todos os integrantes
          </Link>
        </div>
      </div>
    </section>
  );
}
