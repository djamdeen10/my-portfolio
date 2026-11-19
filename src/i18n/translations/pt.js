export default {
  meta: {
    role: 'Programador backend e criador de produtos com IA',
    description:
      'Portefólio de Djam Deen (djamdeen10), programador backend que cria produtos com IA. Ferramentas úteis e fixes, código limpo, gatos e grandes ideias.',
  },

  ui: {
    nav: { accueil: 'Início', projet: 'Projetos', contact: 'Contacto', blog: 'Blog' },
    routeTitles: {
      accueil: 'Portefólio',
      projet: 'Projetos',
      contact: 'Contacto',
      blog: 'Blog',
      projetDetail: 'Projeto',
      blogDetail: 'Artigo',
    },
    language: {
      change: 'Mudar de idioma',
      menu: 'Idiomas',
      close: 'Fechar a lista de idiomas',
      current: 'Idioma: {language}',
      detected: 'Idioma sugerido com base no seu país',
    },
    theme: { light: 'Ativar o tema claro', dark: 'Ativar o tema escuro' },
    sidebar: {
      nav: 'Navegação principal',
    },
    hero: {
      intro: 'olá, sou',
      myTime: 'a minha hora',
      myTimeTitle: 'A minha hora local',
      projects: 'Projetos',
      projectsAria: 'Ver os meus projetos',
      email: 'Enviar um email',
      github: 'Abrir o GitHub',
      x: 'Abrir o X',
      facebook: 'Abrir o Facebook',
    },
    time: { local: 'Hora local' },
    intro: {
      greeting: 'Olá 👋',
      paragraphs: [
        [
          { text: 'Chamo-me ' },
          { text: 'Djamal ALIDOU M.', strong: true },
          { text: ', mas podes chamar-me simplesmente Djam Deen. Sou natural do ' },
          { text: 'Benim', href: 'https://pt.wikipedia.org/wiki/Benim' },
          { text: ' e vivo em Cotonou.' },
        ],
        [
          {
            text: 'Especializado em desenvolvimento backend, asseguro-me de que as apps, os sites e as APIs funcionam mesmo, aguentam e são seguros — não apenas que são bonitos. ',
          },
          {
            text: 'E, ao contrário das ideias feitas sobre os devs backend, também sei fazer coisas muito limpas do lado do design 😏.',
            mark: true,
          },
        ],
        [
          {
            text: 'Também me apaixonam o empreendedorismo e a IA, que uso todos os dias no meu trabalho.',
          },
        ],
        [
          {
            text: 'O meu trabalho gira sobretudo à volta dos meus próprios produtos, de projetos open source e, por vezes, de produtos para particulares.',
          },
        ],
        [
          {
            text: 'Não construo só por construir: construo soluções para problemas reais.',
          },
        ],
      ],
    },
    skills: { title: 'Stack', hint: 'passa o cursor pelas etiquetas' },
    currentWork: {
      title: 'Neste momento',
      subtitle: 'Aquilo em que estou a trabalhar atualmente.',
      label: 'Projeto atual',
      details: 'Mais detalhes',
      all: 'Ver todos os meus projetos',
      preview: 'Pré-visualização de {title}',
      viewOnline: 'Ver {title} online',
      viewCode: 'Ver o código de {title} no GitHub',
      viewOnlineTitle: 'Ver o projeto online',
      viewCodeTitle: 'Ver o código no GitHub',
    },
    latestPost: {
      title: 'Último artigo',
      subtitle: 'O que escrevo quando não estou a programar.',
      all: 'Todos os artigos',
      read: 'Ler o artigo',
      readingTime: 'Tempo de leitura',
      preview: 'Pré-visualização de {title}',
      readAria: 'Ler {title}',
    },
    interests: { title: 'Interesses e soft skills.', tmdb: '{name} no TMDB' },
    projects: {
      title: 'Projetos.',
      subtitle: 'Aquilo em que passo as minhas noites.',
      countOne: '{count} projeto',
      countOther: '{count} projetos',
      repos: 'Ver todos os repositórios',
      details: 'Mais detalhes',
      preview: 'Pré-visualização de {title}',
      viewOnline: 'Ver {title} online',
      viewCode: 'Ver o código de {title} no GitHub',
      viewOnlineTitle: 'Ver o projeto online',
      viewCodeTitle: 'Ver o código no GitHub',
    },
    project: {
      back: '← Todos os projetos',
      about: 'Sobre',
      stack: 'Stack',
      bricks: 'Os blocos',
      body: 'O projeto',
      view: 'Ver o projeto',
      source: 'Código-fonte',
      notFound: 'Projeto não encontrado.',
      notFoundText: 'Este projeto não existe ou já não está online.',
      preview: 'Pré-visualização de {title}',
    },
    contact: {
      title: 'Queres falar comigo?',
      subtitle: 'Escolhe o canal que preferires.',
      email: 'Email',
      x: 'X (antigo Twitter)',
      facebook: 'Facebook',
      github: 'GitHub',
    },
    contactCta: {
      title: 'Uma ideia, um projeto, uma pergunta?',
      text: 'Estou sempre disponível para falar sobre isso. O mais simples é escreveres-me.',
      write: 'Escrever-me',
      other: 'Outros contactos',
    },
    blog: {
      title: 'Blog.',
      subtitle: 'Notas de desenvolvimento, bastidores e ideias, escritas quando tenho algo para dizer.',
      countOne: '{count} artigo',
      countOther: '{count} artigos',
      soon: 'em breve',
      search: 'Pesquisar um artigo',
      searchPlaceholder: 'Pesquisar um artigo',
      all: 'Todos',
      latest: 'Último artigo',
      others: 'Os outros artigos',
      noResults: 'Nenhum artigo encontrado.',
      noResultsHint: 'Tenta outro título ou muda de tema.',
      read: 'Ler o artigo',
      readingTime: 'Tempo de leitura',
      back: '← Todos os artigos',
      notFound: 'Artigo não encontrado.',
      notFoundText: 'Este artigo não existe ou já não está online.',
      preparing: 'Este artigo ainda está em preparação.',
      preparingText: 'Chega em breve. Entretanto, já há bastante para ler.',
      emptyTitle: 'Os primeiros artigos chegam em breve.',
      emptyText:
        'Bastidores do AgentMob, notas de desenvolvimento e ideias sobre IA. Entretanto, escreve-me se algum tema te interessar.',
      suggest: 'Sugerir um tema',
      subject: 'Ideia de artigo',
      preview: 'Pré-visualização de {title}',
      illustration: 'Ilustração de {title}',
      readAria: 'Ler {title}',
    },
    visitor: { country: 'País detetado: {country}' },
  },

  profile: {
    role: 'Programador Backend',
    location: 'com base no Benim',
    country: 'Benim',
    avatarAlt: 'O gato do Djam Deen',
    roles: ['Programador backend', 'Criador de produtos com IA', 'Adepto do FC Barcelona', 'Amante de gatos'],
  },

  covers: {
    agentmob: {
      kicker: 'Open source · PWA',
      title: 'AgentMob',
      tagline: 'Controla os teus agentes de IA a partir do telemóvel.',
      note: 'O teu PC trabalha. O teu telemóvel controla.',
    },
    agentmobBlog: {
      kicker: 'BLOG',
      title: 'Porque construí o AgentMob',
      tagline: 'Controla os teus agentes de IA a partir do telemóvel.',
    },
    profVsRed: {
      dossier: 'DOSSIER N°{number}',
      architect: 'Arquétipo',
      game: 'Jogo',
      weapon: 'Arma',
      duel: 'DUELO',
      professorName: 'O PROFESSOR',
      professorAlias: 'Sergio Marquina',
      professorArchetype: 'o arquiteto',
      professorGame: 'o xadrez',
      professorWeapon: 'o plano',
      redName: 'RAYMOND REDDINGTON',
      redAlias: 'Alcunha «Red», o Concierge do Crime',
      redArchetype: 'o funâmbulo',
      redGame: 'o póquer',
      redWeapon: 'a influência',
      footerTitle: 'O PROFESSOR VS REDDINGTON',
      footerSubtitle: 'QUE MENTE CRIMINOSA ESCOLHIAS?',
    },
  },

  projects: {
    agentmob: {
      description:
        'Uma aplicação móvel que permite pilotar e autorizar os teus agentes de IA de linha de comandos a partir do telemóvel, enquanto trabalham no teu computador.',
      highlights: [
        { label: 'Móvel', value: 'PWA instalável' },
        { label: 'PC', value: 'Servidor local npm + SQLite' },
        { label: 'Ligação', value: 'Tempo real cifrado' },
        { label: 'Sinalização', value: 'Nunca vê o conteúdo' },
      ],
      body: [
        'Os agentes de IA de linha de comandos trabalham num terminal. Confiamos-lhes tarefas longas, mas é preciso ficar em frente ao ecrã para os acompanhar, relançar e, sobretudo, validar cada pedido de autorização. Assim que nos afastamos, o agente continua a trabalhar — e perdemos o controlo sobre o que está a fazer.',
        'O AgentMob inverte a situação com uma ideia simples: «Telegram para os teus agentes». Uma conversa por sessão, respostas assíncronas, notificações e autorizações que chegam ao telemóvel. Lanças uma instrução, o agente trabalha no PC, validas com o polegar. O PC trabalha, o telemóvel controla.',
        'A interface inspira-se nas aplicações de mensagens: lista de conversas, indicadores de estado, balões e passos intermédios agrupados num bloco recolhível. Os pedidos de autorização assumem a forma de um cartão de ação com três respostas possíveis: permitir, permitir para a sessão, recusar. Vários agentes (Codex, Claude Code, Antigravity) convivem na mesma aplicação, cada um com um selo de suporte honesto.',
        'Do lado técnico, quatro peças: uma aplicação móvel instalável (PWA), um servidor local distribuído por npm que corre os agentes e guarda o histórico numa base SQLite, um canal em tempo real cifrado entre o telemóvel e o PC, e um serviço de sinalização mínimo que nunca vê o conteúdo. O PC é a fonte da verdade; nada é guardado num editor. O emparelhamento faz-se por código QR, sem conta e sem túnel de rede para configurar. Tudo é open source, com licença permissiva e gratuito.',
        'O projeto nasce de um incómodo concreto e foi conduzido como um produto real: uma especificação única que serve de fonte da verdade, um âmbito da versão 1 deliberadamente apertado, critérios de sucesso mensuráveis e decisões de segurança assumidas. Primeiro uma base sólida; depois, as extensões.',
      ],
    },
  },

  currentWork: { status: 'Em curso' },

  interests: [
    {
      title: 'Música',
      badge: 'Rap / Drill / Pop',
      description:
        'Sempre com auscultadores. Rap e drill pelo ritmo, e um pouco de pop para variar.',
    },
    {
      title: 'Futebol',
      badge: 'FC Barcelona',
      description:
        'Barcelonista de coração. Uma verdadeira ligação ao jogo coletivo, à visão e à cultura de progressão do clube.',
    },
    {
      title: 'Gatos',
      badge: 'Amante de gatos 🐾',
      description:
        'Absolutamente apaixonado por gatos. Mandam em casa, e gostamos deles assim.',
    },
    {
      title: 'Mentalidade',
      badge: 'Motivação',
      description:
        'O meu lema: «Sonha em grande e trabalha ainda mais em grande». Sempre pronto para novos desafios.',
    },
    {
      title: 'Séries',
      badge: 'Reflexão e estratégia',
      description:
        'Grande fã de séries que obrigam a manter o cérebro ligado. Adoro enredos complexos, estratégias bem oleadas e planos milimétricos. Do Mentalist a La Casa de Papel, passando por Scorpion e The Blacklist, gosto quando se elaboram planos incríveis, se resolvem enigmas complexos e se dá a volta ao cérebro até ao último minuto.',
      links: [
        { label: 'Mentalist', href: 'https://www.themoviedb.org/tv/5920-the-mentalist' },
        { label: 'Casa de Papel', href: 'https://www.themoviedb.org/tv/71446-la-casa-de-papel' },
        { label: 'Scorpion', href: 'https://www.themoviedb.org/tv/60797-scorpion' },
        { label: 'The Blacklist', href: 'https://www.themoviedb.org/tv/46952-the-blacklist' },
      ],
    },
    {
      title: 'Competência interpessoal',
      badge: 'Trabalho de equipa',
      description:
        'Adoro colaborar e avançar em conjunto. Para mim, as melhores ideias e os melhores projetos constroem-se em equipa.',
    },
  ],

  blogPosts: {
    agentmob: {
      title: 'Porque construí o AgentMob',
      theme: 'AgentMob',
      excerpt:
        'São 23h, o meu agente trabalha na outra sala — e espera uma autorização. O pequeno incómodo repetido que deu origem ao AgentMob.',
      readTime: '6 min',
      content: `São 23h. O meu agente trabalha no PC, na outra sala. Escreve código, lança testes, avança. E eu estou deitado, à espera que não precise de nada — porque, se precisar de algo, vou ter de me levantar.

Naquela noite, precisou de algo. Uma autorização. Uma linha para validar num terminal, a poucos metros de mim, quando a única coisa que eu queria era responder «sim» a partir do telemóvel.

Levantei-me. Validei. Voltei a deitar-me. E disse a mim mesmo que era absurdo.

Foi desta pequena frustração, repetida uma dúzia de vezes, que nasceu o AgentMob.

## O verdadeiro problema não é «programar a partir do telemóvel»

Muitas vezes imaginamos um IDE móvel, um editor minúsculo, um teclado tátil penoso. Não é isso.

O problema é ficar dentro do ciclo de controlo. Um agente a trabalhar toma decisões: ler um ficheiro, lançar um comando, alterar alguma coisa. Algumas são inofensivas, outras merecem que paremos. O terminal obriga-te a estar presente nesse momento exato — e esse momento raramente chega quando te dá jeito.

Lanças uma tarefa, vais fazer outra coisa e voltas para descobrir que o agente está há vinte minutos à espera de uma pergunta que terias respondido em dois segundos.

Não é um problema de produtividade. É um problema de disponibilidade.

## A promessa: «Telegram para os teus agentes»

Depois de o problema estar bem formulado, a solução tornou-se óbvia. Não queria um painel, nem gráficos, nem registos. Queria a coisa mais banal do mundo: uma aplicação de mensagens.

Uma conversa por sessão. Balões. Notificações quando o agente precisa de mim. E um cartão de autorização que me deixa responder «permitir», «recusar» ou «permitir para esta sessão» com o polegar. Todo o resto — os passos, as chamadas de ferramentas, as leituras de ficheiros — fica guardado num bloco recolhível, porque não preciso de ver o agente a respirar.

A ideia cabe numa frase: **o teu PC trabalha, o teu telemóvel controla**.

## O que não queria construir

Há projetos em que sabemos muito cedo o que recusamos. Aqui, a lista contou tanto como as funcionalidades.

Sem túnel de rede para instalar: a maioria destas ferramentas pede quarenta minutos de administração de sistemas antes da primeira mensagem enviada. Isso não é uma experiência, é um exame de admissão.

Sem conta: para uma ferramenta que fala com agentes a correr na tua própria máquina, uma conta não traz nada e já anuncia uma futura oferta paga.

Sem armazenamento de conversas: os agentes, os ficheiros e o histórico ficam no PC. O serviço que liga os dois dispositivos só precisa de ver uma coisa: que eles se estão a procurar.

## A honestidade como restrição

O AgentMob suporta Codex, Claude Code e Antigravity. Não são equivalentes: protocolos diferentes, capacidades diferentes, e um deles simplesmente não sabe pedir autorização.

A tentação seria anunciar «compatível com X, Y e Z» e deixar o utilizador descobrir os limites por si. Escolhi o contrário: um selo de suporte por agente — completo, básico, experimental — clicável, que explica o que isso implica na prática.

Vende menos. Mas um utilizador que descobre um limite no terreno não volta; um utilizador a quem o limite foi anunciado organiza-se em torno dele.

## O projeto que escrevi antes do código

A parte mais difícil não foi o código. Foi decidir.

Com agentes de IA a acelerar a escrita, produzir muito e depressa na direção errada torna-se o verdadeiro risco. Por isso, antes da primeira linha, escrevi um documento único, fonte da verdade: visão, âmbito da versão 1, arquitetura, segurança, experiência, testes e riscos.

Cada decisão está numerada e justificada, incluindo as alternativas descartadas. Foi o que mais me serviu: seis semanas depois, já não te lembras porque recusaste uma opção, e voltas a introduzi-la por conforto.

## O que retiro disto

As ferramentas mais úteis nascem muitas vezes de um incómodo minúsculo e repetido. Não comecei por um estudo de mercado: comecei por já não querer levantar-me.

Depois, que a restrição é um presente. Um só dispositivo, uma só pasta por projeto, uma só fonte da verdade. Cada uma dessas restrições simplificou a arquitetura e reduziu a superfície de erro.

Por fim, que trabalhar com agentes de IA não dispensa pensar: desloca o esforço. Escreves menos código à mão, passas muito mais tempo a decidir, a enquadrar e a testar em condições reais.

É exatamente por isso que o AgentMob existe. Porque o terreno é onde tudo se joga — e o terreno, na maioria das vezes, não está em frente ao ecrã.`,
    },
    profVsRed: {
      title: 'O Professor vs Reddington: que mente criminosa escolhias?',
      theme: 'As Minhas Notas',
      excerpt:
        'Dois génios do crime, duas formas de gerir o caos. Um pequeno duelo tranquilo entre um plano perfeito e uma lata monumental.',
      readTime: '4 min',
      content: `Há personagens que nos marcam porque nos fazem pensar, e outros porque simplesmente nos fazem passar um bom bocado. O Professor e o Reddington são um pouco das duas coisas. Dois génios do crime, duas formas de gerir o caos, e uma pergunta que volta sempre: qual dos dois escolherias para montar um plano?

Vi as duas séries com o mesmo prazer, mas não pelas mesmas razões. E quanto mais penso nisso, mais me convenço de que a verdadeira diferença não é uma questão de QI. É uma questão de estilo.

## O Professor, o arquiteto

Sergio Marquina é o tipo que prepara um assalto durante anos antes mesmo de falar dele à equipa. Nada é deixado ao acaso: os hábitos dos guardas, as reações dos reféns, o timing da polícia. Tudo está escrito, repetido, antecipado.

E o que é forte é que não é apenas um cérebro. O Professor é tímido, um pouco desajeitado socialmente, mas assim que se trata de defender o seu plano torna-se outra pessoa. Fala, convence, inspira. A sua verdadeira arma não é uma pistola, é a forma como conta a sua história. O seu código — não matar ninguém — não é apenas moral: é também o que dá à sua equipa a imagem de «ladrões um pouco nobres» face a um sistema corrupto.

O seu limite é que tudo assenta no plano. Quando surge um imprevisto, pode retrair-se, perder as referências e ter dificuldade em sair do seu próprio quadro.

## Reddington, o funâmbulo

Do outro lado, Raymond Reddington é outra atmosfera. Chamam-lhe o «Concierge do Crime», e não funciona por plano, mas por rede e influência. Não prevê o futuro: manipula-o em direto.

Red é o rei da conversa. Conta-te uma história, mente-te com um sorriso, seduz-te, e ao fim de três chamadas deu a volta a uma situação. O tipo de homem capaz de organizar um casamento e um transplante de rim na mesma noite, se isso lhe servir. Improvisa, mas parece que tudo estava previsto desde o início.

O seu problema é o preço desse poder. Red não tem realmente limites morais: tem o seu código, e é ele que decide o que é justo. E a sua eficácia depende muito da sua rede e dos seus recursos. Sem isso, seria muito menos impressionante.

## No fim, quem ganha?

Comparar os dois é um pouco como comparar um jogador de xadrez com um jogador de póquer.

O Professor é o melhor estratega. Se precisas de um plano perfeito, executado à letra, com uma equipa unida e a opinião pública do teu lado, é ele. É o mestre do conhecido, da preparação, da construção.

Reddington é o melhor tático e o maior manipulador. Se estás numa situação desesperada e imprevisível e é preciso virar uma correlação de forças com astúcia e influência, é ele. É o mestre do desconhecido, da adaptação, do oportunismo.

Não há realmente um «melhor» absoluto. Tudo depende daquilo de que precisas.

O Professor vai salvar-te com um plano tão limpo que nem vais precisar de entender o que está a acontecer. Reddington vai salvar-te transformando o teu pior inimigo no teu melhor aliado à volta de um jantar e de um bom copo. Um oferece-te a segurança da certeza, o outro a exaltação do caos controlado.`,
    },
  },

  notFound: {
    title: 'Página não encontrada.',
    text: 'Esta página não existe ou foi movida.',
    home: 'Voltar ao início',
  },

  quote: {
    text: '«As pessoas que estão suficientemente loucas para pensar que podem mudar o mundo são as que o fazem.»',
    author: 'Steve Jobs',
  },
};
