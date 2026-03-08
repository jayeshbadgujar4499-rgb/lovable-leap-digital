import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, lazy, Suspense } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

const CountUp = ({ target, suffix = "" }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}{suffix}</>;
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "radial-gradient(ellipse at 50% 50%, transparent 30%, hsl(222 47% 11%) 80%)"
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(210 40% 98%) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="text-xs font-semibold text-secondary tracking-wide">Pune's Trusted Digital Partner</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-7"
          >
            <span className="text-foreground block">We Build</span>
            <span className="text-gradient block my-2">Powerful Websites</span>
            <span className="text-muted-foreground block text-[0.55em]">for Local Businesses</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-muted-foreground"
          >
            Helping small shops, restaurants, salons & local businesses in Pune get more customers
            with stunning websites and digital solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="gradient-accent border-0 text-primary-foreground font-semibold text-base px-10 py-7 glow-primary hover:scale-105 transition-transform duration-300 rounded-2xl btn-shine"
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
              className="border-muted-foreground/20 text-foreground hover:bg-muted/20 font-semibold text-base px-10 py-7 rounded-2xl backdrop-blur-sm"
            >
              <a href="#portfolio">View Our Work</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-4 md:gap-8 mt-20"
          >
            {[
              { value: 50, suffix: "+", label: "Projects Done" },
              { value: 40, suffix: "+", label: "Happy Clients" },
              { value: 3, suffix: "+", label: "Years Experience" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center px-6 md:px-10 py-5 rounded-2xl bg-muted/20 backdrop-blur-sm border border-border/30 border-glow"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] md:text-xs mt-1 font-medium text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} className="text-muted-foreground" />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2]" style={{
        background: "linear-gradient(to top, hsl(222 47% 11%), transparent)"
      }} />
    </section>
  );
};

export default HeroSection;
