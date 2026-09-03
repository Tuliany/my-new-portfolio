import { skills } from "@/lib/site";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-4 py-20"
    >
      <h2 className="text-center text-3xl font-bold tracking-tight">Skills</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-navy/65">
        What I use in production, from LinkedIn and recent roles.
      </p>
      <ul className="mt-10 flex list-none flex-wrap justify-center gap-3 p-0">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-white px-5 py-2.5 text-base font-semibold text-navy shadow-[0_8px_24px_rgba(13,12,29,0.05)]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
