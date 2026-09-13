import CardFantasma from "../../components/CardFantasma/CardFantasma";


export default function SoulHunter() {
    return (
        <div className="mb-8 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-3xl font-bold text-white min-[768px]:text-4xl min-[992px]:text-5xl">Vamos jogar</h1>
             <p className="m-5 max-w-2xl text-sm min-[768px]:text-base">escaneie o qr code cadastre-se e se divirta com a soul hunter em sua versão BETA </p>
            
            <img className="m-4 h-auto w-1/2 max-w-[182px] min-[480px]:w-[182px]" src="https://i.ibb.co/Z6G8nb18/QRCode-F-cil.png" alt="qr code para jogar" />
            
            <p className="mx-auto max-w-2xl px-4 pb-4 text-sm min-[480px]:px-6 min-[768px]:text-base min-[992px]:px-8">Avisos jogo esta em face Beta tem muitos bugs e funções a serem corrigidas e melhorada mas esperamos feedback sobre possiveis melhorar e fiquem atentos com futuras atualizações logo abaixo algumas imagens fantasmas achados </p>
            <CardFantasma
                imagem="https://i.ibb.co/0jzBdZgH/Captura-de-tela-2026-09-13-182316.png"
                alt="Exemplo de fantasma Senhor Cartola"
                nome="Senhor Cartola"
            />

        </div>
        
    )
}