import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useGsapScrollTrigger";

const testimonials = [
  { name: "Rajesh Patil", business: "Sweet Bites Bakery, Pune", text: "VyaparTech transformed our small bakery shop into an online brand. Now we get orders from WhatsApp and website both. Best investment!", rating: 5, initials: "RP" },
  { name: "Priya Sharma", business: "Glamour Salon, Kothrud", text: "Our customers can now book appointments online. We saved so much time and our bookings increased by 40%. Highly recommend!", rating: 5, initials: "PS" },
  { name: "Amit Deshmukh", business: "FitZone Gym, Hinjewadi", text: "Professional, affordable, and they understand small business needs. Our website looks premium and members love the online class booking.", rating: 5, initials: "AD" },
];

const TestimonialsSection = () => {
  const headingRef = useScrollReveal();

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] blur-[100px]" style={{ background: "hsl(24 95% 53%)" }} />
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "radial-gradient(circle, hsl(210 40% 96%) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container mx-auto relative">
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative p-8 rounded-3xl border border-border/30 bg-card/40 backdrop-blur-sm group hover:border-primary/20 transition-all duration-300 border-glow"
            >
              <Quote size={80} className="absolute top-4 right-4 text-primary/[0.04]" />

              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={15} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-8 relative z-10 text-muted-foreground">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full gradient-accent flex items-center justify-center text-primary-foreground font-bold text-xs shadow-lg">
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
