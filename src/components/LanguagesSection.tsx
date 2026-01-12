import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";

const languages = [
  { name: "English", level: "Full Professional", percentage: 90 },
  { name: "Urdu", level: "Native", percentage: 100 },
  { name: "Punjabi", level: "Native", percentage: 100 },
  { name: "Chinese", level: "Elementary", percentage: 25 },
];

export const LanguagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Globe size={24} className="text-primary" />
            <h3 className="text-xl font-bold text-foreground">Languages</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-card border-gradient rounded-xl p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-xs text-muted-foreground font-mono">{lang.level}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.percentage}%` } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
