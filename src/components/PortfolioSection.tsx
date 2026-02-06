import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github, Figma, Play } from "lucide-react";

const PortfolioSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        {/* Horizontal Scroll Container */}
        <div className="relative overflow-visible">
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 -mx-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {t.portfolio.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex-shrink-0 w-[320px] md:w-[380px] snap-start"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-background shadow-md transition-all duration-500 group-hover:shadow-2xl h-full">
                  {/* Project Image */}
                  <div className="h-48 md:h-56 w-full relative overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />

                    {/* Glassmorphism overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">
                          {t.portfolio.viewProject}
                        </span>
                        <ExternalLink className="w-4 h-4 text-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
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

                    {/* Action Links */}
                    <div className="flex gap-3 pt-2 border-t border-border">
                      {project.hasDemo && (
                        <a
                          href={project.demo || "#"}
                          className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="w-4 h-4" />
                          <span>{t.portfolio.demo}</span>
                        </a>
                      )}
                      {project.hasCode && (
                        <a
                          href={project.code || "#"}
                          className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          <span>{t.portfolio.code}</span>
                        </a>
                      )}
                      {project.hasFigma && (
                        <a
                          href={project.figma || "#"}
                          className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Figma className="w-4 h-4" />
                          <span>{t.portfolio.figma}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            <span className="text-xs text-muted-foreground">← Arraste para ver mais →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
