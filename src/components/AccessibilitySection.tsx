import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Mic, Eye, Hand } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Mic, title: "Voice-First Design", desc: "Every feature is accessible through voice commands in local languages." },
  { icon: Eye, title: "Works for Everyone", desc: "Designed for users of all literacy levels with visual cues and audio." },
  { icon: Hand, title: "Simple Interface", desc: "Large buttons, clear icons, and intuitive flows — no training needed." },
];

const AccessibilitySection = () => (
  <SectionWrapper>
    <SectionHeading badge="Inclusive Design" title="Designed for Every Farmer" subtitle="No matter your background, education, or tech experience — Agroxo works for you." />
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-elevated)] transition-shadow"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <item.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AccessibilitySection;
