import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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

const MagneticLink = ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 py-1 group"
      style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), color 0.3s" }}
    >
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-full transition-all duration-500 ease-out" />
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 50));
  }, [scrollY]);

  const bgOpacity = useTransform(scrollY, [0, 100], [0.3, 0.85]);
  const blur = useTransform(scrollY, [0, 100], [10, 24]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className={`border-b transition-colors duration-500 ${scrolled ? "border-border/40" : "border-transparent"}`}
        style={{
          backgroundColor: `hsl(225 15% 6% / ${bgOpacity.get()})`,
          backdropFilter: `blur(${blur.get()}px)`,
        }}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* 3D Logo */}
          <a href="#home" className="flex items-center gap-2 group" style={{ perspective: "600px" }}>
            <motion.div
              whileHover={{ rotateY: 15, rotateX: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-9 h-9 rounded-xl gradient-accent flex items-center justify-center shadow-lg group-hover:shadow-primary/30"
            >
              <span className="font-heading font-bold text-primary-foreground text-sm">V</span>
            </motion.div>
            <span className="font-heading font-bold text-xl text-foreground">
              Vyapar<span className="text-gradient">Tech</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <MagneticLink key={link.href} href={link.href}>
                {link.label}
              </MagneticLink>
            ))}
            <Button asChild className="gradient-accent border-0 text-primary-foreground font-semibold glow-orange btn-shine rounded-xl px-6">
              <a href="#contact">Get Free Quote</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 px-4 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/30 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button asChild className="mt-3 gradient-accent border-0 text-primary-foreground font-semibold">
                <a href="#contact" onClick={() => setIsOpen(false)}>Get Free Quote</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
