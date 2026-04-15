import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MobileActions } from "@/components/MobileActions";
import React, { Suspense, lazy } from "react";

// Lazy load below-the-fold components
const Services = lazy(() => import("@/components/Services").then(m => ({ default: m.Services })));
const Expertise = lazy(() => import("@/components/Expertise").then(m => ({ default: m.Expertise })));
const Industries = lazy(() => import("@/components/Industries").then(m => ({ default: m.Industries })));
const Portfolio = lazy(() => import("@/components/Portfolio").then(m => ({ default: m.Portfolio })));
const Process = lazy(() => import("@/components/Process").then(m => ({ default: m.Process })));
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const CTA = lazy(() => import("@/components/CTA").then(m => ({ default: m.CTA })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

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
        <Suspense fallback={<div className="h-96" />}>
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
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-48" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
