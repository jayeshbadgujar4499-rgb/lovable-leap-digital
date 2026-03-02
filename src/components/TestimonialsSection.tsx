import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patil",
    business: "Sweet Bites Bakery, Pune",
    text: "VyaparTech transformed our small bakery shop into an online brand. Now we get orders from WhatsApp and website both. Best investment!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    business: "Glamour Salon, Kothrud",
    text: "Our customers can now book appointments online. We saved so much time and our bookings increased by 40%. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amit Deshmukh",
    business: "FitZone Gym, Hinjewadi",
    text: "Professional, affordable, and they understand small business needs. Our website looks premium and members love the online class booking.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl border border-primary/10 bg-navy-light/50 backdrop-blur-sm"
            >
              <Quote size={32} className="text-primary/20 mb-4" />
              <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(220 14% 75%)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <div className="font-heading font-bold text-secondary-foreground text-sm">{t.name}</div>
              <div className="text-xs" style={{ color: "hsl(220 14% 55%)" }}>{t.business}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
