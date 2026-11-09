import { BENEFITS } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const BENEFIT_ICONS = [
  (
    <svg key="a" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.4 3 8 7 10 4-2 7-5.6 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m9 12 2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="b" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 9.5 8 12l2 2.5M14 9.5 16 12l-2 2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="c" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.5 9.5h7M8.5 12.5h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="d" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M8 6 3 12l5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="e" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5 20c1.5-3.2 4-5 7-5s5.5 1.8 7 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
];

export default function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-title" className="relative border-t border-line/40 bg-panel/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Por que escolher"
              title={<span id="benefits-title">Seu negócio em boas mãos.</span>}
              description="Trabalhamos com transparência, design cuidadoso e comunicação próxima — sem promessas exageradas, apenas construção diária de confiança."
            />
            <Reveal delay={220}>
              <a
                href="#contato"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Começar agora
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 60} className={i === 0 && BENEFITS.length % 2 === 1 ? "sm:col-span-2" : undefined}>
                <div className="group h-full rounded-[22px] border border-line bg-card p-6 transition-all hover:border-zinc-500 hover:bg-[#191919]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-panel text-white">
                    {BENEFIT_ICONS[i]}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
