import DownloadCv from "@/components/download-cv";
import { profile } from "@/lib/site";

export default function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Hello Tuliany")}`;

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t-4 border-navy bg-brand px-4 py-20 text-white"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="m-0 text-5xl font-black uppercase tracking-tight">
          Say hi
        </h2>
        <p className="mt-4 max-w-md text-lg font-medium leading-7 text-white/90">
          Open to frontend roles. Email is the fastest way to reach me.
        </p>
        <a
          href={mailto}
          className="hit mt-8 inline-block border-4 border-navy bg-white px-5 py-2 text-sm font-black uppercase tracking-widest text-navy no-underline"
        >
          {profile.email}
        </a>
        <ul className="mt-6 mb-0 flex list-none flex-wrap gap-3 p-0">
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hit hit-chip inline-block border-2 border-navy bg-cream px-3 py-1 text-xs font-black uppercase tracking-widest text-navy no-underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hit hit-chip inline-block border-2 border-navy bg-cream px-3 py-1 text-xs font-black uppercase tracking-widest text-navy no-underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <DownloadCv className="hit hit-chip inline-block border-2 border-navy bg-cream px-3 py-1 text-xs font-black uppercase tracking-widest text-navy no-underline">
              Download CV
            </DownloadCv>
          </li>
        </ul>
      </div>
    </section>
  );
}
