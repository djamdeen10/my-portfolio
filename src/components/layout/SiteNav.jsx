import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { FadeInText } from '../ui/Animations.jsx';
import { ThemeToggle } from '../ui/Effects.jsx';
import { LanguageSelector } from './LanguageSelector.jsx';
import { VisitorCountry } from './VisitorCountry.jsx';

export function SiteNav({ onNavigate }) {
  const { content, localizedPath } = useI18n();
  const { profile } = content;

  const goHome = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/');
  };

  return (
    <FadeInText>
      <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 text-xs text-neutral-600 dark:text-neutral-300 md:px-6 lg:hidden">
        <a
          href={localizedPath('/')}
          onClick={goHome}
          className="font-semibold text-neutral-900 dark:text-neutral-50"
        >
          {profile.handle}.
        </a>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Reserve the chip's width so the geo lookup never shifts the
              language and theme controls when it resolves. */}
          <span className="flex h-8 w-[60px] items-center justify-end">
            <VisitorCountry />
          </span>
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </nav>
    </FadeInText>
  );
}
