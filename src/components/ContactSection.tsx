import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle, hsl(24 95% 53%) 1px, transparent 1px)",
        backgroundSize: "48px 48px"
      }} />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px]" style={{ background: "hsl(24 95% 53%)" }} />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">
            Let's <span className="text-gradient">Talk Business</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-base">
            Fill the form below and get a free consultation. No commitment required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Your Name</label>
                <Input placeholder="Jayesh Patil" required className="bg-background py-5 rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Business Name</label>
                <Input placeholder="My Bakery Shop" required className="bg-background py-5 rounded-xl" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Phone Number</label>
                <Input placeholder="+91 99700 62565" required className="bg-background py-5 rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Budget Range</label>
                <Input placeholder="₹10,000 - ₹25,000" className="bg-background py-5 rounded-xl" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Tell Us Your Requirement</label>
              <Textarea placeholder="I want a website for my restaurant with online menu and table booking..." rows={4} required className="bg-background rounded-xl" />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full gradient-accent text-primary-foreground border-0 font-semibold py-7 rounded-xl glow-orange hover:scale-[1.02] transition-transform group"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Ready to grow your business?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We believe every small business deserves a strong online presence. Let's make it happen together — 
                no matter your budget or tech knowledge.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "+91 99700 62565", href: "tel:+919970062565" },
                { icon: Mail, label: "hello@vyapartech.in", href: "mailto:hello@vyapartech.in" },
                { icon: MapPin, label: "Pune, Maharashtra, India", href: "#" },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors p-3 rounded-xl hover:bg-muted/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Trust badge */}
            <div className="p-5 rounded-2xl border border-primary/10 bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                  <ArrowRight size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground text-sm">Free Consultation</div>
                  <div className="text-xs text-muted-foreground">Get expert advice at zero cost</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
