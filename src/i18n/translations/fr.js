/**
 * French (source language).
 *
 * Content is split in two parts:
 * - `ui`: interface strings, navigation, labels and accessibility text.
 * - the remaining keys: editorial content merged with the shared structures
 *   declared in `src/data/content.js` (slugs, links, stack, dates, …).
 */
export default {
  meta: {
    role: 'Développeur backend & créateur de produits avec l’IA',
    description:
      'Portfolio de Djam Deen (djamdeen10), développeur backend qui construit des produits avec l’IA. Des outils utiles et cool, du code propre, des chats et de grosses idées.',
  },

  notFound: {
    title: 'Page introuvable.',
    text: 'Cette page n’existe pas ou a été déplacée.',
    home: 'Retour à l’accueil',
  },

  ui: {
    nav: { accueil: 'Accueil', projet: 'Projet', contact: 'Contact', blog: 'Blog' },
    routeTitles: {
      accueil: 'Portfolio',
      projet: 'Projets',
      contact: 'Contact',
      blog: 'Blog',
      projetDetail: 'Projet',
      blogDetail: 'Article',
    },
    language: {
      change: 'Changer de langue',
      menu: 'Langues',
      close: 'Fermer la liste des langues',
      current: 'Langue : {language}',
      detected: 'Langue proposée d’après votre pays',
    },
    theme: {
      light: 'Activer le thème clair',
      dark: 'Activer le thème sombre',
    },
    sidebar: {
      nav: 'Navigation principale',
      bio: ['Dev backend', 'Créateur de produits avec l’IA', 'Fan du FC Barcelone', 'Amoureux des chats'],
    },
    hero: {
      intro: 'bonjour, je suis',
      myTime: 'chez moi',
      myTimeTitle: 'Heure chez moi',
      projects: 'Projets',
      projectsAria: 'Voir mes projets',
      email: 'Envoyer un email',
      github: 'Ouvrir GitHub',
      x: 'Ouvrir X',
      facebook: 'Ouvrir Facebook',
    },
    time: { local: 'Heure locale' },
    intro: {
      greeting: 'Salut 👋',
      paragraphs: [
        [
          { text: 'Moi c’est ' },
          { text: 'Djamal ALIDOU M.', strong: true },
          { text: ', mais vous pouvez simplement m’appeler Djam Deen. Je suis originaire du ' },
          { text: 'Bénin', href: 'https://fr.wikipedia.org/wiki/B%C3%A9nin' },
          { text: ' et basé à Cotonou.' },
        ],
        [
          {
            text: 'Spécialisé en développement backend, je m’assure que les apps, sites et APIs fonctionnent vraiment, tiennent la route et sont sécurisés — pas seulement qu’ils soient beaux. ',
          },
          {
            text: 'Et contrairement aux idées reçues sur les devs backend, je sais aussi faire des trucs très propres côté design 😏.',
            mark: true,
          },
        ],
        [
          {
            text: 'Je suis aussi passionné d’entrepreneuriat et d’IA, que j’utilise au quotidien dans mon travail.',
          },
        ],
        [
          {
            text: 'Mon travail tourne principalement autour de mes propres produits, de projets open source et, parfois, de produits pour des particuliers.',
          },
        ],
        [
          {
            text: 'Je ne construis pas juste pour construire : je construis des solutions à de vrais problèmes.',
          },
        ],
      ],
    },
    skills: { title: 'Stack', hint: 'survolez les tags' },
    currentWork: {
      title: 'En ce moment',
      subtitle: 'Ce sur quoi je bosse actuellement.',
      label: 'Projet actuel',
      details: 'Plus de détails',
      all: 'Voir tous mes projets',
      preview: 'Aperçu de {title}',
      viewOnline: 'Voir {title} en ligne',
      viewCode: 'Voir le code de {title} sur GitHub',
      viewOnlineTitle: 'Voir le projet en ligne',
      viewCodeTitle: 'Voir le code sur GitHub',
    },
    latestPost: {
      title: 'Dernier article',
      subtitle: 'Ce que j’écris quand je ne code pas.',
      all: 'Tous les articles',
      read: 'Lire l’article',
      readingTime: 'Temps de lecture',
      preview: 'Aperçu de {title}',
      readAria: 'Lire {title}',
    },
    interests: { title: 'Centres d’intérêt & soft skills.', tmdb: '{name} sur TMDB' },
    projects: {
      title: 'Projets.',
      subtitle: 'Ce sur quoi je passe mes nuits.',
      countOne: '{count} projet',
      countOther: '{count} projets',
      repos: 'Voir tous les repos',
      details: 'Plus de détails',
      preview: 'Aperçu de {title}',
      viewOnline: 'Voir {title} en ligne',
      viewCode: 'Voir le code de {title} sur GitHub',
      viewOnlineTitle: 'Voir le projet en ligne',
      viewCodeTitle: 'Voir le code sur GitHub',
    },
    project: {
      back: '← Tous les projets',
      about: 'À propos',
      stack: 'Stack',
      bricks: 'Les briques',
      body: 'Le projet',
      view: 'Voir le projet',
      source: 'Code source',
      notFound: 'Projet introuvable.',
      notFoundText: 'Ce projet n’existe pas ou n’est plus en ligne.',
      preview: 'Aperçu de {title}',
    },
    contact: {
      title: 'Envie de me contacter ?',
      subtitle: 'Choisis le canal qui t’arrange.',
      email: 'Email',
      x: 'X (ex Twitter)',
      facebook: 'Facebook',
      github: 'GitHub',
    },
    contactCta: {
      title: 'Une idée, un projet, une question ?',
      text: 'Je suis toujours partant pour en discuter. Le plus simple, c’est de m’écrire.',
      write: 'M’écrire',
      other: 'Autres contacts',
    },
    blog: {
      title: 'Blog.',
      subtitle: 'Notes de dev, coulisses et idées, écrites quand j’ai quelque chose à dire.',
      countOne: '{count} article',
      countOther: '{count} articles',
      soon: 'bientôt',
      search: 'Rechercher un article',
      searchPlaceholder: 'Rechercher un article',
      all: 'Tous',
      latest: 'Dernier article',
      others: 'Les autres articles',
      noResults: 'Aucun article trouvé.',
      noResultsHint: 'Essaie un autre titre ou change de thème.',
      read: 'Lire l’article',
      readingTime: 'Temps de lecture',
      back: '← Tous les articles',
      notFound: 'Article introuvable.',
      notFoundText: 'Cet article n’existe pas ou n’est plus en ligne.',
      preparing: 'Cet article est encore en préparation.',
      preparingText: 'Il arrive bientôt. En attendant, il y a déjà de quoi lire.',
      emptyTitle: 'Les premiers articles arrivent bientôt.',
      emptyText:
        'Coulisses d’AgentMob, notes de dev et idées IA. En attendant, écris-moi si un sujet te tente.',
      suggest: 'Suggérer un sujet',
      subject: 'Idée d’article',
      preview: 'Aperçu de {title}',
      illustration: 'Illustration de {title}',
      readAria: 'Lire {title}',
    },
    visitor: { country: 'Pays détecté : {country}' },
  },

  profile: {
    role: 'Dev Backend',
    location: 'basé au Bénin',
    country: 'Bénin',
    avatarAlt: 'Le chat de Djam Deen',
    roles: ['Développeur backend', 'Créateur de produits avec l’IA', 'Fan du FC Barcelone', 'Amoureux des chats'],
  },

  covers: {
    agentmob: {
      kicker: 'Open source · PWA',
      title: 'AgentMob',
      tagline: 'Pilote tes agents IA depuis ton téléphone.',
      note: 'Ton PC travaille. Ton téléphone contrôle.',
    },
    agentmobBlog: {
      kicker: 'BLOG',
      title: 'Pourquoi j’ai construit AgentMob',
      tagline: 'Piloter ses agents IA depuis son téléphone.',
    },
    profVsRed: {
      dossier: 'DOSSIER N°{number}',
      architect: 'Archétype',
      game: 'Jeu',
      weapon: 'Arme',
      duel: 'DUEL',
      professorName: 'LE PROFESSEUR',
      professorAlias: 'Sergio Marquina',
      professorArchetype: 'l’architecte',
      professorGame: 'les échecs',
      professorWeapon: 'le plan',
      redName: 'RAYMOND REDDINGTON',
      redAlias: 'Alias « Red », le Concierge du Crime',
      redArchetype: 'le funambule',
      redGame: 'le poker',
      redWeapon: 'l’influence',
      footerTitle: 'LE PROFESSEUR VS REDDINGTON',
      footerSubtitle: 'QUEL CERVEAU CRIMINEL CHOISIRIEZ-VOUS ?',
    },
  },

  projects: {
    agentmob: {
      description:
        "Une application mobile qui permet de piloter et d’autoriser ses agents IA en ligne de commande depuis son téléphone, pendant qu’ils travaillent sur son ordinateur.",
      highlights: [
        { label: 'Mobile', value: 'PWA installable' },
        { label: 'PC', value: 'Serveur local npm + SQLite' },
        { label: 'Lien', value: 'Temps réel chiffré' },
        { label: 'Signalisation', value: 'Ne voit jamais le contenu' },
      ],
      body: [
        "Les agents IA en ligne de commande travaillent dans un terminal. On leur confie des tâches longues, mais il faut rester devant l’écran pour suivre, relancer, et surtout valider chaque demande d’autorisation. Dès qu’on s’éloigne, l’agent continue de travailler — et on perd la main sur ce qu’il fait.",
        "AgentMob renverse la situation avec une idée simple : « Telegram pour tes agents ». Une conversation par session, des réponses asynchrones, des notifications, et les autorisations qui arrivent sur le téléphone. On lance une instruction, l’agent travaille sur le PC, on valide d’un pouce. Le PC travaille, le téléphone contrôle.",
        "L’interface emprunte aux applications de messagerie : liste de conversations, pastilles d’état, bulles, étapes intermédiaires regroupées dans un bloc repliable. Les demandes d’autorisation prennent la forme d’une carte d’action avec trois réponses possibles : autoriser, autoriser pour la session, refuser. Plusieurs agents (Codex, Claude Code, Antigravity) cohabitent dans la même application, chacun avec un badge de support honnête.",
        "Côté technique, quatre briques : une application mobile installable (PWA), un serveur local distribué en npm qui fait tourner les agents et conserve l’historique dans une base SQLite, un canal temps réel chiffré entre le téléphone et le PC, et un service de signalisation minimal qui ne voit jamais le contenu. Le PC est la source de vérité, rien n’est stocké chez un éditeur. L’appairage se fait par QR code, sans compte et sans tunnel réseau à configurer. Le tout est open source, sous licence permissive, et gratuit.",
        "Le projet part d’une gêne concrète et a été mené comme un vrai produit : une spécification unique faisant office de source de vérité, un périmètre de version 1 volontairement resserré, des critères de succès mesurables et des arbitrages de sécurité assumés. Une base solide d’abord, des extensions ensuite.",
      ],
    },
  },

  currentWork: { status: 'En cours' },

  interests: [
    {
      title: 'Musique',
      badge: 'Rap / Drill / Pop',
      description:
        'Toujours un casque sur les oreilles. Le rap et la drill pour le rythme, et un peu de pop pour varier les plaisirs.',
    },
    {
      title: 'Football',
      badge: 'FC Barcelone',
      description:
        'Barcelonais de cœur. Un vrai attachement au jeu collectif, à la vision et à la culture de progression du club.',
    },
    {
      title: 'Chats',
      badge: 'Amoureux des chats 🐾',
      description:
        'Amoureux absolu des chats. Ils font la loi à la maison, et on les aime comme ça.',
    },
    {
      title: 'État d’esprit',
      badge: 'Motivation',
      description:
        'Ma devise : « Rêve grand et travaille plus grand. » Toujours prêt à relever de nouveaux défis.',
    },
    {
      title: 'Séries',
      badge: 'Réflexion & Stratégie',
      description:
        "Grand fan de séries où il faut garder le cerveau allumé. J’adore les scénarios complexes, les stratégies bien huilées et les plans ultra ficelés. De Mentalist à Casa de Papel en passant par Scorpion et The Blacklist, j’aime quand ça élabore des plans de dingue, que ça résout des énigmes complexes et que ça te retourne le cerveau jusqu’à la dernière minute.",
      links: [
        { label: 'Mentalist', href: 'https://www.themoviedb.org/tv/5920-the-mentalist' },
        { label: 'Casa de Papel', href: 'https://www.themoviedb.org/tv/71446-la-casa-de-papel' },
        { label: 'Scorpion', href: 'https://www.themoviedb.org/tv/60797-scorpion' },
        { label: 'The Blacklist', href: 'https://www.themoviedb.org/tv/46952-the-blacklist' },
      ],
    },
    {
      title: 'Savoir-être',
      badge: 'Travail d’équipe',
      description:
        "J’adore collaborer et avancer ensemble. Pour moi, les meilleures idées et les meilleurs projets se construisent en équipe.",
    },
  ],

  blogPosts: {
    agentmob: {
      title: "Pourquoi j’ai construit AgentMob",
      theme: 'AgentMob',
      excerpt:
        "Il est 23 h, mon agent tourne dans l’autre pièce — et il attend une autorisation. La petite gêne répétée qui a donné naissance à AgentMob.",
      readTime: '6 min',
      content: `Il est 23 h. Mon agent tourne sur le PC, dans l’autre pièce. Il écrit du code, lance des tests, avance. Et moi, je suis allongé, à espérer qu’il n’ait besoin de rien — parce que s’il a besoin de quelque chose, il va falloir que je me lève.

Ce soir-là, il a eu besoin de quelque chose. Une autorisation. Une ligne à valider dans un terminal, à quelques mètres de moi, alors que la seule chose que je voulais, c’était répondre « oui » depuis mon téléphone.

Je me suis levé. J’ai validé. Je me suis recouché. Et je me suis dit que c’était absurde.

C’est de cette petite frustration, répétée une dizaine de fois, qu’est né AgentMob.

## Le vrai problème n’est pas « coder depuis son téléphone »

On imagine souvent un IDE mobile, un éditeur minuscule, un clavier tactile pénible. Ce n’est pas ça.

Le problème, c’est de rester dans la boucle de contrôle. Un agent qui travaille prend des décisions : lire un fichier, lancer une commande, modifier quelque chose. Certaines sont anodines, d’autres méritent qu’on s’y arrête. Le terminal vous oblige à être présent à ce moment précis — et ce moment arrive rarement quand ça vous arrange.

Vous lancez une tâche, vous partez faire autre chose, et vous revenez découvrir que l’agent attend depuis vingt minutes devant une question à laquelle vous auriez répondu en deux secondes.

Ce n’est pas un problème de productivité. C’est un problème de disponibilité.

## La promesse : « Telegram pour tes agents »

Une fois le problème bien formulé, la solution devenait évidente. Je ne voulais pas d’un tableau de bord, ni de graphes, ni de logs. Je voulais la chose la plus banale du monde : une application de messagerie.

Une conversation par session. Des bulles. Des notifications quand l’agent a besoin de moi. Et une carte d’autorisation qui me laisse répondre « autoriser », « refuser » ou « autoriser pour cette session » d’un pouce. Tout le reste — les étapes, les appels d’outils, les lectures de fichiers — est rangé dans un bloc repliable, parce que je n’ai pas besoin de voir chaque respiration de l’agent.

L’idée tient en une phrase : **ton PC travaille, ton téléphone contrôle**.

## Ce que je ne voulais pas construire

Il y a des projets où l’on sait très tôt ce qu’on refuse. Ici, la liste a compté autant que les fonctionnalités.

Pas de tunnel réseau à installer : la plupart de ces outils vous demandent quarante minutes d’administration système avant la première phrase envoyée. Ce n’est pas une expérience, c’est un examen d’entrée.

Pas de compte : pour un outil qui parle à des agents tournant sur votre propre machine, un compte n’apporte rien et annonce déjà une future offre payante.

Pas de stockage des conversations : les agents, les fichiers et l’historique restent sur le PC. Le service qui relie les deux appareils n’a besoin de voir qu’une chose : qu’ils se cherchent.

## L’honnêteté comme contrainte

AgentMob prend en charge Codex, Claude Code et Antigravity. Ils ne se valent pas : protocoles différents, capacités différentes, et l’un d’eux ne sait tout simplement pas demander d’autorisation.

La tentation serait d’annoncer « compatible avec X, Y et Z » et de laisser l’utilisateur découvrir les limites par lui-même. J’ai choisi l’inverse : un badge de support par agent — complet, basique, expérimental — cliquable, qui explique ce que ça implique concrètement.

C’est moins vendeur. Mais un utilisateur qui découvre une limite sur le terrain ne revient pas ; un utilisateur à qui on l’a annoncée s’organise autour d’elle.

## Le projet que j’ai écrit avant le code

La partie la plus difficile n’a pas été le code. Elle a été de décider.

Avec des agents IA pour accélérer l’écriture, produire beaucoup et vite dans la mauvaise direction devient le vrai risque. Alors avant la première ligne, j’ai écrit un document unique, source de vérité : vision, périmètre de la version 1, architecture, sécurité, expérience, tests, risques.

Chaque décision y est numérotée et justifiée, y compris les alternatives écartées. C’est ce qui m’a le plus servi : six semaines plus tard, on ne se souvient plus pourquoi on avait refusé une option, et on la réintroduit par confort.

## Ce que j’en retiens

Les outils les plus utiles naissent souvent d’une gêne minuscule et répétée. Je n’ai pas commencé par une étude de marché : j’ai commencé par ne plus vouloir me lever.

Ensuite, que la contrainte est un cadeau. Un seul appareil, un seul dossier par projet, une seule source de vérité. Chacune de ces restrictions a simplifié l’architecture et réduit la surface d’erreur.

Enfin, que travailler avec des agents IA ne dispense pas de réfléchir : ça déplace l’effort. On écrit moins de code à la main, on passe beaucoup plus de temps à décider, à cadrer et à tester dans des conditions réelles.

C’est exactement pour ça qu’AgentMob existe. Parce que le terrain, c’est là où tout se joue — et que le terrain, la plupart du temps, ce n’est pas devant l’écran.`,
    },
    profVsRed: {
      title: 'Le Professeur vs Reddington : quel cerveau criminel choisiriez-vous ?',
      theme: 'Mes Notes',
      excerpt:
        'Deux génies du crime, deux façons de gérer le chaos. Un petit duel tranquille entre un plan parfait et un culot monumental.',
      readTime: '4 min',
      content: `Il y a des personnages qui te marquent parce qu’ils te font réfléchir, et d’autres parce qu’ils te font juste passer un bon moment. Le Professeur et Reddington sont un peu des deux à la fois. Deux génies du crime, deux façons de gérer le chaos, et une question qui revient toujours : lequel des deux on choisirait pour monter un plan ?

J’ai regardé les deux séries avec le même plaisir, mais pas pour les mêmes raisons. Et plus j’y pense, plus je me dis que la vraie différence n’est pas une question de QI. C’est une question de style.

## Le Professeur, l’architecte

Sergio Marquina, c’est le gars qui prépare un braquage pendant des années avant même d’en parler à son équipe. Rien n’est laissé au hasard : les habitudes des gardes, les réactions des otages, le timing de la police. Tout est écrit, répété, anticipé.

Et ce qui est fort, c’est que ce n’est pas juste un cerveau. Le Professeur est timide, un peu maladroit socialement, mais dès qu’il s’agit de défendre son plan, il devient un autre. Il parle, il convainc, il inspire. Sa vraie arme, ce n’est pas un flingue, c’est sa façon de raconter son histoire. Son code — ne tuer personne — n’est pas seulement moral : c’est aussi ce qui donne à sa bande une image de « voleurs un peu nobles » face à un système corrompu.

Sa limite, c’est que tout repose sur le plan. Quand un imprévu arrive, il peut se crisper, perdre ses repères et avoir du mal à sortir de son propre cadre.

## Reddington, le funambule

En face, Raymond Reddington, c’est une autre ambiance. On l’appelle le « Concierge du Crime », et il ne fonctionne pas au plan, mais au réseau et à l’influence. Il ne prédit pas l’avenir : il le manipule en direct.

Red, c’est le roi de la conversation. Il te raconte une histoire, te ment avec le sourire, te séduit, et au bout de trois appels il a retourné une situation. Le genre de type capable d’organiser un mariage et une greffe de rein dans la même soirée si ça peut lui servir. Il improvise, mais on a l’impression que tout était prévu depuis le début.

Son problème, c’est le prix de cette puissance. Red n’a pas vraiment de limites morales : il a son code, et c’est lui qui décide ce qui est juste. Et son efficacité dépend beaucoup de son réseau et de ses ressources. Sans ça, il serait beaucoup moins impressionnant.

## Au final, qui gagne ?

Comparer les deux, c’est un peu comparer un joueur d’échecs à un joueur de poker.

Le Professeur est le meilleur stratège. Si tu as besoin d’un plan parfait, exécuté à la lettre, avec une équipe soudée et une opinion publique de ton côté, c’est lui. Il est le maître du connu, de la préparation, de la construction.

Reddington est le meilleur tacticien, et le plus grand manipulateur. Si tu es dans une situation désespérée et imprévisible, et qu’il faut retourner un rapport de force avec de la ruse et de l’influence, c’est lui. Il est le maître de l’inconnu, de l’adaptation, de l’opportunisme.

Il n’y a pas vraiment de « meilleur » absolu. Tout dépend de ce dont tu as besoin.

Le Professeur va te sauver avec un plan si propre que tu n’auras même pas besoin de comprendre ce qui se passe. Reddington va te sauver en transformant ton pire ennemi en meilleur allié autour d’un dîner et d’un bon verre. L’un t’offre la sécurité de la certitude, l’autre l’exaltation du chaos maîtrisé.`,
    },
  },

  quote: {
    text: '« Seuls ceux qui sont assez fous pour penser qu’ils peuvent changer le monde y parviennent »',
    author: 'Steve Jobs',
  },

  faq: {
    title: 'Les questions, en clair.',
    subtitle: 'La version courte de ce que je fais, de ma façon de travailler et de ce qu’est AgentMob.',
    items: [
      {
        q: 'Qui est Djam Deen ?',
        a: 'Djam Deen (Djamal ALIDOU M.) est un développeur backend qui construit des produits avec l’IA, basé à Cotonou, au Bénin. Il construit des APIs, des applications web et des outils qui résolvent de vrais problèmes, et raconte le processus sur son blog.',
      },
      {
        q: 'Sur quoi travaille Djam Deen ?',
        a: 'Du développement backend (APIs, données, sécurité et fiabilité), des produits construits avec l’IA et des outils open source. Son projet actuel est AgentMob, une salle de contrôle mobile pour les agents IA en ligne de commande.',
      },
      {
        q: 'Qu’est-ce qu’AgentMob ?',
        a: 'AgentMob est une PWA open source et installable qui permet de suivre et d’approuver des agents IA en ligne de commande (Codex, Claude Code, Antigravity) depuis ton téléphone pendant qu’ils travaillent sur ton ordinateur. Le PC garde les fichiers et l’historique dans SQLite ; le téléphone reçoit la conversation et les demandes d’autorisation.',
      },
      {
        q: 'Quelles technologies utilise Djam Deen ?',
        a: 'TypeScript, React, Next.js, Node.js, Hono, Python, FastAPI, PostgreSQL, SQLite, Cloudflare, Vite, Vitest, ainsi que des outils IA comme Claude, DeepSeek et ChatGPT. La stack est choisie en fonction du problème, pas l’inverse.',
      },
      {
        q: 'Comment AgentMob gère-t-il la confidentialité et la sécurité ?',
        a: 'AgentMob fait tourner un serveur npm local sur ton ordinateur, stocke l’historique dans une base SQLite locale et relie le téléphone par un canal temps réel chiffré. Le service de signalisation aide seulement les deux appareils à se trouver et ne voit jamais le contenu. L’appairage se fait par QR code, sans compte ni tunnel à configurer.',
      },
      {
        q: 'Djam Deen est-il disponible pour des missions freelance ou des collaborations ?',
        a: 'Je suis toujours partant pour discuter d’une idée, d’un projet ou d’une question. Le plus simple est d’écrire à djamdeen10@gmail.com avec une courte description de ce que tu as en tête.',
      },
      {
        q: 'Où est basé Djam Deen ?',
        a: 'À Cotonou, au Bénin. Il travaille à distance et écrit en anglais et en français ; ce portfolio est aussi disponible en espagnol, portugais, arabe, chinois, japonais et russe.',
      },
    ],
  },
};
