import { profile } from '../../data/content.js';
import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from '../../components/ui/Animations.jsx';
import { TimeCounter, TextShimmer, Typewriter } from '../../components/ui/Effects.jsx';
import { Facebook, Github, Mail, Twitter } from '../../components/ui/Icons.jsx';
import { buttonBase, iconButtonClass, primaryButtonClass } from '../../components/ui/styles.js';

export default function Hero({ onNavigate }) {
  const goToProjects = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/projet');
  };

  return (
    <SlideUp>
      <header id="accueil" className="section-lines p-4 sm:p-5">
        <FadeInText delay={0.1}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <TextShimmer as="p" className="shrink-0 whitespace-nowrap text-xs" duration={2.2} spread={1.2}>
              bonjour, je suis
            </TextShimmer>
            <span className="glass-chip ml-auto inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-0.5">
              <TimeCounter
                timeZone={profile.timeZone}
                title={`Heure chez moi · ${profile.country}`}
                className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400"
              />
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500">
                chez moi
              </span>
            </span>
          </div>
        </FadeInText>

        <div className="mt-3 lg:flex lg:items-start lg:justify-between lg:gap-10">
          <div className="min-w-0 lg:flex-1">
            <SlideInLeft delay={0.2}>
              <div className="flex items-center gap-4">
                <div className="glass-chip shrink-0 rounded-full p-1">
                  <div className="h-[72px] w-[72px] overflow-hidden rounded-full lg:h-[80px] lg:w-[80px]">
                    <img
                      src="/avatar.jpg"
                      alt={profile.avatarAlt}
                      className="h-full w-full scale-105 object-cover"
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-3xl">
                    {profile.name}
                  </h1>
                  <p className="mt-1 text-[13px] font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
                    {profile.role}
                  </p>
                </div>
              </div>
            </SlideInLeft>

            <SlideUp delay={0.3}>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-600 dark:text-neutral-300">
                <Typewriter
                  text={profile.roles}
                  speed={90}
                  waitTime={2000}
                  deleteSpeed={80}
                  className="text-neutral-600 dark:text-neutral-300"
                  cursorChar="|"
                  showCursor
                />
                <span className="text-neutral-400 dark:text-neutral-600">·</span>
                <span>{profile.location}</span>
              </div>
            </SlideUp>
          </div>

          <SlideInRight delay={0.4} className="lg:pt-2">
            <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-4 lg:mt-0 lg:justify-end">
              <a
                href="/projet"
                onClick={goToProjects}
                aria-label="Voir mes projets"
                className={`${buttonBase} ${primaryButtonClass}`}
              >
                Projets
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Envoyer un email"
                className={`${buttonBase} ${iconButtonClass}`}
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir GitHub"
                className={`${buttonBase} ${iconButtonClass}`}
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.links.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir X"
                className={`${buttonBase} ${iconButtonClass}`}
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={profile.links.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir Facebook"
                className={`${buttonBase} ${iconButtonClass}`}
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </SlideInRight>
        </div>
      </header>
    </SlideUp>
  );
}
