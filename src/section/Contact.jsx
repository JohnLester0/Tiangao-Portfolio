import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "johnlestertiangao@gmail.com",
    href: "mailto:johnlestertiangao@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+9129918452",
    href: "tel:+9129918452",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Iloilo, Passi City",
    href: "https://www.google.com/maps/place/Passi+City,+Iloilo",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    const senderName = formData.name.trim();
    const senderEmail = formData.email.trim();
    const senderMessage = formData.message.trim();

    try {
      const serviceId = "service_mo7poom";
      const templateId = "template_lk6t9oe";
      const publicKey = "nQmLK0_KqEEm4PGwM";

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: senderName,
          email: senderEmail,
          message: senderMessage,
          title: `Portfolio Message from ${senderName}`,
          time: new Date().toLocaleString(),
          from_name: senderName,
          from_email: senderEmail,
          reply_to: senderEmail,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent directly to my email! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email submission error:", err);
      const errorDetail = err?.text || err?.message || "";
      setSubmitStatus({
        type: "error",
        message: errorDetail
          ? `EmailJS Error: ${errorDetail}`
          : "Could not send message right now. Please check your EmailJS Public Key.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 max-w-5xl mx-auto items-start">
          <ScrollReveal
            direction="left"
            className="lg:col-span-7 w-full max-w-xl mx-auto lg:max-w-none glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/30"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="animate-slide-up animation-delay-100">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 ease-in-out hover:shadow-md"
                  disabled={isLoading}
                />
              </div>

              <div className="animate-slide-up animation-delay-200">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 ease-in-out hover:shadow-md"
                  disabled={isLoading}
                />
              </div>

              <div className="animate-slide-up animation-delay-300">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 ease-in-out hover:shadow-md resize-none"
                  disabled={isLoading}
                />
              </div>

              <Button
                className="w-full transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-xl"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    Sending...{" "}
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full ml-2" />
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl animate-slide-down ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none space-y-6"
            delay={150}
          >
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-7 hover:border-primary/40 transition-all duration-300 ease-in-out border border-white/[0.08]">
              <h3 className="text-xl font-semibold mb-5 animate-slide-up text-foreground">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-surface/50 border border-white/[0.04] hover:border-primary/40 hover:bg-surface hover:scale-[1.01] transition-all duration-300 ease-in-out group hover:shadow-lg w-full min-w-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 ease-in-out group-hover:scale-105 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0 flex-1 group-hover:translate-x-0.5 transition-transform duration-300">
                      <div className="text-xs text-muted-foreground font-medium">
                        {item.label}
                      </div>
                      <div className="font-medium text-sm sm:text-base text-foreground truncate">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};