import { skills } from "@/lib/site";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-4xl scroll-mt-24 px-4 py-20"
    >
      <h2 className="text-5xl font-black uppercase tracking-tight">Skills</h2>
      <p className="mt-3 max-w-xl font-medium">
        What I use in production, from LinkedIn and recent roles.
      </p>
      <ul className="mt-10 flex list-none flex-wrap gap-3 p-0">
        {skills.map((skill) => (
          <li
            key={skill}
            className="border-2 border-navy bg-white px-4 py-2 text-sm font-black uppercase tracking-wide"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
