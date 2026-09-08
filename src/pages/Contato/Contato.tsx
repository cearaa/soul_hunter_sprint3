import {
  Check,
  ChevronDown,
  CircleCheck,
  Compass,
  Ghost as GhostIcon,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import GhostField from "../../components/Ghost/GhostField";
import { motivosContato, urgenciasContato } from "../../data/contato";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import type { ContatoFormData } from "../../types";

const NOME_MIN = 3;
const NOME_MAX = 60;
const MENSAGEM_MIN = 20;
const MENSAGEM_MAX = 500;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const NOME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/;

const CAMPOS: (keyof ContatoFormData)[] = ["nome", "email", "motivo", "urgencia", "mensagem"];

const inputBase =
  "w-full rounded-xl border bg-soul-900/60 px-4 py-3 text-white placeholder:text-white/35 transition-all duration-300 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60";

function inputState(hasError: boolean, isValid: boolean) {
  if (hasError) {
    return "border-rose-400/70 bg-rose-500/5 focus:border-rose-400 focus:ring-rose-400/30";
  }
  if (isValid) {
    return "border-soul-teal/60 focus:border-soul-teal focus:ring-soul-teal/25";
  }
  return "border-white/15 hover:border-white/30 focus:border-soul-gold focus:ring-soul-gold/25";
}

function describedBy(id: string, hasError: boolean, hasHint: boolean) {
  if (hasError) return `${id}-error`;
  if (hasHint) return `${id}-hint`;
  return undefined;
}

export default function Contato() {
  useDocumentTitle("Contato");
  const [enviado, setEnviado] = useState<ContatoFormData | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<ContatoFormData>({
    mode: "onTouched",
    defaultValues: {
      nome: "",
      email: "",
      mensagem: "",
    },
  });

  const valores = useWatch({ control });
  const mensagem = valores.mensagem ?? "";
  const urgenciaAtual = urgenciasContato.find((item) => item.value === valores.urgencia);
  const motivoAtual = motivosContato.find((item) => item.value === valores.motivo);
  const corDestaque = urgenciaAtual?.color ?? "#fbbf24";

  const preenchidos = CAMPOS.filter((campo) => {
    const valor = valores[campo];
    return typeof valor === "string" && valor.trim() !== "";
  }).length;
  const progresso = Math.round((preenchidos / CAMPOS.length) * 100);

  function campoValido(campo: keyof ContatoFormData) {
    const valor = valores[campo];
    return !errors[campo] && !!touchedFields[campo] && typeof valor === "string" && valor.trim() !== "";
  }

  const onSubmit: SubmitHandler<ContatoFormData> = async (data) => {
    // Nesta Sprint não há consumo de API: o envio é simulado localmente.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setEnviado({ ...data, nome: data.nome.trim(), mensagem: data.mensagem.trim() });
    reset();
  };

  function novaMensagem() {
    setEnviado(null);
  }

  const contadorClasse =
    mensagem.length > MENSAGEM_MAX
      ? "text-rose-300 font-semibold"
      : mensagem.length >= MENSAGEM_MAX * 0.9
        ? "text-soul-gold"
        : mensagem.length >= MENSAGEM_MIN
          ? "text-soul-teal"
          : "";

  return (
    <section className="relative overflow-hidden py-12">
      <GhostField
        ghosts={[
          { top: "6%", right: "6%", size: 60, color: "#fbbf24", opacity: 0.3, variant: 3 },
          { top: "45%", left: "3%", size: 42, color: "#d946ef", opacity: 0.22, variant: 2 },
          { bottom: "6%", right: "12%", size: 50, color: "#22d3ee", opacity: 0.28, variant: 1 },
        ]}
      />

      <div className="relative mx-auto w-[92%] max-w-6xl">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-soul-gold/40 bg-soul-gold/10 px-4 py-1 text-sm font-semibold text-soul-gold">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Fale com a SoulUp
          </span>
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-5xl">Contato</h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Conte pra gente o motivo do contato e o nível de urgência — assim a equipe consegue
            priorizar melhor a resposta. Todos os campos marcados com{" "}
            <span className="font-semibold text-soul-gold">*</span> são obrigatórios.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.7fr]">
          <aside className="flex flex-col gap-4">
            <div className="glass-card p-6">
              <h3 className="mb-4 text-lg font-bold text-white">Como funciona o atendimento</h3>
              <ol className="space-y-4">
                {[
                  { icon: Send, titulo: "Você envia", texto: "Preencha o formulário ao lado com o máximo de detalhes." },
                  { icon: Compass, titulo: "Triagem", texto: "O motivo e a urgência definem para qual time a mensagem vai." },
                  { icon: GhostIcon, titulo: "Resposta", texto: "Um caçador(a) da equipe SoulUp responde no seu e-mail." },
                ].map((passo, index) => (
                  <li key={passo.titulo} className="flex gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-500"
                      style={{ backgroundColor: `${corDestaque}22`, color: corDestaque }}
                      aria-hidden="true"
                    >
                      <passo.icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        <span className="mr-1 text-white/40">{index + 1}.</span>
                        {passo.titulo}
                      </p>
                      <p className="text-sm text-white/65">{passo.texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div
              className="glass-card p-6 transition-all duration-500"
              style={{ borderColor: `${corDestaque}55`, boxShadow: `0 0 28px ${corDestaque}22` }}
              aria-live="polite"
            >
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-white/60">
                Prazo estimado de resposta
              </h3>
              {urgenciaAtual ? (
                <div key={urgenciaAtual.value} className="animate-fade-in">
                  <p className="flex items-center gap-2 text-2xl font-bold neon-text" style={{ color: urgenciaAtual.color }}>
                    <urgenciaAtual.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    {urgenciaAtual.prazo}
                  </p>
                  <p className="mt-1 text-sm text-white/65">{urgenciaAtual.descricao}</p>
                </div>
              ) : (
                <p className="text-sm text-white/55">
                  Escolha o nível de urgência no formulário para ver o prazo estimado.
                </p>
              )}
            </div>
          </aside>

          {enviado ? (
            <div
              className="glass-card animate-fade-in flex flex-col items-center justify-center gap-4 p-8 text-center"
              style={{ boxShadow: "0 0 32px rgba(45,212,191,0.25)" }}
              role="status"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-soul-teal/15 text-soul-teal shadow-[0_0_24px_rgba(45,212,191,0.4)]">
                <CircleCheck className="h-11 w-11" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Mensagem enviada, <span className="text-soul-teal neon-text">{enviado.nome}</span>!
              </h3>
              <p className="max-w-md text-white/70">
                Recebemos seu contato e vamos responder em{" "}
                <strong className="text-white">{enviado.email}</strong>.
              </p>

              <dl className="mt-2 grid w-full max-w-md grid-cols-1 gap-3 text-left sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-white/50">Motivo</dt>
                  {(() => {
                    const motivo = motivosContato.find((m) => m.value === enviado.motivo);
                    return (
                      <dd className="mt-1 flex items-center gap-2 font-semibold text-white">
                        {motivo && <motivo.icon className="h-4 w-4 shrink-0 text-soul-gold" aria-hidden="true" />}
                        {motivo?.label}
                      </dd>
                    );
                  })()}
                </div>
                {(() => {
                  const urgencia = urgenciasContato.find((u) => u.value === enviado.urgencia);
                  return (
                    <div
                      className="rounded-xl border bg-white/5 p-4"
                      style={{ borderColor: `${urgencia?.color}66` }}
                    >
                      <dt className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        Urgência · prazo
                      </dt>
                      <dd className="mt-1 flex items-center gap-2 font-semibold" style={{ color: urgencia?.color }}>
                        {urgencia && <urgencia.icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
                        {urgencia?.label} · {urgencia?.prazo}
                      </dd>
                    </div>
                  );
                })()}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-white/50">Mensagem</dt>
                  <dd className="mt-1 whitespace-pre-line text-sm text-white/80">{enviado.mensagem}</dd>
                </div>
              </dl>

              <Button variant="outline" onClick={novaMensagem} className="mt-4">
                Enviar outra mensagem
              </Button>
            </div>
          ) : (
            <form
              id="contactForm"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="glass-card flex flex-col gap-5 p-6 text-left transition-shadow duration-500 sm:p-8"
              style={{ boxShadow: `0 0 32px ${corDestaque}1a` }}
            >
              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-white/60">
                  <span className="font-semibold">Progresso do formulário</span>
                  <span>
                    {preenchidos}/{CAMPOS.length} campos
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-soul-gold via-soul-teal to-soul-cyan transition-all duration-500 ease-out"
                    style={{ width: `${progresso}%` }}
                    role="progressbar"
                    aria-label="Progresso do preenchimento"
                    aria-valuenow={progresso}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  id="nome"
                  label="Nome"
                  required
                  error={errors.nome?.message}
                  valid={campoValido("nome")}
                  hint="Como podemos te chamar?"
                >
                  <input
                    id="nome"
                    type="text"
                    autoComplete="name"
                    placeholder="Ex.: Maria Caçadora"
                    aria-invalid={!!errors.nome}
                    aria-describedby={describedBy("nome", !!errors.nome, true)}
                    className={`${inputBase} ${inputState(!!errors.nome, campoValido("nome"))}`}
                    {...register("nome", {
                      required: "Informe seu nome para sabermos com quem falar.",
                      validate: (valor) =>
                        valor.trim().length >= NOME_MIN ||
                        `O nome precisa ter pelo menos ${NOME_MIN} letras.`,
                      maxLength: {
                        value: NOME_MAX,
                        message: `O nome pode ter no máximo ${NOME_MAX} caracteres.`,
                      },
                      pattern: {
                        value: NOME_REGEX,
                        message: "Use apenas letras e espaços — sem números ou símbolos.",
                      },
                    })}
                  />
                </FormField>

                <FormField
                  id="email"
                  label="E-mail"
                  required
                  error={errors.email?.message}
                  valid={campoValido("email")}
                  hint="É por aqui que vamos responder."
                >
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="voce@exemplo.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={describedBy("email", !!errors.email, true)}
                    className={`${inputBase} ${inputState(!!errors.email, campoValido("email"))}`}
                    {...register("email", {
                      required: "Informe um e-mail para receber a resposta.",
                      pattern: {
                        value: EMAIL_REGEX,
                        message: "Esse e-mail não parece válido. Confira o formato: nome@dominio.com",
                      },
                    })}
                  />
                </FormField>
              </div>

              <FormField
                id="motivo"
                label="Motivo do contato"
                required
                error={errors.motivo?.message}
                valid={campoValido("motivo")}
                hint="Isso direciona sua mensagem para o time certo."
              >
                <div className="relative">
                  {motivoAtual ? (
                    <motivoAtual.icon
                      className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-soul-gold"
                      aria-hidden="true"
                    />
                  ) : (
                    <Mail
                      className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-white/35"
                      aria-hidden="true"
                    />
                  )}
                  <select
                    id="motivo"
                    defaultValue=""
                    aria-invalid={!!errors.motivo}
                    aria-describedby={describedBy("motivo", !!errors.motivo, true)}
                    className={`${inputBase} appearance-none pl-11 pr-11 ${inputState(!!errors.motivo, campoValido("motivo"))} ${
                      valores.motivo ? "text-white" : "text-white/35"
                    }`}
                    {...register("motivo", {
                      required: "Selecione o motivo que melhor descreve seu contato.",
                    })}
                  >
                    <option value="" disabled className="text-white/40">
                      Selecione um motivo…
                    </option>
                    {motivosContato.map((motivo) => (
                      <option key={motivo.value} value={motivo.value} className="bg-soul-900 text-white">
                        {motivo.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
                    aria-hidden="true"
                  />
                </div>
              </FormField>

              <FormField
                id="urgencia"
                label="Nível de urgência"
                required
                asGroup
                error={errors.urgencia?.message}
                valid={campoValido("urgencia")}
                hint="Seja honesto(a): isso define a ordem da fila."
              >
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" role="radiogroup">
                  {urgenciasContato.map((urgencia) => {
                    const selecionada = valores.urgencia === urgencia.value;
                    return (
                      <label
                        key={urgencia.value}
                        className={`relative flex cursor-pointer flex-col items-center gap-1 rounded-xl border p-3 text-center transition-all duration-300 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-soul-900 ${
                          selecionada
                            ? "-translate-y-0.5"
                            : errors.urgencia
                              ? "border-rose-400/50 bg-rose-500/5 hover:bg-white/10"
                              : "border-white/10 bg-white/5 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                        }`}
                        style={
                          selecionada
                            ? {
                                borderColor: urgencia.color,
                                backgroundColor: `${urgencia.color}1f`,
                                boxShadow: `0 0 20px ${urgencia.color}55`,
                                ["--tw-ring-color" as string]: urgencia.color,
                              }
                            : { ["--tw-ring-color" as string]: urgencia.color }
                        }
                      >
                        <input
                          type="radio"
                          value={urgencia.value}
                          className="sr-only"
                          aria-invalid={!!errors.urgencia}
                          {...register("urgencia", {
                            required: "Escolha um nível de urgência para a mensagem.",
                          })}
                        />
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300"
                          style={{
                            backgroundColor: selecionada ? `${urgencia.color}2a` : "rgba(255,255,255,0.06)",
                            color: selecionada ? urgencia.color : "rgba(255,255,255,0.7)",
                          }}
                          aria-hidden="true"
                        >
                          <urgencia.icon className="h-5 w-5" />
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: selecionada ? urgencia.color : "rgba(255,255,255,0.85)" }}
                        >
                          {urgencia.label}
                        </span>
                        <span className="text-[11px] leading-tight text-white/50">{urgencia.prazo}</span>
                        {selecionada && (
                          <span
                            className="animate-fade-in absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full text-soul-950"
                            style={{ backgroundColor: urgencia.color }}
                            aria-hidden="true"
                          >
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </FormField>

              <FormField
                id="mensagem"
                label="Mensagem"
                required
                error={errors.mensagem?.message}
                valid={campoValido("mensagem")}
                hint={`Descreva com detalhes — mínimo de ${MENSAGEM_MIN} caracteres.`}
                trailing={
                  <span className={contadorClasse} aria-live="polite">
                    {mensagem.length}/{MENSAGEM_MAX}
                  </span>
                }
              >
                <textarea
                  id="mensagem"
                  rows={5}
                  placeholder="Conte o que aconteceu, o que você sugere ou como podemos ajudar…"
                  aria-invalid={!!errors.mensagem}
                  aria-describedby={describedBy("mensagem", !!errors.mensagem, true)}
                  className={`${inputBase} resize-y ${inputState(!!errors.mensagem, campoValido("mensagem"))}`}
                  {...register("mensagem", {
                    required: "Escreva sua mensagem — é o mais importante aqui!",
                    validate: (valor) => {
                      const tamanho = valor.trim().length;
                      if (tamanho < MENSAGEM_MIN) {
                        return `Faltam ${MENSAGEM_MIN - tamanho} caracteres para o mínimo de ${MENSAGEM_MIN}.`;
                      }
                      if (tamanho > MENSAGEM_MAX) {
                        return `Sua mensagem passou ${tamanho - MENSAGEM_MAX} caracteres do limite de ${MENSAGEM_MAX}.`;
                      }
                      return true;
                    },
                  })}
                />
              </FormField>

              <div className="mt-2 flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => reset()}
                  disabled={isSubmitting}
                  className="sm:px-5"
                >
                  Limpar
                </Button>
                <Button type="submit" disabled={isSubmitting} className="min-w-[200px]">
                  {isSubmitting ? (
                    <>
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-soul-950/30 border-t-soul-950"
                        aria-hidden="true"
                      />
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
