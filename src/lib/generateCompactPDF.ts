import { jsPDF } from "jspdf";
import { Language } from "@/i18n/translations";

type RGB = [number, number, number];

const COLOR = {
    text: [33, 33, 33] as RGB,
    muted: [90, 90, 90] as RGB,
    link: [17, 85, 204] as RGB,
    rule: [180, 180, 180] as RGB,
};

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN_X = 20;
const MARGIN_TOP = 20;
const MARGIN_BOTTOM = 18;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

const BODY_SIZE = 10;
const LINE_H = 4.9;
const BULLET_INDENT = 7;

interface Segment {
    text: string;
    bold?: boolean;
    italic?: boolean;
    url?: string;
}

interface Experience {
    company: string;
    role: string;
    period: string;
    bullets: string[];
}

interface Education {
    institution: string;
    degrees: string[];
}

interface CompactContent {
    role: string;
    location: string;
    labels: {
        summary: string;
        skills: string;
        experience: string;
        projects: string;
        education: string;
    };
    summary: string;
    skills: { label: string; value: string }[];
    experience: Experience[];
    projects: { name: string; description: string }[];
    education: Education[];
    fileName: string;
}

const content: Record<Language, CompactContent> = {
    pt: {
        role: "Desenvolvedora de Software | Full-stack & UX/UI Designer",
        location: "Natal, RN, Brasil",
        labels: {
            summary: "Resumo Profissional",
            skills: "Habilidades Técnicas e Comportamentais",
            experience: "Experiência Profissional",
            projects: "Principais Projetos",
            education: "Formação Acadêmica",
        },
        summary:
            "Desenvolvedora de Software com sólida base em engenharia full-stack e um forte diferencial estratégico em UX/UI Design. Graduada em Tecnologia da Informação e cursando Engenharia de Software, combino competências robustas em programação (React, React Native, Node.js, NestJS, TypeScript, Java) com a habilidade de projetar interfaces intuitivas, acessíveis e centradas no usuário. Atualmente atuo no Instituto Metrópole Digital (IMD/UFRN) na modernização de sistemas da Inova Sistemas Eletrônicos e desenvolvo, como freelancer, um marketplace de serviços completo — do app mobile à API. Experiência com arquitetura de informação para sistemas complexos nos setores público, de saúde e de governança, testes, esteiras de CI/CD e metodologias ágeis.",
        skills: [
            { label: "Front-end & Mobile", value: "React, Next.js, React Native (Expo), TypeScript, JavaScript, Material UI, Tailwind CSS." },
            { label: "Back-end & Qualidade", value: "Node.js, NestJS, Prisma, Java, Spring Boot, Python, Testes (JUnit), Git, Monorepo (Turborepo)." },
            { label: "Infraestrutura & DevOps", value: "Docker, CI/CD (GitHub Actions), Google Cloud Run, Cloudflare (Workers, R2)." },
            { label: "Design & Produto", value: "Figma, FigJam, Prototipagem de Alta Fidelidade, UI/UX, Engenharia de Requisitos, Handoff Técnico, Metodologias Ágeis (Scrum/Kanban)." },
            { label: "Bancos de Dados", value: "PostgreSQL, MySQL, MongoDB, Firebase." },
            { label: "Soft Skills", value: "Comunicação Interdisciplinar, Proatividade e Iniciativa, Autonomia e Responsabilidade, Organização, Pensamento Analítico e Foco na Experiência do Usuário." },
            { label: "Idiomas", value: "Português (Nativo), Inglês (Intermediário), Espanhol (Básico)." },
        ],
        experience: [
            {
                company: "Instituto Metrópole Digital (IMD/UFRN) · Inova Sistemas Eletrônicos",
                role: "Desenvolvedora Full Stack",
                period: "2026 – Atual",
                bullets: [
                    "Atuo na construção da nova versão do N-Edit, editor de roteiros e mensagens para os painéis eletrônicos de ônibus da Inova, portando o sistema legado para um monorepo que unifica o ecossistema de aplicações da empresa.",
                    "Desenvolvo com React, Material UI e Turborepo, reaproveitando componentes compartilhados, login unificado (OAuth) e pipelines de CI/CD por ambiente.",
                    "Contribuo com a documentação técnica do time por meio de ADRs, issues padronizadas e fluxo de revisão de código.",
                ],
            },
            {
                company: "Tô Aqui Web",
                role: "Desenvolvedora Full Stack (Freelance)",
                period: "2026 – Atual",
                bullets: [
                    "Conduzi um marketplace de serviços locais de ponta a ponta: estruturação da ideia e do modelo de negócio, requisitos, roadmap planejado em sprints, prototipação e design das telas.",
                    "Desenvolvi o app mobile em React Native (Expo), a API em NestJS com Prisma e PostgreSQL — autenticação JWT, pagamentos via Mercado Pago com webhooks idempotentes e verificação de prestadores (KYC) com Cloudflare R2 — e o painel administrativo em React.",
                    "Montei a infraestrutura e o CI/CD: imagem Docker multi-stage, GitHub Actions com testes e migrations automáticas e deploy no Google Cloud Run (Artifact Registry, Secret Manager, Postgres na Neon), além do painel publicado no Cloudflare Workers.",
                ],
            },
            {
                company: "Datavence",
                role: "Engenheira de Software & Designer UX/UI",
                period: "2022 – 2026",
                bullets: [
                    "Idealizei e desenvolvi soluções tecnológicas estratégicas para o setor político, incluindo sistemas de governança e gerenciamento partidário.",
                    "Liderei a engenharia de requisitos e o design de UX/UI de dashboards complexos e mapas de calor, simplificando a visualização de dados densos e fluxos complexos para os usuários finais.",
                    "Atuei como ponte direta entre as equipes de produto e desenvolvimento, entregando protótipos e especificações técnicas de alta fidelidade para garantir que o código em produção refletisse a arquitetura e a experiência projetadas.",
                ],
            },
            {
                company: "1Gov",
                role: "Designer UX/UI",
                period: "2025 – 2026",
                bullets: [
                    "Liderei o design de UX/UI para um sistema complexo de gestão hospitalar voltado ao setor público, com foco em eficiência operacional e cuidado ao paciente.",
                    "Redesenhei fluxos médicos e clínicos críticos, transformando processos burocráticos em interfaces intuitivas e acessíveis para profissionais de saúde sob alta pressão.",
                    "Utilizei fundamentos de engenharia de software para assegurar a viabilidade técnica, a consistência arquitetural e a escalabilidade das soluções propostas.",
                ],
            },
        ],
        projects: [
            {
                name: "N-Edit (Inova / IMD)",
                description:
                    "Nova versão do editor de projetos, roteiros e mensagens para painéis eletrônicos de ônibus, com modos de desenho e simulação, importação/exportação (XML e XLSX) e integração com o N-Frota. Stack: React, Material UI, Turborepo.",
            },
            {
                name: "Tô Aqui Web",
                description:
                    "Marketplace que conecta clientes a prestadores de serviços da sua região, idealizado e construído de ponta a ponta — da concepção do produto à infraestrutura em nuvem. Stack: React Native, NestJS, Prisma, PostgreSQL, Docker, Google Cloud Run.",
            },
            {
                name: "Sistema de Gestão Massas São José",
                description:
                    "Desenvolvimento integral de um PWA full-stack para gestão de negócios do segmento artesanal, automatizando o gerenciamento de pedidos, clientes e logística operacional. Stack: React, Node.js, PostgreSQL.",
            },
            {
                name: "TourAi",
                description:
                    "Plataforma inteligente que utiliza IA generativa para arquitetar roteiros de viagem automatizados e hiper-personalizados. Stack: React, Next.js, Spring Boot, PostgreSQL.",
            },
            {
                name: "SAPSSense - Apoio à Decisão Clínica em UTI (IA/ML)",
                description:
                    "Sistema de apoio à decisão médica que integra Inteligência Artificial ao modelo SAPS III para predição de mortalidade em UTIs. Stack: Python, Flask, CSS, Machine Learning.",
            },
            {
                name: "CookUP",
                description:
                    "Aplicativo culinário voltado ao compartilhamento de receitas, unindo mecânicas de redes sociais com gamificação. Stack: Flutter, Dart, Firebase, UI/UX Design.",
            },
        ],
        education: [
            {
                institution: "Universidade Federal do Rio Grande do Norte (UFRN) | Natal, Brasil",
                degrees: [
                    "Graduação em Engenharia de Software (2º Ciclo) | 70% concluído · Previsão: 2027",
                    "Bacharelado em Tecnologia da Informação | Concluído: 2022 – 2025",
                ],
            },
            {
                institution: "Instituto Federal do Rio Grande do Norte (IFRN) | Caicó, Brasil",
                degrees: ["Ensino Médio Técnico em Informática (Integrado) | Concluído: 2017 – 2021"],
            },
        ],
        fileName: "Ana_Carolina_Compacto.pdf",
    },
    en: {
        role: "Software Developer | Full-stack & UX/UI Designer",
        location: "Natal, RN, Brazil",
        labels: {
            summary: "Professional Summary",
            skills: "Technical and Soft Skills",
            experience: "Professional Experience",
            projects: "Key Projects",
            education: "Education",
        },
        summary:
            "Software Developer with a solid foundation in full-stack engineering and a strong strategic edge in UX/UI Design. Graduated in Information Technology and currently studying Software Engineering, I combine strong programming skills (React, React Native, Node.js, NestJS, TypeScript, Java) with the ability to design intuitive, accessible and user-centered interfaces. I currently work at the Instituto Metrópole Digital (IMD/UFRN) modernizing Inova Sistemas Eletrônicos' systems and, as a freelancer, build a complete services marketplace — from the mobile app to the API. Experienced in information architecture for complex systems in the public, healthcare and governance sectors, testing, CI/CD pipelines and agile methodologies.",
        skills: [
            { label: "Front-end & Mobile", value: "React, Next.js, React Native (Expo), TypeScript, JavaScript, Material UI, Tailwind CSS." },
            { label: "Back-end & Quality", value: "Node.js, NestJS, Prisma, Java, Spring Boot, Python, Testing (JUnit), Git, Monorepo (Turborepo)." },
            { label: "Infrastructure & DevOps", value: "Docker, CI/CD (GitHub Actions), Google Cloud Run, Cloudflare (Workers, R2)." },
            { label: "Design & Product", value: "Figma, FigJam, High-Fidelity Prototyping, UI/UX, Requirements Engineering, Technical Handoff, Agile Methodologies (Scrum/Kanban)." },
            { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, Firebase." },
            { label: "Soft Skills", value: "Cross-functional Communication, Proactivity and Initiative, Autonomy and Ownership, Organization, Analytical Thinking and User Experience Focus." },
            { label: "Languages", value: "Portuguese (Native), English (Intermediate), Spanish (Basic)." },
        ],
        experience: [
            {
                company: "Instituto Metrópole Digital (IMD/UFRN) · Inova Sistemas Eletrônicos",
                role: "Full Stack Developer",
                period: "2026 – Present",
                bullets: [
                    "I work on building the new version of N-Edit, Inova's route and message editor for electronic bus destination signs, porting the legacy system into a monorepo that unifies the company's application ecosystem.",
                    "I develop with React, Material UI and Turborepo, reusing shared components, unified login (OAuth) and per-environment CI/CD pipelines.",
                    "I contribute to the team's technical documentation through ADRs, standardized issues and a code review workflow.",
                ],
            },
            {
                company: "Tô Aqui Web",
                role: "Full Stack Developer (Freelance)",
                period: "2026 – Present",
                bullets: [
                    "Led a local services marketplace end to end: shaping the idea and business model, requirements, a sprint-based roadmap, prototyping and screen design.",
                    "Built the React Native (Expo) mobile app, the NestJS API with Prisma and PostgreSQL — JWT authentication, Mercado Pago payments with idempotent webhooks and provider verification (KYC) with Cloudflare R2 — and the React admin panel.",
                    "Set up the infrastructure and CI/CD: multi-stage Docker image, GitHub Actions with automated tests and migrations, and deployment to Google Cloud Run (Artifact Registry, Secret Manager, Postgres on Neon), plus the admin panel on Cloudflare Workers.",
                ],
            },
            {
                company: "Datavence",
                role: "Software Engineer & UX/UI Designer",
                period: "2022 – 2026",
                bullets: [
                    "Conceived and developed strategic technology solutions for the political sector, including governance and party management systems.",
                    "Led requirements engineering and UX/UI design for complex dashboards and heat maps, simplifying the visualization of dense data and complex flows for end users.",
                    "Acted as a direct bridge between product and development teams, delivering high-fidelity prototypes and technical specifications so that production code reflected the designed architecture and experience.",
                ],
            },
            {
                company: "1Gov",
                role: "UX/UI Designer",
                period: "2025 – 2026",
                bullets: [
                    "Led UX/UI design for a complex public-sector hospital management system, focused on operational efficiency and patient care.",
                    "Redesigned critical medical and clinical workflows, turning bureaucratic processes into intuitive and accessible interfaces for healthcare professionals under high pressure.",
                    "Applied software engineering fundamentals to ensure the technical feasibility, architectural consistency and scalability of the proposed solutions.",
                ],
            },
        ],
        projects: [
            {
                name: "N-Edit (Inova / IMD)",
                description:
                    "New version of the project, route and message editor for electronic bus destination signs, with drawing and simulation modes, XML/XLSX import and export, and N-Frota integration. Stack: React, Material UI, Turborepo.",
            },
            {
                name: "Tô Aqui Web",
                description:
                    "Marketplace connecting customers with local service providers, conceived and built end to end — from product discovery to cloud infrastructure. Stack: React Native, NestJS, Prisma, PostgreSQL, Docker, Google Cloud Run.",
            },
            {
                name: "Massas São José Management System",
                description:
                    "End-to-end development of a full-stack PWA for an artisanal food business, automating order, customer and operational logistics management. Stack: React, Node.js, PostgreSQL.",
            },
            {
                name: "TourAi",
                description:
                    "Smart platform using generative AI to create automated, hyper-personalized travel itineraries. Stack: React, Next.js, Spring Boot, PostgreSQL.",
            },
            {
                name: "SAPSSense - ICU Clinical Decision Support (AI/ML)",
                description:
                    "Medical decision support system integrating Artificial Intelligence with the SAPS III model to predict ICU mortality. Stack: Python, Flask, CSS, Machine Learning.",
            },
            {
                name: "CookUP",
                description:
                    "Cooking app for sharing recipes, combining social network mechanics with gamification. Stack: Flutter, Dart, Firebase, UI/UX Design.",
            },
        ],
        education: [
            {
                institution: "Federal University of Rio Grande do Norte (UFRN) | Natal, Brazil",
                degrees: [
                    "Software Engineering (2nd Cycle) | 70% completed · Expected: 2027",
                    "Bachelor's in Information Technology | Completed: 2022 – 2025",
                ],
            },
            {
                institution: "Federal Institute of Rio Grande do Norte (IFRN) | Caicó, Brazil",
                degrees: ["Technical High School in Computer Science (Integrated) | Completed: 2017 – 2021"],
            },
        ],
        fileName: "Ana_Carolina_Compact.pdf",
    },
};

const setText = (doc: jsPDF, c: RGB) => doc.setTextColor(c[0], c[1], c[2]);

const fontStyle = (s: Segment) =>
    s.bold && s.italic ? "bolditalic" : s.bold ? "bold" : s.italic ? "italic" : "normal";

class Writer {
    y = MARGIN_TOP;

    constructor(private doc: jsPDF) {}

    ensure(needed: number) {
        if (this.y + needed > PAGE_H - MARGIN_BOTTOM) {
            this.doc.addPage();
            this.y = MARGIN_TOP;
        }
    }

    // Lays out mixed bold/italic/link segments word by word, wrapping within maxWidth.
    rich(segments: Segment[], x: number, maxWidth: number, size = BODY_SIZE, lineH = LINE_H) {
        const doc = this.doc;
        doc.setFontSize(size);

        const words: { text: string; seg: Segment }[] = [];
        segments.forEach((seg) => {
            seg.text.split(/(\s+)/).forEach((w) => {
                if (w) words.push({ text: w, seg });
            });
        });

        // Consecutive words with the same style are drawn as one string so the
        // viewer's own spacing is used instead of per-word positioning.
        let runs: { text: string; seg: Segment; x: number }[] = [];
        const flush = () => {
            runs.forEach((run) => {
                const text = run.text.trimEnd();
                if (!text) return;
                doc.setFont("helvetica", fontStyle(run.seg));
                setText(doc, run.seg.url ? COLOR.link : COLOR.text);
                if (run.seg.url) {
                    doc.textWithLink(text, run.x, this.y, { url: run.seg.url });
                    doc.setDrawColor(COLOR.link[0], COLOR.link[1], COLOR.link[2]);
                    doc.setLineWidth(0.15);
                    doc.line(run.x, this.y + 0.6, run.x + doc.getTextWidth(text), this.y + 0.6);
                } else {
                    doc.text(text, run.x, this.y);
                }
            });
            runs = [];
        };

        let cx = x;
        this.ensure(lineH);
        words.forEach(({ text, seg }) => {
            doc.setFont("helvetica", fontStyle(seg));
            const isSpace = /^\s+$/.test(text);
            const w = doc.getTextWidth(text);
            if (!isSpace && cx + w > x + maxWidth && cx > x) {
                flush();
                this.y += lineH;
                this.ensure(lineH);
                cx = x;
            }
            if (isSpace && cx === x) return;
            const last = runs[runs.length - 1];
            if (last && last.seg === seg) {
                last.text += text;
            } else {
                runs.push({ text, seg, x: cx });
            }
            cx += w;
        });
        flush();
        this.y += lineH;
    }

    bullet(segments: Segment[]) {
        this.ensure(LINE_H);
        this.doc.setFillColor(COLOR.text[0], COLOR.text[1], COLOR.text[2]);
        this.doc.circle(MARGIN_X + 3, this.y - 1.2, 0.7, "F");
        this.rich(segments, MARGIN_X + BULLET_INDENT, CONTENT_W - BULLET_INDENT);
        this.y += 0.6;
    }

    section(title: string) {
        this.ensure(16);
        this.y += 4;
        this.doc.setFont("helvetica", "bold");
        this.doc.setFontSize(11);
        setText(this.doc, COLOR.text);
        this.doc.text(title.toUpperCase(), MARGIN_X, this.y);
        this.y += 6.5;
    }
}

export const generateCompactPDF = (lang: Language) => {
    const c = content[lang];
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const w = new Writer(doc);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    setText(doc, COLOR.text);
    doc.text("ANA CAROLINA", MARGIN_X, w.y + 2);
    w.y += 10;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(10.5);
    setText(doc, COLOR.muted);
    doc.text(c.role, MARGIN_X, w.y);
    w.y += 7;

    w.rich(
        [
            { text: `${c.location} | +55 (84) 99842-2170 | anaaraujo.dev@gmail.com | LinkedIn: ` },
            { text: "linkedin.com/in/ana678", url: "https://linkedin.com/in/ana678" },
            { text: " | GitHub: " },
            { text: "github.com/Ana678", url: "https://github.com/Ana678" },
            { text: " | Portfolio: " },
            { text: "ana-carolina.dev", url: "https://ana-carolina.dev" },
        ],
        MARGIN_X,
        CONTENT_W
    );

    w.y += 2;
    doc.setDrawColor(COLOR.rule[0], COLOR.rule[1], COLOR.rule[2]);
    doc.setLineWidth(0.3);
    doc.line(MARGIN_X, w.y, PAGE_W - MARGIN_X, w.y);
    w.y += 4;

    w.section(c.labels.summary);
    w.rich([{ text: c.summary }], MARGIN_X, CONTENT_W);

    w.section(c.labels.skills);
    c.skills.forEach((s) => w.bullet([{ text: `${s.label}: `, bold: true }, { text: s.value }]));

    w.section(c.labels.experience);
    c.experience.forEach((exp) => {
        w.ensure(LINE_H * 3);
        w.rich(
            [
                { text: exp.company, bold: true },
                { text: " | " },
                { text: exp.role, italic: true },
                { text: ` | ${exp.period}` },
            ],
            MARGIN_X,
            CONTENT_W
        );
        w.y += 1.5;
        exp.bullets.forEach((b) => w.bullet([{ text: b }]));
        w.y += 2.5;
    });

    w.section(c.labels.projects);
    c.projects.forEach((p) => {
        w.bullet([{ text: `${p.name}: `, bold: true }, { text: p.description }]);
        w.y += 1;
    });

    w.section(c.labels.education);
    c.education.forEach((edu) => {
        w.ensure(LINE_H * 3);
        w.rich([{ text: edu.institution, bold: true }], MARGIN_X, CONTENT_W);
        w.y += 1;
        edu.degrees.forEach((d) => {
            w.rich([{ text: d }], MARGIN_X, CONTENT_W);
            w.y += 1;
        });
        w.y += 2;
    });

    doc.save(c.fileName);
};
