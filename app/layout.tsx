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
  title: `${profile.name} | ${profile.title}`,
  description: profile.headline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full scroll-smooth antialiased`}>
      <body className={`${outfit.className} min-h-full bg-cream text-navy`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
