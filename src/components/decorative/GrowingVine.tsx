import { motion, useScroll, useTransform, Variants } from "framer-motion";

const GrowingVine = () => {
  const { scrollYProgress } = useScroll();

  const windSwayVariants: Variants = {
    animate: {
      rotate: [0, 1.2, -1.2, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // AJUSTE 1: Aumentei para 2500. Como o SVG tem 1800px de altura e é curvo,
  // 1600 não era suficiente para esconder a linha toda no início.
  const stemPathLength = 2500;

  // Animação do caule principal
  // AJUSTE 2: Mudei o range inicial de [stemPathLength * 0.95] para [stemPathLength].
  // Isso garante que ele comece 100% invisível/recolhido.
  const mainStemOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [stemPathLength, 0]
  );

  // Caule secundário - Começa um pouco mais tarde para garantir que o principal já passou por ali
  const secondaryStemOffset = useTransform(
    scrollYProgress,
    [0.15, 0.9], // Atrasado de 0.1 para 0.15
    [stemPathLength * 0.6, 0]
  );

  // Caule terciário
  const tertiaryStemOffset = useTransform(
    scrollYProgress,
    [0.25, 1], // Atrasado de 0.2 para 0.25
    [stemPathLength * 0.4, 0]
  );

  // ===== FOLHAS PRINCIPAIS (Delay geral aplicado) =====
  // Antes a folha 1 aparecia em 0.03, mas o caule mal tinha saído do vaso.
  // Agora empurrei tudo para frente.

  const leaf1Opacity = useTransform(scrollYProgress, [0.08, 0.13], [0, 1]); // Era 0.03
  const leaf2Opacity = useTransform(scrollYProgress, [0.15, 0.20], [0, 1]); // Era 0.10
  const leaf3Opacity = useTransform(scrollYProgress, [0.22, 0.27], [0, 1]); // Era 0.18
  const leaf4Opacity = useTransform(scrollYProgress, [0.29, 0.34], [0, 1]); // Era 0.26
  const leaf5Opacity = useTransform(scrollYProgress, [0.36, 0.41], [0, 1]); // Era 0.34
  const leaf6Opacity = useTransform(scrollYProgress, [0.44, 0.49], [0, 1]); // Era 0.42
  const leaf7Opacity = useTransform(scrollYProgress, [0.52, 0.57], [0, 1]); // Era 0.50
  const leaf8Opacity = useTransform(scrollYProgress, [0.60, 0.65], [0, 1]); // Era 0.58
  const leaf9Opacity = useTransform(scrollYProgress, [0.68, 0.73], [0, 1]); // Era 0.66
  const leaf10Opacity = useTransform(scrollYProgress, [0.76, 0.81], [0, 1]); // Era 0.74
  const leaf11Opacity = useTransform(scrollYProgress, [0.84, 0.89], [0, 1]); // Era 0.82
  const leaf12Opacity = useTransform(scrollYProgress, [0.92, 0.97], [0, 1]); // Era 0.90

  // ===== FOLHAS SECUNDÁRIAS (Ajustadas para nascer do caule secundário) =====
  const secLeaf1Opacity = useTransform(scrollYProgress, [0.20, 0.25], [0, 1]); // Era 0.15
  const secLeaf2Opacity = useTransform(scrollYProgress, [0.35, 0.40], [0, 1]); // Era 0.28
  const secLeaf3Opacity = useTransform(scrollYProgress, [0.50, 0.55], [0, 1]); // Era 0.42
  const secLeaf4Opacity = useTransform(scrollYProgress, [0.65, 0.70], [0, 1]); // Era 0.56
  const secLeaf5Opacity = useTransform(scrollYProgress, [0.80, 0.85], [0, 1]); // Era 0.70
  const secLeaf6Opacity = useTransform(scrollYProgress, [0.90, 0.95], [0, 1]); // Era 0.84

  // ===== FOLHAS TERCIÁRIAS (Ajustadas para nascer do caule terciário) =====
  const terLeaf1Opacity = useTransform(scrollYProgress, [0.35, 0.40], [0, 1]); // Era 0.25
  const terLeaf2Opacity = useTransform(scrollYProgress, [0.55, 0.60], [0, 1]); // Era 0.45
  const terLeaf3Opacity = useTransform(scrollYProgress, [0.75, 0.80], [0, 1]); // Era 0.65
  const terLeaf4Opacity = useTransform(scrollYProgress, [0.90, 0.95], [0, 1]); // Era 0.85

  return (
    <div className="fixed left-[4px] md:left-[42px] top-[26px] md:top-[14px] z-90 pointer-events-none">
      <motion.svg
        viewBox="0 0 110 1800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[75px] md:w-[115px] h-auto overflow-visible"
        style={{ transformOrigin: "36% 0px" }}
        variants={windSwayVariants}
        animate="animate"
      >
        {/* Vaso */}
        <path d="M20 28 L60 28 L56 52 L24 52 Z" fill="#CC998D" />
        <ellipse cx="40" cy="28" rx="20" ry="5" fill="#CC998D" />
        <ellipse cx="40" cy="28" rx="16" ry="4" fill="rgba(0,0,0,0.1)" />
        <ellipse cx="40" cy="30" rx="14" ry="3" fill="#4a3728" />

        {/* Main Vine Stem */}
        <motion.path
          d="M40 31 Q40 80, 52 180 Q62 300, 42 420 Q28 540, 55 660 Q72 780, 48 900 Q30 1020, 58 1140 Q75 1260, 45 1380 Q25 1500, 52 1620 Q65 1720, 50 1780"
          stroke="#6B8E77"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={stemPathLength}
          style={{ strokeDashoffset: mainStemOffset }}
        />

        {/* Secondary Vine Stem */}
        <motion.path
          d="M48 120 Q68 180, 58 280 Q45 380, 70 480 Q85 580, 55 680 Q35 780, 65 880 Q85 980, 52 1080 Q30 1180, 62 1280 Q78 1380, 48 1480"
          stroke="#7A9E87"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={stemPathLength * 0.6}
          style={{ strokeDashoffset: secondaryStemOffset }}
        />

        {/* Tertiary Vine Stem */}
        <motion.path
          d="M52 280 Q30 350, 45 450 Q62 550, 38 650 Q22 750, 50 850 Q70 950, 42 1050 Q25 1150, 55 1250"
          stroke="#8AAE97"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={stemPathLength * 0.4}
          style={{ strokeDashoffset: tertiaryStemOffset }}
        />

        {/* ===== MAIN VINE LEAVES ===== */}
        {/* Leaf 1 - Right */}
        <motion.g style={{ opacity: leaf1Opacity }}>
          <path d="M50 100 Q78 82, 85 102 Q88 128, 65 135 Q50 128, 50 100" fill="#6B8E77" />
          <path d="M50 100 Q68 112, 75 125" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 2 - Left */}
        <motion.g style={{ opacity: leaf2Opacity }}>
          <path d="M45 220 Q15 202, 10 225 Q8 255, 32 262 Q45 254, 45 220" fill="#7A9E87" />
          <path d="M45 220 Q26 236, 18 250" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 3 - Right */}
        <motion.g style={{ opacity: leaf3Opacity }}>
          <path d="M55 360 Q85 340, 92 365 Q94 398, 70 405 Q55 396, 55 360" fill="#6B8E77" />
          <path d="M55 360 Q75 378, 82 392" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 4 - Left */}
        <motion.g style={{ opacity: leaf4Opacity }}>
          <path d="M38 480 Q8 465, 2 490 Q-2 525, 25 532 Q40 524, 38 480" fill="#7A9E87" />
          <path d="M38 480 Q18 500, 12 518" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 5 - Right */}
        <motion.g style={{ opacity: leaf5Opacity }}>
          <path d="M60 600 Q90 580, 95 608 Q94 645, 72 650 Q58 642, 60 600" fill="#6B8E77" />
          <path d="M60 600 Q78 620, 84 638" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 6 - Left */}
        <motion.g style={{ opacity: leaf6Opacity }}>
          <path d="M42 720 Q12 705, 5 732 Q2 768, 30 775 Q45 766, 42 720" fill="#7A9E87" />
          <path d="M42 720 Q22 742, 14 760" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 7 - Right */}
        <motion.g style={{ opacity: leaf7Opacity }}>
          <path d="M58 840 Q88 820, 94 848 Q92 885, 68 892 Q55 884, 58 840" fill="#6B8E77" />
          <path d="M58 840 Q76 860, 82 878" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 8 - Left */}
        <motion.g style={{ opacity: leaf8Opacity }}>
          <path d="M40 960 Q10 945, 4 972 Q0 1008, 28 1015 Q43 1006, 40 960" fill="#7A9E87" />
          <path d="M40 960 Q20 982, 12 1000" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 9 - Right */}
        <motion.g style={{ opacity: leaf9Opacity }}>
          <path d="M62 1080 Q92 1060, 98 1088 Q96 1125, 72 1132 Q60 1124, 62 1080" fill="#6B8E77" />
          <path d="M62 1080 Q80 1100, 86 1118" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 10 - Left */}
        <motion.g style={{ opacity: leaf10Opacity }}>
          <path d="M42 1200 Q12 1185, 6 1212 Q2 1248, 30 1255 Q45 1246, 42 1200" fill="#7A9E87" />
          <path d="M42 1200 Q22 1222, 14 1240" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 11 - Right */}
        <motion.g style={{ opacity: leaf11Opacity }}>
          <path d="M58 1320 Q88 1300, 94 1328 Q92 1365, 68 1372 Q55 1364, 58 1320" fill="#6B8E77" />
          <path d="M58 1320 Q76 1340, 82 1358" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Leaf 12 - Left */}
        <motion.g style={{ opacity: leaf12Opacity }}>
          <path d="M45 1450 Q15 1435, 8 1462 Q5 1498, 32 1505 Q48 1496, 45 1450" fill="#7A9E87" />
          <path d="M45 1450 Q25 1472, 18 1490" stroke="#5A7A66" strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* ===== SECONDARY VINE LEAVES ===== */}
        {/* Secondary Leaf 1 */}
        <motion.g style={{ opacity: secLeaf1Opacity }}>
          <path d="M65 220 Q88 200, 95 222 Q96 248, 75 255 Q62 248, 65 220" fill="#8AAE97" />
          <path d="M65 220 Q80 235, 85 248" stroke="#6B8E77" strokeWidth="1" fill="none" />
        </motion.g>

        {/* Secondary Leaf 2 */}
        <motion.g style={{ opacity: secLeaf2Opacity }}>
          <path d="M72 420 Q98 402, 102 425 Q102 455, 80 460 Q68 452, 72 420" fill="#8AAE97" />
          <path d="M72 420 Q88 438, 92 452" stroke="#6B8E77" strokeWidth="1" fill="none" />
        </motion.g>

        {/* Secondary Leaf 3 */}
        <motion.g style={{ opacity: secLeaf3Opacity }}>
          <path d="M58 620 Q32 602, 28 625 Q26 655, 48 662 Q60 654, 58 620" fill="#8AAE97" />
          <path d="M58 620 Q42 638, 36 652" stroke="#6B8E77" strokeWidth="1" fill="none" />
        </motion.g>

        {/* Secondary Leaf 4 */}
        <motion.g style={{ opacity: secLeaf4Opacity }}>
          <path d="M68 820 Q95 802, 100 825 Q100 858, 78 865 Q65 856, 68 820" fill="#8AAE97" />
          <path d="M68 820 Q85 838, 90 855" stroke="#6B8E77" strokeWidth="1" fill="none" />
        </motion.g>

        {/* Secondary Leaf 5 */}
        <motion.g style={{ opacity: secLeaf5Opacity }}>
          <path d="M55 1020 Q28 1002, 22 1028 Q20 1062, 45 1068 Q58 1060, 55 1020" fill="#8AAE97" />
          <path d="M55 1020 Q38 1040, 32 1058" stroke="#6B8E77" strokeWidth="1" fill="none" />
        </motion.g>

        {/* Secondary Leaf 6 */}
        <motion.g style={{ opacity: secLeaf6Opacity }}>
          <path d="M65 1220 Q92 1202, 98 1228 Q98 1262, 75 1268 Q62 1260, 65 1220" fill="#8AAE97" />
          <path d="M65 1220 Q82 1240, 88 1258" stroke="#6B8E77" strokeWidth="1" fill="none" />
        </motion.g>

        {/* ===== TERTIARY VINE LEAVES (smallest) ===== */}
        {/* Tertiary Leaf 1 */}
        <motion.g style={{ opacity: terLeaf1Opacity }}>
          <path d="M42 380 Q22 365, 18 385 Q16 408, 35 412 Q44 405, 42 380" fill="#9BBE9F" />
          <path d="M42 380 Q30 392, 25 405" stroke="#7A9E87" strokeWidth="0.8" fill="none" />
        </motion.g>

        {/* Tertiary Leaf 2 */}
        <motion.g style={{ opacity: terLeaf2Opacity }}>
          <path d="M48 580 Q68 565, 72 585 Q74 608, 55 612 Q46 605, 48 580" fill="#9BBE9F" />
          <path d="M48 580 Q60 592, 65 605" stroke="#7A9E87" strokeWidth="0.8" fill="none" />
        </motion.g>

        {/* Tertiary Leaf 3 */}
        <motion.g style={{ opacity: terLeaf3Opacity }}>
          <path d="M38 780 Q18 765, 14 785 Q12 808, 32 812 Q40 805, 38 780" fill="#9BBE9F" />
          <path d="M38 780 Q25 792, 20 805" stroke="#7A9E87" strokeWidth="0.8" fill="none" />
        </motion.g>

        {/* Tertiary Leaf 4 */}
        <motion.g style={{ opacity: terLeaf4Opacity }}>
          <path d="M52 1000 Q72 985, 76 1005 Q78 1028, 58 1032 Q50 1025, 52 1000" fill="#9BBE9F" />
          <path d="M52 1000 Q65 1012, 68 1025" stroke="#7A9E87" strokeWidth="0.8" fill="none" />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default GrowingVine;
