import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { getSiteUrl, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Vitrine Bio | Criação de Sites Profissionais",
  description:
    "A Vitrine Bio cria sites modernos, estratégicos e personalizados para apresentar sua empresa, fortalecer sua marca e conquistar novas oportunidades. Solicite um orçamento pelo WhatsApp.",
  keywords: [
    "criação de sites",
    "sites profissionais",
    "landing pages",
    "agência digital",
    "Vitrine Bio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE_NAME,
    title: "Vitrine Bio | Criação de Sites Profissionais",
    description:
      "Criamos sites modernos, estratégicos e personalizados para apresentar sua empresa, fortalecer sua marca e conquistar novas oportunidades.",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "Vitrine Bio — Criação de Sites Profissionais" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitrine Bio | Criação de Sites Profissionais",
    description:
      "Sites modernos, estratégicos e personalizados para apresentar sua empresa e conquistar novas oportunidades.",
    images: ["/opengraph.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  slogan: SITE_TAGLINE,
  url: getSiteUrl(),
  description:
    "Agência de criação de sites profissionais. Desenvolvemos sites institucionais, landing pages e sites personalizados.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
