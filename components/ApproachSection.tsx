"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "Start by understanding the business challenge and user needs before choosing an implementation approach.",
  },
  {
    number: "02",
    title: "Design the Experience",
    description:
      "Plan the user flow and interface to ensure clarity, ease of use, and intuitive navigation.",
  },
  {
    number: "03",
    title: "Build with Quality",
    description:
      "Write clean, maintainable code with responsive design, scalability, and performance in mind.",
  },
  {
    number: "04",
    title: "Test & Optimize",
    description:
      "Continuously test functionality, gather feedback, and improve performance and user experience.",
  },
];

export default function ApproachSection() {
  return (
    <AnimatedSection
      id="approach"
      className="py-24 items-center flex justify-center md:py-32 px-6 bg-[var(--color-surface)]"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-4">
          <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            Approach
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          How I Work
        </h2>

        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-16 leading-relaxed">
          I believe in building solutions that deliver real business value, not
          just technical sophistication for its own sake.
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              <div className="flex gap-6 p-8 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)]/50 transition-colors duration-300">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-xl group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors duration-300">
                    <span className="text-2xl font-bold text-[var(--color-accent)] group-hover:text-[var(--color-background)] transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[3.5rem] top-[5.5rem] w-[2px] h-8 bg-[var(--color-border)] group-hover:bg-[var(--color-accent)]/30 transition-colors duration-300" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
