import { GlowCard } from "@/components/ui/spotlight-card";
import { motion } from "motion/react";
import { Code2, Palette, Rocket, Search } from "lucide-react";

const expertiseItems = [
  {
    title: "Web Development",
    description: "High-performance, scalable web applications built with the latest technologies.",
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    color: "blue" as const
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and beautiful interfaces designed to convert visitors into clients.",
    icon: <Palette className="w-8 h-8 text-purple-500" />,
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "purple" as const
  },
  {
    title: "Digital Strategy",
    description: "Data-driven strategies to scale your business and dominate your market.",
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "orange" as const
  },
  {
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher on search engines with our expert SEO.",
    icon: <Search className="w-8 h-8 text-green-500" />,
    image: "https://images.unsplash.com/photo-1686061593269-420785fb8fa0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "green" as const
  }
];

export function Expertise() {
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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="expertise" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/[0.02] blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-12 h-px bg-blue-500" />
              <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em]">Our Capabilities</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-[1.1]"
            >
              Elite <span className="text-gradient">Web Design</span> & Lead Generation.
            </motion.h2>
          </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-base md:text-lg text-white/70 max-w-sm leading-relaxed font-medium"
            >
              We design and develop websites built to generate leads and drive real business results.
            </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-8"
        >
          {/* Web Development - Large Bento Item */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-8">
            <GlowCard 
              glowColor="blue"
              className="group cursor-pointer h-full p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-500"
              customSize={true}
              width="100%"
              height="100%"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-full min-h-[200px] md:min-h-[400px]">
                <div className="flex flex-col justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6 border border-blue-500/20">
                    <Code2 className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
                    Web Development
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 font-medium">
                    High-performance, scalable web applications built with the latest technologies. From complex SaaS platforms to high-converting landing pages.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Node.js"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&fm=webp" 
                    alt="Web Development"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent" />
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* UI/UX Design - Tall Bento Item */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4">
            <GlowCard 
              glowColor="purple"
              className="group cursor-pointer h-full p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all duration-500"
              customSize={true}
              width="100%"
              height="100%"
            >
              <div className="flex flex-col h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 md:mb-6 border border-purple-500/20">
                  <Palette className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-purple-400 transition-colors tracking-tight">
                  UI/UX Design
                </h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 font-medium">
                  Intuitive and beautiful interfaces designed to convert visitors into loyal clients.
                </p>
                <div className="mt-auto relative rounded-xl overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=627&auto=format&fit=crop&fm=webp" 
                    alt="UI/UX Design"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Digital Strategy */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4">
            <GlowCard 
              glowColor="orange"
              className="group cursor-pointer h-full p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all duration-500"
              customSize={true}
              width="100%"
              height="100%"
            >
              <div className="flex flex-col h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 md:mb-6 border border-orange-500/20">
                  <Rocket className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-orange-400 transition-colors tracking-tight">
                  Digital Strategy
                </h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed font-medium">
                  Data-driven strategies to scale your business and dominate your market.
                </p>
              </div>
            </GlowCard>
          </motion.div>

          {/* SEO Optimization - Wide Bento Item */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-8">
            <GlowCard 
              glowColor="green"
              className="group cursor-pointer h-full p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/40 transition-all duration-500"
              customSize={true}
              width="100%"
              height="100%"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-full">
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 md:mb-6 border border-green-500/20">
                    <Search className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-green-400 transition-colors tracking-tight">
                    SEO Optimization
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed font-medium">
                    Boost your visibility and rank higher on search engines. We focus on technical SEO, content strategy, and authority building.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1686061593269-420785fb8fa0?q=80&w=800&auto=format&fit=crop&fm=webp" 
                    alt="SEO"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
