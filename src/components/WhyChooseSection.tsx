import { motion } from "framer-motion";
import { Shield, IndianRupee, Zap, HeartHandshake, Clock, Headphones } from "lucide-react";
import { useScrollReveal } from "@/hooks/useGsapScrollTrigger";

const reasons = [
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality websites at prices that small businesses can afford.", number: "01" },
  { icon: HeartHandshake, title: "Local Support in Pune", desc: "We're based in Pune — meet us in person anytime.", number: "02" },
  { icon: Zap, title: "Fast Delivery", desc: "Most projects delivered within 7-14 working days.", number: "03" },
  { icon: Shield, title: "No Hidden Charges", desc: "What we quote is what you pay. Transparent billing always.", number: "04" },
  { icon: Clock, title: "Custom Design", desc: "Every website is unique — no cookie-cutter templates.", number: "05" },
  { icon: Headphones, title: "24/7 Support", desc: "WhatsApp, call, or email — we're always there for you.", number: "06" },
];

const WhyChooseSection = () => {
  const headingRef = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "hsl(222 47% 8%)" }}>
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]" style={{ background: "hsl(187 94% 43%)" }} />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div ref={headingRef}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4 border border-secondary/20">Why Us</span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Why Choose <br />
              <span className="text-gradient">VyaparTech?</span>
            </h2>
            <p className="text-muted-foreground mt-5 text-base leading-relaxed max-w-md">
              We don't just build websites — we build trust, growth, and digital success stories for local businesses in Pune.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-gradient">100%</div>
                <div className="text-xs text-muted-foreground mt-1">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-gradient">7 Days</div>
                <div className="text-xs text-muted-foreground mt-1">Avg. Delivery</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ scale: 1.03 }}
                className="group relative p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 border-glow"
              >
                <span className="absolute top-4 right-4 font-heading text-3xl font-black text-muted/20 group-hover:text-primary/10 transition-colors">{r.number}</span>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <r.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm mb-1">{r.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
