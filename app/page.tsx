"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Header } from "@/components/header";
import { LinkCard } from "@/components/link-card";
import { links } from "@/data/links";

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
      when: "beforeChildren" as const,
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="flex min-h-dvh items-center justify-center px-4 py-2 sm:py-6">
      <motion.section
        className="w-full max-w-md space-y-6 px-5 pb-5 pt-1 sm:space-y-7 sm:px-7 sm:pb-7 sm:pt-3"
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial={shouldReduceMotion ? undefined : "hidden"}
        animate={shouldReduceMotion ? undefined : "visible"}
      >
        <Header
          subtitle={
            <>
              Inteligência de dados &
              <br />
              Engenharia de software
            </>
          }
        />

        <motion.div
          className="h-px w-full bg-eco-dark/20"
          initial={shouldReduceMotion ? undefined : { opacity: 0, scaleX: 0.92 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.35, delay: 0.12 }}
        />

        <motion.ul className="space-y-3">
          {links.map((item) => (
            <motion.li key={item.label} variants={shouldReduceMotion ? undefined : itemVariants}>
              <LinkCard item={item} />
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </main>
  );
}
