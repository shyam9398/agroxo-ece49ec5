import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Upload, Brain, BarChart3, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Upload, title: "Input Data", desc: "Farmer inputs crop data or scans a plant using the app.", num: "01" },
  { icon: Brain, title: "AI Analyzes", desc: "Our CNN and k-NN models analyze images, weather, and soil data.", num: "02" },
  { icon: BarChart3, title: "Recommendations", desc: "System generates personalized recommendations for the farmer.", num: "03" },
  { icon: Volume2, title: "Voice Output", desc: "Results are delivered via voice in the farmer's preferred language.", num: "04" },
];

const HowItWorksSection = () => (
  <SectionWrapper id="how-it-works" dark>
    <SectionHeading badge="How It Works" title="Simple Steps, Smart Results" subtitle="From data input to actionable insights — all in seconds." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((s, i) => (
        <motion.div
          key={s.num}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="text-center"
        >
          <div className="relative mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-5">
            <s.icon className="w-8 h-8 text-primary" />
            <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
              {s.num}
            </span>
          </div>
          <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default HowItWorksSection;
