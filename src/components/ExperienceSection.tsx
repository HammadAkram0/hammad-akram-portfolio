import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Building2, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Data Analytics Engineer",
    company: "Tkxel",
    period: "Mar 2025 – Present",
    location: "Lahore",
    highlights: [
      "Developed advanced Power BI dashboards using DirectQuery for real-time insights",
      "Built and deployed custom data agents in Microsoft Fabric using Copilot Studio",
      "Led data engineering projects using Azure Data Factory, Data Lake Gen2, Databricks, and Synapse",
      "Implemented medallion architecture for scalable pipelines and warehousing",
      "Configured SSRS for automated report subscriptions and secure data access",
      "Optimized DAX calculations and T-SQL queries for complex business logic",
    ],
  },
  {
    id: 2,
    title: "Business Intelligence Engineer",
    company: "PostEx Pvt Ltd",
    period: "Oct 2024 – Mar 2025",
    location: "Lahore",
    highlights: [
      "Developed centralized financial ledger system reducing workload by 15-20 minutes per task",
      "Built Centralized Order Performance Dashboard with real-time insights",
      "Designed data warehousing solutions using incremental refresh",
      "Implemented Gen 2 Dataflows for efficient ETL from MySQL databases",
      "Set up on-premises data gateway for secure Power BI connectivity",
      "Automated data refresh processes minimizing manual intervention",
    ],
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "CrecenTech Systems",
    period: "May 2022 – Sep 2024",
    location: "Lahore",
    highlights: [
      "Developed tailored dashboards in Power BI and Looker Studio for real-time marketing insights",
      "Contributed to 50-60% time reduction by automating processes",
      "Collaborated with Project Managers to deliver data-driven solutions",
      "Created performance dashboards for Quality Engineering Department",
      "Demonstrated expertise in CRM systems (Podio, Salesforce)",
      "Provided extensive training to new resources",
    ],
  },
  {
    id: 4,
    title: "KYC Analyst",
    company: "CapperSoft",
    period: "Nov 2021 – Feb 2022",
    location: "Lahore",
    highlights: [
      "Verified customer documents against global regulatory frameworks",
      "Used OCR software to extract and validate customer information",
      "Reconciled sensitive data ensuring 100% accuracy",
      "Collaborated with team to enhance KYC procedures",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeExp, setActiveExp] = useState(1);

  const activeExperience = experiences.find((exp) => exp.id === activeExp);

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8 max-w-5xl mx-auto">
            {/* Company tabs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0"
            >
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(exp.id)}
                  className={`px-4 py-3 text-left whitespace-nowrap lg:whitespace-normal rounded-lg transition-all font-medium text-sm flex items-center gap-2 ${
                    activeExp === exp.id
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {activeExp === exp.id && <ChevronRight size={16} />}
                  {exp.company}
                </button>
              ))}
            </motion.div>

            {/* Experience details */}
            <motion.div
              key={activeExp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-card border-gradient rounded-xl p-6 md:p-8 shadow-card"
            >
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {activeExperience?.title}{" "}
                  <span className="text-primary">@ {activeExperience?.company}</span>
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {activeExperience?.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <Building2 size={16} />
                    {activeExperience?.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {activeExperience?.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
