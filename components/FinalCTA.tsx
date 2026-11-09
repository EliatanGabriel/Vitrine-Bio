import { buildGenericWhatsAppUrl } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function FinalCTA() {
  const whatsappUrl = buildGenericWhatsAppUrl();
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden border-t border-line/40">
      <div className="bg-dots absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(ellipse_50%_70%_at_50%_0%,rgba(255,255,255,0.14),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-zinc-500">Próximo passo</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 id="cta-title" className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.6rem]">
            Seu próximo passo começa com uma boa presença digital.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Estamos prontos para ajudar seu negócio a conquistar seu espaço na internet.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:scale-[1.03] hover:bg-zinc-100 active:scale-[0.98]"
            >
              Fale com a Vitrine Bio
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-line bg-panel/60 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-card"
            >
              Preencher formulário
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
