import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const stack = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript"], color: "bg-blue-500/10 text-blue-600" },
  { category: "Backend", items: ["Python", "Django"], color: "bg-emerald-500/10 text-emerald-600" },
  { category: "AI / ML", items: ["CNN", "k-NN"], color: "bg-violet-500/10 text-violet-600" },
  { category: "Database", items: ["MySQL"], color: "bg-amber-500/10 text-amber-600" },
];

const TechStackSection = () => (
  <SectionWrapper id="technology" dark>
    <SectionHeading badge="Technology" title="Built with Robust Technology" subtitle="A modern, scalable architecture designed for reliability and performance." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stack.map((s, i) => (
        <motion.div
          key={s.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="bg-background rounded-2xl p-7 border border-border text-center hover:shadow-[var(--shadow-card)] transition-shadow"
        >
          <h3 className="font-semibold text-foreground mb-4">{s.category}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {s.items.map((item) => (
              <span key={item} className={`px-3 py-1 rounded-full text-xs font-medium ${s.color}`}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TechStackSection;
