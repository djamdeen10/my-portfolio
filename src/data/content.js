export const profile = {
  name: 'Djam Deen',
  handle: 'djamdeen10',
  role: 'Développeur backend',
  location: 'basé au Bénin.',
  email: 'djamdeen10@gmail.com',
  avatarAlt: 'Le chat de Djam Deen',
  links: {
    twitter: 'https://x.com/djamdeen10',
    github: 'https://github.com/djamdeen10',
    repos: 'https://github.com/djamdeen10?tab=repositories',
  },
  roles: ['Backend Developer', 'AI-Powered Builder', 'Cats Lover', 'Dreamer'],
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
    title: 'Séries',
    badge: 'Scorpion · POI · Chuck',
    description:
      "Scorpion, Person of Interest et Chuck. Des histoires de génies, de systèmes et de gens qui trouvent des solutions.",
  },
  {
    title: 'Mindset',
    badge: 'Dream big',
    description:
      'Rêve grand. Travaille plus grand. Garder le process chill, mais viser beaucoup plus loin.',
  },
];

// Ajoutez des articles ici pour remplir le blog. Exemple :
// { title, excerpt, date, readTime, tag, href }
export const blogPosts = [];

export const quote = {
  text: '"Dream big. Work bigger."',
  author: 'Djam Deen',
};
