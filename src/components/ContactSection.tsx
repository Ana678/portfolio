import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Mail,
      label: t.contact.email,
      href: "mailto:anacarolinaneta@hotmail.com",
      value: "anacarolinaneta@hotmail.com",
    },
    {
      icon: Phone,
      label: t.contact.whatsapp,
      href: "https://wa.me/5584998422170",
      value: "+55 84 98422-2170",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ana-carolina-28448520b/",
      value: "/ana-carolina-28448520b",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Ana678",
      value: "@Ana678",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5 }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-foreground">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} variants={itemVariants} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  contact: {
    icon: React.ElementType;
    label: string;
    href: string;
    value: string;
  };
  variants: any;
  t: any;
}

const ContactCard = ({ contact, variants, t }: ContactCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      variants={variants}
      href={contact.href}
      target={contact.href.startsWith("http") ? "_blank" : undefined}
      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="bento-card flex flex-col items-center text-center group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <contact.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-medium text-foreground mb-1">{contact.label}</h3>
      <p className="text-sm text-muted-foreground mb-3">{contact.value}</p>

      {/* Hover text - below existing content */}
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9 }}
        transition={{ duration: 0.2 }}
        className="text-sm font-medium text-primary"
      >
        {t.contact.getInTouch}
      </motion.span>
    </motion.a>
  );
};

export default ContactSection;
