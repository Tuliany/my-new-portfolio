"use client";

import { useEffect, useState } from "react";
import { cvPath, localeFromNavigator } from "@/lib/cv";

export default function DownloadCv({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const [href, setHref] = useState("/cv?download=1");

  useEffect(() => {
    setHref(cvPath(localeFromNavigator(navigator.languages), true));
  }, []);

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
