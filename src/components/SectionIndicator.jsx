import { useEffect, useState } from 'react';
import { sections } from '../utils/data/sections';

export default function SectionIndicator() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
      {sections.map(section => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            active === section.id
              ? 'bg-indigo-600 scale-125'
              : 'bg-slate-300 dark:bg-slate-600 hover:bg-indigo-400'
          }`}
        />
      ))}
    </div>
  );
}
