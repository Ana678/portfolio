import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const introTexts = {
  pt: {
    greeting: "Oi! Eu sou a Ana Carolina 👋",
    bio: "Engenheira de software, UX/UI designer e desenvolvedora web. Trabalho na Datavence e na 1Gov idealizando soluções que impactam a política e a saúde pública do Brasil. Acredito que tecnologia serve às pessoas — e fora do código, adoro correr, pedalar e gatos 🐱",
    cta: "Vamos criar algo juntos?",
  },
  en: {
    greeting: "Hi! I'm Ana Carolina 👋",
    bio: "Software engineer, UX/UI designer, and web developer. I work at Datavence and 1Gov building solutions that impact politics and public health in Brazil. I believe technology serves people — and outside of code, I love running, cycling, and cats 🐱",
    cta: "Let's build something together?",
  },
  es: {
    greeting: "¡Hola! Soy Ana Carolina 👋",
    bio: "Ingeniera de software, UX/UI designer y desarrolladora web. Trabajo en Datavence y 1Gov creando soluciones que impactan la política y la salud pública de Brasil. Creo que la tecnología sirve a las personas — y fuera del código, amo correr, pedalear y los gatos 🐱",
    cta: "¿Creamos algo juntos?",
  },
};

const HeroModal = ({ isOpen, onClose }: HeroModalProps) => {
  const { language } = useLanguage();
  const content = introTexts[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="glass-card rounded-3xl p-6 md:p-10 max-w-md w-full relative overflow-hidden"
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Larger photo */}
              <motion.div
                className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center border-4 border-background shadow-xl overflow-hidden"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <img
                    src="assets/img/perfil.png"
                    alt="Perfil"
                    className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Greeting - larger */}
              <motion.h3
                className="text-2xl md:text-3xl font-serif font-medium text-center mb-4 text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {content.greeting}
              </motion.h3>

              {/* Single concise paragraph - larger font */}
              <motion.p
                className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {content.bio}
              </motion.p>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a href="#contact" onClick={onClose} className="btn-primary inline-block">
                  {content.cta}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HeroModal;
