import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Bug, FlaskConical, Mic, ScanLine, Leaf, Zap } from "lucide-react";
import { motion } from "framer-motion";
import pestImg from "@/assets/pest-detect.jpg";

const features = [
  { icon: Bug, title: "Pest Detection", desc: "AI-powered image recognition to identify pests and diseases instantly." },
  { icon: FlaskConical, title: "Fertilizer Recommendation", desc: "Get precise fertilizer suggestions based on soil and crop type." },
  { icon: Mic, title: "Voice Assistance", desc: "Multi-language voice interface for hands-free operation." },
  { icon: ScanLine, title: "Smart Scanning", desc: "Scan crops with your phone to get instant health analysis." },
  { icon: Leaf, title: "Organic Support", desc: "Guidance on natural farming methods and organic inputs." },
  { icon: Zap, title: "Real-time Alerts", desc: "Instant notifications for weather changes and pest outbreaks." },
];

const FeaturesSection = () => (
  <SectionWrapper id="features">
    <SectionHeading badge="Features" title="Powerful Tools for Modern Farming" subtitle="Everything you need to grow smarter, safer, and more sustainably." />
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="grid sm:grid-cols-2 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-xl border border-border hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all bg-background"
          >
            <f.icon className="w-5 h-5 text-primary mb-3" />
            <h3 className="font-semibold text-sm text-foreground mb-1">{f.title}</h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]"
      >
        <img src={pestImg} alt="AI pest detection on crop leaf" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
      </motion.div>
    </div>
  </SectionWrapper>
);

export default FeaturesSection;
