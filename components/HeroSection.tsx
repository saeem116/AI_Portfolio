"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HeroSection() {
  const name = "SAEEM ZAMAN";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(250, 204, 21, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(250, 204, 21, 0.05) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Accent Line - Top Left */}
      <div className="absolute top-32 left-0 w-32 h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] mb-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]"></span>
          </span>
          <span className="text-sm font-medium text-[var(--color-text-secondary)]">
            Available for freelance work
          </span>
        </div>

        {/* Main Title */}
        <motion.h1
          className="mb-8"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 mb-2">
            {name
              .split(" ")[0]
              .split("")
              .map((letter, index) => (
                <motion.span
                  key={`first-${index}`}
                  variants={letterVariants}
                  className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight inline-block"
                >
                  {letter}
                </motion.span>
              ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6">
            {name
              .split(" ")[1]
              .split("")
              .map((letter, index) => (
                <motion.span
                  key={`last-${index}`}
                  variants={letterVariants}
                  className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight inline-block text-[var(--color-accent)]"
                >
                  {letter}
                </motion.span>
              ))}
          </div>
        </motion.h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[var(--color-text-secondary)] mb-6 tracking-wide">
          MERN STACK DEVELOPER
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-14 mx-auto leading-relaxed max-w-2xl">
          Building digital experiences that help businesses grow
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#projects"
            className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-background)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors duration-300"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Accent Line - Bottom Right */}
      <div className="absolute bottom-32 right-0 w-32 h-[1px] bg-gradient-to-l from-[var(--color-accent)] to-transparent" />
    </section>
  );
}
