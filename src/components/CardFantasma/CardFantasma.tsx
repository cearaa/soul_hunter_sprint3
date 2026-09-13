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
    <div className="flex w-full max-w-4xl flex-col items-center justify-center">
      <img className="m-4 h-auto w-full max-w-2xl min-[992px]:max-w-3xl" src={imagem} alt={alt} />
      <h3 className="text-lg font-semibold text-white min-[768px]:text-xl">{nome}</h3>
    </div>
  );
}