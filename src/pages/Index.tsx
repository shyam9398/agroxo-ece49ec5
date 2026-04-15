import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import OrganicSection from "@/components/OrganicSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import TechStackSection from "@/components/TechStackSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <FeaturesSection />
    <OrganicSection />
    <AccessibilitySection />
    <TechStackSection />
    <VisionSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
