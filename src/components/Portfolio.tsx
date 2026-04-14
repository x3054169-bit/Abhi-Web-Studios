import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      title: "Dental Designs",
      industry: "Medical",
      goal: "Bookings",
      image: "https://i.ibb.co/ZR72Fq64/Screenshot-2026-04-14-154229.png",
      description: "Redesigned booking flow → 40% increase in monthly appointments.",
      link: "https://dental-designs-enpm.vercel.app/"
    },
    {
      title: "Zumba Gym",
      industry: "Fitness",
      goal: "Leads",
      image: "https://i.ibb.co/BKyLQgFp/Screenshot-2026-04-14-164428.png",
      description: "High-performance landing page → doubled membership inquiries in 30 days.",
      link: "https://zumba-gym.netlify.app/"
    },
    {
      title: "Sahu Real Estate",
      industry: "Real Estate",
      goal: "Leads",
      image: "https://i.ibb.co/8gN3KgZ1/Screenshot-2026-04-14-164136.png",
      description: "Fast property search → improved user retention and lead capture.",
      link: "https://www.sahurealestate.com/"
    },
    {
      title: "Whiz Spa",
      industry: "Wellness",
      goal: "Sales",
      image: "https://i.ibb.co/0V9PfCNF/Screenshot-2026-04-14-214007.png",
      description: "Premium redesign → increased high-ticket service bookings by 25%.",
      link: "https://whizspa.in/"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="work" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
              Our Work
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1]">
              Recent <span className="text-gradient">Success</span> Stories.
            </h3>
          </div>
          <p className="text-base sm:text-base md:text-lg text-white/70 max-w-sm leading-relaxed font-medium">
            We help businesses transform their online presence and increase their lead volume with result-focused design.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => project.link && window.open(project.link, "_blank")}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-white font-bold text-lg">{project.title}</div>
                    {project.link && <ExternalLink className="w-4 h-4 text-white/50" />}
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-400 text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-full">{project.industry}</span>
                    <span className="text-green-400 text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full">{project.goal}</span>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h4 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors tracking-tight">{project.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed font-medium mb-4">{project.description}</p>
                <div className="flex items-center text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] group-hover:gap-2 transition-all">
                  View Project
                  <ExternalLink className="ml-1 w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
