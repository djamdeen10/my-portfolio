import { useVisitorGeo } from '../../lib/visitor.js';

function countryLabel(countryCode, fallback) {
  try {
    return new Intl.DisplayNames(['fr'], { type: 'region' }).of(countryCode) ?? fallback;
  } catch {
    return fallback;
  }
}

export function VisitorCountry() {
  const { status, countryCode, countryName, cityName, regionName, timeZone } = useVisitorGeo();

  if (status !== 'ready' || !countryCode) return null;

  const code = countryCode.toLowerCase();
  const place = [cityName ?? regionName, countryLabel(countryCode, countryName)].filter(Boolean).join(', ');

  return (
    <span
      title={place ? `${place} · ${timeZone}` : timeZone}
      className="glass-chip inline-flex h-8 items-center gap-1.5 rounded-full px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600 dark:text-neutral-300"
    >
      <img
        src={`https://flagcdn.com/w40/${code}.png`}
        srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
        alt=""
        width="20"
        height="15"
        loading="lazy"
        decoding="async"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
        className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover ring-1 ring-black/10 dark:ring-white/20"
      />
      <span aria-hidden="true">{countryCode}</span>
      <span className="sr-only">Pays détecté : {countryLabel(countryCode, countryName) ?? countryCode}</span>
    </span>
  );
}
