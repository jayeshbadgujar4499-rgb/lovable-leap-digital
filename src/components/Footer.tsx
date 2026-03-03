import { Heart, ArrowUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <footer ref={footerRef} className="bg-card/50 relative overflow-hidden border-t border-border/30">
      {/* Animated gradient top border */}
      <div className="h-px w-full gradient-accent opacity-40" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(210 40% 96%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 40% 96%) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <motion.div className="container mx-auto px-4 py-16 relative" style={{ opacity, y }}>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-9 h-9 rounded-xl gradient-accent flex items-center justify-center shadow-lg"
              >
                <span className="font-heading font-bold text-primary-foreground text-sm">V</span>
              </motion.div>
              <span className="font-heading font-bold text-xl text-foreground">
                Vyapar<span className="text-gradient">Tech</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-muted-foreground">
              Helping small businesses in Pune go digital with stunning websites, apps, and marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground text-sm mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Services", "Portfolio", "Pricing", "Process", "Testimonials", "Contact"].map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm py-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground text-sm mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+919970062565" className="block hover:text-primary transition-colors">+91 99700 62565</a>
              <a href="mailto:hello@vyapartech.in" className="block hover:text-primary transition-colors">hello@vyapartech.in</a>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-border/20 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} VyaparTech. Made with <Heart size={12} className="text-primary fill-primary mx-1" /> in Pune
          </div>

          {/* Back to top with progress */}
          <motion.a
            href="#home"
            whileHover={{ y: -3, scale: 1.05 }}
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            Back to top
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ArrowUp size={14} className="text-primary" />
            </div>
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
