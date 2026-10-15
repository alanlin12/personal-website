import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'experience' },
  { to: '/about', label: 'about' },
  { to: '/contact', label: 'contact' },
]

// Stacked links on the right. NavLink knows if its page is the current one (isActive).
export default function Nav() {
  return (
    <nav className="relative -top-[3px] flex flex-col items-end gap-1">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end // "/" only counts as active on exactly "/", not on /about too
          className={({ isActive }) =>
            isActive ? 'text-accent' : 'transition-colors hover:text-accent'
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}
