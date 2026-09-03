import { profile } from "@/lib/site";

function Zigzag() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 56 20"
      className="mb-1 h-5 w-14 shrink-0"
    >
      <path
        d="M2 16 L14 4 L26 16 L38 4 L50 16"
        fill="none"
        stroke="#0d0c1d"
        strokeWidth="6"
        strokeLinejoin="miter"
      />
      <path
        d="M2 16 L14 4 L26 16 L38 4 L50 16"
        fill="none"
        stroke="#f05e85"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-4xl scroll-mt-24 px-4 py-20"
    >
      <div className="flex items-end gap-3">
        <Zigzag />
        <h2 className="m-0 text-5xl font-black uppercase tracking-tight">
          About
        </h2>
      </div>
      <div className="mt-5 h-1 w-28 bg-navy" />
      <div className="mt-8 max-w-2xl space-y-4 text-lg leading-8">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
