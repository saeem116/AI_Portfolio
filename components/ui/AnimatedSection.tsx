"use client";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function AnimatedSection({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
