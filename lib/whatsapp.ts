export const WHATSAPP_PLACEHOLDER = "5511000000000";

export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();
  if (raw && raw.length > 0) return raw.replace(/\D/g, "");
  return WHATSAPP_PLACEHOLDER;
}

export function isWhatsAppPlaceholder(): boolean {
  return getWhatsAppNumber() === WHATSAPP_PLACEHOLDER;
}

export interface QuoteFormData {
  name: string;
  company: string;
  whatsapp: string;
  service: string;
  project: string;
}

export function buildQuoteMessage(data: QuoteFormData): string {
  return [
    "Olá! Tenho interesse em contratar os serviços da Vitrine Bio.",
    "",
    `*Meu nome:* ${data.name.trim()}`,
    `*Empresa:* ${data.company.trim()}`,
    `*WhatsApp:* ${data.whatsapp.trim()}`,
    `*Serviço desejado:* ${data.service.trim()}`,
    "",
    "*Sobre meu projeto:*",
    data.project.trim(),
    "",
    "Gostaria de receber mais informações e um orçamento.",
  ].join("\n");
}

export function buildWhatsAppUrl(message?: string): string {
  const number = getWhatsAppNumber();
  const base = `https://wa.me/${number}`;
  if (!message || message.trim().length === 0) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteWhatsAppUrl(data: QuoteFormData): string {
  return buildWhatsAppUrl(buildQuoteMessage(data));
}

export function buildGenericWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    "Olá! Tenho interesse em contratar os serviços da Vitrine Bio e gostaria de mais informações."
  );
}
