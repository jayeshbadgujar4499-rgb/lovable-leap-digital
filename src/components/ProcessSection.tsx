import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Understand Your Business",
    description: "We sit with you, learn about your shop, customers, and goals. No tech jargon — just simple conversation.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design Custom Layout",
    description: "We create a unique design that matches your brand — not a cookie-cutter template. You approve every detail.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Develop & Test",
    description: "Our team builds your website with the latest technology. Fully tested on all devices before delivery.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "We deploy your website, set up hosting, and provide ongoing support. You focus on your business, we handle tech.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }} />
      
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">Our Process</span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mt-3">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-base" style={{ color: "hsl(220 14% 70%)" }}>
            Simple, transparent process — from first meeting to final delivery.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 md:${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content card */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-7 rounded-2xl border border-primary/10 bg-navy-light/30 backdrop-blur-sm inline-block text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center shadow-lg">
                      <step.icon size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-primary font-bold text-xs tracking-wider">STEP {step.step}</span>
                      <h3 className="font-heading text-lg font-bold text-secondary-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(220 14% 65%)" }}>{step.description}</p>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full gradient-accent items-center justify-center text-primary-foreground font-bold text-sm shadow-lg z-10">
                {step.step}
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
