export const profile = {
  name: 'Djam Deen',
  handle: 'djamdeen10',
  role: 'Dev Backend',
  location: 'basé au Bénin',
  // The clock on the home page always shows the owner's time, not the visitor's.
  timeZone: 'Africa/Porto-Novo',
  country: 'Bénin',
  email: 'djamdeen10@gmail.com',
  avatarAlt: 'Le chat de Djam Deen',
  links: {
    twitter: 'https://x.com/djamdeen10',
    facebook: 'https://www.facebook.com/djamdeen10',
    github: 'https://github.com/djamdeen10',
    repos: 'https://github.com/djamdeen10?tab=repositories',
  },
  roles: ['Backend Developer', 'AI-Powered Builder', 'FC Barcelona Fan', 'Cats Lover'],
};

// Liens de démonstration fictifs : remplace-les par les vraies URLs quand les
// projets seront en ligne.
export const projects = [
  {
    slug: 'agentmob',
    title: 'AgentMob',
    description:
      "Une app mobile pour orchestrer tes agents IA depuis ta poche. Une expérience simple, confidentielle et pensée pour rendre l'IA aussi naturelle qu'envoyer un message.",
    cover: '/covers/agentmob.svg',
    stack: ['TypeScript', 'React.js', 'Hono', 'PostgreSQL'],
    demo: 'https://example.com/agentmob',
    github: 'https://github.com/djamdeen10',
  },
  {
    slug: 'the-lab',
    title: 'The lab',
    description:
      'Un terrain de jeu pour les idées à moitié finies : petits outils de nuit et expérimentations qui grattent mes propres démangeaisons.',
    cover: '/covers/the-lab.svg',
    stack: ['JavaScript', 'TypeScript', 'Python', 'FastAPI'],
    demo: 'https://example.com/lab',
    github: 'https://github.com/djamdeen10?tab=repositories',
  },
  {
    slug: 'nexus-api',
    title: 'Nexus API',
    description:
      "Un backend modulaire pour connecter modèles, outils et automatisations. Une base propre pour construire des produits IA sans repartir de zéro.",
    cover: '/covers/nexus.svg',
    stack: ['TypeScript', 'Node.js', 'Hono', 'PostgreSQL'],
    demo: 'https://example.com/nexus',
    github: 'https://github.com/djamdeen10/nexus',
  },
  {
    slug: 'pulse',
    title: 'Pulse',
    description:
      "Un tableau de bord temps réel pour suivre l'activité d'un produit : métriques, événements et alertes, dans une interface calme et lisible.",
    cover: '/covers/pulse.svg',
    stack: ['React.js', 'TypeScript', 'FastAPI', 'SQLite'],
    demo: 'https://example.com/pulse',
    github: 'https://github.com/djamdeen10/pulse',
  },
];

// Projet mis en avant sur l'accueil (« En ce moment ») : celui sur lequel je
// travaille actuellement. Change juste le slug pour mettre un autre projet en avant.
export const currentWork = {
  slug: 'agentmob',
  status: 'En cours',
};

export const interests = [
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
    badge: 'Cat Lover 🐾',
    description:
      "Amoureux absolu des chats. Ils font la loi à la maison, et on les aime comme ça.",
  },
  {
    title: 'Mindset',
    badge: 'Motivation',
    description:
      'Ma devise : « Rêve grand et travaille plus grand. » Toujours prêt à relever de nouveaux défis.',
  },
  {
    title: 'Séries',
    badge: 'Réflexion & Stratégie',
    description:
      "Grand fan de séries où il faut garder le cerveau allumé. J'adore les scénarios complexes, les stratégies bien huilées et les plans ultra ficelés. De Mentalist à Casa de Papel en passant par Scorpion et The Blacklist, j'aime quand ça élabore des plans de dingue, que ça résout des énigmes complexes et que ça te retourne le cerveau jusqu'à la dernière minute.",
    links: [
      { label: 'Mentalist', href: 'https://www.themoviedb.org/tv/5920-the-mentalist' },
      { label: 'Casa de Papel', href: 'https://www.themoviedb.org/tv/71446-la-casa-de-papel' },
      { label: 'Scorpion', href: 'https://www.themoviedb.org/tv/60797-scorpion' },
      { label: 'The Blacklist', href: 'https://www.themoviedb.org/tv/46952-the-blacklist' },
    ],
  },
  {
    title: 'Soft Skill',
    badge: "Travail d'équipe",
    description:
      "J'adore collaborer et avancer ensemble. Pour moi, les meilleures idées et les meilleurs projets se construisent en équipe.",
  },
];

// Articles d'exemple : remplace-les par tes vrais billets quand ils seront prêts.
// Le plus récent (date) est mis en avant sur la page blog.
export const blogPosts = [
  {
    slug: 'pourquoi-agentmob',
    title: "Pourquoi j'ai construit AgentMob",
    theme: 'AgentMob',
    excerpt:
      "L'idée de départ, les nuits passées dessus et ce que je voulais vraiment régler.",
    cover: '/covers/agentmob.svg',
    readTime: '6 min',
    date: '2026-11-10',
    href: '#',
  },
  {
    slug: 'orchestrer-agents-ia',
    title: 'Orchestrer des agents IA sans y perdre la tête',
    theme: 'AgentMob',
    excerpt: "Ce que j'ai appris en faisant travailler plusieurs agents ensemble.",
    cover: '/covers/agentmob.svg',
    readTime: '8 min',
    date: '2026-11-02',
    href: '#',
  },
  {
    slug: 'backend-simple',
    title: 'Un backend qui reste simple, même quand il grandit',
    theme: 'Backend',
    excerpt: "Mes règles pour garder une base lisible quand les idées s'accumulent.",
    cover: '/covers/nexus.svg',
    readTime: '5 min',
    date: '2026-10-24',
    href: '#',
  },
  {
    slug: 'nuits-de-code',
    title: "Ce que mes nuits de code m'ont appris",
    theme: 'Coulisses',
    excerpt: 'Les habitudes, les erreurs et les petits rituels qui font avancer un projet.',
    cover: '/covers/the-lab.svg',
    readTime: '4 min',
    date: '2026-10-12',
    href: '#',
  },
  {
    slug: 'pulse-temps-reel',
    title: 'Suivre un produit en temps réel sans bruit',
    theme: 'Pulse',
    excerpt: "Pourquoi j'ai voulu un tableau de bord calme, lisible et vraiment utile.",
    cover: '/covers/pulse.svg',
    readTime: '7 min',
    date: '2026-09-30',
    href: '#',
  },
];

export const quote = {
  text: "« Seuls ceux qui sont assez fous pour penser qu'ils peuvent changer le monde y parviennent »",
  author: 'Steve Jobs',
};
