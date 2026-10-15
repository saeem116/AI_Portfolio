"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
];

export default function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="py-24 md:py-32 px-6 lg:px-8 items-center flex justify-center bg-[var(--color-background)]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-4">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            About Me
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
          Building Experiences That Matter
        </h2>

        <div className="space-y-6 mb-12">
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            I build responsive, scalable web applications with a focus on
            usability and maintainability. My work centers on creating digital
            experiences that solve real problems and deliver measurable value to
            businesses.
          </p>

          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            From dynamic web applications to REST APIs and interactive
            interfaces, I write clean code that prioritizes both technical
            excellence and business outcomes.
          </p>
        </div>

        {/* Technologies */}
        <div className="pt-8 border-t border-[var(--color-border)]">
          <h3 className="text-xl font-semibold mb-6 text-[var(--color-accent)]">
            Core Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-secondary)] font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
