import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, FileText, Send } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hammadakram0/",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    url: "https://github.com/HammadAkram0",
    icon: Github,
    color: "hover:text-gray-300",
  },
  {
    name: "Portfolio",
    url: "https://www.datascienceportfol.io/hammadakram",
    icon: FileText,
    color: "hover:text-green-400",
  },
  {
    name: "Substack",
    url: "https://hammadak.substack.com/",
    icon: Send,
    color: "hover:text-orange-400",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary font-mono text-sm mb-4 block">05. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm always open to discussing new opportunities, data analytics projects, 
            or simply connecting with fellow professionals. Whether you have a question 
            or just want to say hi, feel free to reach out!
          </p>

          <motion.a
            href="mailto:hammadakram167@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-lg hover:opacity-90 transition-all glow-primary mb-12"
          >
            <Mail size={20} />
            Say Hello
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-secondary rounded-xl text-muted-foreground ${link.color} transition-all border border-border hover:border-primary/30 hover:shadow-card`}
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
