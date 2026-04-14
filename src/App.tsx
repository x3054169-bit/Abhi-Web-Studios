import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Expertise } from "@/components/Expertise";
import { Industries } from "@/components/Industries";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MobileActions } from "@/components/MobileActions";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30 relative overflow-x-hidden">
      <SmoothScroll />
      <ScrollProgress />
      <MobileActions />
      {/* Global Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/[0.03] blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-purple-600/[0.03] blur-[120px] rounded-full animate-pulse-slow delay-1000" />
        <div className="absolute top-[60%] left-[10%] w-[20%] h-[20%] bg-blue-400/[0.02] blur-[100px] rounded-full animate-pulse-slow delay-500" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Stats />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />
          <Services />
          <Expertise />
          <Industries />
        </div>
        <Portfolio />
        <Process />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
