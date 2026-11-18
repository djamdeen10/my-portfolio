# Portfolio — Djam Deen

Portfolio personnel de **Djam Deen** ([djamdeen10](https://github.com/djamdeen10)), développeur
backend qui construit des produits avec l'IA. Base visuelle inspirée de
[djamdeen.com](https://djamdeen.com/), reconstruite et personnalisée en React.

## Stack

- **React 19** + **Vite**
- **Tailwind CSS 4** (mêmes classes utilitaires et mêmes variables de thème que l'original)
- **Framer Motion** (apparitions au scroll, effet de machine à écrire, survol des tags)
- **Geist** / **Geist Mono** servies localement (fichiers `.woff2` d'origine)

## Démarrer

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

```bash
npm run build    # build de production + génération SEO dans dist/
npm run preview  # prévisualiser le build
```

Le build lance `vite build` puis `node scripts/generate-seo.mjs`. Le second script
génère les coquilles HTML statiques (une par route et par langue), `sitemap.xml`,
`robots.txt`, `rss.xml`, `llms.txt`, `llms-full.txt` et `404.html` à partir des
traductions. Il ne dépend d'aucun service externe.

### Déploiement Cloudflare Pages

Le site est déployé sur **Cloudflare Pages** avec le domaine **djamdeen.com**.

| Réglage Cloudflare Pages | Valeur |
| --- | --- |
| Commande de build | `npm run build` |
| Dossier de sortie | `dist` |
| Version Node | 20 ou 22 |
| Domaine personnalisé | `djamdeen.com` |

Le fichier `public/_headers` est copié dans `dist/` et applique les en-têtes de
sécurité et de cache. Cloudflare Pages sert automatiquement les URLs propres
(`/fr/blog`, `/projet/agentmob`) et `404.html` pour les routes inconnues.

Ajouter aussi une Redirect Rule Cloudflare pour envoyer `www.djamdeen.com/*`
vers `https://djamdeen.com/$1` en 301 : une seule version canonique du domaine.

Si une variable `VITE_SITE_URL` existe déjà dans les réglages Cloudflare, la
mettre à `https://djamdeen.com` (ou la supprimer : la valeur par défaut est la
bonne).

Pour un déploiement en ligne de commande :

```bash
npx wrangler pages deploy dist --project-name=djamdeen
```

### Domaine canonique

L'URL de production est centralisée dans `src/lib/site.js` et vaut par défaut
`https://djamdeen.com`. Pour un autre domaine, définir `VITE_SITE_URL`
(ou `SITE_URL`) au moment du build ; toutes les URLs canoniques, alternatives,
sitemap, RSS et fichiers LLM suivront.

## Multilingue

Le site est entièrement multilingue : interface, textes éditoriaux, articles de blog,
étiquettes, dates, métadonnées **et couvertures SVG** (elles sont rendues à partir des
traductions, pas figées dans un bitmap). Huit langues sont prises en charge :

| Code | Langue | Direction |
| --- | --- | --- |
| `en` | English | LTR |
| `fr` | Français | LTR |
| `es` | Español | LTR |
| `ar` | العربية | RTL |
| `pt` | Português | LTR |
| `zh` | 简体中文 | LTR |
| `ja` | 日本語 | LTR |
| `ru` | Русский | LTR |

### Choix automatique

Au premier passage sans préfixe ni préférence, le pays du visiteur est résolu via
l'API d'IP puis converti en langue avec `src/i18n/countryLanguages.js`. Si l'API
échoue ou dépasse 1,5 s, la langue du navigateur sert de repli, puis l'anglais.
Dès qu'une URL porte un préfixe (`/fr`, `/ar/blog`), elle est autoritaire : aucune
détection ne peut contredire le chemin.

### Langue dans le chemin

Chaque langue a une URL stable et indexable : l'anglais reste à la racine
(`/`, `/blog`), les autres langues sont préfixées (`/fr`, `/fr/blog`,
`/ar/projet/agentmob`). Le chemin est la source de vérité :

- `src/lib/localePath.js` découpe et reconstruit les chemins localisés ;
- `src/lib/routes.js` décrit les routes ;
- `src/lib/router.js` navigue sans rechargement et conserve le préfixe ;
- `LanguageProvider` synchronise `<html lang="…" dir="…">`, le chemin et
  l'historique du navigateur.

Un ancien lien `?lang=fr` est normalisé vers `/fr` au chargement. Le choix manuel
reste mémorisé dans `localStorage` (`djamdeen:language`) et s'applique à la page
d'entrée ; les liens profonds sans préfixe restent anglais pour ne pas créer de
doublons canoniques.

- Pour brancher votre propre service d'IP, définissez `VITE_IP_API_URL`. La réponse doit
  contenir au minimum `{ "countryCode": "FR" }` (le format freeipapi est accepté tel quel).

### Ajouter ou modifier une traduction

Tout le contenu textuel vit dans `src/i18n/translations/`. Chaque fichier exporte la
même arborescence : `ui` (navigation, boutons, libellés, accessibilité), `profile`,
`projects`, `interests`, `blogPosts`, `quote` et `covers`. Les données non
traduisibles (slugs, URLs, stack, dates, e-mail, liens sociaux) sont centralisées dans
`src/data/content.js`. Une clé manquante retombe automatiquement sur l'anglais.

L'anglais est le seul module de traduction inclus dans le bundle initial. Les sept
autres langues sont des chunks séparés, chargés à la demande par
`LanguageProvider` puis préchargés pendant les temps morts (`requestIdleCallback`).
Un changement de langue passe donc par une transition de vue (ou un fondu de repli)
sans bloquer la page ; le préchargement est ignoré en mode économie de données.

Les couvertures sont gérées par `src/components/ui/CoverArt.jsx` :

- **Projet AgentMob** : logo statique `public/covers/agentmob-cover-presentation.svg`,
  volontairement sans texte traduit.
- **Blog AgentMob** : cover rendue depuis `covers.agentmobBlog` (titre, libellé et
  sous-titre localisés, avec adaptation RTL).
- **Magazine** : cover rendue depuis `covers.profVsRed`.

## SEO et GEO

Le site est optimisé pour les moteurs de recherche classiques **et** pour les
moteurs de réponse IA (ChatGPT, Claude, Perplexity, Bing/Copilot, etc.) :

- **HTML statique par route et par langue** : chaque URL canonique possède sa
  coquille HTML avec titre, description, canonical, `hreflang` (8 langues +
  `x-default`) et contenu de repli `<noscript>` complet. Aucune page ne dépend
  du JavaScript pour être lue par un crawler.
- **Données structurées JSON-LD** : `Person`, `Organization`, `WebSite`,
  `ProfilePage`/`FAQPage`, `CollectionPage`, `ItemPage`, `BreadcrumbList`,
  `Blog`, `BlogPosting` et `SoftwareApplication` (AgentMob).
- **FAQ visible** (anglais/français) sur l'accueil, en accordéon éditorial
  (grand titre serif à gauche, questions dépliables à droite), également exposée
  en `FAQPage` et dans `llms.txt`.
- **Sitemap XML** avec alternates `xhtml:link`, **RSS**, **robots.txt** qui
  autorise explicitement les crawlers IA (`GPTBot`, `OAI-SearchBot`,
  `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, etc.).
- **`llms.txt`** (index pour les LLM) et **`llms-full.txt`** (texte intégral du
  site en anglais, articles compris).
- **Open Graph / Twitter Card** avec image 1200 × 630 (`public/og/djam-deen.png`),
  favicon, manifest et `404.html` en `noindex`.
- **URLs propres** via Cloudflare Pages (pretty URLs) :
  `/fr/blog`, `/projet/agentmob`, jamais `/fr/blog.html` ni `/?lang=fr`.
- **En-têtes de cache et de sécurité** dans `public/_headers` : assets et polices
  immuables, HTML et fichiers SEO revalidés à chaque déploiement.

Vérifications utiles après déploiement :

```bash
curl -s https://djamdeen.com/robots.txt
curl -s https://djamdeen.com/sitemap.xml | head
curl -s https://djamdeen.com/llms.txt | head
curl -s https://djamdeen.com/fr/blog | grep -m1 '<title>'
```

Soumettre `sitemap.xml` dans Google Search Console et Bing Webmaster Tools, et
vérifier les résultats enrichis dans le [Rich Results Test](https://search.google.com/test/rich-results).

```
public/
  avatar.jpg                        # avatar (le chat de Djam Deen)
  covers/                           # covers SVG des projets
  fonts/                            # Geist + Geist Mono (woff2)
  og/djam-deen.png                  # image Open Graph 1200 × 630
  site.webmanifest                  # manifest PWA
  _headers                          # en-têtes Cloudflare Pages
scripts/
  generate-seo.mjs                  # coquilles HTML, sitemap, robots, RSS, llms
wrangler.jsonc                      # configuration Cloudflare Pages
src/
  App.jsx                           # shell, routage et transitions de pages
  index.css                         # thème, grille de fond, polices, liquid glass, RTL
  lib/
    router.js                       # routage léger (history API)
    routes.js                       # routes partagées
    localePath.js                   # chemins localisés /fr, /ar, …
    visitor.js                      # géolocalisation IP (pays + fuseau)
    transitions.js                  # View Transitions + repli soft-swap
    seo.js                          # métadonnées, hreflang et JSON-LD par route
    seoDom.js                       # application des métadonnées dans document.head
    site.js                         # URL canonique et constantes du site
  i18n/
    languages.js                    # les 8 langues, locales et directions
    countryLanguages.js             # table pays ISO → langue
    LanguageProvider.jsx            # détection, préférence, t(), formats Intl
    translations/                   # en, fr, es, ar, pt, zh, ja, ru
  data/
    content.js                      # données partagées + fusion des traductions
    skillIcons.js                   # icônes Simple Icons de la stack
  components/
    ThemeProvider.jsx               # thème clair/sombre (localStorage « app-theme »)
    layout/
      SiteNav.jsx                   # en-tête + switch de thème
      QuickNav.jsx                  # tab bar mobile fixe avec effet liquid glass
      LanguageSelector.jsx          # sélecteur de langue animé
      ContactCta.jsx                # appel à contact en fin de page
      QuoteCard.jsx                 # citation de fin
    ui/
      Animations.jsx                # wrappers de révélation au scroll
      Effects.jsx                   # horloge, shimmer, machine à écrire, thème
      CoverArt.jsx                  # covers rendues depuis les traductions
      Icons.jsx                     # icônes SVG (lucide + Simple Icons)
      StackChip.jsx                 # pastille de stack avec icône Simple Icons
      styles.js                     # classes partagées (boutons, cartes, badges)
  pages/
    NotFoundPage.jsx                # 404 localisée et noindex
    home/
      HomePage.jsx                  # composition de l'accueil
      Hero.jsx                      # avatar, nom, sous-titre, rôles animés
      FaqSection.jsx                 # FAQ visible (en/fr)
      Intro.jsx
      Skills.jsx
      Interests.jsx
    project/
      ProjectsPage.jsx              # liste des projets
      ProjectCard.jsx               # cover, description, stack et liens
      ProjectDetailPage.jsx         # fiche projet + JSON-LD
    contact/
      ContactPage.jsx
    blog/
      BlogPage.jsx
      BlogPostPage.jsx              # article, auteur et liens liés
      BlogEmptyState.jsx
```

## Détails

- Largeur du contenu (`max-w-xl`), `zoom: 1.1` du body et grille de fond fixe.
- Design « liquid glass » mesuré : les grandes surfaces (page, sections, cartes,
  citation) gardent le style sobre d'origine, tandis que les détails (tags, badges,
  boutons, switch de thème, barre de navigation) utilisent les classes `.glass-chip`
  et `.glass-primary` déclinées en clair et en sombre. En clair, le filet du verre
  passe au gris et une ombre douce détache puces et barre mobile des cartes blanches.
- Thème clair/sombre avec détection système, persistance et même clé de stockage,
  corrigé pour que le premier clic bascule réellement le rendu (variante `dark` pilotée par la classe).
  Les transitions de couleur sont coupées pendant la bascule pour éviter un flash de
  texte clair sur fond clair ; le changement de palette et de langue passe par les
  View Transitions (fondu composité) avec repli sur un `soft-swap` opacity.
- Mouvement : révélations au scroll (fade, slide up/left/right) et transitions de page
  via Framer Motion chargé à la demande (`LazyMotion` + composants `m`), effets continus
  (shimmer, curseur, horloge, pastille de navigation) en CSS pur. Toutes les animations
  respectent `prefers-reduced-motion`.
- Texte « shimmer », horloge en direct et machine à écrire (4 rôles, mêmes vitesses).
- FAQ en accordéon : ouverture fluide par `grid-template-rows`, signe `+` qui
  devient `−`, focus clavier et `aria-expanded`/`aria-controls`.
- Tag de compétences avec agrandissement au survol (CSS `chip-spring`), navigation rapide fixe.
- Cartes projets avec cover, description, stack en vraies icônes et liens
  « voir en ligne » / GitHub.
- Pages dédiées `/projet`, `/contact` et `/blog` avec transitions et historique navigateur.
- Rendu responsive vérifié à 390, 640, 768, 1024, 1280 et 1920 px.
