import { lazy, Suspense } from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import LazySection from "../components/LazySection";

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
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        
        <LazySection animation="fade-up">
          <Suspense fallback={<div className="min-h-[50vh]"></div>}>
            <AboutSection />
          </Suspense>
        </LazySection>

        <LazySection animation="fade-up">
          <Suspense fallback={<div className="min-h-[50vh]"></div>}>
            <SkillsSection />
          </Suspense>
        </LazySection>

        <LazySection animation="zoom">
          <Suspense fallback={<div className="min-h-[50vh]"></div>}>
            <AchievementsSection />
          </Suspense>
        </LazySection>

        <LazySection animation="fade-up">
          <Suspense fallback={<div className="min-h-[50vh]"></div>}>
            <ProjectsSection />
          </Suspense>
        </LazySection>

        <LazySection animation="fade-up">
          <Suspense fallback={<div className="min-h-[50vh]"></div>}>
            <ContactSection />
          </Suspense>
        </LazySection>
      </main>

      {/* Footer */}
      <LazySection>
        <Suspense fallback={<div className="h-20"></div>}>
          <Footer />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default Home;
