import { Bus, Droplet, Recycle, ShoppingBag, Zap, type LucideIcon } from "lucide-react";

export interface Missao {
  id: string;
  pergunta: string;
  icon: LucideIcon;
  pontos: number;
  placeholder: string;
}

/**
 * Perguntas da "Central de Missões" do Dashboard.
 * Não há tratamento de erro proposital so pra funfar que mostra
 * já é aceita e concede pontos, apenas para demonstrar o funcionamento
 * do sistema de gamificação 
 */
export const missoes: Missao[] = [
  { id: "m1", pergunta: "Você separou algum material reciclável hoje?", icon: Recycle, pontos: 30, placeholder: "Ex: separei garrafas PET" },
  { id: "m2", pergunta: "Você separou o lixo orgânico do reciclável?", icon: Recycle, pontos: 30, placeholder: "Ex: separei restos de alimentos" },
  { id: "m3", pergunta: "Você reutilizou algum material antes de descartá-lo?", icon: Recycle, pontos: 30, placeholder: "Ex: reutilizei uma caixa de papelão" },
  { id: "m4", pergunta: "Você usou transporte público hoje?", icon: Bus, pontos: 30, placeholder: "Ex: fui de ônibus para o trabalho" },
  { id: "m5", pergunta: "Você caminhou ou pedalou em algum trajeto?", icon: Bus, pontos: 30, placeholder: "Ex: fui de bicicleta ao mercado" },
  { id: "m6", pergunta: "Você compartilhou uma carona hoje?", icon: Bus, pontos: 30, placeholder: "Ex: dei carona para um colega" },
  { id: "m7", pergunta: "Você fechou a torneira enquanto escovava os dentes?", icon: Droplet, pontos: 30, placeholder: "Ex: fechei a torneira durante a escovação" },
  { id: "m8", pergunta: "Você tomou um banho mais curto hoje?", icon: Droplet, pontos: 30, placeholder: "Ex: tomei um banho de cinco minutos" },
  { id: "m9", pergunta: "Você reaproveitou água em alguma atividade?", icon: Droplet, pontos: 30, placeholder: "Ex: usei água da máquina para lavar o quintal" },
  { id: "m10", pergunta: "Você apagou as luzes ao sair de um cômodo?", icon: Zap, pontos: 30, placeholder: "Ex: apaguei a luz do quarto vazio" },
  { id: "m11", pergunta: "Você evitou deixar aparelhos em modo de espera?", icon: Zap, pontos: 30, placeholder: "Ex: desliguei a TV da tomada" },
  { id: "m12", pergunta: "Você aproveitou a luz natural durante o dia?", icon: Zap, pontos: 30, placeholder: "Ex: trabalhei com a janela aberta" },
  { id: "m13", pergunta: "Você evitou comprar algo de que não precisava?", icon: ShoppingBag, pontos: 30, placeholder: "Ex: não comprei uma roupa por impulso" },
  { id: "m14", pergunta: "Você levou uma sacola reutilizável às compras?", icon: ShoppingBag, pontos: 30, placeholder: "Ex: levei minha ecobag ao mercado" },
  { id: "m15", pergunta: "Você escolheu um produto com menos embalagem?", icon: ShoppingBag, pontos: 30, placeholder: "Ex: escolhi frutas sem embalagem plástica" },
];