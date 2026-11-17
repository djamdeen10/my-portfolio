import { FadeInText } from '../../components/ui/Animations.jsx';

export default function Intro() {
  return (
    <FadeInText delay={0.5}>
      <section className="m-2 mt-4 text-[13px] leading-6 text-neutral-600 lg:max-w-[72ch] xl:mx-0 xl:mb-0 xl:mt-5 xl:flex xl:h-full xl:flex-col xl:justify-center xl:pr-6 dark:text-neutral-300">
        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Salut 👋</p>
        <p className="mt-2">
          Moi c’est{' '}
          <span className="font-medium text-neutral-900 dark:text-neutral-100">
            Djamal ALIDOU M.
          </span>
          , mais vous pouvez simplement m’appeler Djam Deen. Je suis originaire du Bénin et basé à
          Cotonou.
        </p>
        <p className="mt-3">
          Spécialisé en développement backend, je m’assure que les apps, sites et APIs fonctionnent
          vraiment, tiennent la route et sont sécurisés — pas seulement qu’ils soient beaux.{' '}
          <span className="rounded-md bg-neutral-200/70 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900 dark:bg-white/10 dark:text-neutral-100">
            Et contrairement aux idées reçues sur les devs backend, je sais aussi faire des trucs
            très propres côté design 😏.
          </span>
        </p>
        <p className="mt-3">
          Je suis aussi passionné d’entrepreneuriat et d’IA, que j’utilise au quotidien dans mon
          travail.
        </p>
        <p className="mt-3">
          Mon travail tourne principalement autour de mes propres produits, de projets open source
          et, parfois, de produits pour des particuliers.
        </p>
        <p className="mt-3">
          Je ne construis pas juste pour construire : je construis des solutions à de vrais
          problèmes.
        </p>
      </section>
    </FadeInText>
  );
}
