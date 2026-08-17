import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Começa invisível e 40px mais para baixo
      whileInView={{ opacity: 1, y: 0 }} // Quando entra na tela, fica visível e sobe
      viewport={{ once: true, margin: "-100px" }} // Anima apenas 1 vez ao chegar perto
      transition={{ duration: 0.6, delay, ease: "easeOut" }} // Duração e suavidade
    >
      {children}
    </motion.div>
  );
};