import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Mail, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const email = "abhinavtripathi9821@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        setError("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
              Contact Us
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 sm:mb-8 leading-[1.1]">
              Get More <span className="text-gradient">Leads</span> <br />
              from Your Website.
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/70 mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              Have questions or ready to start? Fill out the form or reach out directly via WhatsApp for a faster response. We usually respond within 24 hours.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="flex items-center gap-6 text-left group w-full max-w-md">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 transition-all">
                  <MessageCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                  <p className="text-white font-bold text-lg">8871694891</p>
                </div>
              </div>

              <div 
                onClick={copyToClipboard}
                className="flex items-center gap-6 text-left group w-full max-w-md cursor-pointer relative"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 transition-all">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Email (Click to copy)</p>
                  <p className="text-white font-bold text-sm sm:text-base md:text-lg break-all">{email}</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Check className="w-4 h-4 text-green-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Copy className="w-4 h-4 text-white/40" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full shadow-lg whitespace-nowrap"
                    >
                      Email Copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-4 w-full">
                <Button 
                  render={<a href="https://wa.me/918871694891?text=Hi,%20I%20want%20a%20website%20for%20my%20business" target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                  className="w-full sm:w-auto px-8 py-6 text-lg font-bold bg-green-600 hover:bg-green-500 text-white rounded-xl transition-all shadow-[0_0_30px_rgba(22,163,74,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Chat on WhatsApp
                  <MessageCircle className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">✅ Message sent successfully.</h4>
                  <p className="text-white/60 font-medium">We will contact you within 24 hours.</p>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    variant="link" 
                    className="mt-6 text-blue-500 font-bold uppercase tracking-widest text-[10px]"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* StaticForms Configuration */}
                  <input type="hidden" name="apiKey" value="sf_fae01844d0237045fe3e4f73" />
                  <input type="text" name="honeypot" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                      <Input 
                        required
                        name="name"
                        autoComplete="name"
                        placeholder="John Doe" 
                        className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-blue-500/50 transition-colors font-medium text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Phone / WhatsApp</label>
                      <Input 
                        required
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="8871694891" 
                        className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-blue-500/50 transition-colors font-medium text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Business Name</label>
                    <Input 
                      required
                      name="business"
                      autoComplete="organization"
                      placeholder="Your Agency" 
                      className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-blue-500/50 transition-colors font-medium text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Message (Optional)</label>
                    <textarea 
                      name="message"
                      placeholder="Tell us about your project..."
                      className="w-full min-h-[120px] bg-white/5 border border-white/10 rounded-xl p-4 text-white text-base focus:outline-none focus:border-blue-500/50 transition-colors font-medium resize-none"
                    />
                  </div>

                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs font-bold text-center"
                    >
                      {error}
                    </motion.p>
                  )}

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
