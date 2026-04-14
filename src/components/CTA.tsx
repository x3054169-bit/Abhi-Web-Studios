import { Button } from "@/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/[0.03] blur-[180px] rounded-full -z-10 animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto glass-panel p-8 sm:p-12 md:p-32 text-center relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border-white/[0.05] rounded-3xl"
        >
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-grid-white opacity-5 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] to-transparent -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              Ready to Get <br />
              <span className="text-gradient">More Clients?</span>
            </h2>
            <p className="text-base sm:text-base md:text-lg text-white/70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Get a free audit and see exactly how your website can generate more leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                render={<a href="#contact" />}
                nativeButton={false}
                size="lg" 
                className="w-full sm:w-auto px-8 h-14 sm:h-16 text-base sm:text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]"
              >
                Get Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                render={<a href="#work" />}
                nativeButton={false}
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto px-8 h-14 sm:h-16 text-base sm:text-lg font-bold border-white/10 hover:bg-white/5 text-white rounded-xl transition-all"
              >
                View Work
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
