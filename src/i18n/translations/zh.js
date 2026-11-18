export default {
  meta: {
    role: '后端开发者 & 用 AI 打造产品的人',
    description:
      'Djam Deen（djamdeen10）的个人作品集，一位用 AI 打造产品的后端开发者。喜欢有用又酷的工具、干净的代码、猫和大想法。',
  },

  ui: {
    nav: { accueil: '首页', projet: '项目', contact: '联系', blog: '博客' },
    routeTitles: {
      accueil: '作品集',
      projet: '项目',
      contact: '联系',
      blog: '博客',
      projetDetail: '项目',
      blogDetail: '文章',
    },
    language: {
      change: '切换语言',
      menu: '语言',
      close: '关闭语言列表',
      current: '语言：{language}',
      detected: '根据你所在的国家推荐的语言',
    },
    theme: { light: '切换到浅色主题', dark: '切换到深色主题' },
    sidebar: {
      nav: '主导航',
      bio: ['后端开发者', '用 AI 打造产品的人', '巴萨球迷', '猫奴'],
    },
    hero: {
      intro: '你好，我是',
      myTime: '我的时间',
      myTimeTitle: '我的当地时间',
      projects: '项目',
      projectsAria: '查看我的项目',
      email: '发送邮件',
      github: '打开 GitHub',
      x: '打开 X',
      facebook: '打开 Facebook',
    },
    time: { local: '当地时间' },
    intro: {
      greeting: '你好 👋',
      paragraphs: [
        [
          { text: '我是 ' },
          { text: 'Djamal ALIDOU M.', strong: true },
          { text: '，你也可以直接叫我 Djam Deen。我来自' },
          { text: '贝宁', href: 'https://zh.wikipedia.org/wiki/%E8%B4%9D%E5%AE%81' },
          { text: '，目前住在科托努。' },
        ],
        [
          {
            text: '我专注于后端开发，确保应用、网站和 API 真正能用、扛得住、并且安全——而不只是好看。',
          },
          {
            text: '而且和人们对后端开发者的刻板印象相反，我在设计方面也能做出非常干净的东西 😏。',
            mark: true,
          },
        ],
        [
          {
            text: '我也热爱创业和 AI，并在日常工作中使用它们。',
          },
        ],
        [
          {
            text: '我的工作主要围绕自己的产品、开源项目，偶尔也为个人客户做产品。',
          },
        ],
        [
          {
            text: '我不是为了造而造：我造的是真实问题的解决方案。',
          },
        ],
      ],
    },
    skills: { title: '技术栈', hint: '将鼠标悬停在标签上' },
    currentWork: {
      title: '正在进行',
      subtitle: '我目前在做的事情。',
      label: '当前项目',
      details: '更多细节',
      all: '查看我的所有项目',
      preview: '{title} 预览',
      viewOnline: '在线查看 {title}',
      viewCode: '在 GitHub 上查看 {title} 的代码',
      viewOnlineTitle: '在线查看项目',
      viewCodeTitle: '在 GitHub 上查看代码',
    },
    latestPost: {
      title: '最新文章',
      subtitle: '不写代码时我写的东西。',
      all: '所有文章',
      read: '阅读文章',
      readingTime: '阅读时间',
      preview: '{title} 预览',
      readAria: '阅读 {title}',
    },
    interests: { title: '兴趣与软技能。', tmdb: '{name} 在 TMDB' },
    projects: {
      title: '项目。',
      subtitle: '我熬夜在做的事情。',
      countOne: '{count} 个项目',
      countOther: '{count} 个项目',
      repos: '查看所有仓库',
      details: '更多细节',
      preview: '{title} 预览',
      viewOnline: '在线查看 {title}',
      viewCode: '在 GitHub 上查看 {title} 的代码',
      viewOnlineTitle: '在线查看项目',
      viewCodeTitle: '在 GitHub 上查看代码',
    },
    project: {
      back: '← 所有项目',
      about: '关于',
      stack: '技术栈',
      bricks: '组成部分',
      body: '项目介绍',
      view: '查看项目',
      source: '源代码',
      notFound: '未找到项目。',
      notFoundText: '这个项目不存在或已下线。',
      preview: '{title} 预览',
    },
    contact: {
      title: '想联系我吗？',
      subtitle: '选择你方便的渠道。',
      email: '邮件',
      x: 'X（原 Twitter）',
      facebook: 'Facebook',
      github: 'GitHub',
    },
    contactCta: {
      title: '一个想法、一个项目、一个问题？',
      text: '我随时愿意聊。最简单的办法是给我写信。',
      write: '给我写信',
      other: '其他联系方式',
    },
    blog: {
      title: '博客。',
      subtitle: '开发笔记、幕后故事和想法，有话说的时候才写。',
      countOne: '{count} 篇文章',
      countOther: '{count} 篇文章',
      soon: '即将上线',
      search: '搜索文章',
      searchPlaceholder: '搜索文章',
      all: '全部',
      latest: '最新文章',
      others: '其他文章',
      noResults: '没有找到文章。',
      noResultsHint: '试试别的标题，或换个主题。',
      read: '阅读文章',
      readingTime: '阅读时间',
      back: '← 所有文章',
      notFound: '未找到文章。',
      notFoundText: '这篇文章不存在或已下线。',
      preparing: '这篇文章还在准备中。',
      preparingText: '很快会发布。在此之前，已经有足够的内容可读。',
      emptyTitle: '第一批文章即将上线。',
      emptyText: 'AgentMob 的幕后、开发笔记和 AI 想法。在此之前，如果有感兴趣的话题，欢迎写信给我。',
      suggest: '推荐话题',
      subject: '文章想法',
      preview: '{title} 预览',
      illustration: '{title} 插图',
      readAria: '阅读 {title}',
    },
    visitor: { country: '检测到的国家：{country}' },
  },

  profile: {
    role: '后端开发者',
    location: '常驻贝宁',
    country: '贝宁',
    avatarAlt: 'Djam Deen 的猫',
    roles: ['后端开发者', '用 AI 打造产品的人', '巴萨球迷', '猫奴'],
  },

  covers: {
    agentmob: {
      kicker: '开源 · PWA',
      title: 'AgentMob',
      tagline: '在手机上掌控你的 AI 代理。',
      note: '电脑在工作。手机在掌控。',
    },
    agentmobBlog: {
      kicker: '博客',
      title: '我为什么做 AgentMob',
      tagline: '在手机上掌控你的 AI 代理。',
    },
    profVsRed: {
      dossier: '档案 N°{number}',
      architect: '原型',
      game: '游戏',
      weapon: '武器',
      duel: '对决',
      professorName: '教授',
      professorAlias: '塞尔吉奥·马基纳',
      professorArchetype: '建筑师',
      professorGame: '国际象棋',
      professorWeapon: '计划',
      redName: '雷蒙德·雷丁顿',
      redAlias: '代号「Red」，犯罪世界的门房',
      redArchetype: '走钢丝的人',
      redGame: '扑克',
      redWeapon: '影响力',
      footerTitle: '教授 VS 雷丁顿',
      footerSubtitle: '你会选择哪个犯罪大脑？',
    },
  },

  projects: {
    agentmob: {
      description:
        '一款手机应用，让你在电脑上的命令行 AI 代理工作时，用手机远程操控它们并批准请求。',
      highlights: [
        { label: '手机', value: '可安装 PWA' },
        { label: '电脑', value: '本地 npm 服务器 + SQLite' },
        { label: '连接', value: '加密实时通道' },
        { label: '信令', value: '永远看不到内容' },
      ],
      body: [
        '命令行的 AI 代理在终端里工作。我们把长任务交给它们，但必须守在屏幕前跟进、重启，最重要的是批准每一个授权请求。一旦离开，代理会继续工作——而我们就失去了对它行为的掌控。',
        'AgentMob 用一个简单的想法扭转局面：「给你的代理用的 Telegram」。每个会话一个对话、异步回复、通知，以及直接送到手机上的授权请求。你发出指令，代理在电脑上工作，你用拇指批准。电脑工作，手机掌控。',
        '界面借鉴了即时通讯应用：对话列表、状态圆点、气泡，以及收进可折叠区块的中间步骤。授权请求呈现为一张操作卡片，有三种回答：允许、本次会话允许、拒绝。多个代理（Codex、Claude Code、Antigravity）共存于同一个应用，每个都有诚实的支持徽章。',
        '技术上有四个部分：可安装的手机应用（PWA）；通过 npm 分发的本地服务器，负责运行代理并把历史保存在 SQLite 数据库；手机与电脑之间的加密实时通道；以及一个永远看不到内容的极简信令服务。电脑是事实来源，任何内容都不存放在服务商那里。配对通过二维码完成，无需账号，也无需配置网络隧道。全部开源、使用宽松许可证，并且免费。',
        '这个项目源于一个具体的烦恼，并按真实产品的方式推进：一份作为事实来源的单一规格说明、刻意收紧的 1.0 范围、可衡量的成功标准，以及有意识的安全取舍。先打好坚实基础，再做扩展。',
      ],
    },
  },

  currentWork: { status: '进行中' },

  interests: [
    {
      title: '音乐',
      badge: 'Rap / Drill / Pop',
      description: '耳机永远在头上。说唱和 drill 给我节奏，偶尔来点流行乐换换口味。',
    },
    {
      title: '足球',
      badge: 'FC Barcelona',
      description: '心属巴塞罗那。真正热爱团队足球、视野以及俱乐部不断进步的文化。',
    },
    {
      title: '猫',
      badge: '猫奴 🐾',
      description: '彻底的爱猫人士。它们在家里说了算，而我们就喜欢这样。',
    },
    {
      title: '心态',
      badge: '动力',
      description: '我的座右铭：「大梦想，更大努力。」随时准备迎接新挑战。',
    },
    {
      title: '剧集',
      badge: '思考与策略',
      description:
        '非常喜欢让人保持头脑清醒的剧集。我热爱复杂剧情、精密策略和天衣无缝的计划。从《超感神探》到《纸钞屋》，再到《天蝎》和《黑名单》，我喜欢看他们制定疯狂计划、解开复杂谜题，并在最后一分钟颠覆你的大脑。',
      links: [
        { label: 'Mentalist', href: 'https://www.themoviedb.org/tv/5920-the-mentalist' },
        { label: 'Casa de Papel', href: 'https://www.themoviedb.org/tv/71446-la-casa-de-papel' },
        { label: 'Scorpion', href: 'https://www.themoviedb.org/tv/60797-scorpion' },
        { label: 'The Blacklist', href: 'https://www.themoviedb.org/tv/46952-the-blacklist' },
      ],
    },
    {
      title: '软技能',
      badge: '团队协作',
      description: '我喜欢协作、一起前进。对我来说，最好的想法和最好的项目都是团队做出来的。',
    },
  ],

  blogPosts: {
    agentmob: {
      title: '我为什么做 AgentMob',
      theme: 'AgentMob',
      excerpt:
        '晚上 11 点，我的代理在另一个房间运行——正在等待授权。这个反复出现的小麻烦，催生了 AgentMob。',
      readTime: '6 分钟',
      content: `晚上 11 点。我的代理在另一个房间的电脑上运行。它写代码、跑测试、不断推进。而我躺在床上，希望它什么也不需要——因为一旦它需要什么，我就得起身。

那天晚上，它确实需要点什么。一个授权。终端里有一行要确认，离我只有几米，而我唯一想做的就是躺在手机上回一句「同意」。

我起床。确认。又躺回去。然后对自己说，这太荒唐了。

AgentMob 就诞生于这个重复了十几次的小挫败感。

## 真正的问题不是「用手机写代码」

人们常想象一个手机 IDE、一个迷你编辑器、一个难受的触屏键盘。不是这个。

问题是留在控制回路里。正在工作的代理会做决定：读文件、运行命令、修改东西。有些无关紧要，有些值得停下来看一眼。终端要求你在那个精确的时刻在场——而那个时刻很少在你方便的时候到来。

你启动一个任务，去做别的事，回来时发现代理已经在一个你两秒钟就能回答的问题前等了二十分钟。

这不是生产力问题。这是可用性问题。

## 承诺：「给你的代理用的 Telegram」

问题一旦说清楚，解决方案就显而易见了。我不要仪表盘，不要图表，不要日志。我要世界上最普通的东西：一个即时通讯应用。

每个会话一个对话。气泡。代理需要我时发通知。还有一张授权卡片，让我用拇指回答「允许」「拒绝」或「本次会话允许」。其他一切——步骤、工具调用、文件读取——都收进可折叠区块，因为我不需要盯着代理的每一次呼吸。

这个想法一句话就能说完：**电脑在工作，手机在掌控**。

## 我不想做的东西

有些项目，你很早就知道自己拒绝什么。在这个项目里，这份清单和功能一样重要。

不装网络隧道：大多数这类工具在发出第一条消息之前，就要你花四十分钟做系统管理。那不是体验，那是入学考试。

不要账号：对于一个与你本机上的代理对话的工具，账号没有任何意义，而且已经预告了未来的付费方案。

不存储对话：代理、文件和历史都留在电脑上。连接两台设备的服务只需要看到一件事：它们在寻找彼此。

## 把诚实当作约束

AgentMob 支持 Codex、Claude Code 和 Antigravity。它们并不等价：协议不同、能力不同，其中一个根本不会请求授权。

诱惑是宣布「兼容 X、Y 和 Z」，然后让用户自己发现限制。我选择了相反的做法：为每个代理加一个支持徽章——完整、基础、实验性——可点击，并解释它在实际使用中意味着什么。

这不太好卖。但在实际使用中发现限制的用户不会回来；而被提前告知的用户会围绕限制来安排工作。

## 写在代码之前的项目文档

最难的部分不是代码，而是做决定。

有了 AI 代理来加速写作，在错误方向上又多又快地产出才是真正的风险。所以在写第一行之前，我写了一份单一文档，作为事实来源：愿景、1.0 范围、架构、安全、体验、测试、风险。

每个决定都有编号和理由，包括被放弃的替代方案。这对我帮助最大：六周后你已经不记得为什么拒绝过某个选项，然后为了舒服又把它加回来。

## 我的收获

最有用的工具往往来自一个微小而反复的烦恼。我不是从市场调研开始的：我是从「不想再起床」开始的。

其次，约束是礼物。一个设备、每个项目一个文件夹、一个事实来源。每一条限制都简化了架构，减少了出错面。

最后，和 AI 代理一起工作并不能代替思考：它只是转移了努力。你手写的代码更少，但花更多时间做决定、界定范围和真实验证。

AgentMob 存在的确切原因就在这里。因为一切都在现场决定——而现场，大多数时候，并不在屏幕前。`,
    },
    profVsRed: {
      title: '教授 vs 雷丁顿：你会选择哪个犯罪大脑？',
      theme: '我的笔记',
      excerpt:
        '两个犯罪天才，两种应对混乱的方式。一场安静的小对决：完美计划对惊人胆量。',
      readTime: '4 分钟',
      content: `有些角色让你记住，是因为他们让你思考；有些则只是让你度过愉快时光。教授和雷丁顿两者兼有。两个犯罪天才，两种应对混乱的方式，以及一个总会回来的问题：要策划一场行动，你会选谁？

我同样享受地看完了两部剧，但原因不同。越想越觉得，真正的区别不是智商。是风格。

## 教授，建筑师

塞尔吉奥·马基纳会在行动前好几年就开始准备，甚至还没告诉团队。没有任何事交给运气：守卫的习惯、人质的反应、警察的时机。一切都写下来、排练过、预想过。

厉害的是，他不只是大脑。教授害羞、有点不擅社交，但一到捍卫计划的时候，他就变成另一个人。他说服、感染、鼓舞。他真正的武器不是枪，而是他讲故事的方式。他的准则——不杀任何人——不只是道德：它也让他团队在腐败体制面前有了「有点高尚的盗贼」的形象。

他的局限是一切都依赖计划。意外出现时，他会紧张、失去坐标，难以走出自己的框架。

## 雷丁顿，走钢丝的人

另一边，雷蒙德·雷丁顿是另一种氛围。人们叫他「犯罪世界的门房」，他不靠计划，而靠网络和影响力。他不预测未来：他实时操纵未来。

Red 是对话之王。他给你讲故事，微笑着撒谎，迷住你，三通电话之后局势就被他扭转。那种如果对自己有利，能在同一个晚上安排婚礼和肾脏移植的人。他在即兴发挥，但看起来一切早就计划好了。

他的问题是这种力量的代价。Red 没有真正的道德边界：他有自己的准则，而且由他决定什么是对的。他的效率也高度依赖人脉和资源。没有这些，他会逊色得多。

## 最后，谁赢？

比较两人，有点像比较国际象棋棋手和扑克玩家。

教授是最好的战略家。如果你需要一个完美的计划，被不折不扣地执行，团队紧密、舆论站在你这边，那就是他。他是已知、准备和构建的大师。

雷丁顿是最好的战术家，也是最伟大的操纵者。如果你身处绝望而不可预测的境地，需要用计谋和影响力扭转力量对比，那就是他。他是未知、适应和机会主义的大师。

没有绝对的「最好」。一切取决于你需要什么。

教授会用一份干净到你甚至不需要理解发生了什么的计划来救你。雷丁顿会在晚餐和一杯好酒之间，把你最坏的敌人变成最好的盟友。一个给你确定性的安全，另一个给你受控混乱的快感。`,
    },
  },

  notFound: {
    title: '页面未找到。',
    text: '此页面不存在或已被移动。',
    home: '返回首页',
  },

  quote: {
    text: '「只有那些疯狂到以为自己能改变世界的人，才能真正改变世界。」',
    author: 'Steve Jobs',
  },
};
