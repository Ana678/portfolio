import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/translations";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import GrowingVine from "./decorative/GrowingVine";

const BookStack = () => (
  <svg width="32" height="28" viewBox="0 0 32 28" fill="none" className="flex-shrink-0">
    <rect x="2" y="20" width="28" height="6" rx="1" fill="#CC998D" />
    <rect x="2" y="20" width="3" height="6" rx="0.5" fill="#B8887D" />
    <rect x="4" y="13" width="24" height="6" rx="1" fill="#6B8E77" />
    <rect x="4" y="13" width="3" height="6" rx="0.5" fill="#5A7A66" />
    <g transform="rotate(-5 16 8)">
      <rect x="5" y="5" width="22" height="6" rx="1" fill="#E8D5C0" />
      <rect x="5" y="5" width="3" height="6" rx="0.5" fill="#D4C0A8" />
    </g>
    <rect x="22" y="3" width="2" height="5" fill="#CC998D" rx="0.5" />
  </svg>
);

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme === 'dark';
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  const languages: { code: Language; label: string }[] = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
  ];

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="flex items-center gap-2 md:gap-3 font-serif text-lg md:text-2xl font-medium text-foreground"
            >
              <GrowingVine />
              <span className="hidden sm:inline">Ana Carolina</span>
              <span className="sm:hidden">Ana</span>
            </motion.a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                        e.preventDefault()
                        document
                        .getElementById(link.href.substring(1))
                        ?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
              <motion.div whileHover={{ rotate: -3, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <BookStack />
              </motion.div>
            </nav>

            <div className="flex items-center gap-1 md:gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
              </button>

              <div className="hidden sm:flex items-center gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
                      language === lang.code
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {language === "en" && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end mt-2">
              <span className="text-xs px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full">
                Intermediate - Learning in progress
              </span>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-20 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              className="fixed top-[60px] left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}

                    onClick={(e) => {
                        e.preventDefault()
                        document
                        .getElementById(link.href.substring(1))
                        ?.scrollIntoView({ behavior: "smooth" })
                        setMobileMenuOpen(false)
                    }}
                    className="text-base font-medium text-foreground py-2 px-3 rounded-xl hover:bg-muted transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                {/* Language selector in mobile menu */}
                <div className="flex items-center gap-2 pt-2 border-t border-border/50 sm:hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setMobileMenuOpen(false); }}
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
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
