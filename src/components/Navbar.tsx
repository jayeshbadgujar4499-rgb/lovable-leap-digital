import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled
        ? "bg-background/70 backdrop-blur-2xl border-b border-border/30 shadow-2xl"
        : "bg-transparent backdrop-blur-none"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-[72px] px-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl gradient-accent flex items-center justify-center shadow-lg group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105">
            <span className="font-heading font-bold text-primary-foreground text-sm">V</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground tracking-tight">
            Vyapar<span className="text-gradient">Tech</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium text-muted-foreground/80 hover:text-foreground transition-colors duration-300 py-1 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full gradient-accent group-hover:w-full transition-all duration-500 ease-out" />
            </a>
          ))}
          <Button asChild className="gradient-accent border-0 text-primary-foreground font-semibold glow-primary btn-shine rounded-xl px-7 shadow-lg">
            <a href="#contact">Get Free Quote</a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden backdrop-blur-2xl border-b border-border/30 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "hsl(222 47% 9% / 0.95)" }}
      >
        <div className="flex flex-col gap-1 p-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-3 px-4 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/20 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-4 gradient-accent border-0 text-primary-foreground font-semibold rounded-xl">
            <a href="#contact" onClick={closeMenu}>Get Free Quote</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
