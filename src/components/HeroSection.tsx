import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating shapes */}
      <div className="floating-shape w-72 h-72 top-20 -left-20 animate-float" />
      <div className="floating-shape w-96 h-96 bottom-20 right-0 animate-float-slow" style={{ background: "hsl(24 95% 53%)", opacity: 0.08 }} />
      <div className="floating-shape w-48 h-48 top-1/3 right-1/4 animate-pulse-glow" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary">Pune's Trusted Digital Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-secondary-foreground">We Build </span>
            <span className="text-gradient">Powerful Websites</span>
            <br />
            <span className="text-secondary-foreground">for Local Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "hsl(220 14% 70%)" }}
          >
            Helping small shops, restaurants, salons & local businesses in Pune get more customers 
            with stunning websites and digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="gradient-accent border-0 text-primary-foreground font-semibold text-base px-8 py-6 glow-orange hover:scale-105 transition-transform duration-200"
            >
              <a href="#contact">
                Get Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold text-base px-8 py-6"
            >
              <a href="#portfolio">View Our Work</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16"
          >
            {[
              { value: "50+", label: "Projects Done" },
              { value: "40+", label: "Happy Clients" },
              { value: "3+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs mt-1" style={{ color: "hsl(220 14% 60%)" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: "linear-gradient(to top, hsl(220 20% 97%), transparent)"
      }} />
    </section>
  );
};

export default HeroSection;
