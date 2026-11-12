import { profile } from '../../data/content.js';
import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from '../../components/ui/Animations.jsx';
import { TimeCounter, TextShimmer, Typewriter } from '../../components/ui/Effects.jsx';
import { Github, Mail, Twitter } from '../../components/ui/Icons.jsx';
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
          <div className="flex items-center justify-between">
            <TextShimmer as="p" className="text-xs" duration={2.2} spread={1.2}>
              bonjour, je suis
            </TextShimmer>
            <TimeCounter className="glass-chip rounded-full px-2 py-0.5 text-[11px] font-mono text-neutral-500 dark:text-neutral-400" />
          </div>
        </FadeInText>

        <SlideInLeft delay={0.2}>
          <div className="mt-3 flex items-center gap-4">
            <div className="glass-chip shrink-0 rounded-full p-1">
              <div className="h-[72px] w-[72px] overflow-hidden rounded-full">
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

        <SlideInRight delay={0.4}>
          <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-4">
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
              href={profile.links.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Ouvrir X"
              className={`${buttonBase} ${iconButtonClass}`}
            >
              <Twitter className="h-4 w-4" />
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
          </div>
        </SlideInRight>
      </header>
    </SlideUp>
  );
}
