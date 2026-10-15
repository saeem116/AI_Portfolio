"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t items-center flex justify-center border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-12">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold mb-2">
              Saeem Zaman<span className="text-[var(--color-accent)]">.</span>
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">MERN Stack Developer</p>
          </div>

          {/* Copyright */}
          <div className="text-sm text-[var(--color-text-muted)]">
            © {currentYear} Saeem Zaman. All rights reserved.
          </div>

          {/* Built with */}
          <div className="text-sm text-[var(--color-text-muted)]">
            Built with{" "}
            <span className="text-[var(--color-accent)] font-semibold">Next.js</span> &{" "}
            <span className="text-[var(--color-accent)] font-semibold">Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
