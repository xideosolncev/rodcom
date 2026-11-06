import { NavLink } from 'react-router-dom';

// Single source of truth for navigation entries.
const LINKS = [
  { to: '/news', label: 'News', icon: '📰' },
  { to: '/members', label: 'Group Members', icon: '🧸' },
  { to: '/fund', label: 'Money Fund', icon: '💰' },
];

/** Sticky, frosted-glass top navigation bar. NavLink adds the "active" class automatically. */
export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <span className="navbar__brand">🌤️ Sunny Group</span>
        <ul className="navbar__links">
          {LINKS.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink to={to} className="navbar__link">
                <span aria-hidden="true">{icon}</span> {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
