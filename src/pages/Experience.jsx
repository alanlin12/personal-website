// Edit your experience here. Each section is a heading with a list of entries.
// `href` is optional: leave it out and the org name shows as plain text.
const sections = [
  {
    title: 'experience',
    items: [
      {
        text: 'built a pipeline to verify llm exploits for ',
        org: 'NC State',
        href: 'https://www.ncsu.edu',
        sub: 'summer 2026 · node.js, python, codeql',
      },
      {
        text: 'designed and shipped a song-guessing game at ',
        org: 'cil.wtf',
        href: 'https://cil.wtf/',
        sub: 'summer 2026 · react, AI, turso, node.js'
      },
      {
        text: 'built iOS app triggering mechanism for api-key leakages exploits for ',
        org: 'Wake Forest',
        href: 'https://www.wfu.edu',
        sub: 'spring 2026 · gemini, droidrun',
      },
      {
        text: 'tutor and coding instructor for ',
        org: 'STREM HQ',
        href: 'https://www.stremhq.com/',
        sub: 'summer 2025 · python, css, javascript'
      },
    ],
  },
  {
    title: 'leadership',
    items: [
      {
        text: 'deacon code @ ',
        org: 'wfu',
        sub: 'executive and coding instructor',
      },
      {
        text: 'esports organization @ ',
        org: 'wfu',
        sub: 'coordinator on events team'
      },
    ],
  },
]

export default function Experience() {
  return (
    <div className="mt-12 space-y-10">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-base font-bold uppercase tracking-wider text-accent">
            {section.title}
          </h2>
          <ul className="mt-4 space-y-7">
            {section.items.map((item) => (
              <li key={item.org + item.text}>
                <p className="font-medium">
                  {item.text}{' '}
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-accent">
                      {item.org}
                    </a>
                  ) : (
                    item.org
                  )}
                </p>
                <p className="mt-0.5 text-muted">{item.sub}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
