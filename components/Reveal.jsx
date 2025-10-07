"use client";
import { motion } from "framer-motion";

export default function Reveal({ children, className = "", y = 20, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9], delay }}
    >
      {children}
    </motion.div>
  );
}