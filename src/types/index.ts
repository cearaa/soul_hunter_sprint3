export interface Integrante {
  id: string;
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  fotoPosition?: string;
  github: string;
  linkedin: string;
  bio: string;
  fantasmaFavorito: string;
}

export interface FaqItem {
  id: string;
  pergunta: string;
  resposta: string;
}

export type Medalha = "ouro" | "prata" | "bronze" | "none";

export interface RankingEntry {
  posicao: number;
  usuario: string;
  pontos: number;
  medalha: Medalha;
}

export interface Alma {
  id: string;
  nome: string;
  imagem: string;
}

export type MotivoContato =
  | "duvida"
  | "sugestao"
  | "parceria"
  | "bug"
  | "outro";

export type UrgenciaContato = "baixa" | "media" | "alta" | "urgente";

export interface ContatoFormData {
  nome: string;
  email: string;
  motivo: MotivoContato;
  urgencia: UrgenciaContato;
  mensagem: string;
}
