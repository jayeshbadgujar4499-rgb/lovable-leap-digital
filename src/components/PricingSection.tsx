import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "one-time",
    description: "Perfect for new businesses just getting started online.",
    features: [
      "5-page responsive website",
      "Mobile-friendly design",
      "Contact form",
      "Google Maps integration",
      "1 month free support",
      "WhatsApp button",
    ],
    popular: false,
    accent: "border-border/50",
  },
  {
    name: "Professional",
    price: "₹24,999",
    period: "one-time",
    description: "For growing businesses that need more features.",
    features: [
      "10-page responsive website",
      "Custom animations",
      "SEO optimization",
      "Social media integration",
      "Admin dashboard",
      "3 months free support",
      "Google Business setup",
      "Blog section",
    ],
    popular: true,
    accent: "border-primary",
  },
  {
    name: "Premium",
    price: "₹49,999",
    period: "one-time",
    description: "Complete digital solution for serious businesses.",
    features: [
      "Unlimited pages",
      "E-commerce functionality",
      "Payment gateway",
      "Booking system",
      "Advanced SEO",
      "6 months free support",
      "Custom admin panel",
      "Analytics dashboard",
      "WhatsApp automation",
    ],
    popular: false,
    accent: "border-border/50",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px]" style={{ background: "hsl(24 95% 53%)" }} />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">Pricing</span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">
            Affordable <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-base">
            Transparent pricing with no hidden charges. Pick the plan that suits your budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl border-2 ${plan.accent} bg-card/80 backdrop-blur-sm p-8 ${plan.popular ? "md:-mt-4 md:mb-4 shadow-2xl" : ""} transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-5 py-2 rounded-full gradient-accent text-primary-foreground text-xs font-bold shadow-lg">
                  <Star size={12} className="fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-bold text-foreground">{plan.price}</span>
                </div>
                <span className="text-xs text-muted-foreground">/ {plan.period}</span>
              </div>

              <div className="h-px bg-border mb-8" />

              <ul className="space-y-3.5 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'gradient-accent' : 'bg-primary/10'}`}>
                      <Check size={12} className={plan.popular ? "text-primary-foreground" : "text-primary"} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full font-semibold py-6 rounded-xl group ${plan.popular ? "gradient-accent text-primary-foreground border-0 glow-orange" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                <a href="#contact">
                  Get Started
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
