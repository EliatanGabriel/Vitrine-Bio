export const SITE_NAME = "Vitrine Bio";
export const SITE_TAGLINE = "Criação de Sites Profissionais";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url && url.length > 0) return url.replace(/\/$/, "");
  return "https://www.vitrinebio.com.br";
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
] as const;

export const SERVICES = [
  {
    id: "institucional",
    title: "Sites institucionais",
    description:
      "Sites profissionais para apresentar empresas, serviços, diferenciais e informações de contato.",
    icon: "building",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description:
      "Páginas estratégicas desenvolvidas para divulgar produtos, serviços e campanhas, com foco em conversão.",
    icon: "target",
  },
  {
    id: "personalizados",
    title: "Sites personalizados",
    description:
      "Projetos desenvolvidos de acordo com a identidade visual, necessidades e objetivos de cada negócio.",
    icon: "palette",
  },
  {
    id: "modernizacao",
    title: "Modernização de sites",
    description:
      "Atualização visual e melhorias em sites existentes, proporcionando uma experiência mais moderna e organizada.",
    icon: "refresh",
  },
  {
    id: "manutencao",
    title: "Manutenção e suporte",
    description:
      "Apoio para atualizações, correções e melhorias dos sites publicados, conforme o serviço contratado.",
    icon: "shield",
  },
] as const;

export const SERVICE_OPTIONS = [
  "Site institucional",
  "Landing page",
  "Site personalizado",
  "Modernização de site existente",
  "Manutenção de site",
  "Ainda não sei, preciso de orientação",
] as const;

export const BENEFITS = [
  {
    title: "Design personalizado",
    description:
      "Cada projeto considera a identidade e os objetivos do cliente.",
  },
  {
    title: "Experiência responsiva",
    description:
      "Sites preparados para computadores, tablets e celulares.",
  },
  {
    title: "Comunicação direta",
    description:
      "Acompanhamento e contato durante o desenvolvimento.",
  },
  {
    title: "Tecnologia moderna",
    description:
      "Utilização de ferramentas atuais para desenvolver soluções digitais.",
  },
  {
    title: "Foco no cliente",
    description: "Projetos pensados para atender às necessidades reais de cada negócio.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Primeiro contato",
    description:
      "O cliente entra em contato com a Vitrine Bio pelo WhatsApp e explica o que precisa.",
  },
  {
    number: "02",
    title: "Briefing e planejamento",
    description:
      "Entendemos o negócio, os objetivos, os serviços e as necessidades do projeto.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Nossa equipe desenvolve o site com estrutura, conteúdo e identidade visual adequados ao negócio.",
  },
  {
    number: "04",
    title: "Aprovação",
    description:
      "O cliente avalia o projeto e solicita os ajustes necessários, conforme o escopo contratado.",
  },
  {
    number: "05",
    title: "Publicação",
    description:
      "Após a aprovação, realizamos a publicação do site e orientamos o cliente sobre sua entrega.",
  },
] as const;
