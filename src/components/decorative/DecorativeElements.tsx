import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DecorativeElements = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Book opening animation based on scroll
  const bookRotation = useTransform(scrollYProgress, [0.3, 0.6], [0, -45]);
  const bookPage1Rotation = useTransform(scrollYProgress, [0.35, 0.55], [0, -120]);
  const bookPage2Rotation = useTransform(scrollYProgress, [0.4, 0.6], [0, -100]);
  const bookPage3Rotation = useTransform(scrollYProgress, [0.45, 0.65], [0, -80]);

  // Floating pots opacity and movement
  const pot1Y = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const pot2Y = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const pot3Y = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <div ref={ref} className="fixed right-4 md:right-8 top-0 bottom-0 pointer-events-none z-20 hidden md:block">
      {/* Small Pot 1 - with succulent */}
      <motion.div
        style={{ y: pot1Y }}
        className="absolute top-[20%] right-0"
      >
        <svg width="50" height="60" viewBox="0 0 50 60" fill="none">
          {/* Succulent leaves */}
          <path d="M25 15 Q32 8, 35 15 Q35 22, 28 24 Q25 22, 25 15" fill="#7A9E87" />
          <path d="M25 15 Q18 8, 15 15 Q15 22, 22 24 Q25 22, 25 15" fill="#6B8E77" />
          <path d="M25 12 Q28 5, 25 0 Q22 5, 25 12" fill="#8AAE97" />
          <path d="M25 18 Q35 12, 40 18 Q38 26, 30 28 Q25 26, 25 18" fill="#6B8E77" />
          <path d="M25 18 Q15 12, 10 18 Q12 26, 20 28 Q25 26, 25 18" fill="#7A9E87" />
          {/* Pot */}
          <path d="M12 30 L38 30 L35 50 L15 50 Z" fill="#CC998D" />
          <ellipse cx="25" cy="30" rx="13" ry="3" fill="#CC998D" />
          <ellipse cx="25" cy="30" rx="10" ry="2.5" fill="rgba(0,0,0,0.1)" />
          <ellipse cx="25" cy="32" rx="9" ry="2" fill="#4a3728" />
        </svg>
      </motion.div>

      {/* Small Pot 2 - with cactus */}
      <motion.div
        style={{ y: pot2Y }}
        className="absolute top-[45%] right-4"
      >
        <svg width="40" height="55" viewBox="0 0 40 55" fill="none">
          {/* Cactus */}
          <ellipse cx="20" cy="20" rx="8" ry="18" fill="#6B8E77" />
          <ellipse cx="12" cy="12" rx="5" ry="10" fill="#7A9E87" />
          <ellipse cx="28" cy="15" rx="4" ry="8" fill="#7A9E87" />
          {/* Spines */}
          <line x1="14" y1="5" x2="14" y2="2" stroke="#5A7A66" strokeWidth="0.5" />
          <line x1="20" y1="4" x2="20" y2="1" stroke="#5A7A66" strokeWidth="0.5" />
          <line x1="26" y1="6" x2="26" y2="3" stroke="#5A7A66" strokeWidth="0.5" />
          {/* Pot */}
          <path d="M10 35 L30 35 L28 50 L12 50 Z" fill="#CC998D" />
          <ellipse cx="20" cy="35" rx="10" ry="2.5" fill="#CC998D" />
          <ellipse cx="20" cy="36" rx="7" ry="1.5" fill="#4a3728" />
        </svg>
      </motion.div>

      {/* Opening Book */}
      <motion.div
        className="absolute top-[65%] right-0"
        style={{ perspective: 800 }}
      >
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" style={{ overflow: 'visible' }}>
          {/* Book base/back cover */}
          <rect x="5" y="25" width="70" height="8" rx="1" fill="#8B7355" />
          <rect x="5" y="33" width="70" height="25" rx="2" fill="#A08060" />

          {/* Book spine */}
          <rect x="35" y="25" width="10" height="33" fill="#6B5545" />

          {/* Front cover - rotates open */}
          <motion.g style={{ rotateY: bookRotation, originX: "45px", originY: "25px" }}>
            <rect x="45" y="25" width="30" height="33" rx="1" fill="#CC998D" />
            <rect x="48" y="28" width="24" height="2" fill="#B8887D" />
            <rect x="48" y="32" width="20" height="1" fill="#B8887D" />
            <rect x="48" y="35" width="22" height="1" fill="#B8887D" />
          </motion.g>

          {/* Pages */}
          <motion.g style={{ rotateY: bookPage1Rotation, originX: "45px", originY: "25px" }}>
            <rect x="45" y="26" width="28" height="31" fill="#F5F5DC" />
            <line x1="48" y1="30" x2="70" y2="30" stroke="#DDD" strokeWidth="0.5" />
            <line x1="48" y1="34" x2="68" y2="34" stroke="#DDD" strokeWidth="0.5" />
            <line x1="48" y1="38" x2="70" y2="38" stroke="#DDD" strokeWidth="0.5" />
            <line x1="48" y1="42" x2="66" y2="42" stroke="#DDD" strokeWidth="0.5" />
          </motion.g>

          <motion.g style={{ rotateY: bookPage2Rotation, originX: "45px", originY: "25px" }}>
            <rect x="45" y="26.5" width="27" height="30" fill="#FFFEF5" />
            <line x1="49" y1="31" x2="68" y2="31" stroke="#EEE" strokeWidth="0.5" />
            <line x1="49" y1="35" x2="66" y2="35" stroke="#EEE" strokeWidth="0.5" />
            <line x1="49" y1="39" x2="68" y2="39" stroke="#EEE" strokeWidth="0.5" />
          </motion.g>

          <motion.g style={{ rotateY: bookPage3Rotation, originX: "45px", originY: "25px" }}>
            <rect x="45" y="27" width="26" height="29" fill="#FFFFF5" />
            <line x1="50" y1="32" x2="66" y2="32" stroke="#F0F0E0" strokeWidth="0.5" />
            <line x1="50" y1="36" x2="64" y2="36" stroke="#F0F0E0" strokeWidth="0.5" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Small Pot 3 - with trailing plant */}
      <motion.div
        style={{ y: pot3Y }}
        className="absolute top-[85%] right-6"
      >
        <svg width="45" height="65" viewBox="0 0 45 65" fill="none">
          {/* Trailing vines */}
          <path d="M22 20 Q15 30, 8 35 Q2 40, 5 50" stroke="#7A9E87" strokeWidth="2" fill="none" />
          <path d="M23 22 Q30 32, 35 40 Q40 48, 38 58" stroke="#6B8E77" strokeWidth="2" fill="none" />
          {/* Small leaves on vines */}
          <circle cx="8" cy="35" r="4" fill="#7A9E87" />
          <circle cx="5" cy="48" r="3" fill="#8AAE97" />
          <circle cx="35" cy="42" r="4" fill="#6B8E77" />
          <circle cx="38" cy="55" r="3" fill="#7A9E87" />
          {/* Main leaves */}
          <path d="M22 15 Q28 10, 30 15 Q30 22, 25 24 Q22 22, 22 15" fill="#6B8E77" />
          <path d="M23 15 Q17 10, 15 15 Q15 22, 20 24 Q23 22, 23 15" fill="#7A9E87" />
          {/* Pot */}
          <path d="M12 25 L33 25 L30 42 L15 42 Z" fill="#CC998D" />
          <ellipse cx="22.5" cy="25" rx="10.5" ry="2.5" fill="#CC998D" />
          <ellipse cx="22.5" cy="26" rx="8" ry="1.8" fill="#4a3728" />
        </svg>
      </motion.div>

      {/* Decorative floating leaves (scattered) */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[12%] right-12"
      >
        <svg width="20" height="25" viewBox="0 0 20 25" fill="none">
          <path d="M10 0 Q18 8, 15 20 Q10 25, 5 20 Q2 8, 10 0" fill="#6B8E77" opacity="0.6" />
          <path d="M10 2 Q10 12, 10 22" stroke="#5A7A66" strokeWidth="0.8" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -8, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-[38%] right-16"
      >
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
          <path d="M9 0 Q16 7, 13 18 Q9 22, 5 18 Q2 7, 9 0" fill="#7A9E87" opacity="0.5" />
          <path d="M9 2 Q9 11, 9 20" stroke="#6B8E77" strokeWidth="0.6" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[75%] right-20"
      >
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
          <path d="M7 0 Q13 6, 11 15 Q7 18, 4 15 Q1 6, 7 0" fill="#8AAE97" opacity="0.4" />
          <path d="M7.5 1 Q7.5 9, 7.5 16" stroke="#7A9E87" strokeWidth="0.5" />
        </svg>
      </motion.div>
    </div>
  );
};

export default DecorativeElements;
