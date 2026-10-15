const links = [
  { label: 'email', value: 'alanlin3008@gmail.com', href: 'mailto:alanlin3008@gmail.com' },
  { label: 'github', value: 'alanlin12', href: 'https://github.com/alanlin12' },
  { label: 'linkedin', value: 'alanlin12', href: 'https://linkedin.com/in/alanlin12' },
]

export default function Contact() {
  return (
    <div className="mt-12">
      <ul className="mt-6 space-y-2">
        {links.map((link) => (
          <li key={link.label} className="flex gap-4">
            <span className="w-20 text-muted">{link.label}</span>
            <a href={link.href} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-accent">
              {link.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
