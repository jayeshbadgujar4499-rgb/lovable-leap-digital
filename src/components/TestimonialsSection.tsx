import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef } from "react";

const testimonials = [
  { name: "Rajesh Patil", business: "Sweet Bites Bakery, Pune", text: "VyaparTech transformed our small bakery shop into an online brand. Now we get orders from WhatsApp and website both. Best investment!", rating: 5, initials: "RP" },
  { name: "Priya Sharma", business: "Glamour Salon, Kothrud", text: "Our customers can now book appointments online. We saved so much time and our bookings increased by 40%. Highly recommend!", rating: 5, initials: "PS" },
  { name: "Amit Deshmukh", business: "FitZone Gym, Hinjewadi", text: "Professional, affordable, and they understand small business needs. Our website looks premium and members love the online class booking.", rating: 5, initials: "AD" },
];

const TestimonialCard = ({ t, index }: { t: typeof testimonials[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.6s ease-out ${index * 0.12}s, transform 0.6s ease-out ${index * 0.12}s`;

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

  return (
    <div
      ref={ref}
      className="relative p-8 md:p-10 rounded-3xl border border-border/15 backdrop-blur-sm group hover:border-primary/15 transition-all duration-500 border-glow hover:-translate-y-2 inner-glow"
      style={{ background: "linear-gradient(135deg, hsl(217 33% 14% / 0.6), hsl(217 33% 12% / 0.3))" }}
    >
      <Quote size={80} className="absolute top-4 right-4 text-primary/[0.03]" />

      <div className="flex items-center gap-1.5 mb-6">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} size={14} className="fill-accent text-accent" />
        ))}
      </div>

      <p className="text-sm leading-[1.8] mb-10 relative z-10 text-muted-foreground/80 font-light italic">
        "{t.text}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-primary-foreground font-bold text-xs shadow-xl">
          {t.initials}
        </div>
        <div>
          <div className="font-heading font-bold text-foreground text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground/60 mt-0.5">{t.business}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const headingRef = useScrollReveal();

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(222 47% 8%) 0%, hsl(222 47% 10%) 100%)" }}>
      <div className="container mx-auto relative">
        <div ref={headingRef} className="text-center mb-20">
          <span className="premium-badge mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
