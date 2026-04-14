import { Search, PenTool, Code, Rocket } from "lucide-react";
import { motion } from "motion/react";

export function Process() {
  const steps = [
    {
      title: "Audit",
      description: "Analyze your current site and competitors",
      icon: Search,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Plan",
      description: "Create strategy and layout",
      icon: PenTool,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Build",
      description: "Develop fast, clean website",
      icon: Code,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Launch",
      description: "Deploy and optimize for leads",
      icon: Rocket,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 bg-white/[0.02] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-4"
          >
            Our Workflow
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6"
          >
            How We Get You <span className="text-gradient">Results.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-base md:text-lg text-white/70 leading-relaxed font-medium"
          >
            A streamlined 4-step process designed to take your business from invisible to unstoppable.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-12 z-0" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                <div className="text-5xl font-black text-white/5 mb-4 tracking-tighter group-hover:text-blue-500/10 transition-colors">
                  0{index + 1}
                </div>
                <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center mb-6 border border-white/10 group-hover:border-blue-500/40 transition-all duration-500 shadow-xl bg-black`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
