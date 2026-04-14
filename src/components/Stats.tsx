import { motion } from "motion/react";

export function Stats() {
  const stats = [
    { label: "Websites Built", value: "37+" },
    { label: "Mobile First", value: "100%" },
    { label: "Avg. Load Time", value: "0.8s" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="p-4 md:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur flex flex-col items-center justify-center"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-black">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
