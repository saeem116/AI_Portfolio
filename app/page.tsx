import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main id="hero">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ProblemSolutionSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
