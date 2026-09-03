import Image from "next/image";
import { profile } from "@/lib/site";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex w-full max-w-5xl scroll-mt-24 flex-col items-center px-4 py-20"
    >
      <div className="overflow-hidden rounded-3xl shadow-[0_18px_50px_rgba(13,12,29,0.08)]">
        <Image
          src="/assets/images/frontend.png"
          alt="Tuliany, frontend developer"
          width={2500}
          height={300}
          className="h-auto w-full"
        />
      </div>
      <h2 className="mt-12 text-3xl font-bold tracking-tight">About</h2>
      <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-navy/80">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
