import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

const socialLinks = [
  {
    icon: GitHubIcon,
    href: "https://github.com/JohnLester0",
    label: "GitHub",
  },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/john-lester-tiangao-5048a4372/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:johnlestertiangao@gmail.com",
    label: "Email",
  },
];

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © 2026 John Lester Tiangao. All rights reserved.
        </p>

        {/* Follow Me */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            Follow Me:
          </span>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <social.icon className="w-3.5 h-3.5 text-primary/80" />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
