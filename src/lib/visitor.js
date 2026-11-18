import { useEffect, useState } from 'react';

// Same endpoint the documented https://freeipapi.com/api/json redirects to,
// called directly to save a round trip on every first visit.
// Set VITE_IP_API_URL to plug your own IP geolocation service. It must return
// at least `{ countryCode: 'FR' }` (freeipapi's shape is supported as-is).
const ENDPOINT =
  import.meta.env.VITE_IP_API_URL || 'https://free.freeipapi.com/api/v1/json';
const CACHE_KEY = 'djamdeen:visitor-geo:v1';
const CACHE_TTL = 30 * 60 * 1000;
const REQUEST_TIMEOUT = 6000;

// Shared across components so one page load only triggers one request.
let memoryCache = null;
let inflight = null;

function deviceTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch {
    return 'UTC';
  }
}

function safeTimeZone(value) {
  if (typeof value !== 'string' || value.length === 0) return deviceTimeZone();
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: value });
    return value;
  } catch {
    return deviceTimeZone();
  }
}

function safeCountryCode(value) {
  if (typeof value !== 'string') return null;
  const code = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) ? code : null;
}

function cleanLabel(value) {
  return typeof value === 'string' && value.trim() !== '' && value.trim() !== '-'
    ? value.trim()
    : null;
}

function normalize(data) {
  return {
    countryCode: safeCountryCode(data?.countryCode),
    countryName: cleanLabel(data?.countryName),
    cityName: cleanLabel(data?.cityName),
    regionName: cleanLabel(data?.regionName),
    timeZone: safeTimeZone(data?.timeZone ?? data?.timeZones?.[0]),
  };
}

function readCache() {
  if (memoryCache && Date.now() - memoryCache.at < CACHE_TTL) return memoryCache.data;

  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (typeof parsed?.at !== 'number' || Date.now() - parsed.at > CACHE_TTL) {
      sessionStorage.removeItem(CACHE_KEY);
      return null;
    }

    memoryCache = parsed;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  const entry = { at: Date.now(), data };
  memoryCache = entry;

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // Storage can be unavailable (private mode, quota): the in-memory cache is enough.
  }
}

async function fetchVisitorGeo(timeout = REQUEST_TIMEOUT) {
  const cached = readCache();
  if (cached) return cached;
  if (inflight) return inflight;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  inflight = (async () => {
    try {
      const response = await fetch(ENDPOINT, {
        signal: controller.signal,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`freeipapi: HTTP ${response.status}`);

      const geo = normalize(await response.json());
      writeCache(geo);
      return geo;
    } finally {
      clearTimeout(timer);
      inflight = null;
    }
  })();

  return inflight;
}

/**
 * Same promise used by the language boot: it reads the session cache first,
 * then calls freeipapi. A custom timeout keeps the first paint short.
 */
export function getVisitorGeo({ timeout = REQUEST_TIMEOUT } = {}) {
  return fetchVisitorGeo(timeout);
}

/** Synchronous cache read, used to pick the language before the first paint. */
export function readCachedVisitorGeo() {
  return readCache();
}

/**
 * Visitor country + time zone, resolved once from the free tier of
 * freeipapi.com. The badge stays hidden and the clock falls back to the
 * device time zone whenever the request fails, so the page never waits on it.
 */
export function useVisitorGeo() {
  const [state, setState] = useState(() => {
    const cached = readCache();
    if (cached) return { status: 'ready', ...cached };

    return {
      status: 'loading',
      countryCode: null,
      countryName: null,
      cityName: null,
      regionName: null,
      timeZone: deviceTimeZone(),
    };
  });

  useEffect(() => {
    if (state.status !== 'loading') return undefined;

    let active = true;
    fetchVisitorGeo()
      .then((geo) => {
        if (active) setState({ status: 'ready', ...geo });
      })
      .catch(() => {
        if (active) setState((previous) => ({ ...previous, status: 'error' }));
      });

    return () => {
      active = false;
    };
    // Runs once: the first render already knows whether a request is needed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
