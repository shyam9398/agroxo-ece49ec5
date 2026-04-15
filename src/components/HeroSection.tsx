import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-farm.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Smart farming with AI technology" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
    </div>
    <div className="container relative z-10 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
          🌿 AI-Powered Agriculture
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
          Technology for{" "}
          <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
            Every Farmer
          </span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
          AI-powered, voice-guided farming platform that helps farmers make smarter decisions with real-time insights.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" asChild>
            <a href="#contact">Get Started <ArrowRight className="w-4 h-4" /></a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2" asChild>
            <a href="#how-it-works"><Play className="w-4 h-4" /> View Demo</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
