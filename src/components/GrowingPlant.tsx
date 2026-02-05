import { motion, useScroll, useTransform } from "framer-motion";

const GrowingPlant = () => {
  const { scrollYProgress } = useScroll();
  
  // The total path length of the stem (approximate)
  const stemPathLength = 600;
  
  // Transform scroll to strokeDashoffset (starts at full length, goes to 0)
  const strokeDashoffset = useTransform(
    scrollYProgress, 
    [0, 1], 
    [stemPathLength * 0.9, 0]
  );
  
  // Leaf opacities based on scroll progress
  const leaf1Opacity = useTransform(scrollYProgress, [0.08, 0.15], [0, 1]);
  const leaf2Opacity = useTransform(scrollYProgress, [0.2, 0.28], [0, 1]);
  const leaf3Opacity = useTransform(scrollYProgress, [0.35, 0.42], [0, 1]);
  const leaf4Opacity = useTransform(scrollYProgress, [0.5, 0.58], [0, 1]);
  const leaf5Opacity = useTransform(scrollYProgress, [0.65, 0.72], [0, 1]);
  const leaf6Opacity = useTransform(scrollYProgress, [0.8, 0.88], [0, 1]);

  return (
    <div className="fixed left-4 md:left-8 top-20 z-40 pointer-events-none">
      <svg
        width="80"
        height="700"
        viewBox="0 0 80 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Vaso removido - agora está no Header */}
        
        {/* Ponto de conexão com o Header */}
        <ellipse cx="40" cy="62" rx="18" ry="4" fill="hsl(25 30% 25%)" opacity="0" />
        
        {/* Caule (Stem) - controlled by strokeDashoffset */}
        <motion.path
          d="M40 62 Q35 150, 45 200 Q55 280, 35 350 Q25 420, 50 500 Q60 580, 40 650"
          stroke="hsl(var(--sage))"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={stemPathLength}
          style={{ strokeDashoffset }}
        />
        
        {/* Folhas (Leaves) */}
        {/* Leaf 1 - Right */}
        <motion.g style={{ opacity: leaf1Opacity }}>
          <path
            d="M42 120 Q60 100, 70 115 Q75 135, 55 140 Q45 138, 42 120"
            fill="hsl(var(--sage))"
          />
          <path
            d="M42 120 Q55 125, 60 130"
            stroke="hsl(140 25% 35%)"
            strokeWidth="1"
            fill="none"
          />
        </motion.g>
        
        {/* Leaf 2 - Left */}
        <motion.g style={{ opacity: leaf2Opacity }}>
          <path
            d="M38 180 Q15 165, 8 185 Q5 210, 25 210 Q35 208, 38 180"
            fill="hsl(var(--sage))"
          />
          <path
            d="M38 180 Q22 190, 18 198"
            stroke="hsl(140 25% 35%)"
            strokeWidth="1"
            fill="none"
          />
        </motion.g>
        
        {/* Leaf 3 - Right */}
        <motion.g style={{ opacity: leaf3Opacity }}>
          <path
            d="M48 260 Q72 240, 78 260 Q80 290, 58 295 Q48 290, 48 260"
            fill="hsl(var(--sage))"
          />
          <path
            d="M48 260 Q62 268, 68 280"
            stroke="hsl(140 25% 35%)"
            strokeWidth="1"
            fill="none"
          />
        </motion.g>
        
        {/* Leaf 4 - Left */}
        <motion.g style={{ opacity: leaf4Opacity }}>
          <path
            d="M32 340 Q8 330, 2 355 Q0 385, 22 385 Q32 380, 32 340"
            fill="hsl(var(--sage))"
          />
          <path
            d="M32 340 Q15 355, 12 370"
            stroke="hsl(140 25% 35%)"
            strokeWidth="1"
            fill="none"
          />
        </motion.g>
        
        {/* Leaf 5 - Right */}
        <motion.g style={{ opacity: leaf5Opacity }}>
          <path
            d="M52 440 Q78 425, 80 450 Q78 480, 58 480 Q50 475, 52 440"
            fill="hsl(var(--sage))"
          />
          <path
            d="M52 440 Q68 455, 70 468"
            stroke="hsl(140 25% 35%)"
            strokeWidth="1"
            fill="none"
          />
        </motion.g>
        
        {/* Leaf 6 - Left */}
        <motion.g style={{ opacity: leaf6Opacity }}>
          <path
            d="M38 540 Q12 530, 5 555 Q2 585, 25 588 Q38 582, 38 540"
            fill="hsl(var(--sage))"
          />
          <path
            d="M38 540 Q20 558, 15 575"
            stroke="hsl(140 25% 35%)"
            strokeWidth="1"
            fill="none"
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default GrowingPlant;
