import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2 space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-foreground font-medium">Data Analytics Engineer</span> with 
                expertise in transforming complex data into meaningful insights. Currently working at 
                <span className="text-primary font-medium"> Tkxel</span>, I specialize in building enterprise-grade 
                BI solutions using Power BI, Azure services, and Microsoft Fabric.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 3 years of experience in the data domain, I've helped organizations streamline 
                their reporting processes, implement data warehousing solutions, and develop automated 
                data pipelines. My work has resulted in significant time savings and improved 
                decision-making capabilities for cross-functional teams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Microsoft Certified Power BI Data Analyst (PL-300) and hold Azure Data 
                Fundamentals (DP-900) certification, constantly expanding my knowledge in cloud 
                technologies and data engineering practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="bg-gradient-card border-gradient rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Location</span>
                </div>
                <p className="text-foreground font-medium">Lahore, Pakistan</p>
              </div>

              <div className="bg-gradient-card border-gradient rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase size={18} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Current Role</span>
                </div>
                <p className="text-foreground font-medium">Data Analytics Engineer</p>
                <p className="text-sm text-muted-foreground">@ Tkxel</p>
              </div>

              <div className="bg-gradient-card border-gradient rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap size={18} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Education</span>
                </div>
                <p className="text-foreground font-medium">B.S. Information Technology</p>
                <p className="text-sm text-muted-foreground">Superior University</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
