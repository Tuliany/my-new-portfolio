import { profile, skills } from "@/lib/site";

export const locales = ["en", "sv", "es", "pt"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  sv: "Svenska",
  es: "Español",
  pt: "Português",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return "en";

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qualityParam = params.find((param) => param.trim().startsWith("q="));
      const quality = qualityParam ? Number(qualityParam.trim().slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), quality: Number.isNaN(quality) ? 0 : quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return "en";
}

export function localeFromNavigator(languages: readonly string[]): Locale {
  for (const language of languages) {
    const base = language.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }
  return "en";
}

export function cvPath(locale: Locale, download = false) {
  return download ? `/cv/${locale}?download=1` : `/cv/${locale}`;
}

export function cvFileName(locale: Locale) {
  return locale === "en"
    ? "Tuliany-Grande-CV.pdf"
    : `Tuliany-Grande-CV-${locale.toUpperCase()}.pdf`;
}

type CvRole = {
  company: string;
  href: string;
  title: string;
  dates: string;
  location: string;
  summary: string;
  stack: string[];
  clients?: string;
};

type CvCopy = {
  htmlLang: string;
  documentTitle: string;
  metaDescription: string;
  badge: string;
  summary: string;
  experience: string;
  skills: string;
  languages: string;
  education: string;
  earlier: string;
  clients: string;
  back: string;
  savePdf: string;
  language: string;
  roles: CvRole[];
  languageList: { name: string; level: string }[];
  educationList: { school: string; detail: string }[];
  earlierText: string;
};

