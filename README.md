# Portfolio — Djam Deen

Portfolio personnel de **Djam Deen** ([djamdeen10](https://github.com/djamdeen10)), développeur
backend et AI-powered builder. Base visuelle inspirée de
[djamdeen.vercel.app](https://djamdeen.vercel.app/), reconstruite et personnalisée en React.

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
  avatar.jpg                        # avatar (le chat de Djam Deen)
  covers/                           # covers SVG des projets
  fonts/                            # Geist + Geist Mono (woff2)
src/
  App.jsx                           # shell, routage et transitions de pages
  index.css                         # thème, grille de fond, polices, liquid glass
  lib/
    router.js                       # routage léger (history API)
  data/
    content.js                      # profil, projets, centres d'intérêt, blog, citation
    skillIcons.js                   # icônes Simple Icons de la stack
  components/
    ThemeProvider.jsx               # thème clair/sombre (localStorage « app-theme »)
    layout/
      SiteNav.jsx                   # en-tête + switch de thème
      QuickNav.jsx                  # tab bar mobile fixe avec effet liquid glass
      QuoteCard.jsx                 # citation de fin
    ui/
      Animations.jsx                # wrappers de révélation au scroll
      Effects.jsx                   # horloge, shimmer, machine à écrire, thème
      Icons.jsx                     # icônes SVG (lucide + Simple Icons)
      StackChip.jsx                 # pastille de stack avec icône Simple Icons
      styles.js                     # classes partagées (boutons, cartes, badges)
  pages/
    home/
      HomePage.jsx                  # composition de l'accueil
      Hero.jsx                      # avatar, nom, sous-titre, rôles animés
      Intro.jsx
      Skills.jsx
      Interests.jsx
    project/
      ProjectsPage.jsx              # liste des projets
      ProjectCard.jsx               # cover, description, stack et liens
    contact/
      ContactPage.jsx
    blog/
      BlogPage.jsx
      BlogEmptyState.jsx
```

## Détails

- Largeur du contenu (`max-w-xl`), `zoom: 1.1` du body et grille de fond fixe.
- Design « liquid glass » mesuré : les grandes surfaces (page, sections, cartes,
  citation) gardent le style sobre d'origine, tandis que les détails (tags, badges,
  boutons, switch de thème, barre de navigation) utilisent les classes `.glass-chip`
  et `.glass-primary` déclinées en clair et en sombre.
- Thème clair/sombre avec détection système, persistance et même clé de stockage,
  corrigé pour que le premier clic bascule réellement le rendu (variante `dark` pilotée par la classe).
- Révélations progressives au scroll (fade, slide up/left/right) avec les mêmes délais.
- Texte « shimmer », horloge en direct et machine à écrire (4 rôles, mêmes vitesses).
- Tag de compétences avec agrandissement au survol (spring), navigation rapide fixe.
- Cartes projets avec cover 16:9, description, stack en vraies icônes et liens
  « voir en ligne » / GitHub (les projets fictifs servent de démonstration).
- Pages dédiées `/projet`, `/contact` et `/blog` avec transitions et historique navigateur.
- Rendu responsive vérifié à 390, 640, 768, 1024, 1280 et 1920 px.
