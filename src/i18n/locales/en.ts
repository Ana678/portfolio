import { Translations } from "@/i18n/types";

export const en: Translations = {
    nav: {
        about: "About",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contact",
    },
    hero: {
        title: "Strategic Design. Scalable Architecture.",
        subtitle:
            "UX/UI Designer & Full Stack Developer — Turning complex business rules into high-performance systems and fluid user experiences.",
        cta: "View Projects",
    },
    about: {
        title: "My Journey",
        intro:
            "A journey of continuous growth, transforming complex problems into intuitive and scalable digital solutions over 4+ years of experience.",
        timeline: [
            {
                year: "2017 - 2021",
                title: "IT Technician",
                institution: "IFRN",
                description:
                    "The foundation of structured thinking. First steps into software development, programming logic, and algorithms.",
                type: "education",
            },
            {
                year: "2022 - 2025",
                title: "Information Technology",
                institution: "UFRN",
                description:
                    "Deep dive into software engineering, systems architecture, and solid fundamental development practices.",
                type: "education",
            },
            {
                year: "2022 - 2026",
                title: "UX/UI Designer & Developer",
                institution: "Datavence",
                description:
                    "Architecting and building strategic technologies for the political sector, strengthening governance and transparency through tech.",
                type: "work",
                highlights: [
                    "Designed and implemented scalable systems for entity management and efficient fundraising strategies.",
                    "Developed complex analytical dashboards for data-driven decision making.",
                ],
                impact: "Modernization of National Political Infrastructure",
            },
            {
                year: "2025 - 2026",
                title: "UX/UI Designer",
                institution: "1Gov",
                description:
                    "Designing high-impact technological solutions for public health, with a strong focus on accessibility and patient journey efficiency.",
                type: "work",
                highlights: [
                    "UX design for hospital management systems optimized to reduce triage times and accelerate critical care.",
                    "Created inclusive and cognitively friendly interfaces for healthcare professionals in high-pressure environments.",
                ],
                impact: "Efficiency and Humanization in Public Health",
            },
            {
                year: "2026 - Present",
                title: "Software Engineering",
                institution: "UFRN - 2nd Cycle",
                description:
                    "Specialization in complex architectures and design patterns, solidifying an end-to-end view of the software lifecycle.",
                type: "education",
            },
        ],
    },
    bento: {
        active: {
            title: "Beyond the Screen",
            description:
                "I believe analytical and creative professionals need a diverse background. I stay active with running, the gym, and cycling, while finding mental balance in nature and animals. I exercise my creativity offline through crafts like macramé and crochet. Tech events, traveling, and photography expand my worldview, directly reflecting on the empathetic way I build digital products.",
        },
        tech: {
            title: "Hard Skills",
            subtitle: "Click any technology to understand what it is used for.",
            categories: [
                {
                    name: "Front-end & Visual",
                    description: "Technologies focused on interface, interaction, and visual performance to deliver fast and intuitive experiences.",
                    skills: [
                        { name: "JavaScript", explanation: "The language that brings websites to life: responsive buttons, animations, and smart forms." },
                        { name: "TypeScript", explanation: "A safer version of JavaScript that helps catch errors before a site goes live, making everything more reliable." },
                        { name: "React", explanation: "A tool for building modern and interactive interfaces — many websites you use today are built with it." },
                        { name: "Next.js", explanation: "A turbocharged version of React: makes sites faster and helps them show up better in Google." },
                        { name: "Tailwind CSS", explanation: "A fast and elegant way to make sites beautiful without writing mountains of style code." },
                    ],
                },
                {
                    name: "Design",
                    description: "Tools and practices I use to shape clear journeys, validate ideas, and improve end-to-end user experience.",
                    skills: [
                        { name: "Figma", explanation: "Where I design interfaces before coding. It lets me create and test layouts with the team." },
                        { name: "Figjam", explanation: "A collaboration tool for creating and sharing design ideas and flows." },
                    ],
                },
                {
                    name: "Logic & Back-end",
                    description: "Technical foundation for business rules, integrations, and data, ensuring stable, scalable, and secure systems.",
                    skills: [
                        { name: "Java", explanation: "A robust language used in large systems like banks and governments. Known for stability and security." },
                        { name: "Python", explanation: "A simple and versatile language, great for automation, data analysis, and building AI tools." },
                        { name: "C++", explanation: "A high-performance language used when speed matters, such as in games and critical systems." },
                        { name: "NestJS", explanation: "A structured way to build the hidden part of systems (servers), keeping everything working smoothly behind the scenes." },
                        { name: "Node.js", explanation: "Allows JavaScript to run on the server, the 'brain' that processes the site's information." },
                        { name: "Spring Cloud", explanation: "A set of Java tools for building large systems split into small parts that communicate with each other." },
                        { name: "PostgreSQL", explanation: "A powerful and reliable database used when data must be well structured, such as records and transactions." },
                        { name: "MongoDB", explanation: "A flexible database, ideal for storing information that changes shape often." },
                        { name: "API REST", explanation: "The bridge that lets different systems exchange information, like a waiter taking orders between tables and kitchen." },
                        { name: "Docker", explanation: "Packages the system so it runs the same everywhere — from my laptop to the cloud." },
                    ],
                },
                {
                    name: "Organization & Methodology",
                    description: "Tools and practices I use to maintain focus, productivity, and quality in teamwork, even in complex projects.",
                    skills: [
                        {
                            name: "Scrum", explanation: "Scrum is an agile framework for managing complex projects, often used in software development. It emphasizes teamwork, accountability, and iterative progress toward a well-defined goal. In Scrum, work is divided into small, manageable pieces called 'sprints,' typically lasting 2-4 weeks. The team holds regular meetings to plan, review progress, and adapt to changes, ensuring that the project stays on track and delivers value quickly."
                        },
                        { name: "Kanban", explanation: "Kanban is a visual method for managing work as it moves through a process. It helps to visualize the workflow, limit work in progress, and maximize efficiency." },
                        { name: "Git", explanation: "Git is a version control system that allows you to manage changes in your code and collaborate with others in an organized way." },
                    ]
                }
            ],
        },
        ai: {
            title: "Strategic AI",
            description:
                "I use Artificial Intelligence as a technical productivity accelerator, freeing up my time to focus on what is irreplaceable: business strategy, empathetic UX, and innovation.",
        },
        soft: {
            title: "Impactful Design",
            description:
                "I design interfaces that respect the user's cognitive load. To me, great design solves problems silently, turning complexity into fluid experiences.",
        },
    },
    portfolio: {
        title: "Featured Projects",
        subtitle:
            "Cases demonstrating the intersection between efficient software architecture and user-centered design.",
        viewProject: "Project Details",
        demo: "Live Demo",
        code: "Repository",
        figma: "Design",
        livesite: "Live Site",
        close: "Close",
        overview: "Overview",
        role: "My Role",
        results: "Results",
        techStack: "Tech Stack",
        links: "Project Links",
        modal: {
            problem: "The Problem",
            solution: "The Solution",
            technologies: "Technologies",
            results: "Results",
            artifacts: "Artifacts",
            downloadArtifact: "Download artifact",
            gallery: "Gallery",
            close: "Close",
        },
        projects: [
            {
                title: "CASI - Integrated Geriatric Health",
                description:
                    "Clinical management and scheduling system focused on elderly patients, prioritizing accessibility and visual clarity.",
                tags: ["UX/UI", "Information Architecture"],
                imgs: ["assets/img/casi/casi_01.png", "assets/img/casi/casi_02.png", "assets/img/casi/casi_03.png"],
                hasDemo: false,
                hasCode: false,
                hasFigma: true,
                figma:
                    "https://www.figma.com/design/4OzMQZoTSOCXxx3RZuV6Mk/Projeto-PIU?node-id=3-2&t=xtqB6TjZNr99ouze-1",
                problem:
                    "Elderly patients and healthcare professionals often struggle with complex and non-accessible clinical systems, leading to confusion, longer service times, and reduced quality of care.",

                solution:
                    "I designed a clinical management and scheduling system tailored for geriatric care, prioritizing accessibility, clarity, and ease of use. The interface was built with a strong focus on visual hierarchy, readable typography, and simplified user flows to support both patients and healthcare staff.",

                results: [
                    "Improved usability for elderly users through accessible and intuitive interface design",
                    "Reduced friction in scheduling and patient management workflows",
                    "Enhanced efficiency for healthcare professionals with clearer and faster interactions",
                ],
            },
            {
                title: "TourAi",
                description:
                    "Smart platform utilizing generative AI to architect hyper-personalized and automated travel itineraries.",
                tags: ["React", "Next", "Spring Boot", "PostgreSQL"],
                imgs: ["assets/img/tourai.png"],
                hasDemo: false,
                hasCode: true,
                hasFigma: false,
                code: "https://github.com/Ana678/tourai-frontend",
                problem:
                    "Planning personalized trips requires time, research across multiple platforms, and manual organization of information, leading to frustration and inefficiency for users.",

                solution:
                    "I developed a platform that leverages generative AI to create personalized travel itineraries in seconds, based on user preferences, budget, and time constraints. The interface was designed to be simple and decision-oriented, with dynamic suggestions and automatic itinerary organization.",

                results: [
                    "Significant reduction in travel planning time (from hours to minutes)",
                    "Improved user experience through simplified flows and centralized information",
                    "Scalable architecture ready for integration with external tourism APIs",
                ],
                artifacts: [],
            },
            {
                title: "SAPSSense - ICU Clinical Support",
                description:
                    "Medical decision-support system integrating Artificial Intelligence with the SAPS III model for accurate ICU mortality prediction.",
                tags: ["Flask", "Python", "CSS", "AI / Machine Learning"],
                imgs: ["assets/img/saps.png"],
                hasDemo: false,
                hasCode: true,
                hasFigma: true,
                figma:
                    "https://www.figma.com/design/VXcliMY0EYshQI6vEmK57M/SAPSENSE?node-id=3-3&t=aJGttdO2EeS82YkB-1",
                problem:
                    "ICU professionals must make fast decisions based on multiple clinical data points, but existing tools are often complex, unintuitive, and lack effective predictive support.",

                solution:
                    "I designed and developed a clinical decision support system that integrates the SAPS III model with artificial intelligence, providing clear and visual mortality risk predictions. The interface focuses on accessibility, fast readability, and prioritization of critical information.",

                results: [
                    "Improved clinical decision-making through clear visualization of critical indicators",
                    "Reduced cognitive load for healthcare professionals in high-pressure environments",
                    "Prototype validated with a strong focus on usability and real-world applicability",
                ],
                artifacts: [],
            },
            {
                title: "CookUP",
                description:
                    "Interactive culinary application combining recipe sharing with social networking mechanics and gamification.",
                tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
                imgs: ["assets/img/cookup.png"],
                hasDemo: false,
                hasCode: true,
                hasFigma: true,
                figma:
                    "https://www.figma.com/design/8Bzu2fRaY875TwtBhIjfC6/COOKUP?node-id=0-1&t=Z15QQ84Dt9sx0wd6-1",
                problem:
                    "Users interested in cooking struggle to organize recipes, share experiences, and stay engaged with traditional platforms that lack interactivity.",

                solution:
                    "I developed a mobile application that combines recipe sharing with social networking and gamification elements, encouraging continuous engagement. I designed simple flows for publishing, interacting, and discovering content, along with a reward system to motivate users.",

                results: [
                    "Increased user engagement through gamification mechanics",
                    "More interactive social experience compared to traditional recipe apps",
                    "Strong foundation for future expansion with features like rankings and challenges",
                ],
                artifacts: [],
            },
            {
                title: "RestoWeb",
                description:
                    "Full Stack platform for restaurant management, optimizing real-time information flow between the dining room and kitchen.",
                tags: ["React", "Tailwind", "Node.js", "MySQL"],
                imgs: ["assets/img/restoweb.png"],
                hasDemo: false,
                hasCode: true,
                hasFigma: true,
                figma:
                    "https://www.figma.com/design/m2KAdIx6IHbCBP7Echxezy/RestoWeb?node-id=203-2&t=Tf2MeM77rgzqXluk-1",
                problem:
                    "Restaurants often face communication breakdowns between front-of-house staff and the kitchen, resulting in delays, order errors, and operational inefficiencies.",

                solution:
                    "I built a full-stack platform that connects service staff and kitchen operations in real time, with automatic updates for orders and status. The interface was designed to be fast, intuitive, and suitable for high-demand environments.",

                results: [
                    "Reduction in order errors through centralized communication",
                    "Improved response time between service and kitchen staff",
                    "System designed to scale with multiple concurrent users",
                ],
                artifacts: [],
            },
        ],
    },
    contact: {
        title: "Ready to build what's next?",
        subtitle:
            "I am open to new opportunities. Choose your preferred channel and let's talk about how I can add value to your team.",
        email: "Email",
        whatsapp: "WhatsApp",
        getInTouch: "Start a Conversation",
    },
};
