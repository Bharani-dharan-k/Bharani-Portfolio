import { lazy, Suspense } from "react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";

// Lazy load sections that are below the fold
const AboutSection = lazy(() => import("../components/AboutSection"));
const SkillsSection = lazy(() => import("../components/SkillsSection"));
const AchievementsSection = lazy(() => import("../components/AchievementsSection"));
const ProjectsSection = lazy(() => import("../components/ProjectsSection"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-[50vh]"></div>}>
          <AboutSection />
          <SkillsSection />
          <AchievementsSection />
          <ProjectsSection />
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="h-20"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
