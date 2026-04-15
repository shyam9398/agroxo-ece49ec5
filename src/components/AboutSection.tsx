import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import farmerTech from "@/assets/farmer-tech.jpg";
import { CheckCircle } from "lucide-react";

const points = [
  "Intelligent crop decision support system",
  "Real-time pest control & resource management",
  "Accessible to farmers regardless of literacy",
  "Voice-guided interface in multiple languages",
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
        <img src={farmerTech} alt="Farmer using Agroxo technology" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
      </div>
      <div>
        <SectionHeading badge="About Agroxo" title="Intelligent Agriculture, Simplified" center={false} />
        <p className="text-muted-foreground mb-6">
          Agroxo is an intelligent agriculture platform designed to bridge the gap between modern technology and everyday farming. We empower farmers with AI-driven insights for smarter crop decisions, effective pest control, and optimized resource management.
        </p>
        <ul className="space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-secondary-foreground">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
