import Image from "next/image";
import { profile } from "@/lib/site";

export default function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Hello Tuliany")}`;

  return (
    <section
      id="contact"
      className="mx-auto flex w-full max-w-5xl scroll-mt-24 flex-col items-center px-4 py-20 pb-28"
    >
      <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
      <div className="mt-10 flex w-full max-w-3xl flex-col items-center gap-8 rounded-3xl bg-white p-8 shadow-[0_18px_50px_rgba(13,12,29,0.08)] sm:flex-row sm:justify-between sm:px-12">
        <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full bg-navy ring-4 ring-brand/25">
          <Image
            src="/assets/emojis/contact.png"
            alt="Tuliany popping out of an envelope"
            width={300}
            height={300}
            className="h-full w-full scale-125 object-cover object-center"
          />
        </div>
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <a
            href={mailto}
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-navy/60 no-underline hover:text-brand"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-navy/60 no-underline hover:text-brand"
          >
            GitHub
          </a>
          <a
            href={profile.cv}
            download="Tuliany-Grande-CV.pdf"
            className="text-sm font-medium text-navy/60 no-underline hover:text-brand"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
