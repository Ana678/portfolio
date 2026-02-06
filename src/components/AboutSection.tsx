import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Loader2, Briefcase } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-foreground">
            {t.about.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.about.intro}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {t.about.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-start gap-6 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 timeline-dot z-10" />

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card rounded-2xl p-6 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    (item as any).type === 'work' ? 'bg-secondary/10' : 'bg-primary/10'
                  }`}>
                    {(item as any).type === 'work' ? (
                      <Briefcase className="w-5 h-5 text-secondary" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-primary">{item.year}</span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-1 text-foreground flex items-center gap-2">
                  {item.title}
                  {/* Progress indicator for Software Engineering - now index 4 */}
                  {index === 4 && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      60%
                    </span>
                  )}
                </h3>
                <p className="text-sm text-secondary font-medium mb-2">
                  {item.institution}
                </p>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                {/* Progress bar for Software Engineering - now index 4 */}
                {index === 4 && (
                  <div className="mt-3">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "60%" } : {}}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Em andamento...</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
