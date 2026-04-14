import { Button } from "@/components/ui/button.tsx";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Zap, TrendingUp, Users, CheckCircle2, Globe, MousePointer2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip } from "recharts";

const chartData = [
  { value: 40 }, { value: 35 }, { value: 55 }, { value: 45 }, 
  { value: 70 }, { value: 65 }, { value: 85 }, { value: 75 }, 
  { value: 95 }, { value: 90 }, { value: 110 }
];

const recentLeads = [
  { id: 1, name: "Sarah J.", action: "Booked Consultation", time: "2m ago", amount: "$1,200" },
  { id: 2, name: "Mark R.", action: "Signed Contract", time: "5m ago", amount: "$3,500" },
  { id: 3, name: "Dental Clinic", action: "New Inquiry", time: "12m ago", amount: "High Value" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLeadIndex, setActiveLeadIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLeadIndex((prev) => (prev + 1) % recentLeads.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background Effects */}
      <motion.div style={{ opacity }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[140px] rounded-full animate-pulse-slow" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
            style={{ y: y1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-md">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">
                37+ websites built • 0.8s load time • Conversion-focused
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6 md:mb-8">
              We Build Websites <br />
              <span className="text-gradient">That Generate Leads.</span>
            </h1>
            <p className="text-base sm:text-base md:text-lg text-white/70 max-w-lg mb-8 md:mb-12 leading-relaxed font-medium">
              Fast, mobile-first websites designed to turn visitors into real inquiries and customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <Button 
                render={<a href="https://wa.me/918871694891?text=Hi,%20I%20want%20a%20website%20for%20my%20business" target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                size="lg" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white border-none h-14 sm:h-16 px-8 sm:px-10 text-base font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-2xl shadow-[0_0_30px_rgba(22,163,74,0.2)]"
              >
                Chat on WhatsApp
              </Button>
              <Button 
                render={<a href="#contact" />}
                nativeButton={false}
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white h-14 sm:h-16 px-8 sm:px-10 text-base font-bold backdrop-blur-xl transition-all duration-300 rounded-2xl"
              >
                Get Free Website Audit
              </Button>
            </div>
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
              Projects typically start from ₹15,000+
            </p>
          </motion.div>

          <motion.div 
            className="relative h-[500px] sm:h-[600px] md:h-[700px] perspective-2000 mt-12 lg:mt-0 hidden lg:block"
            style={{ y: y2 }}
          >
            {/* Main Browser Window */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 15, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 10, rotateY: -10 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="absolute top-0 right-0 w-[85%] aspect-[16/10] glass-panel shadow-2xl z-30 overflow-hidden group border-white/10"
            >
              {/* Browser Header */}
              <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <div className="w-2 h-2 rounded-full bg-green-500/40" />
                <div className="flex-1 mx-4 h-4 bg-white/5 rounded-md flex items-center px-2">
                  <Globe className="w-2 h-2 text-white/20 mr-2" />
                  <div className="w-24 h-1 bg-white/10 rounded-full" />
                </div>
              </div>
              
              <div className="relative w-full h-full">
                <img 
                  src="https://picsum.photos/seed/nexus-preview/1200/800" 
                  alt="Website Preview" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-blue-500/5" />
                
                {/* Floating Cursor Animation */}
                <motion.div
                  animate={{ 
                    x: [100, 300, 200, 400], 
                    y: [100, 50, 200, 150] 
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute z-50 pointer-events-none"
                >
                  <MousePointer2 className="w-6 h-6 text-white fill-blue-500 drop-shadow-lg" />
                </motion.div>
              </div>
            </motion.div>

            {/* Performance Metrics Card */}
            <motion.div
              initial={{ opacity: 0, x: -60, y: 120, rotateX: 15, rotateY: -15 }}
              animate={{ opacity: 1, x: -20, y: 100, rotateX: 10, rotateY: -10 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="absolute top-20 left-0 w-[55%] glass-panel shadow-2xl z-40 p-6 border-blue-500/20 backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <TrendingUp className="w-3 h-3 text-blue-400" />
                    <span className="text-[10px] font-bold text-blue-400">Growth Focused</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Avg. Conversion Rate</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-black text-white tracking-tighter">4.8%</p>
                    <p className="text-xs font-bold text-blue-400">Optimized</p>
                  </div>
                </div>

                <div className="h-24 w-full mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#3b82f6" 
                        strokeWidth={3} 
                        dot={false}
                        animationDuration={2000}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>

            {/* Client Success Card */}
            <motion.div
              initial={{ opacity: 0, x: 120, y: 250, rotateX: 15, rotateY: -15 }}
              animate={{ opacity: 1, x: 80, y: 280, rotateX: 10, rotateY: -10 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="absolute top-40 right-0 w-[50%] glass-panel shadow-2xl z-50 p-5 border-purple-500/20 backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-[10px] font-bold text-white uppercase tracking-widest">Client Results</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold text-white">Dental Clinic Website</p>
                  <p className="text-[10px] text-white/50">3x more monthly inquiries</p>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold text-white">Local Gym Page</p>
                  <p className="text-[10px] text-white/50">Improved mobile booking</p>
                </div>
              </div>
            </motion.div>

            {/* Background Glows for the stack */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
