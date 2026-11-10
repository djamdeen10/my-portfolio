# Portfolio — reproduction React

Reproduction fidèle (mise en page, styles, animations et interactions) du portfolio
[djamdeen.vercel.app](https://djamdeen.vercel.app/), réécrite en React.

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
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Structure

```
public/
  facedemo.jpeg                     # photo de profil
  CV_DJAMAL_ALIDOU_MADOUGOU.pdf     # CV téléchargeable
  fonts/                            # Geist + Geist Mono (woff2)
src/
  App.jsx                           # pages Accueil / Projet / Contact / Blog
  index.css                         # thème, grille de fond, polices, liquid glass
  lib/
    router.js                       # routage léger (history API)
  data/
    content.js                      # textes, projets, formation, centres d'intérêt, blog
    skillIcons.js                   # icônes Simple Icons des compétences
  components/
    Sections.jsx                    # nav, hero, projets, compétences, contact, blog
    Animations.jsx                  # wrappers de révélation au scroll
    Effects.jsx                     # horloge, dégradé animé, machine à écrire, thème
    ThemeProvider.jsx               # thème clair/sombre (localStorage « app-theme »)
    QuickNav.jsx                    # tab bar mobile fixe avec effet liquid glass
    Icons.jsx                       # icônes SVG (lucide + Simple Icons)
    styles.js                       # classes partagées (boutons, cartes, badges)
```

## Détails repris à l'identique

- Largeur du contenu (`max-w-xl`), `zoom: 1.1` du body et grille de fond fixe.
- Thème clair/sombre avec détection système, persistance et même clé de stockage,
  corrigé pour que le premier clic bascule réellement le rendu (variante `dark` pilotée par la classe).
- Révélations progressives au scroll (fade, slide up/left/right) avec les mêmes délais.
- Texte « shimmer », horloge en direct et machine à écrire (4 rôles, mêmes vitesses).
- Tag de compétences avec agrandissement au survol (spring), navigation rapide fixe.
- Pages dédiées `/projet`, `/contact` et `/blog` avec transitions et historique navigateur.
- Rendu responsive vérifié à 390, 640, 768, 1024, 1280 et 1920 px.
