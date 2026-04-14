import { motion } from "motion/react";
import { Stethoscope, Dumbbell, Home, Store, CheckCircle2 } from "lucide-react";

const audiences = [
  {
    title: "Dental Clinics",
    description: "Automated booking systems and professional patient-focused designs.",
    icon: <Stethoscope className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Gyms & Fitness",
    description: "High-energy landing pages built to drive memberships and class signups.",
    icon: <Dumbbell className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Real Estate",
    description: "Fast property listings and lead capture forms for agents and agencies.",
    icon: <Home className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Beauty Salon / Spa",
    description: "Google-optimized websites for Beauty salon / Spa's.",
    icon: <Store className="w-6 h-6 text-green-500" />,
  }
];

export function Industries() {
  return (
    <section className="py-16 md:py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            Who This Is For
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            We Help <span className="text-gradient">Specific</span> Industries Scale.
          </h3>
          <p className="text-base sm:text-base text-white/50 max-w-2xl mx-auto font-medium">
            We don't try to be everything to everyone. We specialize in industries where we know we can deliver massive ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h4>
              <p className="text-base sm:text-sm text-white/60 leading-relaxed font-medium mb-6">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                <CheckCircle2 className="w-3 h-3" />
                Specialized Solution
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
