import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Power BI Data Analyst Associate",
    code: "PL-300",
    issuer: "Microsoft",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Azure Data Fundamentals",
    code: "DP-900",
    issuer: "Microsoft",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Databricks Fundamentals",
    code: "",
    issuer: "Databricks",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "MySQL Data Analysis",
    code: "",
    issuer: "Maven Analytics",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Data Analytics & Business Intelligence",
    code: "",
    issuer: "DigiSkills",
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Microsoft Excel for Data Analysis",
    code: "",
    issuer: "Udemy",
    color: "from-pink-500 to-rose-500",
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-card border-gradient rounded-xl p-6 shadow-card hover:shadow-elevated transition-all overflow-hidden"
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}
                />
                
                {/* Verified badge */}
                <div className="absolute top-4 right-4">
                  <BadgeCheck size={20} className="text-primary" />
                </div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color}`}>
                    <Award size={24} className="text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                {cert.code && (
                  <span className="inline-block text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded mb-2">
                    {cert.code}
                  </span>
                )}
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>Issued by</span>
                  <span className="font-medium text-foreground">{cert.issuer}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
