import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Handle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Track active section on scroll
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120;

      links.forEach(link => {
        const section = document.querySelector(link.href);
        if (
          section &&
          section.offsetTop <= scrollY &&
          section.offsetTop + section.offsetHeight > scrollY
        ) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white dark:bg-slate-900 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="font-bold text-slate-900 dark:text-white">
          NareshGatala.dev
        </span>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors ${
                  active === link.href
                    ? 'text-indigo-600'
                    : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-slate-600 dark:text-slate-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-600 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-slate-900 dark:border-slate-800">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block ${
                    active === link.href
                      ? 'text-indigo-600'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
