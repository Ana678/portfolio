import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cpu, Brain, Heart, Bike, TreePine, Cat, PenTool, Computer, Server } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";


const categoryIcons = [Computer, PenTool, Server, Brain];

const BentoGrid = () => {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCategory, setActiveCategory] = useState(0);

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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };


    const ActiveIcon = categoryIcons[activeCategory] ?? PenTool;

    return (
        <section id="skills" className="py-24 md:py-32" ref={ref}>
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
                >
                    {/* Active Card - Large */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bento-card md:col-span-2 md:row-span-1 flex flex-col md:flex-row items-start gap-6 cursor-pointer"
                    >
                        {/* Icons na vertical */}
                        <div className="flex flex-row md:flex-col gap-3 flex-shrink-0">
                            <motion.div
                                className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                            >
                                <Bike className="w-6 h-6 text-secondary" />
                            </motion.div>
                            <motion.div
                                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                            >
                                <TreePine className="w-6 h-6 text-primary" />
                            </motion.div>
                            <motion.div
                                className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                            >
                                <Cat className="w-6 h-6 text-secondary" />
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl font-medium mb-2 text-foreground">
                                {t.bento.active.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.bento.active.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Soft Skills Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bento-card flex flex-col items-center text-center cursor-pointer"
                    >
                        <motion.div
                            className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Heart className="w-7 h-7 text-secondary" />
                        </motion.div>
                        <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                            {t.bento.soft.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t.bento.soft.description}
                        </p>
                    </motion.div>

                    {/* Tech Skills Card */}
                    <motion.div
                        variants={itemVariants}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bento-card md:col-span-2"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <motion.div
                                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                <Cpu className="w-5 h-5 text-primary" />
                            </motion.div>
                            <div>
                                <h3 className="font-serif text-xl font-medium text-foreground">
                                    {t.bento.tech.title}
                                </h3>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {t.bento.tech.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Tabs de categorias */}
                        <div className="flex flex-wrap gap-2 mb-4 border-b border-border pb-3">
                            {t.bento.tech.categories.map((cat, idx) => {
                                const Icon = categoryIcons[idx] ?? PenTool;
                                const isActive = idx === activeCategory;
                                return (
                                    <button
                                        key={cat.name}
                                        onClick={() => setActiveCategory(idx)}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${isActive
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "bg-muted text-muted-foreground hover:bg-muted/70"
                                            }`}
                                    >
                                        <Icon className="w-3.5 h-3.5" />
                                        {cat.name}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Descrição da categoria */}
                        <p className="text-sm text-muted-foreground italic mb-3 flex items-start gap-2">
                            <ActiveIcon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                            <span>{t.bento.tech.categories[activeCategory].description}</span>
                        </p>

                        {/* Chips com Popover */}
                        <div className="flex flex-wrap gap-2">
                            {t.bento.tech.categories[activeCategory].skills.map((skill, index) => (
                                <Popover key={skill.name}>
                                    <PopoverTrigger asChild>
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ delay: index * 0.04 }}
                                            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            {skill.name}
                                        </motion.button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-72 text-sm leading-relaxed" side="top">
                                        <div className="font-serif font-medium text-foreground mb-1">
                                            {skill.name}
                                        </div>
                                        <p className="text-muted-foreground">{skill.explanation}</p>
                                    </PopoverContent>
                                </Popover>
                            ))}
                        </div>
                    </motion.div>

                    {/* AI Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bento-card flex flex-col cursor-pointer"
                    >
                        <motion.div
                            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                            animate={{
                                boxShadow: ["0 0 0 0 rgba(107, 142, 119, 0)", "0 0 0 10px rgba(107, 142, 119, 0.2)", "0 0 0 0 rgba(107, 142, 119, 0)"]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Brain className="w-6 h-6 text-primary" />
                        </motion.div>
                        <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                            {t.bento.ai.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t.bento.ai.description}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BentoGrid;
