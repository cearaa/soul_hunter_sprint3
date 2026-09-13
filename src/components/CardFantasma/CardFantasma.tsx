interface CardFantasmaProps {
  imagem: string;
  alt: string;
  nome: string;
}

export default function CardFantasma({
  imagem,
  alt,
  nome,
}: CardFantasmaProps) {
  return (
    <div>
      <img src={imagem} alt={alt} />
      <h3>{nome}</h3>
    </div>
  );
}