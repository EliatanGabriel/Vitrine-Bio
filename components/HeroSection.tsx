import { buildGenericWhatsAppUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  const whatsappUrl = buildGenericWhatsAppUrl();

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-[72px]">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-24 lg:pt-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              Agência de sites profissionais
            </p>

            <h1
              id="hero-title"
              className="mt-7 font-display text-[2.6rem] font-bold leading-[0.98] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.4rem]"
            >
              Seu negócio merece uma presença digital{" "}
              <span className="relative whitespace-nowrap">
                profissional.
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none" aria-hidden="true" preserveAspectRatio="none">
                  <path d="M2 6C80 1 220 1 298 5" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Criamos sites modernos, estratégicos e personalizados para apresentar sua empresa, fortalecer sua marca e
              conquistar novas oportunidades.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition-all hover:scale-[1.02] hover:bg-zinc-100 active:scale-[0.98]"
              >
                Quero criar meu site
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-panel/60 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-card"
              >
                Conheça nossos serviços
              </a>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-zinc-300">
                  <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8 21h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                <dt className="sr-only">Responsivo</dt>
                <dd className="text-zinc-300">100% responsivo</dd>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-zinc-300">
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
                <dd className="text-zinc-300">Carregamento rápido</dd>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-zinc-300">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
                  <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                <dd className="text-zinc-300">Estrutura otimizada para SEO</dd>
              </div>
            </dl>

            <p className="mt-8 text-xs leading-relaxed text-zinc-500">
              Conteúdo de exemplo sem promessas de resultados. Cada projeto é desenvolvido conforme briefing, escopo e
              identidade de cada negócio.{" "}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-300 underline decoration-zinc-600 underline-offset-4 hover:text-white">
                Falar no WhatsApp
              </a>
            </p>
          </div>

          <div className="relative" aria-label="Demonstração visual de site desenvolvido pela Vitrine Bio">
            <div className="animate-float-y-slow relative rounded-[28px] border border-line bg-panel p-2 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              <div className="overflow-hidden rounded-[20px] border border-line/60 bg-card">
                <div className="flex items-center gap-2 border-b border-line/60 bg-panel px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" aria-hidden="true" />
                  <span className="ml-3 flex-1 truncate rounded-md bg-ink/70 px-3 py-1.5 text-[11px] text-zinc-500">
                    seu-dominio.com.br
                  </span>
                </div>
                <div className="relative bg-dots p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">Exemplo de layout</p>
                  <p className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight sm:text-[1.7rem]">
                    Sua empresa
                    <br />
                    com cara de referência.
                  </p>
                  <div className="mt-4 h-2 w-2/3 rounded-full bg-zinc-700" aria-hidden="true" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-zinc-800" aria-hidden="true" />
                  <div className="mt-5 flex gap-2">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black">Solicitar orçamento</span>
                    <span className="rounded-full border border-line bg-panel px-4 py-2 text-xs font-semibold text-white">Ver serviços</span>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-2.5">
                    {["Design", "Estratégia", "Performance"].map((label) => (
                      <div key={label} className="rounded-xl border border-line bg-panel px-3 py-3 text-center">
                        <p className="text-[11px] font-semibold text-zinc-300">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-xl border border-line bg-ink/60 p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold text-zinc-400">Responsivo em todos os dispositivos</p>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white">Mobile first</span>
                    </div>
                    <div className="mt-2.5 flex gap-1.5" aria-hidden="true">
                      <span className="h-1.5 flex-1 rounded-full bg-zinc-700" />
                      <span className="h-1.5 flex-1 rounded-full bg-zinc-600" />
                      <span className="h-1.5 flex-1 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-float-y absolute -left-3 -top-4 hidden items-center gap-3 rounded-2xl border border-line bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:flex" aria-hidden="true">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-black">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-bold text-white">Design otimizado</span>
                <span className="block text-[11px] text-zinc-500">para conversão</span>
              </span>
            </div>

            <div className="animate-float-y absolute -bottom-5 -right-2 hidden items-center gap-3 rounded-2xl border border-line bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:flex" aria-hidden="true">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-bold text-white">Atendimento direto</span>
                <span className="block text-[11px] text-zinc-500">pelo WhatsApp</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-y border-line/50 py-4" aria-hidden="true">
          <div className="animate-ticker flex w-max items-center gap-10 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex items-center gap-10">
                {["Sites institucionais", "Landing pages", "Design personalizado", "Responsivo", "SEO", "Performance"].map(
                  (item) => (
                    <span key={`${k}-${item}`} className="flex items-center gap-10">
                      {item} <span className="text-zinc-700">✦</span>
                    </span>
                  )
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
