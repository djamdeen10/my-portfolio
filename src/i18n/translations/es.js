export default {
  meta: {
    role: 'Desarrollador backend y creador de productos con IA',
    description:
      'Portafolio de Djam Deen (djamdeen10), desarrollador backend que crea productos con IA. Herramientas útiles y molonas, código limpio, gatos y grandes ideas.',
  },

  ui: {
    nav: { accueil: 'Inicio', projet: 'Proyectos', contact: 'Contacto', blog: 'Blog' },
    routeTitles: {
      accueil: 'Portafolio',
      projet: 'Proyectos',
      contact: 'Contacto',
      blog: 'Blog',
      projetDetail: 'Proyecto',
      blogDetail: 'Artículo',
    },
    language: {
      change: 'Cambiar de idioma',
      menu: 'Idiomas',
      close: 'Cerrar la lista de idiomas',
      current: 'Idioma: {language}',
      detected: 'Idioma sugerido según tu país',
    },
    theme: { light: 'Activar el tema claro', dark: 'Activar el tema oscuro' },
    sidebar: {
      nav: 'Navegación principal',
    },
    hero: {
      intro: 'hola, soy',
      myTime: 'mi hora',
      myTimeTitle: 'Mi hora local',
      projects: 'Proyectos',
      projectsAria: 'Ver mis proyectos',
      email: 'Enviar un correo',
      github: 'Abrir GitHub',
      x: 'Abrir X',
      facebook: 'Abrir Facebook',
    },
    time: { local: 'Hora local' },
    intro: {
      greeting: 'Hola 👋',
      paragraphs: [
        [
          { text: 'Me llamo ' },
          { text: 'Djamal ALIDOU M.', strong: true },
          { text: ', pero puedes llamarme simplemente Djam Deen. Soy originario de ' },
          { text: 'Benín', href: 'https://es.wikipedia.org/wiki/Ben%C3%ADn' },
          { text: ' y vivo en Cotonú.' },
        ],
        [
          {
            text: 'Especializado en desarrollo backend, me aseguro de que las apps, los sitios y las APIs funcionen de verdad, aguanten y sean seguros, no solo de que sean bonitos. ',
          },
          {
            text: 'Y, en contra de los tópicos sobre los devs backend, también sé hacer cosas muy limpias en el diseño 😏.',
            mark: true,
          },
        ],
        [
          {
            text: 'También me apasionan el emprendimiento y la IA, que uso a diario en mi trabajo.',
          },
        ],
        [
          {
            text: 'Mi trabajo gira principalmente en torno a mis propios productos, proyectos de código abierto y, a veces, productos para particulares.',
          },
        ],
        [
          {
            text: 'No construyo por construir: construyo soluciones para problemas reales.',
          },
        ],
      ],
    },
    skills: { title: 'Stack', hint: 'pasa el cursor por las etiquetas' },
    currentWork: {
      title: 'Ahora mismo',
      subtitle: 'En lo que estoy trabajando actualmente.',
      label: 'Proyecto actual',
      details: 'Más detalles',
      all: 'Ver todos mis proyectos',
      preview: 'Vista previa de {title}',
      viewOnline: 'Ver {title} en línea',
      viewCode: 'Ver el código de {title} en GitHub',
      viewOnlineTitle: 'Ver el proyecto en línea',
      viewCodeTitle: 'Ver el código en GitHub',
    },
    latestPost: {
      title: 'Último artículo',
      subtitle: 'Lo que escribo cuando no estoy programando.',
      all: 'Todos los artículos',
      read: 'Leer el artículo',
      readingTime: 'Tiempo de lectura',
      preview: 'Vista previa de {title}',
      readAria: 'Leer {title}',
    },
    interests: { title: 'Intereses y soft skills.', tmdb: '{name} en TMDB' },
    projects: {
      title: 'Proyectos.',
      subtitle: 'En lo que paso mis noches.',
      countOne: '{count} proyecto',
      countOther: '{count} proyectos',
      repos: 'Ver todos los repositorios',
      details: 'Más detalles',
      preview: 'Vista previa de {title}',
      viewOnline: 'Ver {title} en línea',
      viewCode: 'Ver el código de {title} en GitHub',
      viewOnlineTitle: 'Ver el proyecto en línea',
      viewCodeTitle: 'Ver el código en GitHub',
    },
    project: {
      back: '← Todos los proyectos',
      about: 'Acerca de',
      stack: 'Stack',
      bricks: 'Los componentes',
      body: 'El proyecto',
      view: 'Ver el proyecto',
      source: 'Código fuente',
      notFound: 'Proyecto no encontrado.',
      notFoundText: 'Este proyecto no existe o ya no está en línea.',
      preview: 'Vista previa de {title}',
    },
    contact: {
      title: '¿Quieres contactar conmigo?',
      subtitle: 'Elige el canal que prefieras.',
      email: 'Email',
      x: 'X (antes Twitter)',
      facebook: 'Facebook',
      github: 'GitHub',
    },
    contactCta: {
      title: '¿Una idea, un proyecto, una pregunta?',
      text: 'Siempre estoy dispuesto a hablarlo. Lo más fácil es que me escribas.',
      write: 'Escríbeme',
      other: 'Otros contactos',
    },
    blog: {
      title: 'Blog.',
      subtitle: 'Notas de desarrollo, entre bastidores e ideas, escritas cuando tengo algo que decir.',
      countOne: '{count} artículo',
      countOther: '{count} artículos',
      soon: 'pronto',
      search: 'Buscar un artículo',
      searchPlaceholder: 'Buscar un artículo',
      all: 'Todos',
      latest: 'Último artículo',
      others: 'Los otros artículos',
      noResults: 'No se ha encontrado ningún artículo.',
      noResultsHint: 'Prueba otro título o cambia de tema.',
      read: 'Leer el artículo',
      readingTime: 'Tiempo de lectura',
      back: '← Todos los artículos',
      notFound: 'Artículo no encontrado.',
      notFoundText: 'Este artículo no existe o ya no está en línea.',
      preparing: 'Este artículo aún está en preparación.',
      preparingText: 'Llegará pronto. Mientras tanto, ya hay bastante que leer.',
      emptyTitle: 'Los primeros artículos llegarán pronto.',
      emptyText:
        'Los entresijos de AgentMob, notas de desarrollo e ideas sobre IA. Mientras tanto, escríbeme si algún tema te interesa.',
      suggest: 'Sugerir un tema',
      subject: 'Idea de artículo',
      preview: 'Vista previa de {title}',
      illustration: 'Ilustración de {title}',
      readAria: 'Leer {title}',
    },
    visitor: { country: 'País detectado: {country}' },
  },

  profile: {
    role: 'Desarrollador Backend',
    location: 'con base en Benín',
    country: 'Benín',
    avatarAlt: 'El gato de Djam Deen',
    roles: ['Desarrollador backend', 'Creador de productos con IA', 'Aficionado del FC Barcelona', 'Amante de los gatos'],
  },

  covers: {
    agentmob: {
      kicker: 'Código abierto · PWA',
      title: 'AgentMob',
      tagline: 'Controla tus agentes de IA desde el móvil.',
      note: 'Tu PC trabaja. Tu móvil controla.',
    },
    agentmobBlog: {
      kicker: 'BLOG',
      title: 'Por qué construí AgentMob',
      tagline: 'Controla tus agentes de IA desde el móvil.',
    },
    profVsRed: {
      dossier: 'EXPEDIENTE N°{number}',
      architect: 'Arquetipo',
      game: 'Juego',
      weapon: 'Arma',
      duel: 'DUELO',
      professorName: 'EL PROFESOR',
      professorAlias: 'Sergio Marquina',
      professorArchetype: 'el arquitecto',
      professorGame: 'el ajedrez',
      professorWeapon: 'el plan',
      redName: 'RAYMOND REDDINGTON',
      redAlias: 'Alias «Red», el Conserje del Crimen',
      redArchetype: 'el funámbulo',
      redGame: 'el póker',
      redWeapon: 'la influencia',
      footerTitle: 'EL PROFESOR VS REDDINGTON',
      footerSubtitle: '¿QUÉ MENTE CRIMINAL ELEGIRÍAS?',
    },
  },

  projects: {
    agentmob: {
      description:
        'Una aplicación móvil que permite pilotar y autorizar a tus agentes de IA de línea de comandos desde el teléfono mientras trabajan en tu ordenador.',
      highlights: [
        { label: 'Móvil', value: 'PWA instalable' },
        { label: 'PC', value: 'Servidor local npm + SQLite' },
        { label: 'Enlace', value: 'Tiempo real cifrado' },
        { label: 'Señalización', value: 'Nunca ve el contenido' },
      ],
      body: [
        'Los agentes de IA de línea de comandos trabajan en una terminal. Les confiamos tareas largas, pero hay que quedarse delante de la pantalla para seguirlos, relanzarlos y, sobre todo, validar cada solicitud de autorización. En cuanto te alejas, el agente sigue trabajando y pierdes el control de lo que hace.',
        'AgentMob le da la vuelta a la situación con una idea sencilla: «Telegram para tus agentes». Una conversación por sesión, respuestas asíncronas, notificaciones y autorizaciones que llegan al móvil. Lanzas una instrucción, el agente trabaja en el PC, validas con el pulgar. El PC trabaja, el móvil controla.',
        'La interfaz toma prestado de las aplicaciones de mensajería: lista de conversaciones, indicadores de estado, burbujas y pasos intermedios agrupados en un bloque plegable. Las solicitudes de autorización adoptan la forma de una tarjeta de acción con tres respuestas posibles: permitir, permitir para la sesión, denegar. Varios agentes (Codex, Claude Code, Antigravity) conviven en la misma aplicación, cada uno con una insignia de soporte honesta.',
        'En lo técnico, cuatro piezas: una aplicación móvil instalable (PWA), un servidor local distribuido por npm que ejecuta los agentes y guarda el historial en una base SQLite, un canal en tiempo real cifrado entre el móvil y el PC, y un servicio de señalización mínimo que nunca ve el contenido. El PC es la fuente de la verdad; nada se guarda en casa de un editor. El emparejamiento se hace por código QR, sin cuenta y sin túnel de red que configurar. Todo es código abierto, con licencia permisiva y gratis.',
        'El proyecto nace de una molestia concreta y se ha llevado como un producto real: una especificación única que sirve de fuente de la verdad, un alcance de la versión 1 deliberadamente ajustado, criterios de éxito medibles y decisiones de seguridad asumidas. Primero una base sólida; después, las extensiones.',
      ],
    },
  },

  currentWork: { status: 'En curso' },

  interests: [
    {
      title: 'Música',
      badge: 'Rap / Drill / Pop',
      description:
        'Siempre con auriculares. Rap y drill por el ritmo, y un poco de pop para variar.',
    },
    {
      title: 'Fútbol',
      badge: 'FC Barcelona',
      description:
        'Barcelonista de corazón. Un apego real al juego colectivo, a la visión y a la cultura de progreso del club.',
    },
    {
      title: 'Gatos',
      badge: 'Amante de los gatos 🐾',
      description:
        'Absolutamente enamorado de los gatos. Mandan en casa, y nos gustan así.',
    },
    {
      title: 'Mentalidad',
      badge: 'Motivación',
      description:
        'Mi lema: «Sueña en grande y trabaja aún más grande». Siempre dispuesto a aceptar nuevos retos.',
    },
    {
      title: 'Series',
      badge: 'Reflexión y estrategia',
      description:
        'Gran fan de las series que te obligan a mantener el cerebro encendido. Me encantan las tramas complejas, las estrategias bien engrasadas y los planes milimétricos. De El Mentalista a La Casa de Papel, pasando por Scorpion y The Blacklist, me gusta cuando se elaboran planes increíbles, se resuelven enigmas complejos y te dan la vuelta a la cabeza hasta el último minuto.',
      links: [
        { label: 'Mentalist', href: 'https://www.themoviedb.org/tv/5920-the-mentalist' },
        { label: 'Casa de Papel', href: 'https://www.themoviedb.org/tv/71446-la-casa-de-papel' },
        { label: 'Scorpion', href: 'https://www.themoviedb.org/tv/60797-scorpion' },
        { label: 'The Blacklist', href: 'https://www.themoviedb.org/tv/46952-the-blacklist' },
      ],
    },
    {
      title: 'Habilidad interpersonal',
      badge: 'Trabajo en equipo',
      description:
        'Me encanta colaborar y avanzar juntos. Para mí, las mejores ideas y los mejores proyectos se construyen en equipo.',
    },
  ],

  blogPosts: {
    agentmob: {
      title: 'Por qué construí AgentMob',
      theme: 'AgentMob',
      excerpt:
        'Son las 23:00, mi agente trabaja en la otra habitación y espera una autorización. La pequeña molestia repetida que dio lugar a AgentMob.',
      readTime: '6 min',
      content: `Son las 23:00. Mi agente trabaja en el PC, en la otra habitación. Escribe código, lanza pruebas, avanza. Y yo estoy tumbado, esperando que no necesite nada, porque si necesita algo tendré que levantarme.

Esa noche necesitó algo. Una autorización. Una línea que validar en una terminal, a unos metros de mí, cuando lo único que quería era responder «sí» desde el móvil.

Me levanté. Validé. Me volví a tumbar. Y me dije que era absurdo.

De esa pequeña frustración, repetida una decena de veces, nació AgentMob.

## El verdadero problema no es «programar desde el móvil»

A menudo imaginamos un IDE móvil, un editor diminuto, un teclado táctil incómodo. No es eso.

El problema es quedarse dentro del bucle de control. Un agente que trabaja toma decisiones: leer un archivo, lanzar un comando, modificar algo. Algunas son inofensivas; otras merecen que nos detengamos. La terminal te obliga a estar presente en ese momento exacto, y ese momento rara vez llega cuando te viene bien.

Lanzas una tarea, te vas a hacer otra cosa y vuelves para descubrir que el agente lleva veinte minutos esperando delante de una pregunta que habrías respondido en dos segundos.

No es un problema de productividad. Es un problema de disponibilidad.

## La promesa: «Telegram para tus agentes»

Una vez formulado bien el problema, la solución era evidente. No quería un panel, ni gráficos, ni registros. Quería lo más normal del mundo: una aplicación de mensajería.

Una conversación por sesión. Burbujas. Notificaciones cuando el agente me necesita. Y una tarjeta de autorización que me deje responder «permitir», «denegar» o «permitir para esta sesión» con el pulgar. Todo lo demás —los pasos, las llamadas a herramientas, las lecturas de archivos— se guarda en un bloque plegable, porque no necesito ver respirar al agente.

La idea cabe en una frase: **tu PC trabaja, tu móvil controla**.

## Lo que no quería construir

Hay proyectos en los que sabes muy pronto lo que rechazas. Aquí, la lista importó tanto como las funcionalidades.

Sin túnel de red que instalar: la mayoría de estas herramientas te piden cuarenta minutos de administración de sistemas antes del primer mensaje enviado. Eso no es una experiencia, es un examen de acceso.

Sin cuenta: para una herramienta que habla con agentes que corren en tu propia máquina, una cuenta no aporta nada y ya anuncia una futura oferta de pago.

Sin almacenamiento de conversaciones: los agentes, los archivos y el historial se quedan en el PC. El servicio que conecta los dos dispositivos solo necesita ver una cosa: que se están buscando.

## La honestidad como restricción

AgentMob es compatible con Codex, Claude Code y Antigravity. No son equivalentes: protocolos distintos, capacidades distintas y uno de ellos sencillamente no sabe pedir autorización.

La tentación sería anunciar «compatible con X, Y y Z» y dejar que el usuario descubriera los límites por su cuenta. Elegí lo contrario: una insignia de soporte por agente —completa, básica, experimental—, clicable, que explica qué implica en la práctica.

Vende menos. Pero un usuario que descubre un límite sobre el terreno no vuelve; un usuario al que se le ha anunciado se organiza en torno a él.

## El proyecto que escribí antes del código

La parte más difícil no fue el código. Fue decidir.

Con agentes de IA para acelerar la escritura, producir mucho y rápido en la dirección equivocada se convierte en el verdadero riesgo. Así que antes de la primera línea escribí un documento único, fuente de la verdad: visión, alcance de la versión 1, arquitectura, seguridad, experiencia, pruebas y riesgos.

Cada decisión está numerada y justificada, incluidas las alternativas descartadas. Es lo que más me ha servido: seis semanas después ya no recuerdas por qué rechazaste una opción, y la reintroduces por comodidad.

## Lo que me llevo

Las herramientas más útiles nacen a menudo de una molestia minúscula y repetida. No empecé con un estudio de mercado: empecé por no querer levantarme más.

Después, que la restricción es un regalo. Un solo dispositivo, una sola carpeta por proyecto, una sola fuente de la verdad. Cada una de esas restricciones simplificó la arquitectura y redujo la superficie de error.

Y por último, que trabajar con agentes de IA no exime de pensar: desplaza el esfuerzo. Escribes menos código a mano y pasas mucho más tiempo decidiendo, acotando y probando en condiciones reales.

Es exactamente por eso por lo que existe AgentMob. Porque el terreno es donde se juega todo, y el terreno, la mayoría de las veces, no está delante de la pantalla.`,
    },
    profVsRed: {
      title: 'El Profesor vs Reddington: ¿qué mente criminal elegirías?',
      theme: 'Mis Notas',
      excerpt:
        'Dos genios del crimen, dos formas de gestionar el caos. Un pequeño duelo tranquilo entre un plan perfecto y un descaro monumental.',
      readTime: '4 min',
      content: `Hay personajes que te marcan porque te hacen pensar y otros porque simplemente te hacen pasar un buen rato. El Profesor y Reddington son un poco de las dos cosas. Dos genios del crimen, dos formas de gestionar el caos y una pregunta que siempre vuelve: ¿a cuál de los dos elegirías para montar un plan?

Vi las dos series con el mismo placer, pero no por las mismas razones. Y cuanto más lo pienso, más me digo que la verdadera diferencia no es una cuestión de coeficiente intelectual. Es una cuestión de estilo.

## El Profesor, el arquitecto

Sergio Marquina es el tipo que prepara un atraco durante años antes incluso de hablar de él con su equipo. Nada se deja al azar: las costumbres de los guardias, las reacciones de los rehenes, los tiempos de la policía. Todo está escrito, repetido, anticipado.

Y lo fuerte es que no es solo un cerebro. El Profesor es tímido, un poco torpe socialmente, pero en cuanto se trata de defender su plan se convierte en otro. Habla, convence, inspira. Su verdadera arma no es una pistola, es su forma de contar su historia. Su código —no matar a nadie— no es solo moral: también es lo que da a su banda una imagen de «ladrones un poco nobles» frente a un sistema corrupto.

Su límite es que todo descansa en el plan. Cuando llega un imprevisto, puede tensarse, perder sus referencias y tener dificultades para salir de su propio marco.

## Reddington, el funámbulo

Enfrente, Raymond Reddington es otro ambiente. Le llaman el «Conserje del Crimen» y no funciona a base de plan, sino de red e influencia. No predice el futuro: lo manipula en directo.

Red es el rey de la conversación. Te cuenta una historia, te miente con una sonrisa, te seduce y, al cabo de tres llamadas, ha dado la vuelta a una situación. El tipo de hombre capaz de organizar una boda y un trasplante de riñón en la misma noche si puede servirle. Improvisa, pero parece que todo estaba previsto desde el principio.

Su problema es el precio de ese poder. Red no tiene realmente límites morales: tiene su código, y es él quien decide qué está bien. Y su eficacia depende mucho de su red y sus recursos. Sin eso, sería mucho menos impresionante.

## Al final, ¿quién gana?

Comparar a los dos es un poco como comparar a un ajedrecista con un jugador de póker.

El Profesor es el mejor estratega. Si necesitas un plan perfecto, ejecutado al pie de la letra, con un equipo unido y la opinión pública de tu lado, es él. Es el maestro de lo conocido, de la preparación, de la construcción.

Reddington es el mejor táctico y el mayor manipulador. Si estás en una situación desesperada e imprevisible y hay que dar la vuelta a una relación de fuerzas con astucia e influencia, es él. Es el maestro de lo desconocido, de la adaptación, del oportunismo.

No hay realmente un «mejor» absoluto. Todo depende de lo que necesites.

El Profesor te salvará con un plan tan limpio que ni siquiera necesitarás entender lo que está pasando. Reddington te salvará convirtiendo a tu peor enemigo en tu mejor aliado alrededor de una cena y una buena copa. Uno te ofrece la seguridad de la certeza; el otro, la emoción del caos controlado.`,
    },
  },

  notFound: {
    title: 'Página no encontrada.',
    text: 'Esta página no existe o se ha movido.',
    home: 'Volver al inicio',
  },

  quote: {
    text: '«Solo quienes están lo bastante locos para pensar que pueden cambiar el mundo lo consiguen»',
    author: 'Steve Jobs',
  },
};
