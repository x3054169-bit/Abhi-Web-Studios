import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import React, { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        setError("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      setError("❌ Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="py-16 md:py-24 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-black text-xl tracking-tighter">A</span>
              </div>
              <span className="text-white font-black text-2xl tracking-tighter uppercase">Abhi Web Studios</span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed text-sm sm:text-base font-medium mb-8">
              We engineer high-converting digital assets for local and service businesses. Focused on authority, conversion, and measurable growth.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group cursor-pointer">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">abhinavtripathi9821@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  aria-label={`Follow us on ${social}`}
                  className="text-white/40 hover:text-blue-500 transition-colors text-sm font-bold uppercase tracking-widest"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="col-span-1">
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#work" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Portfolio</a></li>
                <li><a href="#services" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Services</a></li>
                <li><a href="#process" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Process</a></li>
                <li><a href="#about" className="text-white/50 hover:text-white transition-colors text-sm font-medium">About</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Support</h4>
              <ul className="space-y-4">
                <li><a href="#contact" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Contact</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-medium">FAQ</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Privacy</a></li>
                <li><a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-medium">Terms</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Get a Free Website Audit</h4>
              <p className="text-white/40 text-xs mb-4 leading-relaxed font-medium">
                We manually review your website and send actionable improvements within 24 hours.
              </p>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-4">Limited audits per week</p>
              
              {isSuccess ? (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    ✅ Request received. We'll send your audit within 24 hours.
                  </p>
                </div>
              ) : (
                <form id="leadForm" onSubmit={handleSubmit} className="space-y-3">
                  <input type="hidden" name="apiKey" value="sf_fae01844d0237045fe3e4f73" />
                  <input type="hidden" name="subject" value="New Website Audit Request" />
                  <input type="text" name="honeypot" style={{ display: 'none' }} />
                  
                  <div className="flex flex-col gap-3">
                    <input 
                      required
                      type="email" 
                      name="email"
                      placeholder="Enter your email" 
                      className="bg-white/5 border border-white/10 rounded-xl px-4 h-12 text-sm text-white outline-none focus:border-blue-500/50 w-full font-medium"
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white px-6 h-12 rounded-xl text-xs font-black uppercase tracking-widest transition-all disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 w-full"
                    >
                      {isSubmitting ? "Sending..." : "Get Free Audit"}
                    </button>
                    {error && (
                      <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">
                        {error}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold text-center sm:text-left">
            © {currentYear} Abhi Web Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
          </div>
        </div>
      </div>
    </footer>
  );
}
