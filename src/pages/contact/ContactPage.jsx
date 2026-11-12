import { profile } from '../../data/content.js';
import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from '../../components/ui/Animations.jsx';
import { Github, Mail, Twitter } from '../../components/ui/Icons.jsx';
import { buttonBase, contactButtonClass, socialButtonClass } from '../../components/ui/styles.js';

export default function ContactPage() {
  return (
    <SlideUp delay={0.2}>
      <section className="section-lines p-6 text-center">
        <FadeInText delay={0.1}>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Travaillons ensemble.
          </h1>
        </FadeInText>

        <FadeInText delay={0.1}>
          <p className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400">
            Une idée, un projet ambitieux ou juste envie d'échanger ? Je suis toujours partant pour
            les conversations qui finissent en prototype.
          </p>
        </FadeInText>

        <SlideInLeft delay={0.1}>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Me contacter par email"
              className={`${buttonBase} ${contactButtonClass}`}
            >
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Me contacter</span>
              </span>
            </a>
          </div>
        </SlideInLeft>

        <SlideInRight delay={0.1}>
          <div className="mt-4 flex items-center justify-center gap-2 text-neutral-600 dark:text-neutral-300 sm:gap-4">
            <a
              href={profile.links.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Ouvrir X"
              className={socialButtonClass}
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={socialButtonClass}
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </SlideInRight>

        <FadeInText delay={0.1}>
          <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
            Ouvert aux collaborations, aux projets cools et aux idées qui réfléchissent.
          </p>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
            Le plus simple : un email ou un DM sur X.
          </p>
        </FadeInText>
      </section>
    </SlideUp>
  );
}
