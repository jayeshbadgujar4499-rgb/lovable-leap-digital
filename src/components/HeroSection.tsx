import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const moveX = useTransform(springX, [0, window.innerWidth], [-15, 15]);
  const moveY = useTransform(springY, [0, window.innerHeight], [-15, 15]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated mesh gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full top-[-100px] left-[-100px] opacity-[0.07] blur-[100px]"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ background: "hsl(24 95% 53%)", x: moveX, y: moveY }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bottom-[-50px] right-[-80px] opacity-[0.05] blur-[80px]"
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ background: "hsl(220 60% 50%)" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full top-[40%] left-[60%] opacity-[0.04] blur-[60px]"
        animate={{ y: [-30, 30, -30], x: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "hsl(30 100% 50%)" }}
      />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5 animate-rotate-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/[0.03]" style={{ animation: "rotate-slow 30s linear infinite reverse" }} />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-semibold text-primary tracking-wide">Pune's Trusted Digital Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-7"
          >
            <span className="text-secondary-foreground block">We Build</span>
            <span className="text-gradient block my-2">Powerful Websites</span>
            <span className="text-secondary-foreground block text-[0.65em]">for Local Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
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
              className="gradient-accent border-0 text-primary-foreground font-semibold text-base px-10 py-7 glow-orange hover:scale-105 transition-transform duration-200 rounded-2xl"
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
              className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold text-base px-10 py-7 rounded-2xl backdrop-blur-sm"
            >
              <a href="#portfolio">View Our Work</a>
            </Button>
          </motion.div>

          {/* Stats with glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex items-center justify-center gap-4 md:gap-8 mt-20"
          >
            {[
              { value: 50, suffix: "+", label: "Projects Done" },
              { value: 40, suffix: "+", label: "Happy Clients" },
              { value: 3, suffix: "+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center px-6 md:px-10 py-5 rounded-2xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] md:text-xs mt-1 font-medium" style={{ color: "hsl(220 14% 60%)" }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} style={{ color: "hsl(220 14% 50%)" }} />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40" style={{
        background: "linear-gradient(to top, hsl(220 20% 97%), transparent)"
      }} />
    </section>
  );
};

export default HeroSection;
