import { SERVICES } from "@/lib/site";
import { buildGenericWhatsAppUrl } from "@/lib/whatsapp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ServiceIcon({ icon }: { icon: string }) {
  const common = "h-6 w-6";
  switch (icon) {
    case "building":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      );
    case "palette":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.8 2-1.9 0-.6-.2-1-.6-1.5-.4-.5-.6-1-.6-1.6 0-1 .8-1.9 1.9-1.9H17a4 4 0 0 0 4-4c0-3.9-4-7.1-9-7.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <circle cx="7.5" cy="10" r="1.3" fill="currentColor" />
          <circle cx="11" cy="7" r="1.3" fill="currentColor" />
          <circle cx="15" cy="8.5" r="1.3" fill="currentColor" />
        </svg>
      );
    case "refresh":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path d="M12 3 5 6v5c0 4.4 3 8 7 10 4-2 7-5.6 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="m9 12 2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function ServicesSection() {
  const whatsappUrl = buildGenericWhatsAppUrl();
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="relative border-t border-line/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="O que fazemos"
          title={<span id="servicos-title">Soluções digitais para apresentar seu negócio ao mundo.</span>}
          description="Cinco frentes de trabalho para tirar sua empresa do papel e colocá-la na internet com qualidade — do site institucional à manutenção contínua."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 70}>
              <article
                className={`group relative h-full overflow-hidden rounded-[24px] border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:p-7 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl transition-opacity group-hover:opacity-100" aria-hidden="true" />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-panel text-white transition-transform duration-300 group-hover:scale-105">
                    <ServiceIcon icon={service.icon} />
                  </span>
                  <span className="font-display text-xs font-bold tracking-widest text-zinc-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-zinc-400">{service.description}</p>
                <a
                  href="#contato"
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-zinc-700 underline-offset-4 transition-colors hover:decoration-white"
                  aria-label={`Solicitar ${service.title}`}
                >
                  Solicitar este serviço
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            </Reveal>
          ))}

          <Reveal delay={350}>
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-line bg-panel p-6 sm:p-7">
              <div>
                <p className="font-display text-xl font-semibold tracking-tight text-white">
                  Não sabe por onde começar?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Conte sua necessidade no WhatsApp. A gente orienta o melhor caminho para o seu momento.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Pedir orientação gratuita
                <span aria-hidden="true">→</span>
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
