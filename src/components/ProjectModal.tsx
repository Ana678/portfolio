import { motion } from "framer-motion";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { AlertCircle, Lightbulb, Cpu, TrendingUp, FileText, Download, Github, Figma, Play } from "lucide-react";
import type { ProjectDetails } from "@/i18n/types";

interface ProjectModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    project: ProjectDetails | null;
    images: string[];
    links?: { demo?: string; code?: string; figma?: string };
}

const ProjectModal = ({ open, onOpenChange, project, images, links }: ProjectModalProps) => {
    const { t } = useLanguage();
    if (!project) return null;
    const m = t.portfolio.modal;
    const results = project.results ?? [];
    const artifacts = project.artifacts ?? [];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="w-[calc(100%-2rem)] max-w-4xl max-h-[85vh] overflow-hidden p-0 gap-0 rounded-2xl"
                closeClassName="z-10 right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-100 shadow-md backdrop-blur-sm data-[state=open]:bg-background/90 data-[state=open]:text-foreground [&>svg]:h-5 [&>svg]:w-5"
            >
                <div className="max-h-[85vh] overflow-y-auto no-scrollbar">
                    {images.length > 0 && (
                        <div className="bg-muted relative">
                            <Carousel className="w-full" opts={{ loop: images.length > 1 }}>
                                <CarouselContent>
                                    {images.map((src, i) => (
                                        <CarouselItem key={i}>
                                            <div className="aspect-[16/9] w-full overflow-hidden">
                                                <img
                                                    src={src}
                                                    alt={`${project.title} ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {images.length > 1 && (
                                    <>
                                        <CarouselPrevious className="left-4" />
                                        <CarouselNext className="right-4" />
                                    </>
                                )}
                            </Carousel>
                        </div>
                    )}

                    <div className="p-6 md:p-8 space-y-6">
                        <DialogHeader>
                            <DialogTitle className="font-serif text-2xl md:text-3xl text-foreground">
                                {project.title}
                            </DialogTitle>
                            <p className="text-muted-foreground mt-2">{project.description}</p>
                        </DialogHeader>

                        {/* Tecnologias */}
                        <section>
                            <div className="flex items-center gap-2 mb-3">
                                <Cpu className="w-4 h-4 text-primary" />
                                <h3 className="font-serif font-medium text-foreground">{m.technologies}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Problema */}
                        {project.problem && (
                            <motion.section
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="border-l-2 border-destructive/40 pl-4"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertCircle className="w-4 h-4 text-destructive" />
                                    <h3 className="font-serif font-medium text-foreground">{m.problem}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                            </motion.section>
                        )}

                        {/* Solução */}
                        {project.solution && (
                            <motion.section
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="border-l-2 border-primary/60 pl-4"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Lightbulb className="w-4 h-4 text-primary" />
                                    <h3 className="font-serif font-medium text-foreground">{m.solution}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                            </motion.section>
                        )}

                        {/* Resultados */}
                        {results.length > 0 && (
                            <motion.section
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className="w-4 h-4 text-secondary" />
                                    <h3 className="font-serif font-medium text-foreground">{m.results}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {results.map((r, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                            <span>{r}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* Artefatos (apenas se houver) */}
                        {artifacts.length > 0 && (
                            <motion.section
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <FileText className="w-4 h-4 text-primary" />
                                    <h3 className="font-serif font-medium text-foreground">{m.artifacts}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {artifacts.map((a, i) => (
                                        <a
                                            key={i}
                                            href={a.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-muted text-sm text-foreground transition-colors"
                                        >
                                            <Download className="w-4 h-4 text-primary" />
                                            {a.name}
                                        </a>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                            {project.hasDemo && (
                                <Button asChild variant="default" size="sm">
                                    <a href={links?.demo || "#"} target="_blank" rel="noopener noreferrer">
                                        <Play className="w-4 h-4 mr-1.5" />
                                        {t.portfolio.demo}
                                    </a>
                                </Button>
                            )}
                            {project.hasCode && (
                                <Button asChild variant="outline" size="sm">
                                    <a href={links?.code || "#"} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4 mr-1.5" />
                                        {t.portfolio.code}
                                    </a>
                                </Button>
                            )}
                            {project.hasFigma && (
                                <Button asChild variant="outline" size="sm">
                                    <a href={links?.figma || "#"} target="_blank" rel="noopener noreferrer">
                                        <Figma className="w-4 h-4 mr-1.5" />
                                        {t.portfolio.figma}
                                    </a>
                                </Button>
                            )}
                            <DialogClose asChild>
                                <Button variant="ghost" size="sm" className="ml-auto sm:hidden">
                                    {m.close}
                                </Button>
                            </DialogClose>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectModal;
