import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BarChart3, 
  Database, 
  Cloud, 
  Settings, 
  Code, 
  Layers 
} from "lucide-react";

const skillCategories = [
  {
    title: "Analytics & BI",
    icon: BarChart3,
    skills: ["Power BI", "SSRS", "Looker Studio", "Tableau", "IBM Cognos", "Copilot Studio"],
  },
  {
    title: "Data Engineering",
    icon: Layers,
    skills: ["Azure Data Factory", "Synapse Analytics", "Databricks", "Fivetran", "Dataflows"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Azure SQL", "MySQL", "PostgreSQL", "Oracle", "SAP BW", "Data Lake Gen2"],
  },
  {
    title: "Query Languages",
    icon: Code,
    skills: ["DAX", "SQL", "T-SQL", "KQL", "Python"],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Microsoft Azure", "Microsoft Fabric", "AWS", "Power BI Service"],
  },
  {
    title: "CRM & Automation",
    icon: Settings,
    skills: ["Salesforce", "NetSuite", "HubSpot", "Power Automate", "Logic Apps"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Tools</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-card border-gradient rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-muted-foreground text-sm rounded-md border border-border hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
