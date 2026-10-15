"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Librovox",
    description:
      "An AI-powered concept transforming books and PDFs into interactive voice conversations, making static content engaging through intelligent audio experiences.",
    technologies: [
      "AI Integration",
      "React",
      "Voice Technology",
      "PDF Processing",
    ],
    category: "AI & Voice",
  },
  {
    title: "AI Interview",
    description:
      "Intelligent mock interview application providing personalized interview questions and detailed feedback to help candidates prepare effectively for real interviews.",
    technologies: ["Next.js", "AI", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://hs-ai-interview.vercel.app/",
    category: "AI & Education",
  },
  {
    title: "HireSense",
    description:
      "Comprehensive hiring-focused web application designed to streamline the recruitment process and improve candidate experience for modern teams.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://hs-hiresense.vercel.app/",
    category: "SaaS Platform",
  },
  {
    title: "NationView",
    description:
      "Country exploration application providing detailed information and insights about nations worldwide through an intuitive, data-rich interface.",
    technologies: ["React", "REST API", "Tailwind CSS", "Data Visualization"],
    liveUrl: "https://nationview.netlify.app/",
    category: "Data & API",
  },
];

export default function ProjectsSection() {
  return (
    <AnimatedSection
      id="projects"
      className="py-24 items-center flex justify-center md:py-32 px-6 bg-[var(--color-surface)]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-4">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            Portfolio
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-tight">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-accent)]/50 transition-all duration-300"
            >
              {/* Project Visual */}
              <div className="relative h-64 bg-gradient-to-br from-[var(--color-surface-elevated)] via-[var(--color-surface)] to-[var(--color-background)] overflow-hidden border-b border-[var(--color-border)]">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 bg-[var(--color-background)]/90 backdrop-blur-sm border border-[var(--color-border)] rounded-full text-xs font-semibold text-[var(--color-accent)]">
                    {project.category}
                  </span>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <h3 className="text-5xl font-bold text-[var(--color-text-primary)]/10 group-hover:text-[var(--color-text-primary)]/20 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 ml-4 p-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors rounded-lg hover:bg-[var(--color-surface)]"
                      aria-label={`Visit ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-[var(--color-surface)] text-[var(--color-text-muted)] rounded-lg border border-[var(--color-border)] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:gap-3 transition-all duration-300"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
