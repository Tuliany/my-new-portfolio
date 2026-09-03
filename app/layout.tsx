import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/navbar";
import { profile } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: `${profile.name} | ${profile.title}`,
  description: `${profile.name} — ${profile.headline} Based in ${profile.location}.`,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: profile.url,
    locale: "en_US",
    siteName: profile.name,
    title: `${profile.name} | ${profile.title}`,
    description: `${profile.name} — ${profile.headline} Based in ${profile.location}.`,
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | ${profile.title}`,
    description: `${profile.name} — ${profile.headline} Based in ${profile.location}.`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.url,
  jobTitle: profile.title,
  email: profile.email,
  description: profile.headline,
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Next.js", "React", "TypeScript", "Frontend development"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full scroll-smooth antialiased`}>
      <body className={`${outfit.className} min-h-full bg-cream text-navy`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
