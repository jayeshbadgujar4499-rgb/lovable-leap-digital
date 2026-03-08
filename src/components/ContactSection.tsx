import { useState, useRef, useEffect } from "react";
import { Send, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
};

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const headingRef = useScrollReveal();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent! 🎉", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[150px]" style={{ background: "hsl(239 84% 67%)" }} />

      <div className="container mx-auto relative">
        <div ref={headingRef} className="text-center mb-16">
          <span className="premium-badge mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Let's <span className="text-gradient">Talk Business</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-base font-light leading-relaxed">
            Fill the form below and get a free consultation. No commitment required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 space-y-5 border-glow"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2.5 block">Your Name</label>
                  <Input placeholder="Jayesh Patil" required className="bg-muted/20 border-border/20 py-5 rounded-xl focus:border-primary/40 transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2.5 block">Business Name</label>
                  <Input placeholder="My Bakery Shop" required className="bg-muted/20 border-border/20 py-5 rounded-xl focus:border-primary/40 transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2.5 block">Phone Number</label>
                  <Input placeholder="+91 99700 62565" required className="bg-muted/20 border-border/20 py-5 rounded-xl focus:border-primary/40 transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2.5 block">Budget Range</label>
                  <Input placeholder="₹10,000 - ₹25,000" className="bg-muted/20 border-border/20 py-5 rounded-xl focus:border-primary/40 transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2.5 block">Tell Us Your Requirement</label>
                <Textarea placeholder="I want a website for my restaurant with online menu and table booking..." rows={4} required className="bg-muted/20 border-border/20 rounded-xl focus:border-primary/40 transition-colors" />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full gradient-amber text-accent-foreground border-0 font-semibold py-7 rounded-xl glow-amber hover:scale-[1.02] transition-all duration-300 group btn-shine shadow-xl"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-col justify-center space-y-10">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Ready to grow your business?</h3>
                <p className="text-muted-foreground/70 text-sm leading-relaxed font-light">
                  We believe every small business deserves a strong online presence. Let's make it happen together —
                  no matter your budget or tech knowledge.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Phone, label: "+91 99700 62565", href: "tel:+919970062565" },
                  { icon: Mail, label: "hello@vyapartech.in", href: "mailto:hello@vyapartech.in" },
                  { icon: MapPin, label: "Pune, Maharashtra, India", href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 text-sm text-muted-foreground/80 hover:text-primary transition-all duration-300 p-4 rounded-xl hover:bg-muted/10 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 border border-primary/15 group-hover:bg-primary/15 transition-colors">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="p-6 rounded-2xl border border-secondary/15 border-glow inner-glow"
                style={{ background: "linear-gradient(135deg, hsl(187 94% 43% / 0.06), hsl(239 84% 67% / 0.04))" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full gradient-accent flex items-center justify-center shadow-lg">
                    <ArrowRight size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground text-sm">Free Consultation</div>
                    <div className="text-xs text-muted-foreground/60 mt-0.5">Get expert advice at zero cost</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
