
import { ChevronDown, Mail, Send } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#34e6d7",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">

            {/* Head */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-6xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-200">
                  Welcome  <span className="text-primary glow-text"> my Friend  </span>
                <br />
            
        
                <span className="font-serif italic font-normal text-white">
                 Hi, I'm John Lester.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
               
              </p>
            </div>

            {/* call to action */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact" className="inline-block">
                <AnimatedBorderButton>
                  <Send className="w-5 h-5" />
                  Contact Me
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-200">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: GitHubIcon, href: "https://github.com/" },
                { icon: LinkedInIcon, href: "https://www.linkedin.com/in/john-lester-tiangao-5048a4372/" },
                { icon: Mail, href: "mailto:johnlestertiangao@gmail.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="w-100 h-100 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl">
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

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
