"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Zap,
  Navigation,
  Workflow,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

interface CaseStudy {
  id: string;
  icon: React.ElementType;
  problemTitle: string;
  solutionTitle: string;
  problem: {
    description: string;
    whyItMatters: string[];
  };
  solution: {
    approach: string;
    strategies: string[];
    technologies: string[];
  };
  cta: {
    text: string;
    link: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: "performance",
    icon: Zap,
    problemTitle: "Slow Website Performance",
    solutionTitle: "Optimized User Experience",
    problem: {
      description:
        "Websites burdened with unnecessary JavaScript, oversized images, and inefficient rendering patterns create frustrated users and lost opportunities.",
      whyItMatters: [
        "Users abandon slow pages within seconds",
        "Search rankings drop with poor performance",
        "Conversion rates decline as load times increase",
      ],
    },
    solution: {
      approach:
        "I analyze the critical rendering path, eliminate blocking resources, optimize asset delivery, and implement efficient rendering patterns to create fast, responsive experiences.",
      strategies: [
        "Code splitting and lazy loading to reduce initial bundle size",
        "Image optimization with modern formats and responsive sizing",
        "Server-side rendering and static generation where appropriate",
        "Efficient state management and component memoization",
      ],
      technologies: [
        "Next.js",
        "React",
        "WebP/AVIF",
        "Lighthouse",
        "Web Vitals",
      ],
    },
    cta: {
      text: "View Performance-Focused Projects",
      link: "#projects",
    },
  },
  {
    id: "ux",
    icon: Navigation,
    problemTitle: "Confusing User Experience",
    solutionTitle: "Clear User Journey",
    problem: {
      description:
        "Poor navigation structure, unclear information hierarchy, and inconsistent layouts leave visitors unable to find what they need or complete important actions.",
      whyItMatters: [
        "Users struggle to understand product offerings",
        "Important calls-to-action go unnoticed",
        "Brand credibility suffers from poor presentation",
      ],
    },
    solution: {
      approach:
        "I design intuitive navigation patterns, establish clear visual hierarchies, and create responsive layouts that guide users naturally toward their goals across all devices.",
      strategies: [
        "Simplified navigation with clear labels and logical grouping",
        "Progressive disclosure to present information at the right time",
        "Consistent design patterns and familiar interaction models",
        "Mobile-first responsive design for seamless cross-device experiences",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Figma",
        "Mobile-First Design",
      ],
    },
    cta: {
      text: "Explore UX-Driven Solutions",
      link: "#projects",
    },
  },
  {
    id: "automation",
    icon: Workflow,
    problemTitle: "Manual Business Process",
    solutionTitle: "Automated Workflow",
    problem: {
      description:
        "Repetitive manual tasks, disconnected data sources, and time-consuming workflows drain resources and introduce errors that compound over time.",
      whyItMatters: [
        "Team productivity suffers from repetitive work",
        "Human error increases in manual data entry",
        "Scaling becomes difficult without process automation",
      ],
    },
    solution: {
      approach:
        "I build custom web applications with API integrations that automate workflows, centralize data, and create efficient systems tailored to specific business needs.",
      strategies: [
        "Custom web applications for specific business processes",
        "API integrations to connect existing tools and services",
        "Database design for efficient data organization and retrieval",
        "User-friendly dashboards for monitoring and management",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "REST APIs", "React"],
    },
    cta: {
      text: "Discuss Your Workflow Challenge",
      link: "#contact",
    },
  },
];

export default function ProblemSolutionSection() {
  const [activeCards, setActiveCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setActiveCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <AnimatedSection
      id="problem-solution"
      className="py-24 md:py-32 items-center flex justify-center px-6 bg-[var(--color-background)]"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            Problem Solving
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 leading-tight"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From Problem to Solution
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Real business challenges require thoughtful technical solutions.
          Here&apos;s how I approach common problems as a MERN Stack Developer.
        </motion.p>

        {/* Case Study Cards */}
        <div className="space-y-6">
          {caseStudies.map((study, index) => {
            const isActive = activeCards[study.id];
            const Icon = study.icon;

            return (
              <motion.div
                key={study.id}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-accent)]/50 transition-all duration-500">
                  {/* Clickable Header */}
                  <button
                    onClick={() => toggleCard(study.id)}
                    className="w-full text-left p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
                    aria-expanded={isActive}
                    aria-controls={`${study.id}-content`}
                  >
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-14 h-14 flex items-center justify-center rounded-xl border-2 transition-all duration-500 ${
                            isActive
                              ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
                              : "bg-[var(--color-background)] border-[var(--color-border)] group-hover:border-[var(--color-accent)]/50"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 transition-colors duration-500 ${
                              isActive
                                ? "text-[var(--color-background)]"
                                : "text-[var(--color-accent)]"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <AnimatePresence mode="wait">
                          <motion.h3
                            key={isActive ? "solution" : "problem"}
                            className="text-2xl md:text-3xl font-bold mb-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            {isActive
                              ? study.solutionTitle
                              : study.problemTitle}
                          </motion.h3>
                        </AnimatePresence>
                        <p className="text-sm text-[var(--color-text-muted)] font-medium">
                          {isActive
                            ? "Solution Approach"
                            : "Business Challenge"}
                        </p>
                      </div>

                      {/* Toggle Arrow */}
                      <motion.div
                        className="flex-shrink-0 mt-2"
                        animate={{ rotate: isActive ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-6 h-6 text-[var(--color-accent)]" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        id={`${study.id}-content`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-4 border-t border-[var(--color-border)]">
                          {/* Problem Section */}
                          <div className="mb-8">
                            <h4 className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
                              The Problem
                            </h4>
                            <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                              {study.problem.description}
                            </p>
                            <div className="space-y-2">
                              {study.problem.whyItMatters.map((point, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 + 0.2 }}
                                >
                                  <TrendingUp className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                                  <span className="text-sm text-[var(--color-text-secondary)]">
                                    {point}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Solution Section */}
                          <div className="mb-8">
                            <h4 className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
                              My Approach
                            </h4>
                            <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                              {study.solution.approach}
                            </p>
                            <div className="space-y-3 mb-6">
                              {study.solution.strategies.map((strategy, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-start gap-3 p-3 bg-[var(--color-background)] rounded-lg border border-[var(--color-border)]"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 + 0.3 }}
                                >
                                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-[var(--color-text-primary)]">
                                    {strategy}
                                  </span>
                                </motion.div>
                              ))}
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                              {study.solution.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 text-xs bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] rounded-lg border border-[var(--color-border)] font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <motion.a
                            href={study.cta.link}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-background)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-all duration-300 group/cta"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>{study.cta.text}</span>
                            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-[var(--color-text-secondary)] mb-6">
            Have a different challenge in mind?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] font-semibold rounded-lg border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300"
          >
            <span>Let&apos;s Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
