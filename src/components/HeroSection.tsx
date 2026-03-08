import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, lazy, Suspense, memo } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

const CountUp = memo(({ target, suffix = "" }: { target: number; suffix: string }) => {
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
});

CountUp.displayName = "CountUp";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Premium mesh gradient overlay */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "radial-gradient(ellipse at 50% 30%, transparent 20%, hsl(222 47% 11%) 75%)"
      }} />
      <div className="absolute inset-0 z-[1] opacity-40" style={{
        background: "radial-gradient(circle at 20% 80%, hsl(239 84% 67% / 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(187 94% 43% / 0.06) 0%, transparent 40%)"
      }} />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl mb-10 animate-fade-up"
          >
            <Sparkles size={14} className="text-secondary" />
            <span className="text-xs font-semibold text-secondary/90 tracking-wider uppercase">Pune's Trusted Digital Partner</span>
          </div>

          {/* Heading with premium typography */}
          <h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.92] mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground block">We Build</span>
            <span className="text-gradient block my-3" style={{ lineHeight: "1.1" }}>Powerful Websites</span>
            <span className="text-muted-foreground/70 block text-[0.48em] font-medium tracking-wide">for Local Businesses</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed text-muted-foreground/80 animate-fade-up font-light"
            style={{ animationDelay: "0.25s" }}
          >
            Helping small shops, restaurants, salons & local businesses in Pune get more customers
            with stunning websites and digital solutions.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <Button
              asChild
              size="lg"
              className="gradient-accent border-0 text-primary-foreground font-semibold text-base px-12 py-7 glow-primary hover:scale-105 transition-all duration-300 rounded-2xl btn-shine shadow-2xl"
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
              className="border-muted-foreground/15 text-foreground/90 hover:bg-muted/20 hover:border-muted-foreground/25 font-semibold text-base px-12 py-7 rounded-2xl backdrop-blur-sm transition-all duration-300"
            >
              <a href="#portfolio">View Our Work</a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex items-center justify-center gap-3 md:gap-6 mt-24 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { value: 50, suffix: "+", label: "Projects Done" },
              { value: 40, suffix: "+", label: "Happy Clients" },
              { value: 3, suffix: "+", label: "Years Experience" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="text-center px-6 md:px-12 py-6 rounded-2xl backdrop-blur-xl border border-border/20 border-glow hover:scale-105 transition-all duration-500 inner-glow"
                style={{ background: "linear-gradient(135deg, hsl(217 33% 14% / 0.5), hsl(217 33% 12% / 0.3))" }}
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] md:text-xs mt-1.5 font-medium text-muted-foreground/70 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-muted-foreground/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/40 animate-bounce" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[2]" style={{
        background: "linear-gradient(to top, hsl(222 47% 11%), transparent)"
      }} />
    </section>
  );
};

export default HeroSection;
