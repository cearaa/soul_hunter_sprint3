import CardFantasma from "../../components/CardFantasma/CardFantasma";


export default function SoulHunter() {
    return (
        <div className="mb-8 text-center flex flex-col justify-center items-center">
            <h1 className=" text-3xl font-bold text-white sm:text-5xl">Vamos jogar</h1>
             <p className="m-5">escaneie o qr code cadastre-se e se divirta com a soul hunter em sua versão BETA </p>
            
            <img className="w-45.5 m-4" src="https://i.ibb.co/Z6G8nb18/QRCode-F-cil.png" alt="qr code para jogar" />
            
            <p className="pl-100 pr-100">Avisos jogo esta em face Beta tem muitos bugs e funções a serem corrigidas e melhorada mas esperamos feedback sobre possiveis melhorar e fiquem atentos com futuras atualizações logo abaixo algumas imagens fantasmas achados </p>
            <CardFantasma
                imagem="https://i.ibb.co/0jzBdZgH/Captura-de-tela-2026-09-13-182316.png"
                alt="Exemplo de fantasma Senhor Cartola"
                nome="Senhor Cartola"
            />

        </div>
        
    )
}