import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative border-t border-line/40 bg-panel/40">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Contato e orçamento"
              title={<span id="contato-title">Vamos tirar seu projeto do papel?</span>}
              description="Conte um pouco sobre seu negócio e o site que deseja desenvolver. Nossa equipe entrará em contato para entender suas necessidades."
            />

            <Reveal delay={220}>
              <ul className="mt-9 space-y-3.5">
                {[
                  "Atendimento direto pelo WhatsApp",
                  "Sem cadastro e sem cobrança por aqui",
                  "Planejamento sob medida para o seu negócio",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-black" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 rounded-[22px] border border-line bg-card p-5">
                <p className="text-sm font-bold text-white">O que acontece depois?</p>
                <ol className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-zinc-400">
                  <li><strong className="text-white">1.</strong> Você envia a mensagem pelo WhatsApp.</li>
                  <li><strong className="text-white">2.</strong> Entendemos seu negócio no briefing.</li>
                  <li><strong className="text-white">3.</strong> Apresentamos proposta e próximos passos.</li>
                </ol>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
