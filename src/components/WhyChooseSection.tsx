import { Shield, IndianRupee, Zap, HeartHandshake, Clock, Headphones } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef } from "react";

const reasons = [
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality websites at prices that small businesses can afford.", number: "01" },
  { icon: HeartHandshake, title: "Local Support in Pune", desc: "We're based in Pune — meet us in person anytime.", number: "02" },
  { icon: Zap, title: "Fast Delivery", desc: "Most projects delivered within 7-14 working days.", number: "03" },
  { icon: Shield, title: "No Hidden Charges", desc: "What we quote is what you pay. Transparent billing always.", number: "04" },
  { icon: Clock, title: "Custom Design", desc: "Every website is unique — no cookie-cutter templates.", number: "05" },
  { icon: Headphones, title: "24/7 Support", desc: "WhatsApp, call, or email — we're always there for you.", number: "06" },
];

const ReasonCard = ({ r, index }: { r: typeof reasons[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.5s ease-out ${index * 0.07}s, transform 0.5s ease-out ${index * 0.07}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const Icon = r.icon;

  return (
    <div
      ref={ref}
      className="group relative p-7 rounded-2xl border border-border/20 backdrop-blur-sm hover:border-primary/15 transition-all duration-500 border-glow hover:scale-[1.02] inner-glow"
      style={{ background: "linear-gradient(135deg, hsl(217 33% 14% / 0.5), hsl(217 33% 12% / 0.3))" }}
    >
      <span className="absolute top-5 right-5 font-heading text-4xl font-black text-foreground/[0.03] group-hover:text-primary/[0.06] transition-colors duration-500">{r.number}</span>
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-all duration-300">
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="font-heading font-bold text-foreground text-[15px] mb-2">{r.title}</h3>
      <p className="text-xs text-muted-foreground/70 leading-relaxed font-light">{r.desc}</p>
    </div>
  );
};

const WhyChooseSection = () => {
  const headingRef = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(222 47% 8%) 0%, hsl(222 47% 10%) 100%)" }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          <div ref={headingRef}>
            <span className="premium-badge mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Why Us
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-4">
              Why Choose <br />
              <span className="text-gradient">VyaparTech?</span>
            </h2>
            <p className="text-muted-foreground/80 mt-6 text-base leading-relaxed max-w-md font-light">
              We don't just build websites — we build trust, growth, and digital success stories for local businesses in Pune.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-gradient">100%</div>
                <div className="text-xs text-muted-foreground/60 mt-1.5 font-medium tracking-wide">Client Satisfaction</div>
              </div>
              <div className="w-px h-14 bg-border/20" />
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-gradient">7 Days</div>
                <div className="text-xs text-muted-foreground/60 mt-1.5 font-medium tracking-wide">Avg. Delivery</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <ReasonCard key={r.title} r={r} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
