import Image from "next/image";
import { profile } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-24 items-center justify-center px-4 py-24 lg:pt-32"
    >
      <div className="relative w-full max-w-3xl border-4 border-navy bg-white p-6 shadow-[10px_10px_0_#F05E85] sm:p-10">
        <span className="absolute -top-4 -left-3 bg-brand px-3 py-1 text-xs font-black tracking-[0.28em] text-white uppercase">
          {profile.title}
        </span>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
          <div className="relative h-44 w-44 shrink-0 overflow-hidden border-4 border-navy bg-navy">
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
            <h1 className="m-0 text-4xl leading-none font-black tracking-tight uppercase sm:text-5xl">
              I am <span className="text-brand">Tuliany</span>
            </h1>
            <p className="mt-4 max-w-md text-base font-medium leading-7">
              {profile.headline}
            </p>
            <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-brand">
              Open to frontend roles · {profile.location}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a
                href={`mailto:${profile.email}`}
                className="hit border-4 border-navy bg-brand px-5 py-2 text-sm font-black uppercase tracking-widest text-white no-underline"
              >
                Email me
              </a>
              <a
                href={profile.cv}
                download="Tuliany-Grande-CV.pdf"
                className="hit hit-fill border-4 border-navy bg-white px-5 py-2 text-sm font-black uppercase tracking-widest text-navy no-underline"
              >
                Download CV
              </a>
            </div>
            <ul className="mt-5 mb-0 flex list-none justify-center gap-3 p-0 sm:justify-start">
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
