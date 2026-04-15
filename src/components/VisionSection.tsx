import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { BrainCircuit, BellRing, Smartphone, Store } from "lucide-react";
import { motion } from "framer-motion";

const visions = [
  { icon: BrainCircuit, title: "AI Crop Prediction", desc: "Predict yields and crop health before the season begins." },
  { icon: BellRing, title: "Smart Alerts", desc: "Proactive notifications for weather, pests, and market changes." },
  { icon: Smartphone, title: "Mobile App", desc: "A dedicated mobile app for on-the-go farming insights." },
  { icon: Store, title: "Farmer Marketplace", desc: "Connect farmers directly with buyers for fair trade." },
];

const VisionSection = () => (
  <SectionWrapper>
    <SectionHeading badge="Future Vision" title="What's Next for Agroxo" subtitle="We're just getting started. Here's where we're heading." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {visions.map((v, i) => (
        <motion.div
          key={v.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="group relative p-7 rounded-2xl border border-dashed border-primary/30 hover:border-primary hover:bg-primary/5 transition-all text-center"
        >
          <v.icon className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
          <p className="text-sm text-muted-foreground">{v.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default VisionSection;
