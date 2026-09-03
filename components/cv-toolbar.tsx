"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  cv,
  cvFileName,
  cvPath,
  locales,
  localeNames,
  type Locale,
} from "@/lib/cv";

export default function CvToolbar({
  locale,
  download,
}: {
  locale: Locale;
  download: boolean;
}) {
  const copy = cv[locale];

  useEffect(() => {
    document.title = download ? cvFileName(locale).replace(/\.pdf$/, "") : copy.documentTitle;
    document.documentElement.lang = copy.htmlLang;
  }, [copy.documentTitle, copy.htmlLang, download, locale]);

  useEffect(() => {
    if (!download) return;
    const timer = window.setTimeout(() => window.print(), 500);
    return () => window.clearTimeout(timer);
  }, [download]);

  return (
    <div className="cv-toolbar print:hidden sticky top-0 z-10 border-b-4 border-navy bg-brand px-4 py-3 text-white">
      <div className="mx-auto flex w-full max-w-[210mm] flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="text-xs font-black tracking-[0.2em] text-white uppercase no-underline hover:text-navy"
        >
          ← {copy.back}
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <p className="m-0 hidden text-[10px] font-black tracking-[0.2em] uppercase sm:block">
            {copy.language}
          </p>
          <ul className="m-0 flex list-none gap-1 p-0">
            {locales.map((item) => (
              <li key={item}>
                <Link
                  href={cvPath(item)}
                  hrefLang={item}
                  className={
                    item === locale
                      ? "inline-block border-2 border-navy bg-navy px-2 py-1 text-[10px] font-black tracking-widest text-white uppercase no-underline"
                      : "inline-block border-2 border-navy bg-white px-2 py-1 text-[10px] font-black tracking-widest text-navy uppercase no-underline"
                  }
                >
                  <span className="uppercase sm:hidden">{item}</span>
                  <span className="hidden sm:inline">{localeNames[item]}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => window.print()}
            className="hit border-2 border-navy bg-white px-3 py-1 text-[10px] font-black tracking-widest text-navy uppercase"
          >
            {copy.savePdf}
          </button>
        </div>
      </div>
    </div>
  );
}
