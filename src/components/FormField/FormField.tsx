import { TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  children: ReactNode;
  /** Mensagem de erro vinda do react-hook-form. Quando presente, substitui a dica. */
  error?: string;
  /** Texto auxiliar exibido abaixo do campo enquanto não há erro. */
  hint?: string;
  required?: boolean;
  /** Campo já validado com sucesso — exibe o selo de confirmação. */
  valid?: boolean;
  /** Conteúdo alinhado à direita do label (ex.: contador de caracteres). */
  trailing?: ReactNode;
  /** Usa <fieldset>/<legend> em vez de <label> (grupos de radio/checkbox). */
  asGroup?: boolean;
}

/**
 * Envelope padrão de campo de formulário do design system:
 * label com asterisco de obrigatoriedade, área reservada para dica/erro
 * (evita "pulos" no layout) e mensagens acessíveis via aria-describedby.
 *
 * Os ids `${id}-hint` e `${id}-error` devem ser referenciados pelo input
 * através de `aria-describedby`.
 */
export default function FormField({
  id,
  label,
  children,
  error,
  hint,
  required = false,
  valid = false,
  trailing,
  asGroup = false,
}: FormFieldProps) {
  const labelContent = (
    <>
      <span className="flex items-center gap-1.5">
        {label}
        {required && (
          <span className="text-soul-gold" aria-hidden="true">
            *
          </span>
        )}
        {valid && !error && (
          <span
            className="animate-fade-in inline-flex h-4 w-4 items-center justify-center rounded-full bg-soul-teal text-soul-950 shadow-[0_0_8px_rgba(45,212,191,0.6)]"
            role="img"
            aria-label="Campo válido"
          >
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
              <path d="M2.5 6.5l2.2 2.2L9.5 3.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </span>
      {trailing && <span className="text-xs font-normal text-white/50">{trailing}</span>}
    </>
  );

  const feedback = (
    <div className="mt-1.5 min-h-[1.25rem] text-xs">
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="animate-fade-in flex items-start gap-1.5 font-medium text-rose-300"
        >
          <TriangleAlert className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="text-white/45">
            {hint}
          </p>
        )
      )}
    </div>
  );

  if (asGroup) {
    return (
      <fieldset className="min-w-0 border-0 p-0" aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}>
        <legend className="mb-2 flex w-full items-center justify-between text-sm font-semibold text-white/90">
          {labelContent}
        </legend>
        {children}
        {feedback}
      </fieldset>
    );
  }

  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-2 flex items-center justify-between text-sm font-semibold text-white/90"
      >
        {labelContent}
      </label>
      {children}
      {feedback}
    </div>
  );
}
