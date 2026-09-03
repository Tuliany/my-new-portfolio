import Image from "next/image";
import { profile } from "@/lib/site";

const secondaryLinks = [
  { href: profile.linkedin, label: "LinkedIn", external: true },
  { href: profile.github, label: "GitHub", external: true },
] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center px-4 py-24 lg:pt-32"
    >
      <div className="flex w-full max-w-3xl flex-col items-center gap-8 rounded-3xl bg-white px-8 py-10 shadow-[0_18px_50px_rgba(13,12,29,0.08)] sm:flex-row sm:items-center sm:gap-10 sm:px-12">
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full bg-navy ring-4 ring-brand/25">
          <Image
            src="/assets/emojis/sunglasses.png"
            alt="Tuliany in sunglasses"
            width={200}
            height={200}
            className="h-full w-full scale-150 object-cover object-[20%_80%]"
            priority
          />
        </div>
        <div className="text-center sm:text-left">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            {profile.title}
          </p>
          <h1 className="mt-3 mb-0 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            I am <span className="text-brand">Tuliany</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-navy/75">
            {profile.headline}
          </p>
          <p className="mt-2 text-sm text-navy/50">{profile.location}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <a
              href={profile.cv}
              download="Tuliany-Grande-CV.pdf"
              className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy no-underline transition-colors hover:border-brand hover:text-brand"
            >
              Download CV
            </a>
          </div>
          <ul className="mt-5 mb-0 flex list-none justify-center gap-5 p-0 sm:justify-start">
            {secondaryLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-navy/55 no-underline hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
