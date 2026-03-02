import { motion } from "framer-motion";
import { Globe, ShoppingCart, CalendarCheck, Smartphone, Search, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Beautiful, fast, mobile-friendly websites that make your business look professional and attract more customers.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online stores with product catalogs, payment gateways, and order management for your business.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Systems",
    description: "Let your customers book appointments, tables, or sessions online — available 24/7 for salons, clinics & restaurants.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Custom Android & iOS apps to keep your customers engaged and coming back to your business.",
  },
  {
    icon: Search,
    title: "SEO & Google Listing",
    description: "Get found on Google when customers search for your services. We handle Google My Business & local SEO.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing website updates, hosting management, security patches, and technical support — worry-free.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Offer</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Services That <span className="text-gradient">Grow Your Business</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Everything your small business needs to dominate the digital world — all under one roof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
