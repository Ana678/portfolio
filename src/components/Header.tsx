import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/translations";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const [isDark, setIsDark] = useState(false);

  // Animate stem growth based on scroll - large growing plant
  const stemPathLength = 1200;
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [stemPathLength * 0.95, 0]
  );

  // Leaf opacities based on scroll progress - more leaves for longer plant
  const leaf1Opacity = useTransform(scrollYProgress, [0.05, 0.1], [0, 1]);
  const leaf2Opacity = useTransform(scrollYProgress, [0.12, 0.18], [0, 1]);
  const leaf3Opacity = useTransform(scrollYProgress, [0.22, 0.28], [0, 1]);
  const leaf4Opacity = useTransform(scrollYProgress, [0.32, 0.38], [0, 1]);
  const leaf5Opacity = useTransform(scrollYProgress, [0.42, 0.48], [0, 1]);
  const leaf6Opacity = useTransform(scrollYProgress, [0.52, 0.58], [0, 1]);
  const leaf7Opacity = useTransform(scrollYProgress, [0.62, 0.68], [0, 1]);
  const leaf8Opacity = useTransform(scrollYProgress, [0.72, 0.78], [0, 1]);
  const leaf9Opacity = useTransform(scrollYProgress, [0.82, 0.88], [0, 1]);
  const leaf10Opacity = useTransform(scrollYProgress, [0.9, 0.96], [0, 1]);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme === 'dark';
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    //{ code: "es", label: "ES" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="flex items-center gap-3 font-serif text-xl md:text-2xl font-medium text-foreground"
              whileHover={{ scale: 1.02 }}
            >
              {/* Pot with plant stem starting from inside */}
              Ana Carolina
            </motion.a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.about}
              </a>
              <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.skills}
              </a>
              <a href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.portfolio}
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <div className="flex items-center gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      language === lang.code
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {language === "en" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-end mt-2"
            >
              <span className="text-xs px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full">
                Intermediate - Learning in progress
              </span>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Growing Plant - Fixed position, growing from header pot */}
      <div className="fixed left-[22px] md:left-[42px] top-[16px] pointer-events-none" style={{ zIndex: 1000 }}>
        <svg
          width="90"
          height="1400"
          viewBox="0 0 90 1400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >

            {/* Pot body */}
            <path d="M20 28 L60 28 L56 52 L24 52 Z" fill="#CC998D" />
            {/* Pot rim */}
            <ellipse cx="40" cy="28" rx="20" ry="5" fill="#CC998D" />
            <ellipse cx="40" cy="28" rx="16" ry="4" fill="rgba(0,0,0,0.1)" />
            {/* Soil */}
            <ellipse cx="40" cy="30" rx="14" ry="3" fill="#4a3728" />

          {/* Main Stem - Pothos vine growing down, connected to pot above */}
          <motion.path
            d="M41 30 Q40 80, 50 160 Q60 260, 40 360 Q30 460, 55 560 Q65 660, 40 760 Q30 860, 55 960 Q65 1060, 45 1160 Q35 1260, 50 1350"
            stroke="#6B8E77"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={stemPathLength}
            style={{ strokeDashoffset }}
          />

          {/* Pothos Leaf 1 - Right */}
          <motion.g style={{ opacity: leaf1Opacity }}>
            <path
              d="M47 100 Q72 80, 78 98 Q82 120, 60 125 Q47 120, 47 100"
              fill="#6B8E77"
            />
            <path d="M47 100 Q62 108, 70 115" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
          </motion.g>

          {/* Pothos Leaf 2 - Left */}
          <motion.g style={{ opacity: leaf2Opacity }}>
            <path
              d="M42 200 Q15 185, 10 205 Q8 230, 30 235 Q42 228, 42 200"
              fill="#7A9E87"
            />
            <path d="M42 200 Q25 212, 18 225" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
          </motion.g>

          {/* Pothos Leaf 3 - Right */}
          <motion.g style={{ opacity: leaf3Opacity }}>
            <path
              d="M55 320 Q82 300, 88 322 Q90 355, 68 360 Q55 352, 55 320"
              fill="#6B8E77"
            />
            <path d="M55 320 Q72 335, 78 348" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
          </motion.g>

          {/* Pothos Leaf 4 - Left */}
          <motion.g style={{ opacity: leaf4Opacity }}>
            <path
              d="M35 420 Q8 405, 3 428 Q0 460, 25 465 Q38 458, 35 420"
              fill="#7A9E87"
            />
            <path d="M35 420 Q18 438, 12 452" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
          </motion.g>

          {/* Pothos Leaf 5 - Right */}
          <motion.g style={{ opacity: leaf5Opacity }}>
            <path
              d="M58 540 Q85 522, 88 548 Q86 582, 65 585 Q55 578, 58 540"
              fill="#6B8E77"
            />
            <path d="M58 540 Q75 558, 78 572" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
          </motion.g>

          {/* Pothos Leaf 6 - Left */}
          <motion.g style={{ opacity: leaf6Opacity }}>
            <path
              d="M38 660 Q10 648, 5 672 Q2 705, 28 710 Q42 702, 38 660"
              fill="#7A9E87"
            />
            <path d="M38 660 Q20 680, 14 695" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
          </motion.g>

          {/* Pothos Leaf 7 - Right */}
          <motion.g style={{ opacity: leaf7Opacity }}>
            <path
              d="M52 780 Q80 762, 85 788 Q84 822, 62 825 Q50 818, 52 780"
              fill="#6B8E77"
            />
            <path d="M52 780 Q70 798, 74 812" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
          </motion.g>

          {/* Pothos Leaf 8 - Left */}
          <motion.g style={{ opacity: leaf8Opacity }}>
            <path
              d="M35 900 Q8 888, 3 912 Q0 945, 25 950 Q38 942, 35 900"
              fill="#7A9E87"
            />
            <path d="M35 900 Q18 918, 12 935" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
          </motion.g>

          {/* Pothos Leaf 9 - Right */}
          <motion.g style={{ opacity: leaf9Opacity }}>
            <path
              d="M58 1020 Q85 1002, 88 1028 Q86 1062, 65 1065 Q55 1058, 58 1020"
              fill="#6B8E77"
            />
            <path d="M58 1020 Q75 1038, 78 1052" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
          </motion.g>

          {/* Pothos Leaf 10 - Left */}
          <motion.g style={{ opacity: leaf10Opacity }}>
            <path
              d="M42 1150 Q12 1138, 6 1165 Q3 1200, 30 1205 Q45 1196, 42 1150"
              fill="#7A9E87"
            />
            <path d="M42 1150 Q22 1172, 16 1190" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
          </motion.g>
        </svg>
      </div>
    </>
  );
};

export default Header;
