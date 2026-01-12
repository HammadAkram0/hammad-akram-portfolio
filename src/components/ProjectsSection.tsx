import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Building2, Wallet, TrendingUp, Database } from "lucide-react";

const projects = [
  {
    title: "Enterprise Reporting & Dashboards",
    company: "Odyssey Relocation (Logistics)",
    association: "Tkxel",
    description: "Led an escalated BI reporting project delivering near real-time data, automated report sharing, client-level filtering, and embedded reports. Built dynamic paginated reports using Power BI Report Builder with SQL Server, set up SSRS subscriptions for automated delivery.",
    technologies: ["Power BI", "SQL Server", "SSRS", "Report Builder"],
    icon: Building2,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Centralized Financial Reporting System",
    company: "PostEx (Fintech)",
    association: "PostEx",
    description: "Led development of a Centralized Financial Ledger using Power BI and MySQL, providing merchants comprehensive financial insights. Streamlined reporting, reduced manual effort, and enhanced data accuracy for real-time decision-making.",
    technologies: ["Power BI", "MySQL", "Financial Analytics"],
    icon: Wallet,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Business Development Performance Insights",
    company: "Channel Wise Analytics",
    association: "CrecenTech Systems",
    description: "Developed comprehensive BD Performance dashboard using Power BI with SharePoint data, analyzing LinkedIn, Email Marketing, and Upwork channels for strategic decision-making and performance optimization.",
    technologies: ["Power BI", "SharePoint", "Sales Analytics"],
    icon: TrendingUp,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Modern Enterprise Data Architecture",
    company: "Microsoft Fabric Solution",
    association: "Tkxel",
    description: "Built end-to-end data engineering solution using Microsoft Fabric for Wide World Importers, featuring scalable ingestion from SQL Server, SharePoint into Lakehouse architecture with star schema semantic model.",
    technologies: ["Microsoft Fabric", "Lakehouse", "Power BI", "SQL Server"],
    icon: Database,
    gradient: "from-orange-500 to-red-500",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="bg-gradient-card border-gradient rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
                  {/* Project Header with Gradient */}
                  <div className={`relative h-32 bg-gradient-to-br ${project.gradient} p-6`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <project.icon size={28} className="text-white" />
                      </div>
                      <ExternalLink 
                        size={20} 
                        className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-white" 
                      />
                    </div>
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-xs text-white/80 font-mono bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                        {project.association}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium mb-3">{project.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
