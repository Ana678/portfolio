import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const GlassVase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex justify-center py-8 pointer-events-none select-none overflow-visible">
      <motion.svg
        width="160"
        height="220"
        viewBox="-10 -20 180 240"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Stems coming from vase */}
        <motion.path
          d="M80 95 Q75 60, 55 30 Q48 15, 50 5"
          stroke="#6B8E77"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M80 95 Q82 55, 80 25 Q79 10, 82 0"
          stroke="#7A9E87"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.path
          d="M80 95 Q88 65, 105 35 Q112 18, 108 5"
          stroke="#6B8E77"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        <motion.path
          d="M80 95 Q70 70, 40 50 Q30 42, 28 30"
          stroke="#8AAE97"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.path
          d="M80 95 Q92 60, 120 45 Q130 38, 128 25"
          stroke="#7A9E87"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.9 }}
        />

        {/* Flowers and leaves */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          {/* Flower 1 - top left */}
          <circle cx="50" cy="5" r="8" fill="#CC998D" opacity="0.8" />
          <circle cx="50" cy="5" r="4" fill="#E8B4A8" />
          {/* Flower 2 - top center */}
          <circle cx="82" cy="0" r="6" fill="#B8887D" opacity="0.7" />
          <circle cx="82" cy="0" r="3" fill="#CC998D" />
          {/* Flower 3 - top right */}
          <circle cx="108" cy="5" r="9" fill="#CC998D" opacity="0.8" />
          <circle cx="108" cy="5" r="5" fill="#E8B4A8" />
          {/* Flower petals - larger flower left */}
          <ellipse cx="44" cy="3" rx="5" ry="3" fill="#D4A89A" opacity="0.6" transform="rotate(-30 44 3)" />
          <ellipse cx="56" cy="3" rx="5" ry="3" fill="#D4A89A" opacity="0.6" transform="rotate(30 56 3)" />
          {/* Flower petals - larger flower right */}
          <ellipse cx="102" cy="3" rx="5" ry="3" fill="#D4A89A" opacity="0.6" transform="rotate(-30 102 3)" />
          <ellipse cx="114" cy="3" rx="5" ry="3" fill="#D4A89A" opacity="0.6" transform="rotate(30 114 3)" />
        </motion.g>

        {/* Leaves */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <path d="M55 30 Q45 22, 35 28 Q40 35, 55 30" fill="#6B8E77" />
          <path d="M105 35 Q115 27, 125 33 Q118 40, 105 35" fill="#7A9E87" />
          <path d="M40 50 Q30 45, 22 52 Q28 58, 40 50" fill="#8AAE97" />
          <path d="M120 45 Q130 40, 138 47 Q132 54, 120 45" fill="#6B8E77" />
          <path d="M75 25 Q68 18, 60 22 Q66 30, 75 25" fill="#7A9E87" />
          <path d="M85 25 Q92 18, 100 22 Q94 30, 85 25" fill="#8AAE97" />
          <path d="M28 30 Q18 25, 15 32 Q22 38, 28 30" fill="#7A9E87" />
          <path d="M128 25 Q138 20, 140 28 Q134 34, 128 25" fill="#6B8E77" />
        </motion.g>

        {/* Glass vase body - transparent effect */}
        <defs>
          <linearGradient id="glassGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="50%" stopColor="white" stopOpacity="0.1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6B8E77" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#6B8E77" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Vase shape */}
        <path
          d="M55 95 Q50 95, 48 105 Q42 130, 45 160 Q48 175, 55 180 L105 180 Q112 175, 115 160 Q118 130, 112 105 Q110 95, 105 95 Z"
          fill="url(#glassGradient)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
        />
        {/* Water inside */}
        <path
          d="M50 115 Q44 135, 47 160 Q50 175, 55 178 L105 178 Q110 175, 113 160 Q116 135, 110 115 Z"
          fill="url(#waterGradient)"
        />
        {/* Glass reflection */}
        <path
          d="M58 100 Q56 120, 55 140 Q54 155, 56 165"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Vase opening - rim */}
        <ellipse cx="80" cy="95" rx="28" ry="5" fill="url(#glassGradient)" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />

        {/* Shadow under vase */}
        <ellipse cx="80" cy="185" rx="30" ry="5" fill="rgba(0,0,0,0.08)" />
      </motion.svg>
    </div>
  );
};

export default GlassVase;
