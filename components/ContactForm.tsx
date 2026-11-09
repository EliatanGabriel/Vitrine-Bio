"use client";

import { useMemo, useState } from "react";
import { SERVICE_OPTIONS } from "@/lib/site";
import { buildQuoteWhatsAppUrl } from "@/lib/whatsapp";

type FormState = {
  name: string;
  company: string;
  whatsapp: string;
  service: string;
  project: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  whatsapp: "",
  service: SERVICE_OPTIONS[0],
  project: "",
};

function maskWhatsApp(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 15);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, digits.length - 4)}-${digits.slice(-4)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, digits.length - 4)}-${digits.slice(-4)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [touched, setTouched] = useState(false);

  const whatsappUrl = useMemo(() => buildQuoteWhatsAppUrl(form), [form]);

  const handleChange = (field: keyof FormState, value: string) => {
    const next = field === "whatsapp" ? maskWhatsApp(value) : value;
    setForm((prev) => ({ ...prev, [field]: next }));
    if (touched) validate({ ...form, [field]: next });
  };

  function validate(data: FormState): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (data.name.trim().length < 2) next.name = "Informe seu nome completo.";
    if (data.company.trim().length < 2) next.company = "Informe o nome da empresa ou negócio.";
    if (data.whatsapp.replace(/\D/g, "").length < 10) next.whatsapp = "Informe um WhatsApp válido com DDD.";
    if (!data.service) next.service = "Selecione o serviço desejado.";
    if (data.project.trim().length < 10) next.project = "Conte um pouco sobre o projeto (mínimo 10 caracteres).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!validate(form)) {
      document.querySelector<HTMLElement>("[data-form-error]")?.focus();
      return;
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-panel px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/20 ${
      hasError ? "border-red-500/70" : "border-line"
    }`;

  const labelClass = "block text-sm font-semibold text-white";
  const hintClass = "mt-1.5 text-xs text-zinc-500";
  const errorClass = "mt-1.5 text-xs font-medium text-red-400";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[28px] border border-line bg-card p-5 sm:p-8" aria-label="Formulário de solicitação de orçamento">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className={labelClass}>
            Nome completo <span aria-hidden="true" className="text-zinc-400">*</span>
          </label>
          <input
            id="nome"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => {
              setTouched(true);
              validate(form);
            }}
            placeholder="Seu nome"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "nome-erro" : undefined}
            className={`${inputClass(!!errors.name)} mt-2.5`}
          />
          {errors.name ? (
            <p id="nome-erro" data-form-error tabIndex={-1} role="alert" className={errorClass}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="empresa" className={labelClass}>
            Nome da empresa ou negócio <span aria-hidden="true" className="text-zinc-400">*</span>
          </label>
          <input
            id="empresa"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => handleChange("company", e.target.value)}
            onBlur={() => {
              setTouched(true);
              validate(form);
            }}
            placeholder="Sua empresa"
            required
            aria-required="true"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "empresa-erro" : undefined}
            className={`${inputClass(!!errors.company)} mt-2.5`}
          />
          {errors.company ? (
            <p id="empresa-erro" role="alert" className={errorClass}>
              {errors.company}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp para contato <span aria-hidden="true" className="text-zinc-400">*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={(e) => handleChange("whatsapp", e.target.value)}
            onBlur={() => {
              setTouched(true);
              validate(form);
            }}
            placeholder="(11) 99999-9999"
            required
            aria-required="true"
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? "whatsapp-erro" : "whatsapp-dica"}
            className={`${inputClass(!!errors.whatsapp)} mt-2.5`}
          />
          {errors.whatsapp ? (
            <p id="whatsapp-erro" role="alert" className={errorClass}>
              {errors.whatsapp}
            </p>
          ) : (
            <p id="whatsapp-dica" className={hintClass}>
              Usaremos apenas para conversar sobre o seu projeto.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="servico" className={labelClass}>
            Qual serviço deseja contratar?
          </label>
          <div className="relative mt-2.5">
            <select
              id="servico"
              name="service"
              value={form.service}
              onChange={(e) => handleChange("service", e.target.value)}
              className={`${inputClass(false)} appearance-none pr-10`}
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option} className="bg-panel">
                  {option}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="projeto" className={labelClass}>
            Conte um pouco sobre seu projeto <span aria-hidden="true" className="text-zinc-400">*</span>
          </label>
          <textarea
            id="projeto"
            name="project"
            value={form.project}
            onChange={(e) => handleChange("project", e.target.value)}
            onBlur={() => {
              setTouched(true);
              validate(form);
            }}
            placeholder="Ex.: Quero um site institucional para minha empresa de serviços, com página de contato e apresentação dos serviços..."
            required
            aria-required="true"
            aria-invalid={!!errors.project}
            aria-describedby={errors.project ? "projeto-erro" : "projeto-dica"}
            rows={5}
            className={`${inputClass(!!errors.project)} mt-2.5 resize-y`}
          />
          {errors.project ? (
            <p id="projeto-erro" role="alert" className={errorClass}>
              {errors.project}
            </p>
          ) : (
            <p id="projeto-dica" className={hintClass}>
              Quanto mais detalhes, melhor conseguimos planejar e orçar.
            </p>
          )}
        </div>
      </div>

      <div className="mt-7">
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4.5 text-sm font-bold text-black transition-all hover:scale-[1.01] hover:bg-zinc-100 active:scale-[0.98] sm:w-auto"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
          Enviar solicitação pelo WhatsApp
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </button>
        <p className="mt-4 text-center text-xs leading-relaxed text-zinc-500 sm:text-left">
          Ao enviar, você será redirecionado ao WhatsApp com a mensagem já preenchida. A solicitação só é concluída
          quando você confirmar o envio na conversa — nada é enviado automaticamente.
        </p>
      </div>
    </form>
  );
}
