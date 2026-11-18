// Country (ISO 3166-1 alpha-2) → portfolio language.
// Generated from pays_langues.json. Keep in sync when the mapping changes.
export const COUNTRY_LANGUAGE = {
  "AF": "en", "ZA": "en", "AL": "en", "DZ": "ar", "DE": "en", "AD": "es", "AO": "pt",
  "AG": "en", "SA": "ar", "AR": "es", "AM": "ru", "AU": "en", "AT": "en", "AZ": "ru",
  "BS": "en", "BH": "ar", "BD": "en", "BB": "en", "BE": "fr", "BZ": "en", "BJ": "fr",
  "BT": "en", "BY": "ru", "MM": "en", "BO": "es", "BA": "en", "BW": "en", "BR": "pt",
  "BN": "en", "BG": "en", "BF": "fr", "BI": "fr", "KH": "en", "CM": "fr", "CA": "en",
  "CV": "pt", "CF": "fr", "CL": "es", "CN": "zh", "CY": "en", "CO": "es", "KM": "fr",
  "CG": "fr", "CD": "fr", "KP": "en", "KR": "en", "CR": "es", "CI": "fr", "HR": "en",
  "CU": "es", "DK": "en", "DJ": "fr", "DM": "en", "EG": "ar", "AE": "ar", "EC": "es",
  "ER": "ar", "ES": "es", "EE": "en", "SZ": "en", "US": "en", "ET": "en", "FJ": "en",
  "FI": "en", "FR": "fr", "GA": "fr", "GM": "en", "GE": "en", "GH": "en", "GR": "en",
  "GD": "en", "GT": "es", "GN": "fr", "GW": "pt", "GQ": "es", "GY": "en", "HT": "fr",
  "HN": "es", "HU": "en", "MH": "en", "SB": "en", "IN": "en", "ID": "en", "IQ": "ar",
  "IR": "en", "IE": "en", "IS": "en", "IL": "en", "IT": "en", "JM": "en", "JP": "ja",
  "JO": "ar", "KZ": "ru", "KE": "en", "KG": "ru", "KI": "en", "XK": "en", "KW": "ar",
  "LA": "en", "LS": "en", "LV": "en", "LB": "ar", "LR": "en", "LY": "ar", "LI": "en",
  "LT": "en", "LU": "fr", "MK": "en", "MG": "fr", "MY": "en", "MW": "en", "MV": "en",
  "ML": "fr", "MT": "en", "MA": "ar", "MU": "en", "MR": "ar", "MX": "es", "FM": "en",
  "MD": "ru", "MC": "fr", "MN": "en", "ME": "en", "MZ": "pt", "NA": "en", "NR": "en",
  "NP": "en", "NI": "es", "NE": "fr", "NG": "en", "NO": "en", "NZ": "en", "OM": "ar",
  "UG": "en", "UZ": "ru", "PK": "en", "PW": "en", "PS": "ar", "PA": "es", "PG": "en",
  "PY": "es", "NL": "en", "PE": "es", "PH": "en", "PL": "en", "PT": "pt", "QA": "ar",
  "DO": "es", "CZ": "en", "RO": "en", "GB": "en", "RU": "ru", "RW": "fr", "KN": "en",
  "SM": "en", "VC": "en", "LC": "en", "SV": "es", "WS": "en", "ST": "pt", "SN": "fr",
  "RS": "en", "SC": "en", "SL": "en", "SG": "en", "SK": "en", "SI": "en", "SO": "ar",
  "SD": "ar", "SS": "en", "LK": "en", "SE": "en", "CH": "fr", "SR": "en", "SY": "ar",
  "TJ": "ru", "TW": "zh", "TZ": "en", "TD": "fr", "TH": "en", "TL": "pt", "TG": "fr",
  "TO": "en", "TT": "en", "TN": "ar", "TM": "ru", "TR": "en", "TV": "en", "UA": "en",
  "UY": "es", "VU": "en", "VA": "en", "VE": "es", "VN": "en", "YE": "ar", "ZM": "en",
  "ZW": "en",
};

export function languageForCountry(countryCode) {
  if (typeof countryCode !== 'string') return null;
  return COUNTRY_LANGUAGE[countryCode.trim().toUpperCase()] ?? null;
}
