import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const bioFacts = [
  { label: "Education", value: "BS Information & Technology, 2nd Year" },
  { label: "School", value: "Western Institute of Technology" },
  { label: "Senior HS", value: "Passi National High School (HUMSS)" },
  { label: "Location", value: "Passi City / Iloilo City" },
  { label: "Age", value: "20 Years Old" },
];

const tags = ["UX Design", "Front-end", "Figma", "React", "User Research"];

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal direction="left" className="space-y-6">
            <div>
              <span className="text-primary text-xs font-semibold tracking-[0.15em] uppercase block mb-3">
                ABOUT ME
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-muted-foreground font-normal text-xl sm:text-2xl lg:text-3xl block mb-2">
                  Currently studying at
                </span>
                <span className="text-primary glow-text-subtle font-bold block text-3xl sm:text-4xl lg:text-5xl">
                  Western Institute of Technology
                </span>
                <span className="text-foreground/80 font-normal text-base sm:text-lg block mt-2">
                  Lapaz, Iloilo City
                </span>
              </h2>
            </div>

            <p className="text-[#B8C0CC] text-base sm:text-lg leading-relaxed max-w-xl">
              Aspiring UX designer & front-end developer passionate about
              creating clean, intuitive digital experiences with a strong focus
              on visual clarity and user-centered interaction.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1 rounded-full text-xs font-medium bg-surface/80 border border-white/[0.08] text-[#B8C0CC] hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95 transition-all duration-200"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 text-foreground font-semibold text-sm hover:bg-primary/10 hover:border-primary active:scale-95 transition-all duration-200"
              >
                Contact Me
                <Mail className="w-4 h-4 text-primary" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={150}
            className="lg:justify-self-end w-full lg:w-[96%]"
          >
            <div className="glass p-6 md:p-8 rounded-3xl lg:rounded-[2rem] shadow-xl border border-white/[0.06] bg-surface/90 backdrop-blur-md hover:border-primary/30 hover:shadow-[0_0_30px_rgba(32,178,170,0.16)] transition-all duration-300">
              <div className="flex items-center gap-4 pb-6 border-b border-white/[0.06]">
                <div className="relative flex-shrink-0">
                  <img
                    src="/profile.jpg"
                    alt="John Lester Tiangao"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover ring-2 ring-primary/40 shadow-lg"
                  />
                  <span
                    className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-surface ring-1 ring-emerald-400/40"
                    title="Available for opportunities"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground truncate">
                    John Lester Tiangao
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-primary font-medium mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>2nd Year IT Student & UX Enthusiast</span>
                  </div>
                </div>
              </div>

              <motion.div
                variants={cardContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="space-y-3.5 pt-5"
              >
                {bioFacts.map((fact) => (
                  <motion.div
                    key={fact.label}
                    variants={cardItemVariants}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1.5 border-b border-white/[0.03]"
                  >
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground w-28 flex-shrink-0">
                      {fact.label}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#B8C0CC] text-left sm:text-right">
                      {fact.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-surface/50 border border-white/[0.05] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <p className="text-[#B8C0CC] text-sm sm:text-base leading-relaxed pl-2 italic">
                  “I'm passionate about UX design and always eager to learn and
                  improve my craft.”
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};