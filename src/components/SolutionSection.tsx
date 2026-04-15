import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Cloud, Sprout, TrendingUp, ShieldCheck, Mic } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  { icon: Cloud, title: "Weather Updates", desc: "Real-time weather data tailored to your region and crops." },
  { icon: Sprout, title: "Crop Guidance", desc: "AI-powered recommendations for planting, growing, and harvesting." },
  { icon: TrendingUp, title: "Market Prices", desc: "Live market prices to help farmers sell at the best time." },
  { icon: ShieldCheck, title: "DBT Verification", desc: "Verify benefits and subsidies directly through the platform." },
  { icon: Mic, title: "Voice & Chatbot", desc: "Multi-language voice and chat support for effortless use." },
];

const SolutionSection = () => (
  <SectionWrapper id="solution">
    <SectionHeading badge="Our Solution" title="One Platform, Everything a Farmer Needs" subtitle="Agroxo brings together all essential tools into a single, easy-to-use platform." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {solutions.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative rounded-2xl border border-border bg-background p-7 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)] transition-all"
        >
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <s.icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
          <p className="text-sm text-muted-foreground">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SolutionSection;
