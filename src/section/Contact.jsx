import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { supabase } from "@/lib/supabase";
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

    try {
      // 1. Save submission to Supabase messages table
      const { error: dbError } = await supabase.from("messages").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      ]);

      if (dbError) throw dbError;

      // 2. Send instant email notification to your Gmail if EmailJS is configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        try {
          await emailjs.send(
            serviceId,
            templateId,
            {
              from_name: formData.name.trim(),
              from_email: formData.email.trim(),
              message: formData.message.trim(),
              reply_to: formData.email.trim(),
            },
            publicKey
          );
        } catch (emailErr) {
          console.warn("EmailJS notification error:", emailErr);
          // Do not fail submission since Supabase already saved the record
        }
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent and recorded successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err.message ||
          "Failed to send message. Please check your Supabase table and RLS policy.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal
            direction="left"
            className="glass p-8 rounded-3xl border border-primary/30"
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

          <ScrollReveal direction="right" className="space-y-6" delay={150}>
            <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-6 animate-slide-up">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface hover:scale-[1.02] transition-all duration-300 ease-in-out group hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 ease-in-out group-hover:scale-110">
                      <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
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