export const cv: Record<Locale, CvCopy> = {
  en: {
    htmlLang: "en",
    documentTitle: `${profile.name} — CV`,
    metaDescription: `${profile.name}, frontend developer in Next.js, React, and TypeScript. Based in Marbella and Stockholm.`,
    badge: "Frontend Developer",
    summary:
      "I build product-facing web apps with Next.js, React, TypeScript, and Tailwind. Clear UI, solid API integration, and shipping in an agile team — with a client-facing, get-it-done mindset from real estate and running my own company.",
    experience: "Experience",
    skills: "Skills",
    languages: "Languages",
    education: "Education",
    earlier: "Earlier",
    clients: "Clients",
    back: "Back to site",
    savePdf: "Save as PDF",
    language: "Language",
    roles: [
      {
        company: "OR Rent",
        href: "https://or-rent-lwiy.vercel.app/",
        title: "Frontend Developer",
        dates: "2026",
        location: "Sweden",
        summary:
          "Built the live site for corporate housing across Sweden — a Next.js marketing site for long-term project accommodation.",
        stack: ["Next.js", "TypeScript", "React", "Tailwind"],
      },
      {
        company: "MedHelp Care",
        href: "https://medhelp.se",
        title: "Frontend Developer",
        dates: "Apr 2024 – 2026",
        location: "Sweden",
        summary:
          "Frontend on MedHelp Care’s health platform — sickness reporting, rehabilitation, and absence insights for employers.",
        stack: ["React", "TypeScript", "Redux", "Jest", "CSS"],
      },
      {
        company: "amaceit",
        href: "https://www.amaceit.se",
        title: "Frontend Developer",
        dates: "Oct 2022 – Mar 2024",
        location: "Stockholm",
        summary:
          "Consultant on two public-sector products: community housing for GotlandsHem, and system integrations for FMV.",
        stack: ["Next.js", "Tailwind", "Umbraco", "Azure", "GitLab", "CI/CD"],
        clients: "GotlandsHem · FMV",
      },
      {
        company: "Campcation",
        href: "https://www.campcation.com",
        title: "Frontend Developer",
        dates: "Dec 2021 – Jun 2022",
        location: "Stockholm",
        summary:
          "Built product and platform features for a camping booking site — the Airbnb-style product for campsites and motorhome pitches.",
        stack: ["React", "Gatsby", "AWS Amplify", "DynamoDB"],
      },
      {
        company: "Zettle by PayPal",
        href: "https://www.zettle.com",
        title: "Frontend Developer intern",
        dates: "Nov 2020 – May 2021",
        location: "Stockholm",
        summary:
          "Built Alexandria, an internal data catalog on the Google Cloud Data Catalog API, so teams could find, inventory, and reuse data assets faster.",
        stack: ["React", "Next.js", "TypeScript", "Node.js"],
      },
    ],
    languageList: [
      { name: "Portuguese", level: "Native" },
      { name: "Swedish", level: "Native" },
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Working" },
    ],
    educationList: [
      { school: "Chas Academy", detail: "Fullstack developer · 2020–2022" },
      { school: "Technigo", detail: "Frontend developer · 2020" },
      { school: "SLU", detail: "Real estate broker exam · 2011–2013" },
    ],
    earlierText:
      "Real estate agent at Fastighetsbyrån, founder of Rio Ambassadors, and host of Inspodden — a top-100 Swedish personal-development podcast.",
  },
  sv: {
    htmlLang: "sv",
    documentTitle: `${profile.name} — CV`,
    metaDescription: `${profile.name}, frontendutvecklare inom Next.js, React och TypeScript. Baserad i Marbella och Stockholm.`,
    badge: "Frontendutvecklare",
    summary:
      "Jag bygger produktnära webbappar med Next.js, React, TypeScript och Tailwind. Tydlig UI, stabil API-integration och leverans i ett agilt team — med ett kundnära, genomförande-fokus från mäklarjobb och eget bolag.",
    experience: "Erfarenhet",
    skills: "Kompetenser",
    languages: "Språk",
    education: "Utbildning",
    earlier: "Tidigare",
    clients: "Kunder",
    back: "Tillbaka till sajten",
    savePdf: "Spara som PDF",
    language: "Språk",
    roles: [
      {
        company: "OR Rent",
        href: "https://or-rent-lwiy.vercel.app/",
        title: "Frontendutvecklare",
        dates: "2026",
        location: "Sverige",
        summary:
          "Byggde den live sajten för företagsboende i Sverige — en Next.js-marknadssajt för långsiktigt projektboende.",
        stack: ["Next.js", "TypeScript", "React", "Tailwind"],
      },
      {
        company: "MedHelp Care",
        href: "https://medhelp.se",
        title: "Frontendutvecklare",
        dates: "apr 2024 – 2026",
        location: "Sverige",
        summary:
          "Frontend på MedHelp Cares hälsoplattform — sjukrapportering, rehabilitering och frånvaroinsikter för arbetsgivare.",
        stack: ["React", "TypeScript", "Redux", "Jest", "CSS"],
      },
      {
        company: "amaceit",
        href: "https://www.amaceit.se",
        title: "Frontendutvecklare",
        dates: "okt 2022 – mar 2024",
        location: "Stockholm",
        summary:
          "Konsult på två offentliga produkter: boende för GotlandsHem och systemintegrationer för FMV.",
        stack: ["Next.js", "Tailwind", "Umbraco", "Azure", "GitLab", "CI/CD"],
        clients: "GotlandsHem · FMV",
      },
      {
        company: "Campcation",
        href: "https://www.campcation.com",
        title: "Frontendutvecklare",
        dates: "dec 2021 – jun 2022",
        location: "Stockholm",
        summary:
          "Byggde synliga och bakomliggande funktioner för en campingbokningsplattform — Airbnbs motsvarighet för campingar och ställplatser.",
        stack: ["React", "Gatsby", "AWS Amplify", "DynamoDB"],
      },
      {
        company: "Zettle by PayPal",
        href: "https://www.zettle.com",
        title: "Frontendutvecklare, praktik",
        dates: "nov 2020 – maj 2021",
        location: "Stockholm",
        summary:
          "Byggde Alexandria, en intern datakatalog på Google Cloud Data Catalog API, så att team snabbare kunde hitta, inventera och återanvända data.",
        stack: ["React", "Next.js", "TypeScript", "Node.js"],
      },
    ],
    languageList: [
      { name: "Portugisiska", level: "Modersmål" },
      { name: "Svenska", level: "Modersmål" },
      { name: "Engelska", level: "Modersmål" },
      { name: "Spanska", level: "Yrkesmässig grund" },
    ],
    educationList: [
      { school: "Chas Academy", detail: "Fullstackutvecklare · 2020–2022" },
      { school: "Technigo", detail: "Frontendutvecklare · 2020" },
      { school: "SLU", detail: "Fastighetsmäklarexamen · 2011–2013" },
    ],
    earlierText:
      "Fastighetsmäklare på Fastighetsbyrån, grundare av Rio Ambassadors och programledare för Inspodden — en av Sveriges 100 främsta poddar inom personlig utveckling.",
  },
  es: {
    htmlLang: "es",
    documentTitle: `${profile.name} — CV`,
    metaDescription: `${profile.name}, desarrolladora frontend en Next.js, React y TypeScript. Entre Marbella y Estocolmo.`,
    badge: "Desarrolladora frontend",
    summary:
      "Construyo apps de producto con Next.js, React, TypeScript y Tailwind. UI clara, integración sólida de APIs y entrega en un equipo ágil — con un enfoque de cliente y de hacer que las cosas pasen, de inmobiliaria y de haber tenido empresa propia.",
    experience: "Experiencia",
    skills: "Habilidades",
    languages: "Idiomas",
    education: "Formación",
    earlier: "Antes",
    clients: "Clientes",
    back: "Volver al sitio",
    savePdf: "Guardar como PDF",
    language: "Idioma",
    roles: [
      {
        company: "OR Rent",
        href: "https://or-rent-lwiy.vercel.app/",
        title: "Desarrolladora frontend",
        dates: "2026",
        location: "Suecia",
        summary:
          "Construí el sitio en producción para alojamiento corporativo en Suecia — un site de Next.js para vivienda de larga duración en proyectos.",
        stack: ["Next.js", "TypeScript", "React", "Tailwind"],
      },
      {
        company: "MedHelp Care",
        href: "https://medhelp.se",
        title: "Desarrolladora frontend",
        dates: "abr. 2024 – 2026",
        location: "Suecia",
        summary:
          "Frontend en la plataforma de salud de MedHelp Care — partes de baja, rehabilitación e insights de ausencias para empresas.",
        stack: ["React", "TypeScript", "Redux", "Jest", "CSS"],
      },
      {
        company: "amaceit",
        href: "https://www.amaceit.se",
        title: "Desarrolladora frontend",
        dates: "oct. 2022 – mar. 2024",
        location: "Estocolmo",
        summary:
          "Consultora en dos productos del sector público: vivienda comunitaria para GotlandsHem e integraciones de sistemas para FMV.",
        stack: ["Next.js", "Tailwind", "Umbraco", "Azure", "GitLab", "CI/CD"],
        clients: "GotlandsHem · FMV",
      },
      {
        company: "Campcation",
        href: "https://www.campcation.com",
        title: "Desarrolladora frontend",
        dates: "dic. 2021 – jun. 2022",
        location: "Estocolmo",
        summary:
          "Desarrollé funciones de producto y de plataforma para un buscador de camping — el producto tipo Airbnb para campings y áreas de autocaravanas.",
        stack: ["React", "Gatsby", "AWS Amplify", "DynamoDB"],
      },
      {
        company: "Zettle by PayPal",
        href: "https://www.zettle.com",
        title: "Desarrolladora frontend (prácticas)",
        dates: "nov. 2020 – may. 2021",
        location: "Estocolmo",
        summary:
          "Construí Alexandria, un catálogo de datos interno sobre la API de Google Cloud Data Catalog, para que los equipos encontraran, inventariaran y reutilizaran datos más rápido.",
        stack: ["React", "Next.js", "TypeScript", "Node.js"],
      },
    ],
    languageList: [
      { name: "Portugués", level: "Nativo" },
      { name: "Sueco", level: "Nativo" },
      { name: "Inglés", level: "Nativo" },
      { name: "Español", level: "Nivel laboral" },
    ],
    educationList: [
      { school: "Chas Academy", detail: "Desarrolladora fullstack · 2020–2022" },
      { school: "Technigo", detail: "Desarrolladora frontend · 2020" },
      { school: "SLU", detail: "Título de agente inmobiliaria · 2011–2013" },
    ],
    earlierText:
      "Agente inmobiliaria en Fastighetsbyrån, fundadora de Rio Ambassadors y presentadora de Inspodden, un podcast sueco de desarrollo personal entre los 100 más escuchados.",
  },
  pt: {
    htmlLang: "pt",
    documentTitle: `${profile.name} — CV`,
    metaDescription: `${profile.name}, desenvolvedora frontend em Next.js, React e TypeScript. Entre Marbella e Estocolmo.`,
    badge: "Desenvolvedora frontend",
    summary:
      "Construo apps de produto com Next.js, React, TypeScript e Tailwind. UI clara, integração sólida de APIs e entrega em um time ágil — com mentalidade de cliente e de fazer acontecer, do mercado imobiliário e de ter tido a própria empresa.",
    experience: "Experiência",
    skills: "Competências",
    languages: "Idiomas",
    education: "Formação",
    earlier: "Antes",
    clients: "Clientes",
    back: "Voltar ao site",
    savePdf: "Salvar como PDF",
    language: "Idioma",
    roles: [
      {
        company: "OR Rent",
        href: "https://or-rent-lwiy.vercel.app/",
        title: "Desenvolvedora frontend",
        dates: "2026",
        location: "Suécia",
        summary:
          "Construí o site no ar para moradia corporativa na Suécia — um site Next.js para acomodação de longa duração em projetos.",
        stack: ["Next.js", "TypeScript", "React", "Tailwind"],
      },
      {
        company: "MedHelp Care",
        href: "https://medhelp.se",
        title: "Desenvolvedora frontend",
        dates: "abr. 2024 – 2026",
        location: "Suécia",
        summary:
          "Frontend na plataforma de saúde da MedHelp Care — atestados, reabilitação e insights de ausência para empregadores.",
        stack: ["React", "TypeScript", "Redux", "Jest", "CSS"],
      },
      {
        company: "amaceit",
        href: "https://www.amaceit.se",
        title: "Desenvolvedora frontend",
        dates: "out. 2022 – mar. 2024",
        location: "Estocolmo",
        summary:
          "Consultora em dois produtos do setor público: habitação comunitária para a GotlandsHem e integrações de sistemas para a FMV.",
        stack: ["Next.js", "Tailwind", "Umbraco", "Azure", "GitLab", "CI/CD"],
        clients: "GotlandsHem · FMV",
      },
      {
        company: "Campcation",
        href: "https://www.campcation.com",
        title: "Desenvolvedora frontend",
        dates: "dez. 2021 – jun. 2022",
        location: "Estocolmo",
        summary:
          "Desenvolvi funcionalidades de produto e de plataforma para um site de reservas de camping — o produto estilo Airbnb para campings e áreas de motorhome.",
        stack: ["React", "Gatsby", "AWS Amplify", "DynamoDB"],
      },
      {
        company: "Zettle by PayPal",
        href: "https://www.zettle.com",
        title: "Desenvolvedora frontend (estágio)",
        dates: "nov. 2020 – mai. 2021",
        location: "Estocolmo",
        summary:
          "Construí a Alexandria, um catálogo de dados interno sobre a API do Google Cloud Data Catalog, para que os times encontrassem, inventariassem e reutilizassem dados mais rápido.",
        stack: ["React", "Next.js", "TypeScript", "Node.js"],
      },
    ],
    languageList: [
      { name: "Português", level: "Nativo" },
      { name: "Sueco", level: "Nativo" },
      { name: "Inglês", level: "Nativo" },
      { name: "Espanhol", level: "Nível profissional básico" },
    ],
    educationList: [
      { school: "Chas Academy", detail: "Desenvolvedora fullstack · 2020–2022" },
      { school: "Technigo", detail: "Desenvolvedora frontend · 2020" },
      { school: "SLU", detail: "Exame de corretora de imóveis · 2011–2013" },
    ],
    earlierText:
      "Corretora de imóveis na Fastighetsbyrån, fundadora da Rio Ambassadors e apresentadora do Inspodden — um podcast sueco de desenvolvimento pessoal entre os 100 mais ouvidos.",
  },
};

export const cvSkills = skills;
