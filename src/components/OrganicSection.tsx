import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Handshake, Sprout } from "lucide-react";
import organicImg from "@/assets/organic-farm.jpg";
import { motion } from "framer-motion";

const points = [
  { icon: Sprout, text: "Learn natural and sustainable farming methods" },
  { icon: Leaf, text: "Get organic alternatives to chemical inputs" },
  { icon: Handshake, text: "Connect with organic companies and markets" },
];

const OrganicSection = () => (
  <SectionWrapper dark>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]"
      >
        <img src={organicImg} alt="Organic farming rows" className="w-full object-cover" loading="lazy" width={800} height={600} />
      </motion.div>
      <div>
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          Go Organic
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Embrace Organic Farming</h2>
        <p className="text-muted-foreground mb-6">
          Agroxo promotes natural farming by providing organic methods, connecting farmers with organic companies, and guiding the transition to sustainable agriculture.
        </p>
        <ul className="space-y-4 mb-8">
          {points.map((p) => (
            <li key={p.text} className="flex items-center gap-3 text-secondary-foreground">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-4 h-4 text-primary" />
              </div>
              {p.text}
            </li>
          ))}
        </ul>
        <Button className="gap-2" size="lg">
          Start Organic Farming <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </SectionWrapper>
);

export default OrganicSection;
