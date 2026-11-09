import { PROCESS_STEPS } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ProcessSection() {
  return (
    <section id="como-funciona" aria-labelledby="process-title" className="relative border-t border-line/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Como funciona"
          title={<span id="process-title">Do primeiro contato ao seu site no ar.</span>}
          description="Um processo simples em cinco etapas, com comunicação direta e aprovação em cada fase — você acompanha tudo de perto."
        />

        <ol className="relative mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" aria-label="Etapas do processo">
          <span
            className="absolute left-0 right-0 top-[26px] hidden h-px bg-line lg:block"
            aria-hidden="true"
          />
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.number} className="relative">
              <Reveal delay={i * 80}>
                <article className="group h-full rounded-[22px] border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500">
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-display text-4xl font-bold tracking-tight text-zinc-800 transition-colors group-hover:text-white">
                      {step.number}
                    </span>
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 ring-4 ring-card transition-colors group-hover:bg-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{step.description}</p>
                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-ink" aria-hidden="true">
                    <div
                      className="h-full rounded-full bg-zinc-600 transition-all duration-500 group-hover:bg-white"
                      style={{ width: `${((i + 1) / PROCESS_STEPS.length) * 100}%` }}
                    />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center rounded-[24px] border border-line bg-panel px-6 py-6 text-center sm:flex-row sm:text-left">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-black" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:ml-5 sm:mt-0">
              <strong className="text-white">Transparência:</strong> prazos, escopo e ajustes seguem o que foi combinado
              no briefing. Nada de surpresa no meio do caminho.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
