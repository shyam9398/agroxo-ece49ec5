import SectionHeading from "./SectionHeading";
import { Upload, Brain, BarChart3, Volume2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import bg from "@/assets/futuristic-bg.jpg";

const steps = [
  { icon: Upload, title: "Input Data", desc: "Farmer inputs crop data or scans a plant using the app.", num: "01" },
  { icon: Brain, title: "AI Analyzes", desc: "Our CNN and k-NN models analyze images, weather, and soil data.", num: "02" },
  { icon: BarChart3, title: "Recommendations", desc: "System generates personalized recommendations for the farmer.", num: "03" },
  { icon: Volume2, title: "Voice Output", desc: "Results are delivered via voice in the farmer's preferred language.", num: "04" },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="relative py-20 md:py-28 overflow-hidden">
    {/* Futuristic background */}
    <div className="absolute inset-0">
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1280}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[hsl(150_60%_5%/0.85)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(150_60%_3%/0.7)_100%)]" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="container relative z-10"
    >
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/40 text-sm font-medium mb-4 backdrop-blur-sm">
          How It Works
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
          Simple Steps, <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">Smart Results</span>
        </h2>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          From data input to actionable insights — all in seconds.
        </p>
      </div>

      {/* Workflow grid with connecting arrows */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
        {steps.map((s, i) => (
          <div key={s.num} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_hsl(142_60%_40%/0.6)]"
            >
              {/* Glow ring */}
              <div className="relative mx-auto w-20 h-20 mb-5">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 transition-colors" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/50 flex items-center justify-center backdrop-blur-sm">
                  <s.icon className="w-9 h-9 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/50">
                  {s.num}
                </span>
              </div>
              <h3 className="font-semibold text-primary-foreground text-lg mb-2 text-center">{s.title}</h3>
              <p className="text-sm text-primary-foreground/70 text-center leading-relaxed">{s.desc}</p>
            </motion.div>

            {/* Connecting arrow (desktop horizontal, tablet hidden between rows) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 items-center justify-center w-6 h-6 rounded-full bg-primary/30 border border-primary/60 backdrop-blur-sm">
                <ArrowRight className="w-3 h-3 text-primary-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default HowItWorksSection;
