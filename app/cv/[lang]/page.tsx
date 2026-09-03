import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CvDocument from "@/components/cv-document";
import CvToolbar from "@/components/cv-toolbar";
import {
  cv,
  cvFileName,
  isLocale,
  locales,
  type Locale,
} from "@/lib/cv";
import { profile } from "@/lib/site";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ download?: string | string[] }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const query = await searchParams;
  const download = query.download === "1" || query.download?.[0] === "1";
  const copy = cv[lang];
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${profile.url}/cv/${locale}`]),
  );

  return {
    title: download ? cvFileName(lang).replace(/\.pdf$/, "") : copy.documentTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: `${profile.url}/cv/${lang}`,
      languages,
    },
  };
}

export default async function CvPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ download?: string | string[] }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const query = await searchParams;
  const download = query.download === "1" || query.download?.[0] === "1";
  const locale: Locale = lang;

  return (
    <main className="cv-page min-h-full bg-cream pb-12">
      <CvToolbar locale={locale} download={download} />
      <div className="px-3 pt-8 sm:px-6">
        <div className="cv-frame mx-auto w-full max-w-[210mm] border-4 border-navy shadow-[10px_10px_0_#F05E85]">
          <CvDocument locale={locale} />
        </div>
      </div>
    </main>
  );
}
