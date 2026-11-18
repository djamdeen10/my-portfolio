import { useI18n } from '../../i18n/LanguageProvider.jsx';

/**
 * Covers are part of the multilingual content.
 * - The project cover is the AgentMob presentation logo: it is language-neutral
 *   and used as a plain SVG.
 * - The blog cover is re-rendered from `covers.agentmobBlog`, so its headline
 *   and subtitle follow the active language and RTL direction.
 * - The magazine cover is composed from `covers.profVsRed`.
 */
export function CoverArt({ variant = 'agentmob', alt = '', className = '' }) {
  const { content, dir } = useI18n();
  const covers = content.covers ?? {};

  if (variant === 'profVsRed') {
    return <MagazineCover labels={covers.profVsRed} alt={alt} dir={dir} className={className} />;
  }

  if (variant === 'agentmobBlog') {
    return (
      <BlogCover labels={covers.agentmobBlog} alt={alt} dir={dir} className={className} />
    );
  }

  return <ProjectCover alt={alt} className={className} />;
}

function ProjectCover({ alt, className = '' }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-[#09090B] ${className}`}
    >
      <img
        src="/covers/agentmob-cover-presentation.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function BlogCover({ labels, alt, dir, className = '' }) {
  const title = labels?.title ?? 'Pourquoi j’ai construit AgentMob';
  const parts = title.split(/(AgentMob)/g).filter(Boolean);

  return (
    <div
      role="img"
      aria-label={alt}
      dir={dir}
      className={`cover-art relative overflow-hidden bg-[#09090B] text-white ${className}`}
    >
      <div aria-hidden="true" className="cover-blog-grid absolute inset-0" />
      <div aria-hidden="true" className="cover-blog-glow absolute inset-0" />

      <div className="relative flex h-full flex-col p-[6%]">
        <div className="flex items-start justify-between gap-[3%]">
          <div className="flex min-w-0 items-center gap-[2%]" dir="ltr">
            <BlogLogo />
            <span className="cover-blog-wordmark whitespace-nowrap font-semibold tracking-tight">
              <span className="text-white">agent</span>
              <span className="text-[#D946EF]">mob</span>
            </span>
          </div>
          <span className="cover-blog-kicker shrink-0 pt-[0.4%] font-semibold uppercase tracking-[0.24em] text-[#06B6D4]">
            {labels?.kicker ?? 'BLOG'}
          </span>
        </div>

        <div className="mt-[9%] max-w-[52%] text-start">
          <p className="cover-blog-title font-semibold tracking-[-0.03em] text-white">
            {parts.map((part, index) =>
              part === 'AgentMob' ? (
                <span key={index} className="text-[#D946EF]">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              ),
            )}
          </p>
          <p className="cover-blog-subtitle mt-[4%] text-[#A1A1AA]">{labels?.tagline}</p>
        </div>
      </div>

      <TerminalIcon />
    </div>
  );
}

function BlogLogo() {
  return (
    <svg viewBox="0 0 70 70" className="cover-blog-logo shrink-0" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="65" height="65" rx="16" stroke="#D946EF" strokeWidth="4" />
      <path
        d="M20 22 L32 35 L20 48"
        stroke="#D946EF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="38"
        y1="48"
        x2="52"
        y2="48"
        stroke="#06B6D4"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="cover-blog-icon"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="112"
        height="112"
        rx="28"
        stroke="#7C3AED"
        strokeWidth="2.5"
        opacity="0.9"
      />
      <path
        d="M38 38 L62 60 L38 82"
        stroke="#A855F7"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="70"
        y1="82"
        x2="88"
        y2="82"
        stroke="#06B6D4"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MagazineCover({ labels, alt, dir, className = '' }) {
  const safe = labels ?? {};

  return (
    <div
      role="img"
      aria-label={alt}
      dir={dir}
      className={`cover-art cover-magazine relative overflow-hidden bg-[#b9b19c] text-[#17171a] ${className}`}
    >
      <div className="absolute inset-x-0 top-0 grid h-full grid-rows-1 grid-cols-2 gap-[29%] p-[5%] pb-[12%]">
        <MagazineCard
          number="1"
          color="#b3202e"
          name={safe.professorName}
          alias={safe.professorAlias}
          archetype={safe.professorArchetype}
          game={safe.professorGame}
          weapon={safe.professorWeapon}
          labels={safe}
        />
        <MagazineCard
          number="2"
          color="#1f4e8c"
          name={safe.redName}
          alias={safe.redAlias}
          archetype={safe.redArchetype}
          game={safe.redGame}
          weapon={safe.redWeapon}
          labels={safe}
        />
      </div>

      <div
        aria-hidden="true"
        className="cover-stamp whitespace-nowrap border-[0.6cqw] border-[#b3202e] bg-[#b9b19c] px-[2%] py-[0.8%]"
      >
        <span className="cover-duel font-black uppercase tracking-[0.08em] text-[#b3202e]">
          {safe.duel}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t-[1px] border-black/20 bg-[#17171a] px-[4.5%] py-[3.2%] text-[#e4dcc6]">
        <p className="cover-footer-title font-black uppercase leading-none tracking-tight">
          {safe.footerTitle}
        </p>
        <p className="cover-footer-subtitle mt-[1%] font-semibold uppercase tracking-[0.22em] text-[#c9c1a8]">
          {safe.footerSubtitle}
        </p>
      </div>
    </div>
  );
}

function MagazineCard({ number, color, name, alias, archetype, game, weapon, labels }) {
  return (
    <div className="flex min-h-0 flex-col overflow-hidden border-[0.35cqw] border-[#17171a] bg-[#ddd5bf] p-[6%]">
      <p className="cover-mag-kicker font-bold uppercase tracking-[0.24em]" style={{ color }}>
        {String(labels?.dossier ?? 'DOSSIER N°{number}').replace('{number}', number)}
      </p>
      <p className="cover-mag-name mt-[5%] font-black uppercase leading-[0.92]">{name}</p>
      <div className="mt-[5%] flex min-h-0 flex-col gap-[4%] text-start">
        <p className="cover-mag-alias font-semibold leading-snug">{alias}</p>
        <MagazineRow label={labels?.architect} value={archetype} />
        <MagazineRow label={labels?.game} value={game} />
        <MagazineRow label={labels?.weapon} value={weapon} />
      </div>
    </div>
  );
}

function MagazineRow({ label, value }) {
  return (
    <p className="cover-mag-row leading-snug">
      <span className="font-semibold">{label} : </span>
      <span>{value}</span>
    </p>
  );
}
