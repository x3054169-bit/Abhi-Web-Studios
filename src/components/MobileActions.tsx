import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Search } from "lucide-react";
import { useState, useEffect } from "react";

export function MobileActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Bottom Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[70] md:hidden bg-black/90 backdrop-blur-2xl border-t border-white/10 p-3 flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
          >
            <a
              href="https://wa.me/918871694891?text=Hi,%20I%20want%20a%20website%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[1.5] h-12 bg-green-600 rounded-xl flex items-center justify-center gap-2 text-white font-bold text-sm active:scale-[0.98] transition-transform shadow-[0_0_20px_rgba(22,163,74,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="flex-1 h-12 bg-white/10 rounded-xl flex items-center justify-center gap-2 text-white font-bold text-sm active:scale-[0.98] transition-transform border border-white/10"
            >
              <Search className="w-4 h-4" />
              Free Audit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
