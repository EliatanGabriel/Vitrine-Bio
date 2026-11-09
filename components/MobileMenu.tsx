"use client";

import { NAV_LINKS } from "@/lib/site";
import { buildGenericWhatsAppUrl } from "@/lib/whatsapp";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  active: string;
}

export default function MobileMenu({ open, onClose, active }: MobileMenuProps) {
  if (!open) return null;

  const whatsappUrl = buildGenericWhatsAppUrl();

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col bg-ink/95 pt-[72px] backdrop-blur-xl md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
    >
      <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Navegação móvel">
        <ul className="space-y-1">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ animationDelay: `${i * 40}ms` }}>
              <a
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between rounded-2xl border px-5 py-4 font-display text-xl font-semibold tracking-tight transition-colors ${
                  active === link.href
                    ? "border-line bg-card text-white"
                    : "border-transparent text-zinc-300 hover:border-line hover:bg-panel hover:text-white"
                }`}
                aria-current={active === link.href ? "true" : undefined}
              >
                {link.label}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-50">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-3 px-1">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            Solicitar orçamento
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-center text-xs text-zinc-500">Resposta pelo WhatsApp. Sem formulário de cadastro.</p>
        </div>
      </nav>
    </div>
  );
}
