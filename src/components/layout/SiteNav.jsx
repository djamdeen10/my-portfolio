import { profile } from '../../data/content.js';
import { FadeInText } from '../ui/Animations.jsx';
import { ThemeToggle } from '../ui/Effects.jsx';
import { VisitorCountry } from './VisitorCountry.jsx';

export function SiteNav({ onNavigate }) {
  const goHome = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/');
  };

  return (
    <FadeInText>
      <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 text-xs text-neutral-600 dark:text-neutral-300 md:px-6 lg:hidden">
        <a
          href="/"
          onClick={goHome}
          className="font-semibold text-neutral-900 dark:text-neutral-50"
        >
          {profile.handle}.
        </a>
        <div className="flex items-center gap-2">
          <VisitorCountry />
          <ThemeToggle />
        </div>
      </nav>
    </FadeInText>
  );
}
