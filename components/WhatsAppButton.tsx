"use client";

import { useEffect, useState } from "react";
import { buildGenericWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const url = buildGenericWhatsAppUrl();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Vitrine Bio no WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-white py-3 pl-4 pr-5 text-sm font-bold text-black shadow-[0_16px_40px_rgba(0,0,0,0.55)] transition-all duration-300 hover:scale-[1.04] hover:bg-zinc-100 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-black text-white" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 10.5c.8 2.2 2.3 3.7 4.5 4.5l1.5-1.5 2 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-black ring-2 ring-white" />
      </span>
      <span className="hidden sm:inline">Fale conosco</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
