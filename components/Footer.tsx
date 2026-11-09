import { NAV_LINKS, SERVICES } from "@/lib/site";
import { buildGenericWhatsAppUrl } from "@/lib/whatsapp";
import Logo from "./Logo";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  const whatsappUrl = buildGenericWhatsAppUrl();

  return (
    <footer className="border-t border-line bg-panel/60" aria-label="Rodapé">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#inicio" aria-label="Vitrine Bio — voltar ao início" className="inline-block rounded-lg">
              <Logo />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-500">
              Agência de criação de sites profissionais. Construímos sua presença digital com tecnologia, criatividade e
              estratégia.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Serviços">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Serviços</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href="#servicos" className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#contato" className="text-zinc-400 transition-colors hover:text-white">
                  Solicitar orçamento
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-zinc-600">
              E-mail e Instagram serão incluídos aqui quando configurados.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line/60 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-zinc-500">© <CurrentYear /> Vitrine Bio. Todos os direitos reservados.</p>
          <a href="#inicio" className="text-xs font-semibold text-zinc-400 underline decoration-zinc-700 underline-offset-4 hover:text-white">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
