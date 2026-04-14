import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Smartphone, Zap, Target, Search, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      title: "Custom Design",
      description: "Unique, high-end designs tailored to your brand identity and business goals.",
      icon: Layout,
    },
    {
      title: "Mobile Optimization",
      description: "Seamless experience across all devices. We build mobile-first for the modern web.",
      icon: Smartphone,
    },
    {
      title: "Fast Performance",
      description: "Blazing fast load times that keep visitors engaged and improve SEO rankings.",
      icon: Zap,
    },
    {
      title: "Lead Capture",
      description: "Strategic placement of CTAs and forms to maximize your lead generation.",
      icon: Target,
    },
    {
      title: "SEO Basics",
      description: "Built-in SEO best practices to ensure your site is discoverable by search engines.",
      icon: Search,
    },
    {
      title: "Conversion Structure",
      description: "Data-driven layouts designed to guide users towards booking or purchasing.",
      icon: BarChart3,
    },
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            Our Expertise
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6">
            Complete <span className="text-gradient">Website</span> System
          </h3>
          <p className="text-base sm:text-base md:text-lg text-white/70 leading-relaxed font-medium">
            We don't just build websites; we build marketing machines that work for your business 24/7.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-500 group cursor-default h-full relative overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed font-medium text-sm">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
