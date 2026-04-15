import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { AlertTriangle, BookOpen, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  { icon: AlertTriangle, title: "Lack of Information", desc: "Farmers struggle to access timely, reliable information about crops, weather, and market prices." },
  { icon: BookOpen, title: "Literacy Barriers", desc: "Many farmers face language and literacy challenges that prevent them from using existing resources." },
  { icon: Smartphone, title: "Technology Gap", desc: "Complex digital tools are inaccessible to farmers who aren't tech-savvy, leaving them underserved." },
];

const ProblemSection = () => (
  <SectionWrapper id="problem" dark>
    <SectionHeading badge="The Problem" title="Challenges Farmers Face Today" subtitle="Millions of farmers worldwide lack the tools and information needed to maximize yields and protect crops." />
    <div className="grid md:grid-cols-3 gap-8">
      {problems.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-background rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow border border-border"
        >
          <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
            <p.icon className="w-6 h-6 text-destructive" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">{p.title}</h3>
          <p className="text-muted-foreground text-sm">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProblemSection;
