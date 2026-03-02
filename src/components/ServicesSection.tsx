import { motion } from "framer-motion";
import { Globe, ShoppingCart, CalendarCheck, Smartphone, Search, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Beautiful, fast, mobile-friendly websites that make your business look professional and attract more customers.",
    accent: "from-primary/20 to-accent/10",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online stores with product catalogs, payment gateways, and order management for your business.",
    accent: "from-blue-500/15 to-cyan-500/10",
  },
  {
    icon: CalendarCheck,
    title: "Booking Systems",
    description: "Let your customers book appointments, tables, or sessions online — available 24/7 for salons, clinics & restaurants.",
    accent: "from-emerald-500/15 to-green-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Custom Android & iOS apps to keep your customers engaged and coming back to your business.",
    accent: "from-purple-500/15 to-pink-500/10",
  },
  {
    icon: Search,
    title: "SEO & Google Listing",
    description: "Get found on Google when customers search for your services. We handle Google My Business & local SEO.",
    accent: "from-yellow-500/15 to-orange-500/10",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing website updates, hosting management, security patches, and technical support — worry-free.",
    accent: "from-rose-500/15 to-red-500/10",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.03] blur-[100px]" style={{ background: "hsl(24 95% 53%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-[0.03] blur-[80px]" style={{ background: "hsl(220 60% 50%)" }} />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            What We Offer
          </motion.span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">
            Services That <br className="hidden md:block" />
            <span className="text-gradient">Grow Your Business</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-base">
            Everything your small business needs to dominate the digital world — all under one roof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative glass-card p-8 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <service.icon size={24} className="text-primary-foreground" />
                  </div>
                  <ArrowUpRight size={20} className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
