import { Mail } from "lucide-react";
import { useState } from "react";
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

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const EMAIL = "johnlestertiangao@gmail.com";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);

    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} 2nd Year IT Student.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Email Copy */}
          <div className="flex items-center gap-4">
            {/* Email Copy Button */}
            {/* Social Links */}
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
