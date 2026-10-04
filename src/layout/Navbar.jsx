import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Project" },
  { href: "#skills", label: "Skill" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollSection, setScrollSection] = useState("");
  const location = useLocation();

  const activeSection = scrollSection || location.hash;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const sections = ["contact", "skills", "projects", "about"];
      let current = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = `#${sectionId}`;
            break;
          }
        }
      }
      setScrollSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      } z-50`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary via-accent to-highlight origin-left pointer-events-none"
        style={{ scaleX }}
      />

      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight hover:text-primary transition-colors outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-lg truncate max-w-[70%] sm:max-w-none"
        >
          John Lester - <span className="text-primary">Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1 relative border border-white/[0.08]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  href={link.href}
                  key={link.href}
                  className={`relative px-4 py-1.5 text-sm rounded-full transition-all duration-200 z-10 outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.08]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-primary/15 rounded-full border border-primary/35 -z-10 shadow-sm shadow-primary/10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="ml-2 px-5 py-1.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_18px_rgba(32,178,170,0.35)] active:scale-95 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground cursor-pointer rounded-lg hover:bg-white/[0.06] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="md:hidden glass-strong border-b border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                      delay: index * 0.05,
                    }}
                    href={link.href}
                    key={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg py-2 px-3 rounded-xl transition-all ${
                      isActive
                        ? "text-primary font-semibold bg-primary/10 border-l-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              <div className="pt-2 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full py-2.5 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
