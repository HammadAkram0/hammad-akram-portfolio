import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Linkedin } from "lucide-react";

const testimonials = [
  {
    name: "Ghislain Lauzin",
    role: "Business Development & Business Intelligence",
    relationship: "Client",
    date: "October 2024",
    content: "Working with Hammad Akram has been a great experience. He has an exceptional ability to combine technical expertise with creative design. Hammad not only excels at developing complex formulas and solutions, but also has a keen eye for creating visually compelling and effective designs. His ability to translate data into clear, impactful visuals is truly impressive. Hammad is both detail and strategic-oriented, ensuring that his work is both accurate and aesthetically polished. He is also a proactive collaborator, always ready to support and deliver results that exceed expectations.",
    highlight: "I highly recommend Hammad for any role that requires a mix of technical precision and creative design expertise.",
    avatar: "GL",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Hamza Zafar",
    role: "UI/UX Designer | Machine Learning Engineer",
    relationship: "Colleague",
    date: "April 2024",
    content: "I highly recommend Hammad Akram as a skilled and diligent data analyst. His ability to distill complex information into actionable insights has been invaluable to any team's decision-making process. Hammad Akram is not only proficient in data analysis tools and methodologies but also possesses excellent communication skills, enabling him to effectively convey findings to stakeholders at all levels.",
    highlight: "He is a proactive and adaptable team member who consistently strives for excellence, making him an asset to any organization seeking to leverage data-driven insights.",
    avatar: "HZ",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Muhammad Ateeb Shakeel",
    role: "Client Success & Technical Support Specialist",
    relationship: "Colleague",
    date: "December 2024",
    content: "I highly recommend Hammad, a skilled and talented Power BI expert with exceptional abilities in transforming complex data into actionable insights. Hammad excels in creating dynamic dashboards, optimizing data models, and integrating diverse data sources, consistently delivering impactful solutions.",
    highlight: "A strong communicator and collaborative team player, he combines technical expertise with a commitment to excellence, making them a valuable asset to any organization.",
    avatar: "MA",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 relative bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-mono text-sm">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What People Say</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Recommendations from colleagues and clients I've had the pleasure of working with.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="h-full bg-gradient-card border-gradient rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col">
                  {/* Quote Icon */}
                  <div className={`absolute -top-4 left-6 p-3 rounded-xl bg-gradient-to-br ${testimonial.gradient} shadow-lg`}>
                    <Quote size={20} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="mt-6 flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      "{testimonial.content}"
                    </p>
                    <p className="text-foreground font-medium text-sm italic border-l-2 border-primary pl-3">
                      {testimonial.highlight}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                        <Linkedin size={14} className="text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary/70 font-mono">{testimonial.relationship} • {testimonial.date}</p>
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
