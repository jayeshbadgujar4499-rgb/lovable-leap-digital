import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent! 🎉",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Let's <span className="text-gradient">Talk Business</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Fill the form below and get a free consultation. No commitment required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                <Input placeholder="Jayesh Patil" required className="bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Business Name</label>
                <Input placeholder="My Bakery Shop" required className="bg-background" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                <Input placeholder="+91 98765 43210" required className="bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Budget Range</label>
                <Input placeholder="₹10,000 - ₹25,000" className="bg-background" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Tell Us Your Requirement</label>
              <Textarea placeholder="I want a website for my restaurant with online menu and table booking..." rows={4} required className="bg-background" />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full gradient-accent text-primary-foreground border-0 font-semibold py-6 glow-orange hover:scale-[1.02] transition-transform"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={16} className="ml-2" />
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Ready to grow your business?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We believe every small business deserves a strong online presence. Let's make it happen together — 
                no matter your budget or tech knowledge.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail, label: "hello@vyapartech.in", href: "mailto:hello@vyapartech.in" },
                { icon: MapPin, label: "Pune, Maharashtra, India", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
