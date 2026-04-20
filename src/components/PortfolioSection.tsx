import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github, Figma, Play } from "lucide-react";
import ProjectModal from "./ProjectModal";
import type { ProjectDetails } from "@/i18n/types";

const PortfolioSection = () => {
    const { t } = useLanguage();
    const ref = useRef(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Estados para o Modal e para a visibilidade da aba (correção do carrossel)
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isTabHidden, setIsTabHidden] = useState(false);

    // Corrige a travada do carrossel ao mudar de aba
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsTabHidden(document.hidden);
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const duplicatedProjects = [...t.portfolio.projects, ...t.portfolio.projects];

    const activeProject = openIndex !== null ? t.portfolio.projects[openIndex] : null;

    const getGallery = (project: ProjectDetails) => {
        return project.imgs;
    };

    return (
        <section id="portfolio" className="py-24 md:py-32 bg-muted/30" ref={ref}>
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-foreground">
                        {t.portfolio.title}
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        {t.portfolio.subtitle}
                    </p>
                </motion.div>

                <div className="relative w-full overflow-hidden group">

                    <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[hsl(var(--muted)/0.3)] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[hsl(var(--muted)/0.3)] to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        ref={scrollRef}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="flex gap-6 animate-marquee hover:[animation-play-state:paused] py-4 pl-6"
                        style={{ animationPlayState: isTabHidden ? 'paused' : '' }}
                    >
                        {duplicatedProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative flex-shrink-0 w-[320px] md:w-[380px]"
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 250 }}
                            >
                                <button
                                    type="button"
                                    // % garante que o card duplicado abra o modal do projeto correto
                                    onClick={() => setOpenIndex(index % t.portfolio.projects.length)}
                                    className="text-left w-full h-full outline-none"
                                >
                                    <div className="relative overflow-hidden rounded-2xl bg-background shadow-md transition-all duration-500 h-full hover:border-primary/50 hover:border-[1.5px]">

                                        <div className="h-48 md:h-56 w-full relative overflow-hidden group/image">
                                            <img
                                                src={project.imgs[0]}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-foreground/0 group-hover/image:bg-foreground/10 transition-all duration-500" />

                                            <div className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-all duration-500 flex items-center justify-center">
                                                <div className="bg-background/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-2">
                                                    <span className="text-sm font-medium text-foreground">
                                                        {t.portfolio.viewProject}
                                                    </span>
                                                    <ExternalLink className="w-4 h-4 text-foreground" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col h-[calc(100%-12rem)] md:h-[calc(100%-14rem)]">
                                            <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-3 pt-4 border-t border-border">
                                                {project.hasDemo && (
                                                    <span className="flex items-center gap-1.5 text-sm text-primary transition-colors">
                                                        <Play className="w-4 h-4" />
                                                        <span>{t.portfolio.demo}</span>
                                                    </span>
                                                )}
                                                {project.hasCode && (
                                                    <span className="flex items-center gap-1.5 text-sm text-primary transition-colors">
                                                        <Github className="w-4 h-4" />
                                                        <span>{t.portfolio.code}</span>
                                                    </span>
                                                )}
                                                {project.hasFigma && (
                                                    <span className="flex items-center gap-1.5 text-sm text-primary transition-colors">
                                                        <Figma className="w-4 h-4" />
                                                        <span>{t.portfolio.figma}</span>
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <ProjectModal
                open={openIndex !== null}
                onOpenChange={(isOpen) => !isOpen && setOpenIndex(null)}
                project={activeProject}
                images={activeProject ? getGallery(activeProject) : []}
                links={{
                    //demo: activeProject?.demo,
                    code: activeProject?.code,
                    figma: activeProject?.figma
                }}
            />
        </section>
    );
};

export default PortfolioSection;
