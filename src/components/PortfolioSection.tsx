import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github, Figma, Play, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectModal from "./ProjectModal";
import type { ProjectDetails } from "@/i18n/types";

const PortfolioSection = () => {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", dragFree: true },
        [AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        const autoScroll = emblaApi.plugins()?.autoScroll;
        autoScroll?.stop();
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (!emblaApi) return;
        const autoScroll = emblaApi.plugins()?.autoScroll;
        autoScroll?.stop();
        emblaApi.scrollNext();
    }, [emblaApi]);
    useEffect(() => {
        if (!emblaApi) return;
        const autoScroll = emblaApi.plugins()?.autoScroll;
        if (!autoScroll) return;
        const onPointerUp = () => {
            setTimeout(() => autoScroll.play(), 1500);
        };
        emblaApi.on("pointerUp", onPointerUp);
        return () => {
            emblaApi.off("pointerUp", onPointerUp);
        };
    }, [emblaApi]);

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

                <div className="relative">
                    <div className="overflow-hidden -mx-2" ref={emblaRef}>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="flex gap-6 px-2 pb-8 pt-2"
                        >
                            {duplicatedProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px]"

                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(index % t.portfolio.projects.length)}
                                        className="text-left w-full h-full outline-none"
                                    >
                                        <div className="relative overflow-hidden rounded-2xl bg-background shadow-md transition-all duration-500 group-hover:shadow-lg h-full">
                                            <div className="h-48 md:h-56 w-full relative overflow-hidden">
                                                <img
                                                    src={project.imgs[0]}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                                    <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
                                                        <span className="text-sm font-medium text-foreground">
                                                            {t.portfolio.viewProject}
                                                        </span>
                                                        <ExternalLink className="w-4 h-4 text-foreground" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                                                    {project.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm mb-4">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex gap-3 pt-2 border-t border-border text-sm text-primary">
                                                    {project.hasDemo && (
                                                        <span className="flex items-center gap-1.5">
                                                            <Play className="w-4 h-4" />
                                                            <span>{t.portfolio.demo}</span>
                                                        </span>
                                                    )}
                                                    {project.hasCode && (
                                                        <span className="flex items-center gap-1.5">
                                                            <Github className="w-4 h-4" />
                                                            <span>{t.portfolio.code}</span>
                                                        </span>
                                                    )}
                                                    {project.hasFigma && (
                                                        <span className="flex items-center gap-1.5">
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
                    <button
                        type="button"
                        onClick={scrollPrev}
                        aria-label="Previous project"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        type="button"
                        onClick={scrollNext}
                        aria-label="Next project"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
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
