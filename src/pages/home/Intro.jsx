import { FadeInText } from '../../components/ui/Animations.jsx';

export default function Intro() {
  return (
    <FadeInText delay={0.5}>
      <section className="m-2 mt-4 text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
        <p>
          Dev backend, adepte des nuits calmes, des grosses idées et du code qui marche du premier
          coup.{' '}
          <span className="rounded-md bg-neutral-200/70 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900 dark:bg-white/10 dark:text-neutral-100">
            J'aime les outils utiles et cools — parfois même jolis — et je laisse l'IA faire le gros
            du travail.
          </span>{' '}
          Je construis des trucs qui réfléchissent et je garde le process aussi chill que possible.
        </p>
      </section>
    </FadeInText>
  );
}
