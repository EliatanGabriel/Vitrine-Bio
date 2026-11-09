import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative border-t border-line/40 bg-panel/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Quem somos"
              title={<span id="sobre-title">Mais do que criar sites, construímos sua presença digital.</span>}
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <Reveal delay={120}>
                <p>
                  A Vitrine Bio nasceu com o propósito de ajudar empresas, profissionais e empreendedores a fortalecerem
                  sua presença na internet.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Acreditamos que todo negócio merece uma apresentação digital profissional, capaz de transmitir
                  confiança, valorizar seus serviços e aproximar sua marca de novos clientes.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p>
                  Unimos tecnologia, criatividade e estratégia para desenvolver soluções digitais alinhadas aos
                  objetivos de cada negócio.
                </p>
              </Reveal>
            </div>

            <Reveal delay={340}>
              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {["Tecnologia atual", "Criatividade aplicada", "Estratégia digital", "Atendimento humano"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3.5 text-sm font-semibold text-white"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-black" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={150}>
              <div className="relative rounded-[28px] border border-line bg-card p-5 sm:p-7">
                <div className="bg-dots absolute inset-0 rounded-[28px] opacity-30" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">Presença digital</p>
                    <span className="rounded-full border border-line bg-panel px-3 py-1 text-[11px] font-semibold text-zinc-300">
                      Vitrine Bio
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      { label: "Identidade visual", value: "Profissional e consistente", pct: 92 },
                      { label: "Experiência do usuário", value: "Clara, rápida e responsiva", pct: 88 },
                      { label: "Confiança da marca", value: "Transparência em cada página", pct: 90 },
                    ].map((row) => (
                      <div key={row.label} className="rounded-2xl border border-line bg-panel p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm font-bold text-white">{row.label}</p>
                            <p className="mt-0.5 text-xs text-zinc-500">{row.value}</p>
                          </div>
                          <span className="font-display text-sm font-bold text-white">{row.pct}%</span>
                        </div>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink" aria-hidden="true">
                          <div className="h-full rounded-full bg-white" style={{ width: `${row.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-line bg-panel p-4 text-center">
                      <p className="font-display text-xl font-bold text-white">Mobile</p>
                      <p className="mt-1 text-xs text-zinc-500">Computador, tablet e celular</p>
                    </div>
                    <div className="rounded-2xl border border-line bg-panel p-4 text-center">
                      <p className="font-display text-xl font-bold text-white">SEO</p>
                      <p className="mt-1 text-xs text-zinc-500">Estrutura pensada para busca</p>
                    </div>
                  </div>

                  <p className="mt-5 rounded-xl bg-ink/70 px-4 py-3 text-center text-xs leading-relaxed text-zinc-500">
                    Indicadores ilustrativos de qualidade — sem promessas de resultados ou números de clientes.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="animate-float-y absolute -right-3 -top-5 hidden rounded-2xl border border-line bg-card px-4 py-3 shadow-xl sm:block" aria-hidden="true">
              <p className="text-xs font-bold text-white">Criatividade + estratégia</p>
              <p className="mt-0.5 text-[11px] text-zinc-500">em cada projeto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
