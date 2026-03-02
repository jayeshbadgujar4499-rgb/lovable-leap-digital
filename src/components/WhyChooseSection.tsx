import { motion } from "framer-motion";
import { Shield, IndianRupee, Zap, HeartHandshake, Clock, Headphones } from "lucide-react";

const reasons = [
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality websites at prices that small businesses can afford." },
  { icon: HeartHandshake, title: "Local Support in Pune", desc: "We're based in Pune — meet us in person anytime." },
  { icon: Zap, title: "Fast Delivery", desc: "Most projects delivered within 7-14 working days." },
  { icon: Shield, title: "No Hidden Charges", desc: "What we quote is what you pay. Transparent billing always." },
  { icon: Clock, title: "Custom Design", desc: "Every website is unique — no cookie-cutter templates." },
  { icon: Headphones, title: "24/7 Support", desc: "WhatsApp, call, or email — we're always there for you." },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Why Choose <span className="text-gradient">VyaparTech</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-sm">{r.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
