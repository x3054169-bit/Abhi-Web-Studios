import { motion } from "motion/react";
import { Award, Target, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
              About Abhi Web Studios
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-[1.1]">
              We Build Websites That <br />
              <span className="text-gradient">Actually Work.</span>
            </h3>
            <p className="text-base sm:text-base md:text-lg text-white/70 leading-relaxed mb-6 md:mb-8 font-medium">
              Abhi Web Studios is a boutique digital engineering agency focused on one thing: building websites that actually bring you clients. Every design decision, layout, and feature is built around conversion — not just looks.
            </p>
            <p className="text-base sm:text-base md:text-lg text-white/70 leading-relaxed mb-10 md:mb-12 font-medium">
              We don't just build websites; we engineer high-converting digital assets that serve as your 24/7 sales team. Our approach combines high-end design with conversion psychology to turn visitors into revenue.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Target className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Conversion First</p>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Our Core Philosophy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Zap className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">High Performance</p>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">0.8s Load Times</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-panel border-white/10 flex flex-col group">
              <div className="flex-1 relative overflow-hidden bg-white/5 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl flex items-center justify-center shadow-2xl glow-blue rotate-3 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-white font-black text-6xl tracking-tighter">A</span>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center animate-bounce-slow">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                
                {/* Abstract Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
                  <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full" />
                  <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/10 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 w-px h-1/2 bg-gradient-to-b from-blue-500 to-transparent" />
                </div>
              </div>
              <div className="p-8 text-center bg-black/40 backdrop-blur-md border-t border-white/10">
                <h4 className="text-2xl font-black text-white tracking-tighter mb-2 uppercase">Abhinav Tripathi</h4>
                <p className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Founder & Lead Strategist</p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
                <p className="text-white/60 text-xs font-medium leading-relaxed">
                  "Focused on building high-converting websites for local and service businesses."
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-600/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
