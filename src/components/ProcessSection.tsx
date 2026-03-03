import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useGsapScrollTrigger";

const steps = [
  { icon: MessageSquare, step: "01", title: "Understand Your Business", description: "We sit with you, learn about your shop, customers, and goals. No tech jargon — just simple conversation." },
  { icon: Palette, step: "02", title: "Design Custom Layout", description: "We create a unique design that matches your brand — not a cookie-cutter template. You approve every detail." },
  { icon: Code2, step: "03", title: "Develop & Test", description: "Our team builds your website with the latest technology. Fully tested on all devices before delivery." },
  { icon: Rocket, step: "04", title: "Launch & Support", description: "We deploy your website, set up hosting, and provide ongoing support. You focus on your business, we handle tech." },
];

const ProcessSection = () => {
  const headingRef = useScrollReveal();

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(210 40% 96%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 40% 96%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto relative">
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-base text-muted-foreground">
            Simple, transparent process — from first meeting to final delivery.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical glowing line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px" style={{
            background: "linear-gradient(to bottom, hsl(24 95% 53% / 0.5), hsl(24 95% 53% / 0.1), transparent)"
          }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-7 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm inline-block text-left border-glow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center shadow-lg">
                      <step.icon size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-primary font-bold text-xs tracking-wider">STEP {step.step}</span>
                      <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full gradient-accent items-center justify-center text-primary-foreground font-bold text-sm shadow-lg z-10 glow-orange">
                {step.step}
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
