import { Button } from "@/components/ui/button.tsx";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Instagram, Twitter, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Expertise", href: "#expertise" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        <a href="#" aria-label="Abhi Web Studios Home" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 shadow-lg glow-blue flex-shrink-0">
            <span className="text-white font-black text-lg tracking-tighter">A</span>
          </div>
          <span className="text-white font-black text-base sm:text-lg tracking-tighter group-hover:text-blue-400 transition-colors uppercase truncate">Abhi Web Studios</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button 
            render={<a href="#contact" />}
            nativeButton={false}
            className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 text-white border-none px-8 h-11 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 glow-blue"
          >
            Get Free Audit
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Open Menu" className="text-white hover:bg-white/5" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 backdrop-blur-2xl border-white/10 text-white w-full sm:w-[400px] p-0 overflow-hidden">
              <div className="flex flex-col h-full relative">
                {/* Decorative Background */}
                <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full -z-10" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full -z-10" />

                <div className="p-8 pt-16 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-12">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
                      <span className="text-white font-black text-2xl tracking-tighter">A</span>
                    </div>
                    <span className="text-white font-black text-2xl tracking-tighter uppercase">Abhi Web Studios</span>
                  </div>

                  <div className="flex flex-col gap-4 mb-12">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      >
                        <SheetClose 
                          nativeButton={false}
                          render={<a
                            href={link.href}
                            className="text-4xl font-black text-white/40 hover:text-white transition-all duration-300 tracking-tighter flex items-center group"
                          />}
                        >
                          <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                            {link.name}
                          </span>
                          <ArrowRight className="ml-4 w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
                        </SheetClose>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-auto"
                  >
                    <Button 
                      render={<a href="#contact" onClick={() => setIsOpen(false)} />}
                      nativeButton={false}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white border-none h-16 text-lg font-bold rounded-2xl glow-blue mb-12"
                    >
                      Get Free Audit
                    </Button>

                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="flex items-center gap-4 text-white/50 hover:text-white transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                          <Mail className="w-5 h-5" />
                        </div>
                        <span className="font-medium">abhinavtripathi9821@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-4 text-white/50 hover:text-white transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                          <Phone className="w-5 h-5" />
                        </div>
                        <span className="font-medium">8871694891</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
