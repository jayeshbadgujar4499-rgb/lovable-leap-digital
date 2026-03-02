import { motion } from "framer-motion";
import { Check } from "lucide-react";
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
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Affordable <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Transparent pricing with no hidden charges. Pick the plan that suits your budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass-card p-8 relative ${plan.popular ? "ring-2 ring-primary scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-accent text-primary-foreground text-xs font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              <div className="mt-6 mb-6">
                <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-1">/ {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full font-semibold ${plan.popular ? "gradient-accent text-primary-foreground border-0 glow-orange" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
