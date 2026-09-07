import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import GhostField from "../../components/Ghost/GhostField";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Contato() {
  useDocumentTitle("Contato");
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormData>({
    mode: "onBlur",
    defaultValues: {
      nome: "",
      email: "",
      motivo: "duvida",
      urgencia: "baixa",
      mensagem: "",
    },
  });

  const urgenciaSelecionada = watch("urgencia");
  const corUrgencia = urgencias.find((item) => item.value === urgenciaSelecionada)?.color ?? "#22d3ee";

  const onSubmit: SubmitHandler<ContatoFormData> = async (data) => {
    // Não há consumo de API nesta Sprint 03: simulamos o envio localmente.
    await new Promise((resolve) => setTimeout(resolve, 400));
    console.log("Formulário de contato enviado:", data);
    setEnviado(true);
    reset();
  };

  return (
    <section className="relative overflow-hidden py-12">
      <GhostField
        ghosts={[
          { top: "8%", right: "8%", size: 60, color: "#fbbf24", opacity: 0.3, variant: 3 },
          { bottom: "6%", left: "6%", size: 50, color: "#22d3ee", opacity: 0.3, variant: 1 },
        ]}
      />
      <div className="relative mx-auto w-[90%] max-w-2xl text-center">
        <span className="mb-3 inline-block rounded-full border border-soul-gold/40 bg-soul-gold/10 px-4 py-1 text-sm font-semibold text-soul-gold">
          ✉️ Fale com a SoulUp
        </span>
        <h2 className="mb-3 text-3xl font-bold text-white sm:text-5xl">Contato</h2>
        <p className="mb-10 text-white/70">
          Conte pra gente o motivo do contato e o nível de urgência — assim conseguimos priorizar
          melhor a resposta da equipe.
        </p>

        <form
          id="contactForm"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="glass-card flex flex-col gap-4 p-8 text-left"
        >
          <div className="form-group">
            <label htmlFor="nome" className="mb-1 block font-semibold text-white/90">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Como podemos te chamar?"
              aria-invalid={errors.nome ? "true" : "false"}
              className={`w-full rounded-lg border bg-soul-900/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-soul-cyan focus:outline-none ${
                errors.nome ? "border-red-500" : "border-white/15"
              }`}
              {...register("nome", {
                required: "Informe o seu nome.",
                minLength: { value: 2, message: "O nome deve ter ao menos 2 caracteres." },
              })}
            />
            {errors.nome && (
              <p className="error mt-1 text-sm text-red-400">{errors.nome.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="mb-1 block font-semibold text-white/90">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              aria-invalid={errors.email ? "true" : "false"}
              className={`w-full rounded-lg border bg-soul-900/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-soul-cyan focus:outline-none ${
                errors.email ? "border-red-500" : "border-white/15"
              }`}
              {...register("email", {
                required: "Informe o seu email.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Digite um email válido.",
                },
              })}
            />
            {errors.email && (
              <p className="error mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="motivo" className="mb-1 block font-semibold text-white/90">
              Motivo do contato
            </label>
            <select
              id="motivo"
              className="w-full cursor-pointer rounded-lg border border-white/15 bg-soul-900/60 px-4 py-3 text-white focus:border-soul-cyan focus:outline-none"
              {...register("motivo")}
            >
              {motivos.map((motivo) => (
                <option key={motivo.value} value={motivo.value} className="bg-soul-900">
                  {motivo.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="urgencia" className="mb-1 block font-semibold text-white/90">
              Nível de urgência
            </label>
            <select
              id="urgencia"
              className="w-full cursor-pointer rounded-lg border px-4 py-3 text-white focus:outline-none"
              style={{ borderColor: `${corUrgencia}80`, backgroundColor: `${corUrgencia}14` }}
              {...register("urgencia")}
            >
              {urgencias.map((urgencia) => (
                <option key={urgencia.value} value={urgencia.value} className="bg-soul-900">
                  {urgencia.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensagem" className="mb-1 block font-semibold text-white/90">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              placeholder="Escreva sua mensagem para a equipe SoulUp..."
              rows={5}
              aria-invalid={errors.mensagem ? "true" : "false"}
              className={`w-full resize-y rounded-lg border bg-soul-900/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-soul-cyan focus:outline-none ${
                errors.mensagem ? "border-red-500" : "border-white/15"
              }`}
              {...register("mensagem", {
                required: "Escreva uma mensagem.",
                minLength: {
                  value: 10,
                  message: "A mensagem deve ter ao menos 10 caracteres.",
                },
              })}
            />
            {errors.mensagem && (
              <p className="error mt-1 text-sm text-red-400">{errors.mensagem.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="self-center">
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </Button>

          <div id="feedback" role="status" className="text-center">
            {enviado && (
              <p className="success text-teal-300">
                Mensagem enviada com sucesso! Um caçador da equipe vai te responder em breve. 👻
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
