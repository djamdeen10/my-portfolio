export const profile = {
  name: 'Djam Deen',
  handle: 'djamdeen10',
  role: 'Dev backend',
  location: 'basé au Bénin',
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

export const interests = [
  {
    title: 'Musique',
    badge: 'rap · pop · drill',
    description:
      'Rap, pop et drill en boucle. La bande-son des nuits calmes, des sessions de code et des grosses idées.',
  },
  {
    title: 'Team chats',
    badge: 'cat person',
    description:
      "Les chats, évidemment. C'est le visage derrière les commits — et la meilleure compagnie pendant les builds.",
  },
  {
    title: 'Football',
    badge: 'FC Barcelone',
    description:
      'Barcelonais de cœur. Un vrai attachement au jeu collectif, à la vision et à la culture de progression du club.',
  },
  {
    title: 'Mindset',
    badge: 'Dream big',
    description:
      'Rêve grand. Travaille plus grand. Garder le process chill, mais viser beaucoup plus loin.',
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
