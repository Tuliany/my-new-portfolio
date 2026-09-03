import { cv, cvSkills, type Locale } from "@/lib/cv";
import { profile } from "@/lib/site";

export default function CvDocument({ locale }: { locale: Locale }) {
  const copy = cv[locale];

  return (
    <article
      lang={copy.htmlLang}
      className="cv-sheet mx-auto w-full max-w-[210mm] bg-white text-navy"
    >
      <header className="relative border-b-4 border-navy px-6 py-6 sm:px-8">
        <span className="absolute -top-3 left-6 bg-brand px-3 py-1 text-[10px] font-black tracking-[0.28em] text-white uppercase">
          {copy.badge}
        </span>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="m-0 text-xs font-black tracking-[0.28em] text-brand uppercase">
              {profile.location}
            </p>
            <h1 className="mt-1 mb-0 text-4xl leading-none font-black tracking-tight uppercase sm:text-5xl">
              Tuliany
              <span className="text-brand"> Grande</span>
            </h1>
          </div>
          <ul className="m-0 flex list-none flex-col gap-0.5 p-0 text-sm font-medium sm:text-right">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="text-navy no-underline hover:text-brand"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.url}
                className="text-navy no-underline hover:text-brand"
              >
                tuliany.com
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                className="text-navy no-underline hover:text-brand"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                href={profile.github}
                className="text-navy no-underline hover:text-brand"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </header>

      <p className="m-0 border-b-4 border-navy bg-cream px-6 py-4 text-[15px] leading-6 sm:px-8">
        {copy.summary}
      </p>

      <div className="grid gap-0 sm:grid-cols-[minmax(0,1.6fr)_minmax(12rem,0.9fr)]">
        <section className="px-6 py-5 sm:border-r-4 sm:border-navy sm:px-8">
          <h2 className="mt-0 mb-4 text-xs font-black tracking-[0.28em] text-brand uppercase">
            {copy.experience}
          </h2>
          <ol className="m-0 flex list-none flex-col gap-4 p-0">
            {copy.roles.map((role) => (
              <li key={role.company} className="cv-role">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                  <a
                    href={role.href}
                    className="text-lg leading-tight font-black tracking-tight text-navy uppercase no-underline hover:text-brand"
                  >
                    {role.company}
                  </a>
                  <p className="m-0 text-[11px] font-black tracking-widest text-brand uppercase">
                    {role.dates}
                  </p>
                </div>
                <p className="mt-0.5 mb-0 text-[11px] font-black tracking-[0.16em] uppercase">
                  {role.title} — {role.location}
                </p>
                <p className="mt-1.5 mb-0 text-[13px] leading-5">{role.summary}</p>
                {role.clients ? (
                  <p className="mt-1 mb-0 text-xs">
                    {copy.clients}: {role.clients}
                  </p>
                ) : null}
                <ul className="mt-1.5 mb-0 flex list-none flex-wrap gap-1 p-0">
                  {role.stack.map((item) => (
                    <li
                      key={item}
                      className="border border-navy px-1.5 py-px text-[10px] font-bold tracking-wide uppercase"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <aside className="border-t-4 border-navy bg-cream px-6 py-5 sm:border-t-0 sm:px-6">
          <section>
            <h2 className="mt-0 mb-3 text-xs font-black tracking-[0.28em] text-brand uppercase">
              {copy.skills}
            </h2>
            <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
              {cvSkills.map((skill) => (
                <li
                  key={skill}
                  className="border-2 border-navy bg-white px-2 py-0.5 text-[10px] font-black tracking-wide uppercase"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="mt-0 mb-3 text-xs font-black tracking-[0.28em] text-brand uppercase">
              {copy.languages}
            </h2>
            <ul className="m-0 flex list-none flex-col gap-1 p-0 text-sm">
              {copy.languageList.map((item) => (
                <li key={item.name} className="flex justify-between gap-3">
                  <span className="font-bold">{item.name}</span>
                  <span className="text-right text-xs tracking-wide uppercase">
                    {item.level}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="mt-0 mb-3 text-xs font-black tracking-[0.28em] text-brand uppercase">
              {copy.education}
            </h2>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {copy.educationList.map((item) => (
                <li key={item.school}>
                  <p className="m-0 text-sm font-black uppercase">{item.school}</p>
                  <p className="m-0 text-xs leading-4">{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="mt-0 mb-3 text-xs font-black tracking-[0.28em] text-brand uppercase">
              {copy.earlier}
            </h2>
            <p className="m-0 text-[13px] leading-5">{copy.earlierText}</p>
          </section>
        </aside>
      </div>
    </article>
  );
}
