import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { FadeInText, SlideInLeft, SlideUp } from '../../components/ui/Animations.jsx';
import { Facebook, Github, Mail, Twitter } from '../../components/ui/Icons.jsx';

const rowClass =
  'glass-chip glass-interactive flex h-12 w-full items-center gap-3 rounded-xl px-4 text-sm font-medium text-neutral-700 dark:text-neutral-200';

export default function ContactPage() {
  const { content, t } = useI18n();
  const { profile } = content;

  const channels = [
    { label: t('contact.email'), href: `mailto:${profile.email}`, icon: Mail, external: false },
    { label: t('contact.x'), href: profile.links.twitter, icon: Twitter, external: true },
    { label: t('contact.facebook'), href: profile.links.facebook, icon: Facebook, external: true },
    { label: t('contact.github'), href: profile.links.github, icon: Github, external: true },
  ];

  return (
    <SlideUp delay={0.2}>
      <section className="section-lines p-6 text-center xl:grid xl:grid-cols-2 xl:items-center xl:gap-10 xl:p-10 xl:text-start">
        <div>
          <FadeInText delay={0.1}>
            <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 xl:text-3xl dark:text-neutral-50">
              {t('contact.title')}
            </h1>
          </FadeInText>

          <FadeInText delay={0.1}>
            <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-neutral-600 xl:mx-0 dark:text-neutral-400">
              {t('contact.subtitle')}
            </p>
          </FadeInText>
        </div>

        <SlideInLeft delay={0.1}>
          <div className="mx-auto mt-6 flex max-w-sm flex-col gap-2 xl:mx-0 xl:mt-0 xl:max-w-md">
            {channels.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'me noreferrer' } : {})}
                className={rowClass}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="flex-1 text-start">{label}</span>
              </a>
            ))}
          </div>
        </SlideInLeft>
      </section>
    </SlideUp>
  );
}
