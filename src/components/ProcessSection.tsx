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
    <section id="process" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Process</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "hsl(220 14% 70%)" }}>
            Simple, transparent process — from first meeting to final delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon size={28} className="text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-accent text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-secondary-foreground mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(220 14% 60%)" }}>{step.description}</p>

              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-primary/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
