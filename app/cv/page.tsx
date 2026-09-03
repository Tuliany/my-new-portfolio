import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { cvPath, localeFromAcceptLanguage } from "@/lib/cv";

export default async function CvIndex({
  searchParams,
}: {
  searchParams: Promise<{ download?: string | string[] }>;
}) {
  const params = await searchParams;
  const headerList = await headers();
  const locale = localeFromAcceptLanguage(headerList.get("accept-language"));
  const download = params.download === "1" || params.download?.[0] === "1";

  redirect(cvPath(locale, download));
}
