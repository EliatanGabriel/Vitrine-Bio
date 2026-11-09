# Vitrine Bio — Site Institucional

Landing page oficial da **Vitrine Bio**: apresentação premium e orientada à conversão para criação de sites profissionais. Totalmente estática, sem backend, com conversão via WhatsApp.

## Como executar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # serve o build
npm run lint
```

## Configuração obrigatória — WhatsApp

O número do WhatsApp é centralizado em `NEXT_PUBLIC_WHATSAPP_NUMBER`.

1. Copie `.env.example` para `.env.local`
2. Substitua `5511000000000` pelo número oficial da Vitrine Bio (DDI + DDD + número, só números, sem espaços/parênteses/traços)
3. Substitua `NEXT_PUBLIC_SITE_URL` pela URL pública do domínio final

> `5511000000000` é um placeholder intencional para desenvolvimento. Não deve ser publicado.

## Estrutura

- `app/` — layout, página, SEO, sitemap e robots
- `components/` — Header, MobileMenu, HeroSection, AboutSection, ServicesSection, BenefitsSection, ProcessSection, ContactSection, ContactForm, FinalCTA, Footer, WhatsAppButton
- `lib/site.ts` — conteúdo e navegação centralizados
- `lib/whatsapp.ts` — montagem da mensagem e do link wa.me com `encodeURIComponent`

## Formulário

Sem backend. Ao enviar, valida os campos, monta a mensagem organizada e abre `https://wa.me/<número>?text=...` para o visitante concluir o envio no WhatsApp. Nenhuma falsa confirmação de envio é apresentada.
