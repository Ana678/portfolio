export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Skills",
      portfolio: "Portfólio",
      contact: "Contato",
    },
    hero: {
      title: "Engenharia de Software com Propósito Humano",
      subtitle:
        "UX Designer & Desenvolvedora Web — unindo a rigidez técnica da engenharia com a sensibilidade do design",
      cta: "Ver Projetos",
    },
    about: {
      title: "Minha Trajetória",
      intro:
        "Uma jornada de crescimento constante, onde cada etapa construiu a profissional que sou hoje.",
      timeline: [
        {
          year: "2017 - 2021",
          title: "Técnico em Informática",
          institution: "IFRN",
          description:
            "Onde a base foi construída. Primeiros passos em programação, lógica e pensamento computacional.",
          type: "education",
        },
        {
          year: "2022 - 2025",
          title: "Tecnologia da Informação",
          institution: "UFRN",
          description:
            "Foco em engenharia e lógica. Desenvolvimento de software com fundamentos sólidos.",
          type: "education",
        },
        {
          year: "2022 - Atual",
          title: "UX/UI Designer & Desenvolvedora Web",
          institution: "Datavence",
          description:
            "Idealizando e construindo plataformas web para partidos políticos, contribuindo ativamente para a democracia e política do país.",
          type: "work",
        },
        {
          year: "2022 - Atual",
          title: "UX/UI Designer",
          institution: "1Gov",
          description:
            "Idealizando e construindo soluções tecnológicas para a saúde pública, impactando positivamente a vida dos cidadãos brasileiros.",
          type: "work",
        },
        {
          year: "2026 - Atual",
          title: "Engenharia de Software",
          institution: "UFRN - 2º Ciclo",
          description:
            "Especialização atual em arquitetura e sistemas complexos. Visão completa do ciclo de desenvolvimento.",
          type: "education",
        },
      ],
    },
    bento: {
      active: {
        title: "Vida Ativa",
        description:
          "Sou uma pessoa que ama estar em movimento. Corrida, academia e bike fazem parte da minha rotina. Adoro a natureza, animais (especialmente gatos 🐱) e busco equilíbrio entre corpo e mente. Também sou movida por curiosidade: eventos de tecnologia e arte, viagens e fotografia me inspiram a crescer sempre.",
      },
      tech: {
        title: "Hard Skills",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Java",
          "Spring Cloud",
          "NestJS",
          "Node.js",
          "API REST",
          "Scrum",
          "C++",
          "Python",
          "Figma",
          "PostgreSQL",
          "Git",
        ],
      },
      ai: {
        title: "IA como Ferramenta",
        description:
          "Uso a IA como ferramenta de produtividade para focar no que é humano: estratégia, UX e criatividade.",
      },
      soft: {
        title: "Design & Empatia",
        description:
          "Foco em UX/UI com cuidado genuíno pelo usuário. Cada interface é uma conversa, não uma imposição.",
      },
    },
    portfolio: {
      title: "Projetos",
      subtitle:
        "Uma seleção de trabalhos que demonstram minha versatilidade e atenção aos detalhes.",
      viewProject: "Ver Projeto",
      demo: "Demo",
      code: "Code",
      figma: "Figma",
      projects: [
        {
          // https://www.figma.com/design/8Bzu2fRaY875TwtBhIjfC6/COOKUP?node-id=0-1&t=Z15QQ84Dt9sx0wd6-1
          title: "CookUP - Plataforma de Receitas",
          description:
            "Projeto Acadêmico de plataforma de receitas com rede social e gamificação.",
          tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
          img: "assets/img/cookup.png",
          hasDemo: false,
          hasCode: true,
          hasFigma: true,
        },

        {
          title: "TourAi",
          description:
            "Sistema de organização de viagens com itinerários personalizados usando IA generativa.",
          tags: ["React", "Next", "Spring Boot", "PostgreSQL"],
          img: "assets/img/tourai.png",
          hasDemo: false,
          hasCode: true,
          hasFigma: false,
          code: "https://github.com/Ana678/tourai-frontend",
        },
        // https://www.figma.com/design/VXcliMY0EYshQI6vEmK57M/SAPSENSE?node-id=3-3&t=aJGttdO2EeS82YkB-1
        {
          title: "SAPSSense - Sistema de Apoio à Decisão na UTI",
          description:
            "Plataforma que faz uma previsão da mortalidade na UTI partir do formulário SAPS III e uso de IA",
          tags: ["Flask", "CSS"],
          img: "assets/img/saps.png",
          hasDemo: false,
          hasCode: true,
          hasFigma: true,
        },
        //https://www.figma.com/design/m2KAdIx6IHbCBP7Echxezy/RestoWeb?node-id=203-2&t=Tf2MeM77rgzqXluk-1
        {
          title: "RestoWeb",
          description:
            "Sistema de gerenciamento de restaurantes. Fluxos para cliente e cozinha.",
          tags: ["React", "Tailwind", "Node.js", "MySQL"],
          img: "assets/img/restoweb.png",
          hasDemo: true,
          hasCode: true,
          hasFigma: true,
        },
        // https://www.figma.com/design/4OzMQZoTSOCXxx3RZuV6Mk/Projeto-PIU?node-id=3-2&t=xtqB6TjZNr99ouze-1
        {
          title: "CASI - Clínica de Apoio à Saúde do Idoso",
          description:
            "Sistema de gerenciamento de pacientes e agendamento para clínica geriátrica.",
          tags: ["UX/UI", "Requisitos"],
          img: "assets/img/casi.png",
          hasDemo: false,
          hasCode: false,
          hasFigma: true,
          figma:
            "https://www.figma.com/design/4OzMQZoTSOCXxx3RZuV6Mk/Projeto-PIU?node-id=3-2&t=xtqB6TjZNr99ouze-1",
        },
      ],
    },
    contact: {
      title: "Vamos Conversar",
      subtitle: "Estou sempre aberta a novas oportunidades e conexões.",
      email: "E-mail",
      whatsapp: "WhatsApp",
      getInTouch: "Entrar em contato",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title: "Software Engineering with Human Purpose",
      subtitle:
        "UX Designer & Web Developer — merging technical rigor with design sensibility",
      cta: "View Projects",
    },
    about: {
      title: "My Journey",
      intro:
        "A journey of constant growth, where each step built the professional I am today.",
      timeline: [
        {
          year: "2017 - 2021",
          title: "IT Technician",
          institution: "IFRN",
          description:
            "Where the foundation was built. First steps in programming, logic and computational thinking.",
          type: "education",
        },
        {
          year: "2022 - 2025",
          title: "Information Technology",
          institution: "UFRN",
          description:
            "Focus on engineering and logic. Software development with solid fundamentals.",
          type: "education",
        },
        {
          year: "2022 - Present",
          title: "UX/UI Designer & Web Developer",
          institution: "Datavence",
          description:
            "Idealizing and building web platforms for political parties, actively contributing to democracy and the country's politics.",
          type: "work",
        },
        {
          year: "2022 - Present",
          title: "UX/UI Designer",
          institution: "1Gov",
          description:
            "Idealizing and building technological solutions for public health, positively impacting Brazilian citizens' lives.",
          type: "work",
        },
        {
          year: "2026 - Present",
          title: "Software Engineering",
          institution: "UFRN - 2nd Cycle",
          description:
            "Current specialization in architecture and complex systems. Complete view of the development cycle.",
          type: "education",
        },
      ],
    },
    bento: {
      active: {
        title: "Active Life",
        description:
          "I'm someone who loves being in motion. Running, gym and cycling are part of my routine. I love nature, animals (especially cats 🐱) and seek balance between body and mind. I'm also driven by curiosity: tech and art events, travel and photography inspire me to keep growing.",
      },
      tech: {
        title: "Hard Skills",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Java",
          "Spring Cloud",
          "NestJS",
          "Node.js",
          "API REST",
          "Scrum",
          "C++",
          "Python",
          "Figma",
          "PostgreSQL",
          "Git",
        ],
      },
      ai: {
        title: "AI as a Tool",
        description:
          "I use AI as a productivity tool to focus on what's human: strategy, UX and creativity.",
      },
      soft: {
        title: "Design & Empathy",
        description:
          "Focus on UX/UI with genuine care for the user. Every interface is a conversation, not an imposition.",
      },
    },
    portfolio: {
      title: "Projects",
      subtitle:
        "A selection of works that demonstrate my versatility and attention to detail.",
      viewProject: "View Project",
      demo: "Demo",
      code: "Code",
      figma: "Figma",
      projects: [
        {
          // https://www.figma.com/design/8Bzu2fRaY875TwtBhIjfC6/COOKUP?node-id=0-1&t=Z15QQ84Dt9sx0wd6-1
          title: "CookUP - Plataforma de Receitas",
          description:
            "Projeto Acadêmico de plataforma de receitas com rede social e gamificação.",
          tags: ["Fluter", "Dart", "Firebase", "UI/UX"],
          img: "assets/img/cookup.png",
          hasDemo: false,
          hasCode: true,
          hasFigma: true,
        },

        {
          title: "TourAi",
          description:
            "Aplicativo de organização de viagens com itinerários personalizados usando IA generativa.",
          tags: ["React", "Next", "Spring Boot", "PostgreSQL"],
          img: "assets/img/tourai.png",
          hasDemo: false,
          hasCode: true,
          hasFigma: false,
          code: "https://github.com/Ana678/tourai-frontend",
        },
        // https://www.figma.com/design/VXcliMY0EYshQI6vEmK57M/SAPSENSE?node-id=3-3&t=aJGttdO2EeS82YkB-1
        {
          title: "SAPSSense - Sistema de Apoio à Decisão na UTI",
          description:
            "Plataforma que faz uma previsão da mortalidade na UTI partir do formulário SAPS III e uso de IA",
          tags: ["Flask", "CSS"],
          img: "assets/img/saps.png",
          hasDemo: false,
          hasCode: true,
          hasFigma: true,
          figma:
            "https://www.figma.com/design/VXcliMY0EYshQI6vEmK57M/SAPSENSE?node-id=3-3&t=aJGttdO2EeS82YkB-1",
        },
        //https://www.figma.com/design/m2KAdIx6IHbCBP7Echxezy/RestoWeb?node-id=203-2&t=Tf2MeM77rgzqXluk-1
        {
          title: "RestoWeb",
          description:
            "Sistema de gerenciamento de restaurantes. Fluxos para cliente e cozinha.",
          tags: ["React", "Tailwind", "Node.js", "MySQL"],
          img: "assets/img/restoweb.png",
          hasDemo: true,
          hasCode: true,
          hasFigma: true,
        },
        // https://www.figma.com/design/4OzMQZoTSOCXxx3RZuV6Mk/Projeto-PIU?node-id=3-2&t=xtqB6TjZNr99ouze-1
        {
          title: "CASI - Clínica de Apoio à Saúde do Idoso",
          description:
            "Sistema de gerenciamento de pacientes e agendamento para clínica geriátrica.",
          tags: ["UX/UI", "Requisitos"],
          img: "assets/img/casi.png",
          hasDemo: false,
          hasCode: false,
          hasFigma: true,
          figma: "https://www.figma.com/design/4OzMQZoTSOCXxx3RZuV6Mk/Projeto-PIU?node-id=3-2&t=xtqB6TjZNr99ouze-1",
        },
      ],
    },
    contact: {
      title: "Let's Talk",
      subtitle: "I'm always open to new opportunities and connections.",
      email: "Email",
      whatsapp: "WhatsApp",
      getInTouch: "Get in touch",
    },
  },
};

export type Language = "pt" | "en";
export type Translations = typeof translations.pt;
