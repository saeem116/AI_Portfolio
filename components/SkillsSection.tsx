"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    icon: "⚡",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
    icon: "⚙️",
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose"],
    icon: "💾",
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman"],
    icon: "🛠️",
  },
];

export default function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      className="py-24 items-center flex justify-center md:py-32 px-6 bg-[var(--color-background)]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-4">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            Skills
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-tight">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-accent)]/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group relative flex items-center gap-3 py-3 px-4 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent)] transition-colors duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-base font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
