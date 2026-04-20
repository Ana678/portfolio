import { Translations } from "@/i18n/types";

export const pt: Translations = {
    nav: {
        about: "Sobre",
        skills: "Skills",
        portfolio: "Portfólio",
        contact: "Contato",
    },
    hero: {
        title: "Design Estratégico. Arquitetura Escalável.",
        subtitle:
            "UX/UI Designer & Desenvolvedora Full Stack — Unindo design estratégico e engenharia robusta para entregar produtos de alto impacto que impulsionam resultados de negócio.",
        cta: "Ver Projetos",
    },
    about: {
        title: "Minha Trajetória",
        intro:
            "Uma jornada de constante evolução, transformando problemas complexos em soluções digitais intuitivas e escaláveis ao longo de mais de 4 anos de experiência.",
        timeline: [
            {
                year: "2017 - 2021",
                title: "Técnico em Informática",
                institution: "IFRN",
                description:
                    "A base do pensamento estruturado. Primeiros passos em desenvolvimento, lógica de programação e algoritmos.",
                type: "education",
            },
            {
                year: "2022 - 2025",
                title: "Tecnologia da Informação",
                institution: "UFRN",
                description:
                    "Aprofundamento em engenharia de software, arquitetura de sistemas e desenvolvimento com fundamentos sólidos e boas práticas.",
                type: "education",
            },
            {
                year: "2022 - 2026",
                title: "UX/UI Designer & Desenvolvedora",
                institution: "Datavence",
                description:
                    "Idealizo e construo tecnologias estratégicas para o setor político, fortalecendo a governança e a transparência através da tecnologia.",
                type: "work",
                highlights: [
                    "Arquitetura e design de sistemas escaláveis para gestão de entidades e captação eficiente de recursos.",
                    "Desenvolvimento de dashboards analíticos complexos para tomada de decisão baseada em dados.",
                ],
                impact: "Modernização da Estrutura Partidária Nacional",
            },
            {
                year: "2025 - 2026",
                title: "UX/UI Designer",
                institution: "1Gov",
                description:
                    "Projeto soluções tecnológicas de alto impacto para a saúde pública, com foco total na acessibilidade e na eficiência da jornada do paciente.",
                type: "work",
                highlights: [
                    "Design de sistemas hospitalares otimizados para reduzir o tempo de triagem e acelerar o atendimento crítico.",
                    "Criação de interfaces inclusivas e cognitivamente amigáveis para profissionais de saúde em ambientes de alta pressão.",
                ],
                impact: "Eficiência e Humanização na Saúde Pública",
            },
            {
                year: "2026 - Atual",
                title: "Engenharia de Software",
                institution: "UFRN - 2º Ciclo",
                description:
                    "Especialização em arquiteturas complexas e padrões de projeto, consolidando a visão de ponta a ponta do ciclo de vida do software.",
                type: "education",
            },
        ],
    },
    bento: {
        active: {
            title: "Além do Código",
            description:
                "Acredito que profissionais criativos e analíticos precisam de repertório diverso. Sou movida pelo esporte (corrida, academia e bike) e busco o equilíbrio mental na natureza e no contato com os animais. Exercito minha criatividade de forma analógica com artesanato, macramê e crochê. Eventos de tecnologia, viagens e fotografia expandem minha visão de mundo, refletindo diretamente na forma empática como construo produtos digitais.",
        },
        tech: {
            title: "Hard Skills",
            subtitle: "Clique em qualquer tecnologia para entender no que ela é usada.",
            categories: [
                {
                    name: "Design & Experiência",
                    description: "Ferramentas e práticas que uso para projetar jornadas claras, validar ideias e melhorar a experiência de ponta a ponta.",
                    skills: [
                        { name: "Figma", explanation: "Onde desenho as telas antes de programar. Permite criar e testar o design com toda a equipe." },
                        { name: "Scrum", explanation: "Forma de organizar o trabalho em ciclos curtos, entregando valor rápido e ajustando rumo no caminho." },
                        { name: "Git", explanation: "Como uma 'máquina do tempo' do código: salva cada mudança e permite trabalhar em equipe sem confusão." },
                    ],
                },
                {
                    name: "Front-end & Visual",
                    description: "Tecnologias focadas em interface, interação e performance visual para entregar experiências rápidas e intuitivas.",
                    skills: [
                        { name: "JavaScript", explanation: "É a linguagem que dá vida aos sites — botões que respondem, animações, formulários inteligentes." },
                        { name: "TypeScript", explanation: "Versão mais segura do JavaScript: ajuda a evitar erros antes do site ir para o ar, deixando tudo mais confiável." },
                        { name: "React", explanation: "Ferramenta para construir interfaces modernas e interativas — quase todos os sites que você usa hoje são feitos com ela." },
                        { name: "Next.js", explanation: "Versão turbinada do React: deixa sites mais rápidos e ajuda a aparecer melhor no Google." },
                        { name: "Tailwind CSS", explanation: "Forma rápida e elegante de deixar sites bonitos, sem precisar escrever montanhas de código de estilo." },
                    ],
                },
                {
                    name: "Lógica & Back-end",
                    description: "Base técnica para regras de negócio, integrações e dados, garantindo sistemas estáveis, escaláveis e seguros.",
                    skills: [
                        { name: "Java", explanation: "Linguagem robusta usada em sistemas grandes (bancos, governos). Conhecida por ser estável e segura." },
                        { name: "Python", explanation: "Linguagem simples e versátil, ótima para automatizar tarefas, analisar dados e construir IA." },
                        { name: "C++", explanation: "Linguagem de alta performance usada quando precisa de muita velocidade, como em jogos e sistemas críticos." },
                        { name: "NestJS", explanation: "Estrutura organizada para criar a parte 'invisível' dos sistemas (servidores), garantindo que tudo funcione bem por trás." },
                        { name: "Node.js", explanation: "Permite usar JavaScript no servidor, ou seja, no 'cérebro' que processa as informações do site." },
                        { name: "Spring Cloud", explanation: "Conjunto de ferramentas em Java para construir sistemas grandes divididos em pequenas partes que conversam entre si." },
                        { name: "PostgreSQL", explanation: "Banco de dados poderoso e confiável, usado quando os dados precisam ser bem estruturados (ex: cadastros, transações)." },
                        { name: "MongoDB", explanation: "Banco de dados flexível, ideal para guardar informações que mudam de formato com frequência." },
                        { name: "API REST", explanation: "É a 'ponte' que permite que diferentes sistemas troquem informações entre si — como um garçom levando pedidos." },
                        { name: "Docker", explanation: "Empacota o sistema para que ele rode igual em qualquer lugar — do meu computador até a nuvem." },
                    ],
                },
            ],
        },
        ai: {
            title: "IA Estratégica",
            description:
                "Utilizo a Inteligência Artificial como aceleradora de produtividade técnica, liberando meu tempo para focar no que é insubstituível: estratégia de negócio, empatia no UX e inovação.",
        },
        soft: {
            title: "Design de Impacto",
            description:
                "Crio interfaces que respeitam a carga cognitiva do usuário. Para mim, o bom design é aquele que resolve problemas silenciosamente, transformando complexidade em fluidez.",
        },
    },
    portfolio: {
        title: "Projetos em Destaque",
        subtitle:
            "Cases que demonstram a intersecção entre arquitetura de software eficiente e design centrado no usuário.",
        viewProject: "Detalhes do Projeto",
        demo: "Ver Demo",
        code: "Repositório",
        figma: "Design",
        livesite: "Acessar Site",
        close: "Fechar",
        overview: "Visão Geral",
        role: "Meu Papel",
        results: "Resultados",
        techStack: "Stack Técnica",
        links: "Links do Projeto",
        modal: {
            problem: "O Problema",
            solution: "A Solução",
            technologies: "Tecnologias",
            results: "Resultados",
            artifacts: "Artefatos",
            downloadArtifact: "Baixar artefato",
            gallery: "Galeria",
            close: "Fechar",
        },
        projects: [
            {
                title: "CASI - Saúde Geriátrica Integrada",
                description:
                    "Sistema de gestão clínica e agendamento focado no público da terceira idade, priorizando acessibilidade e clareza visual.",
                tags: ["UX/UI", "Arquitetura de Informação"],
                imgs: ["assets/img/casi/casi_01.png", "assets/img/casi/casi_02.png", "assets/img/casi/casi_03.png"],
                hasDemo: false,
                hasCode: false,
                hasFigma: true,
                figma:
                    "https://www.figma.com/design/4OzMQZoTSOCXxx3RZuV6Mk/Projeto-PIU?node-id=3-2&t=xtqB6TjZNr99ouze-1",
                problem:
                    "Pacientes idosos e profissionais de saúde enfrentam dificuldades com sistemas clínicos complexos e pouco acessíveis, o que gera confusão, aumenta o tempo de atendimento e compromete a qualidade do cuidado.",

                solution:
                    "Projetei um sistema de gestão clínica e agendamento voltado para o público geriátrico, priorizando acessibilidade, clareza e facilidade de uso. A interface foi construída com foco em hierarquia visual, tipografia legível e fluxos simplificados, atendendo tanto pacientes quanto profissionais de saúde.",

                results: [
                    "Melhoria na usabilidade para usuários idosos por meio de uma interface acessível e intuitiva",
                    "Redução de fricção nos fluxos de agendamento e gestão de pacientes",
                    "Aumento da eficiência no atendimento com interações mais rápidas e claras",
                ],
            },
            {
                title: "TourAi",
                description:
                    "Plataforma inteligente que utiliza IA generativa para arquitetar roteiros de viagem hiper-personalizados e automatizados.",
                tags: ["React", "Next", "Spring Boot", "PostgreSQL"],
                imgs: ["assets/img/tourai.png"],
                hasDemo: false,
                hasCode: true,
                hasFigma: false,
                code: "https://github.com/Ana678/tourai-frontend",
                problem:
                    "Planejar viagens personalizadas exige tempo, pesquisa em múltiplas plataformas e organização manual de informações, o que gera frustração e baixa eficiência para o usuário.",

                solution:
                    "Desenvolvi uma plataforma que utiliza IA generativa para criar roteiros de viagem personalizados em poucos segundos, considerando preferências, orçamento e tempo disponível. A interface foi projetada para ser simples e orientada à tomada de decisão, com sugestões dinâmicas e organização automática do itinerário.",

                results: [
                    "Redução significativa do tempo de planejamento de viagens (de horas para minutos)",
                    "Melhora na experiência do usuário com fluxos simplificados e centralização de informações",
                    "Arquitetura escalável preparada para integração com APIs externas de turismo",
                ],
                artifacts: [],
            },
            {
                title: "SAPSSense - Apoio Clínico em UTI",
                description:
                    "Sistema de apoio à decisão médica que integra Inteligência Artificial ao modelo SAPS III para predição precisa de mortalidade em UTIs.",
                tags: ["Flask", "Python", "CSS", "IA / Machine Learning"],
                imgs: ["assets/img/saps.png"],
                hasDemo: false,
                hasCode: true,
                hasFigma: true,
                figma:
                    "https://www.figma.com/design/VXcliMY0EYshQI6vEmK57M/SAPSENSE?node-id=3-3&t=aJGttdO2EeS82YkB-1",
                problem:
                    "Profissionais de UTI precisam tomar decisões rápidas baseadas em múltiplos dados clínicos, mas ferramentas existentes são complexas, pouco intuitivas e não oferecem suporte preditivo eficiente.",

                solution:
                    "Projetei e desenvolvi um sistema de apoio à decisão que integra o modelo SAPS III com inteligência artificial, oferecendo predições de risco de mortalidade de forma clara e visual. Foquei em uma interface acessível, com leitura rápida e priorização das informações críticas.",

                results: [
                    "Facilitação da tomada de decisão clínica com visualização clara de indicadores críticos",
                    "Redução da carga cognitiva dos profissionais de saúde em ambientes de alta pressão",
                    "Protótipo validado com foco em usabilidade e aplicabilidade em cenários reais",
                ],
                artifacts: [],
            },
            {
                title: "CookUP",
                description:
                    "Aplicação interativa de culinária que combina o compartilhamento de receitas com mecânicas de rede social e gamificação.",
                tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
                imgs: ["assets/img/cookup.png"],
                hasDemo: false,
                hasCode: true,
                hasFigma: true,
                figma:
                    "https://www.figma.com/design/8Bzu2fRaY875TwtBhIjfC6/COOKUP?node-id=0-1&t=Z15QQ84Dt9sx0wd6-1",
                problem:
                    "Usuários interessados em culinária encontram dificuldade em organizar receitas, compartilhar experiências e manter engajamento em plataformas tradicionais pouco interativas.",

                solution:
                    "Desenvolvi uma aplicação mobile que combina receitas com elementos de rede social e gamificação, incentivando o engajamento contínuo. Criei fluxos simples para publicação, interação e descoberta de conteúdo, além de um sistema de recompensas para estimular o uso.",

                results: [
                    "Aumento do engajamento através de mecânicas de gamificação",
                    "Experiência social mais interativa comparada a apps tradicionais de receitas",
                    "Base sólida para expansão com funcionalidades como ranking e desafios culinários",
                ],
                artifacts: [],
            },
            {
                title: "RestoWeb",
                description:
                    "Plataforma Full Stack para gestão de restaurantes, otimizando o fluxo de informações em tempo real entre o salão de atendimento e a cozinha.",
                tags: ["React", "Tailwind", "Node.js", "MySQL"],
                imgs: ["assets/img/restoweb.png"],
                hasDemo: false,
                hasCode: true,
                hasFigma: true,
                figma:
                    "https://www.figma.com/design/m2KAdIx6IHbCBP7Echxezy/RestoWeb?node-id=203-2&t=Tf2MeM77rgzqXluk-1",
                problem:
                    "Restaurantes enfrentam falhas de comunicação entre salão e cozinha, causando atrasos, erros em pedidos e perda de eficiência operacional.",

                solution:
                    "Criei uma plataforma full stack que conecta em tempo real o atendimento e a cozinha, com atualização automática de pedidos e status. A interface foi pensada para ser rápida, intuitiva e utilizável em ambientes de alta demanda.",

                results: [
                    "Redução de erros em pedidos devido à comunicação centralizada",
                    "Melhoria no tempo de resposta entre atendimento e cozinha",
                    "Sistema preparado para escalar com múltiplos usuários simultâneos",
                ],
                artifacts: [],
            },
        ],
    },
    contact: {
        title: "Vamos construir o próximo passo?",
        subtitle:
            "Estou disponível para novos desafios. Escolha seu canal preferido e vamos conversar sobre como posso agregar ao seu time.",
        email: "E-mail",
        whatsapp: "WhatsApp",
    },
};
