export type Language = "pt" | "en";

export interface ProjectArtifact {
    name: string;
    url: string;
}

export interface ProjectDetails {
    title: string;
    description: string;
    tags: string[];
    imgs: string[];
    problem?: string;
    solution?: string;
    results?: string[];
    artifacts?: ProjectArtifact[];
    hasDemo?: boolean;
    hasCode?: boolean;
    hasFigma?: boolean;
    demo?: string;
    code?: string;
    figma?: string;
}

interface NavTranslations {
    about: string;
    skills: string;
    portfolio: string;
    contact: string;
}

interface HeroTranslations {
    title: string;
    subtitle: string;
    cta: string;
}

interface TimelineItem {
    year: string;
    title: string;
    institution: string;
    description: string;
    type: "education" | "work";
    highlights?: string[];
    impact?: string;
}

interface AboutTranslations {
    title: string;
    intro: string;
    timeline: TimelineItem[];
}

interface BentoTranslations {
    active: {
        title: string;
        description: string;
    };
    tech: {
        title: string;
        subtitle: string;
        categories: {
            name: string;
            description: string;
            skills: {
                name: string;
                explanation: string;
            }[];
        }[];
    };
    ai: {
        title: string;
        description: string;
    };
    soft: {
        title: string;
        description: string;
    };
}

interface PortfolioModalTranslations {
    problem: string;
    solution: string;
    technologies: string;
    results: string;
    artifacts: string;
    downloadArtifact: string;
    gallery: string;
    close: string;
}

interface PortfolioTranslations {
    title: string;
    subtitle: string;
    viewProject: string;
    demo: string;
    code: string;
    figma: string;
    livesite: string;
    close: string;
    overview: string;
    role: string;
    results: string;
    techStack: string;
    links: string;
    modal: PortfolioModalTranslations;
    projects: ProjectDetails[];
}

interface ContactTranslations {
    title: string;
    subtitle: string;
    email: string;
    whatsapp: string;
    getInTouch?: string;
}

export interface Translations {
    nav: NavTranslations;
    hero: HeroTranslations;
    about: AboutTranslations;
    bento: BentoTranslations;
    portfolio: PortfolioTranslations;
    contact: ContactTranslations;
}
