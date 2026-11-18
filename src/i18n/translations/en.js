export default {
  meta: {
    role: 'Backend Developer & AI-Assisted Product Builder',
    description:
      'Portfolio of Djam Deen (djamdeen10), a backend developer who builds products with AI. Useful and cool tools, clean code, cats and big ideas.',
  },

  notFound: {
    title: 'Page not found.',
    text: 'This page does not exist or has moved.',
    home: 'Back home',
  },

  ui: {
    nav: { accueil: 'Home', projet: 'Projects', contact: 'Contact', blog: 'Blog' },
    routeTitles: {
      accueil: 'Portfolio',
      projet: 'Projects',
      contact: 'Contact',
      blog: 'Blog',
      projetDetail: 'Project',
      blogDetail: 'Article',
    },
    language: {
      change: 'Change language',
      menu: 'Languages',
      close: 'Close the language list',
      current: 'Language: {language}',
      detected: 'Language suggested from your country',
    },
    theme: { light: 'Switch to the light theme', dark: 'Switch to the dark theme' },
    sidebar: {
      nav: 'Main navigation',
      bio: ['Backend Dev', 'AI-Assisted Product Builder', 'FC Barcelona Fan', 'Cats Lover'],
    },
    hero: {
      intro: 'hi, I am',
      myTime: 'my time',
      myTimeTitle: 'My local time',
      projects: 'Projects',
      projectsAria: 'View my projects',
      email: 'Send an email',
      github: 'Open GitHub',
      x: 'Open X',
      facebook: 'Open Facebook',
    },
    time: { local: 'Local time' },
    intro: {
      greeting: 'Hi 👋',
      paragraphs: [
        [
          { text: 'I’m ' },
          { text: 'Djamal ALIDOU M.', strong: true },
          { text: ', but you can simply call me Djam Deen. I’m from ' },
          { text: 'Benin', href: 'https://en.wikipedia.org/wiki/Benin' },
          { text: ' and based in Cotonou.' },
        ],
        [
          {
            text: 'Specialised in backend development, I make sure apps, websites and APIs actually work, hold up and stay secure — not just that they look good. ',
          },
          {
            text: 'And contrary to the usual backend-dev stereotypes, I can also make things look very clean on the design side 😏.',
            mark: true,
          },
        ],
        [
          {
            text: 'I’m also passionate about entrepreneurship and AI, which I use every day in my work.',
          },
        ],
        [
          {
            text: 'My work mostly revolves around my own products, open-source projects and, occasionally, products for private clients.',
          },
        ],
        [
          {
            text: 'I don’t build just for the sake of building: I build solutions to real problems.',
          },
        ],
      ],
    },
    skills: { title: 'Stack', hint: 'hover over the tags' },
    currentWork: {
      title: 'Right now',
      subtitle: 'What I’m currently working on.',
      label: 'Current project',
      details: 'More details',
      all: 'See all my projects',
      preview: 'Preview of {title}',
      viewOnline: 'View {title} online',
      viewCode: 'View the {title} code on GitHub',
      viewOnlineTitle: 'View the project online',
      viewCodeTitle: 'View the code on GitHub',
    },
    latestPost: {
      title: 'Latest article',
      subtitle: 'What I write when I’m not coding.',
      all: 'All articles',
      read: 'Read the article',
      readingTime: 'Reading time',
      preview: 'Preview of {title}',
      readAria: 'Read {title}',
    },
    interests: { title: 'Interests & soft skills.', tmdb: '{name} on TMDB' },
    projects: {
      title: 'Projects.',
      subtitle: 'What I spend my nights on.',
      countOne: '{count} project',
      countOther: '{count} projects',
      repos: 'See all repositories',
      details: 'More details',
      preview: 'Preview of {title}',
      viewOnline: 'View {title} online',
      viewCode: 'View the {title} code on GitHub',
      viewOnlineTitle: 'View the project online',
      viewCodeTitle: 'View the code on GitHub',
    },
    project: {
      back: '← All projects',
      about: 'About',
      stack: 'Stack',
      bricks: 'Building blocks',
      body: 'The project',
      view: 'View the project',
      source: 'Source code',
      notFound: 'Project not found.',
      notFoundText: 'This project does not exist or is no longer online.',
      preview: 'Preview of {title}',
    },
    contact: {
      title: 'Want to get in touch?',
      subtitle: 'Pick the channel that suits you.',
      email: 'Email',
      x: 'X (formerly Twitter)',
      facebook: 'Facebook',
      github: 'GitHub',
    },
    contactCta: {
      title: 'An idea, a project, a question?',
      text: 'I’m always happy to talk about it. The easiest way is to write to me.',
      write: 'Write to me',
      other: 'Other contacts',
    },
    blog: {
      title: 'Blog.',
      subtitle: 'Dev notes, behind-the-scenes stories and ideas, written when I have something to say.',
      countOne: '{count} article',
      countOther: '{count} articles',
      soon: 'soon',
      search: 'Search an article',
      searchPlaceholder: 'Search an article',
      all: 'All',
      latest: 'Latest article',
      others: 'Other articles',
      noResults: 'No article found.',
      noResultsHint: 'Try another title or change the theme.',
      read: 'Read the article',
      readingTime: 'Reading time',
      back: '← All articles',
      notFound: 'Article not found.',
      notFoundText: 'This article does not exist or is no longer online.',
      preparing: 'This article is still in the works.',
      preparingText: 'It’s coming soon. In the meantime, there is already plenty to read.',
      emptyTitle: 'The first articles are coming soon.',
      emptyText:
        'AgentMob behind-the-scenes, dev notes and AI ideas. In the meantime, write to me if a topic appeals to you.',
      suggest: 'Suggest a topic',
      subject: 'Article idea',
      preview: 'Preview of {title}',
      illustration: 'Illustration for {title}',
      readAria: 'Read {title}',
    },
    visitor: { country: 'Detected country: {country}' },
  },

  profile: {
    role: 'Backend Dev',
    location: 'based in Benin',
    country: 'Benin',
    avatarAlt: 'Djam Deen’s cat',
    roles: ['Backend Developer', 'AI-Assisted Product Builder', 'FC Barcelona Fan', 'Cats Lover'],
  },

  covers: {
    agentmob: {
      kicker: 'Open source · PWA',
      title: 'AgentMob',
      tagline: 'Pilot your AI agents from your phone.',
      note: 'Your PC works. Your phone controls.',
    },
    agentmobBlog: {
      kicker: 'BLOG',
      title: 'Why I built AgentMob',
      tagline: 'Pilot your AI agents from your phone.',
    },
    profVsRed: {
      dossier: 'FILE N°{number}',
      architect: 'Archetype',
      game: 'Game',
      weapon: 'Weapon',
      duel: 'DUEL',
      professorName: 'THE PROFESSOR',
      professorAlias: 'Sergio Marquina',
      professorArchetype: 'the architect',
      professorGame: 'chess',
      professorWeapon: 'the plan',
      redName: 'RAYMOND REDDINGTON',
      redAlias: 'Alias “Red”, the Concierge of Crime',
      redArchetype: 'the tightrope walker',
      redGame: 'poker',
      redWeapon: 'influence',
      footerTitle: 'THE PROFESSOR VS REDDINGTON',
      footerSubtitle: 'WHICH CRIMINAL MASTERMIND WOULD YOU CHOOSE?',
    },
  },

  projects: {
    agentmob: {
      description:
        'A mobile app that lets you steer and authorise your command-line AI agents from your phone while they work on your computer.',
      highlights: [
        { label: 'Mobile', value: 'Installable PWA' },
        { label: 'PC', value: 'Local npm server + SQLite' },
        { label: 'Link', value: 'Encrypted real time' },
        { label: 'Signalling', value: 'Never sees the content' },
      ],
      body: [
        'Command-line AI agents work in a terminal. We give them long tasks, but we have to stay in front of the screen to follow along, restart them and, above all, approve every permission request. As soon as we step away, the agent keeps working — and we lose control over what it is doing.',
        'AgentMob flips the situation with a simple idea: “Telegram for your agents”. One conversation per session, asynchronous replies, notifications, and permission requests that land on your phone. You send an instruction, the agent works on the PC, you approve with your thumb. The PC works, the phone controls.',
        'The interface borrows from messaging apps: a conversation list, status dots, bubbles, intermediate steps grouped into a collapsible block. Permission requests take the shape of an action card with three possible answers: allow, allow for the session, deny. Several agents (Codex, Claude Code, Antigravity) live in the same app, each with an honest support badge.',
        'On the technical side, four building blocks: an installable mobile app (PWA), a local server distributed through npm that runs the agents and keeps the history in a SQLite database, an encrypted real-time channel between the phone and the PC, and a minimal signalling service that never sees the content. The PC is the source of truth; nothing is stored with an editor. Pairing happens through a QR code, with no account and no network tunnel to configure. Everything is open source, under a permissive licence, and free.',
        'The project started from a concrete annoyance and was run like a real product: a single specification acting as the source of truth, a deliberately tight version 1 scope, measurable success criteria and conscious security trade-offs. A solid base first, extensions afterwards.',
      ],
    },
  },

  currentWork: { status: 'In progress' },

  interests: [
    {
      title: 'Music',
      badge: 'Rap / Drill / Pop',
      description:
        'Always headphones on. Rap and drill for the rhythm, and a little pop to mix things up.',
    },
    {
      title: 'Football',
      badge: 'FC Barcelona',
      description:
        'Barcelona at heart. A real attachment to collective play, vision and the club’s culture of progress.',
    },
    {
      title: 'Cats',
      badge: 'Cat Lover 🐾',
      description:
        'Absolutely crazy about cats. They rule the house, and we love them that way.',
    },
    {
      title: 'Mindset',
      badge: 'Motivation',
      description:
        'My motto: “Dream big and work bigger.” Always ready to take on new challenges.',
    },
    {
      title: 'Series',
      badge: 'Thinking & Strategy',
      description:
        'A big fan of shows that keep your brain switched on. I love complex plots, well-oiled strategies and ultra-tight plans. From The Mentalist to Money Heist, via Scorpion and The Blacklist, I love it when they hatch crazy plans, solve complex riddles and turn your brain inside out until the last minute.',
      links: [
        { label: 'Mentalist', href: 'https://www.themoviedb.org/tv/5920-the-mentalist' },
        { label: 'Casa de Papel', href: 'https://www.themoviedb.org/tv/71446-la-casa-de-papel' },
        { label: 'Scorpion', href: 'https://www.themoviedb.org/tv/60797-scorpion' },
        { label: 'The Blacklist', href: 'https://www.themoviedb.org/tv/46952-the-blacklist' },
      ],
    },
    {
      title: 'Soft Skill',
      badge: 'Teamwork',
      description:
        'I love collaborating and moving forward together. For me, the best ideas and the best projects are built as a team.',
    },
  ],

  blogPosts: {
    agentmob: {
      title: 'Why I built AgentMob',
      theme: 'AgentMob',
      excerpt:
        'It’s 11 pm, my agent is running in the other room — and waiting for approval. The tiny repeated annoyance that gave birth to AgentMob.',
      readTime: '6 min',
      content: `It’s 11 pm. My agent is running on the PC, in the other room. It writes code, runs tests, moves forward. And I’m lying down, hoping it won’t need anything — because if it does need something, I’ll have to get up.

That night, it needed something. An approval. One line to validate in a terminal, a few metres away from me, when the only thing I wanted was to answer “yes” from my phone.

I got up. I approved. I lay back down. And I told myself it was absurd.

AgentMob was born from that tiny frustration, repeated a dozen times.

## The real problem is not “coding from your phone”

People often imagine a mobile IDE, a tiny editor, a painful touch keyboard. That’s not it.

The problem is staying inside the control loop. A working agent makes decisions: reading a file, launching a command, changing something. Some are harmless, others deserve a pause. The terminal forces you to be present at that exact moment — and that moment rarely arrives when it suits you.

You start a task, you go do something else, and you come back to discover that the agent has been waiting for twenty minutes in front of a question you would have answered in two seconds.

This is not a productivity problem. It’s an availability problem.

## The promise: “Telegram for your agents”

Once the problem was properly stated, the solution became obvious. I didn’t want a dashboard, graphs or logs. I wanted the most ordinary thing in the world: a messaging app.

One conversation per session. Bubbles. Notifications when the agent needs me. And an approval card that lets me answer “allow”, “deny” or “allow for this session” with my thumb. Everything else — the steps, the tool calls, the file reads — is tucked into a collapsible block, because I don’t need to watch the agent breathe.

The idea fits in one sentence: **your PC works, your phone controls**.

## What I did not want to build

There are projects where you know very early what you refuse. Here, the list mattered as much as the features.

No network tunnel to install: most of these tools ask for forty minutes of system administration before the first message is sent. That’s not an experience, it’s an entrance exam.

No account: for a tool that talks to agents running on your own machine, an account adds nothing and already announces a future paid plan.

No conversation storage: the agents, files and history stay on the PC. The service that connects the two devices only needs to see one thing: that they are looking for each other.

## Honesty as a constraint

AgentMob supports Codex, Claude Code and Antigravity. They are not equal: different protocols, different capabilities, and one of them simply cannot ask for approval.

The temptation would be to announce “compatible with X, Y and Z” and let the user discover the limits by themselves. I chose the opposite: a support badge per agent — full, basic, experimental — clickable, explaining what it means in practice.

It sells less. But a user who discovers a limit in the field does not come back; a user who was told about it organises around it.

## The project I wrote before the code

The hardest part was not the code. It was deciding.

With AI agents speeding up the writing, producing a lot and fast in the wrong direction becomes the real risk. So before the first line, I wrote a single document, a source of truth: vision, version 1 scope, architecture, security, experience, tests, risks.

Every decision is numbered and justified, including the alternatives that were discarded. That is what helped me the most: six weeks later, you no longer remember why you rejected an option, and you reintroduce it for comfort.

## What I take away from it

The most useful tools often come from a tiny, repeated annoyance. I did not start with market research: I started by no longer wanting to get up.

Then, that constraints are a gift. One device, one folder per project, one source of truth. Each of those restrictions simplified the architecture and reduced the error surface.

Finally, that working with AI agents does not remove the need to think: it moves the effort. You write less code by hand, you spend much more time deciding, framing and testing in real conditions.

That is exactly why AgentMob exists. Because the field is where everything happens — and the field, most of the time, is not in front of the screen.`,
    },
    profVsRed: {
      title: 'The Professor vs Reddington: which criminal mastermind would you choose?',
      theme: 'My Notes',
      excerpt:
        'Two criminal geniuses, two ways of handling chaos. A quiet little duel between a perfect plan and monumental nerve.',
      readTime: '4 min',
      content: `Some characters leave a mark because they make you think, and others because they simply give you a good time. The Professor and Reddington are a bit of both. Two criminal geniuses, two ways of handling chaos, and a question that always comes back: which one would you choose to put a plan together?

I watched both shows with the same pleasure, but not for the same reasons. And the more I think about it, the more I tell myself that the real difference is not a matter of IQ. It’s a matter of style.

## The Professor, the architect

Sergio Marquina is the guy who prepares a heist for years before even telling his team about it. Nothing is left to chance: the guards’ habits, the hostages’ reactions, the police’s timing. Everything is written, rehearsed, anticipated.

And what is strong is that he is not just a brain. The Professor is shy, a little socially awkward, but as soon as he has to defend his plan, he becomes someone else. He talks, he convinces, he inspires. His real weapon is not a gun, it’s the way he tells his story. His code — kill no one — is not only moral: it is also what gives his crew the image of “slightly noble thieves” facing a corrupt system.

His limit is that everything rests on the plan. When something unexpected happens, he can tense up, lose his bearings and struggle to step outside his own framework.

## Reddington, the tightrope walker

On the other side, Raymond Reddington is a different atmosphere. He is called the “Concierge of Crime”, and he does not work on a plan, but on network and influence. He does not predict the future: he manipulates it live.

Red is the king of conversation. He tells you a story, lies with a smile, charms you, and after three phone calls he has turned a situation around. The kind of man capable of organising a wedding and a kidney transplant on the same evening if it can serve him. He improvises, but it feels like everything was planned from the start.

His problem is the price of that power. Red does not really have moral limits: he has his own code, and he decides what is right. And his effectiveness depends heavily on his network and resources. Without that, he would be far less impressive.

## In the end, who wins?

Comparing the two is a bit like comparing a chess player to a poker player.

The Professor is the better strategist. If you need a perfect plan, executed to the letter, with a tight team and public opinion on your side, he’s your man. He is the master of the known, of preparation, of construction.

Reddington is the better tactician, and the greatest manipulator. If you are in a desperate and unpredictable situation, and you need to turn a balance of power around with cunning and influence, he’s your man. He is the master of the unknown, of adaptation, of opportunism.

There is no absolute “best”. It all depends on what you need.

The Professor will save you with a plan so clean that you won’t even need to understand what is happening. Reddington will save you by turning your worst enemy into your best ally over dinner and a good drink. One offers you the safety of certainty, the other the thrill of controlled chaos.`,
    },
  },

  quote: {
    text: '“The people who are crazy enough to think they can change the world are the ones who do.”',
    author: 'Steve Jobs',
  },

  faq: {
    title: 'Questions, answered.',
    subtitle: 'The short version of what I do, how I work, and what AgentMob is.',
    items: [
      {
        q: 'Who is Djam Deen?',
        a: 'Djam Deen (Djamal ALIDOU M.) is a backend developer who builds products with AI, based in Cotonou, Benin. He builds APIs, web apps and tools that solve real problems, and writes about the process on his blog.',
      },
      {
        q: 'What does Djam Deen work on?',
        a: 'Backend development (APIs, data, security and reliability), AI-assisted products and open-source tools. His current project is AgentMob, a mobile control room for command-line AI agents.',
      },
      {
        q: 'What is AgentMob?',
        a: 'AgentMob is an open-source, installable PWA that lets you follow and approve command-line AI agents (Codex, Claude Code, Antigravity) from your phone while they run on your computer. The PC keeps the files and history in SQLite; the phone receives the conversation and permission requests.',
      },
      {
        q: 'Which technologies does Djam Deen use?',
        a: 'TypeScript, React, Next.js, Node.js, Hono, Python, FastAPI, PostgreSQL, SQLite, Cloudflare, Vite, Vitest, and AI tools such as Claude, DeepSeek and ChatGPT. The stack is chosen per problem, not the other way round.',
      },
      {
        q: 'How does AgentMob handle privacy and security?',
        a: 'AgentMob runs a local npm server on your computer, stores history in a local SQLite database, and connects the phone through an encrypted real-time channel. The signalling service only helps the two devices find each other and never sees the content. Pairing uses a QR code, with no account and no tunnel to configure.',
      },
      {
        q: 'Is Djam Deen available for freelance work or collaborations?',
        a: 'I am always happy to talk about an idea, a project or a question. The simplest way to start is to email djamdeen10@gmail.com with a short description of what you have in mind.',
      },
      {
        q: 'Where is Djam Deen based?',
        a: 'Cotonou, Benin. He works remotely and writes in English and French; this portfolio is also available in Spanish, Portuguese, Arabic, Chinese, Japanese and Russian.',
      },
    ],
  },
};
