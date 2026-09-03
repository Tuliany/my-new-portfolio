import { roles } from "@/lib/site";

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-4xl scroll-mt-24 px-4 py-20"
    >
      <h2 className="mb-10 text-5xl font-black uppercase tracking-tight">
        Work
      </h2>
      <ul className="list-none space-y-10 p-0">
        {roles.map((role) => (
          <li
            key={role.company}
            className="border-4 border-navy bg-white p-6 shadow-[10px_10px_0_#F05E85] sm:p-8"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <a
                href={role.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hit-text text-3xl font-black uppercase tracking-tight text-navy no-underline sm:text-4xl"
              >
                {role.company}
              </a>
              <p className="m-0 font-bold uppercase tracking-widest text-brand">
                {role.dates}
              </p>
            </div>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.2em]">
              {role.title} — {role.location}
            </p>
            <p className="mt-4 max-w-2xl leading-7">{role.summary}</p>
            {role.clients ? (
              <p className="mt-3 text-sm">
                Clients:{" "}
                {role.clients.map((client, index) => (
                  <span key={client.href}>
                    {index > 0 ? " · " : null}
                    <a
                      href={client.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hit-text font-bold underline decoration-2 underline-offset-2"
                    >
                      {client.name}
                    </a>
                  </span>
                ))}
              </p>
            ) : null}
            <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
              {role.stack.map((item) => (
                <li
                  key={item}
                  className="border-2 border-navy bg-cream px-2 py-0.5 text-xs font-bold uppercase tracking-wide"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 mb-0">
              <a
                href={role.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hit-text text-sm font-black uppercase tracking-[0.2em] text-brand no-underline hover:underline"
              >
                Visit site →
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
