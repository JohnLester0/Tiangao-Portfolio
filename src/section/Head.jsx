import { ChevronDown, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

const HERO_DOTS = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${((i * 37 + 13) % 96) + 2}%`,
  top: `${((i * 59 + 29) % 94) + 3}%`,
  duration: 15 + ((i * 7) % 20),
  delay: (i * 0.4) % 5,
}));

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {HERO_DOTS.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#34e6d7",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-200">
                Welcome <span className="text-primary glow-text">my Friend</span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  Hi, I'm John Lester.
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact" className="inline-block">
                <AnimatedBorderButton>
                  <Send className="w-5 h-5" />
                  Contact Me
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-200">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: GitHubIcon, href: "https://github.com/JohnLester0" },
                {
                  icon: LinkedInIcon,
                  href: "https://www.linkedin.com/in/john-lester-tiangao-5048a4372/",
                },
                { icon: Mail, href: "mailto:johnlestertiangao@gmail.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="w-80 h-80 sm:w-96 sm:h-96 mx-auto rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="John Lester"
                  className="w-full h-full object-cover rounded-full ring-2 ring-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider font-medium group-hover:tracking-widest transition-all">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
