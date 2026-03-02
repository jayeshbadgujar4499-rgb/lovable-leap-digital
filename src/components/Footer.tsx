import { Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-secondary relative overflow-hidden">
      {/* Top decorative gradient line */}
      <div className="h-px w-full gradient-accent opacity-30" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-accent flex items-center justify-center shadow-lg">
                <span className="font-heading font-bold text-primary-foreground text-sm">V</span>
              </div>
              <span className="font-heading font-bold text-xl text-secondary-foreground">
                Vyapar<span className="text-gradient">Tech</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "hsl(220 14% 55%)" }}>
              Helping small businesses in Pune go digital with stunning websites, apps, and marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-secondary-foreground text-sm mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Services", "Portfolio", "Pricing", "Process", "Testimonials", "Contact"].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm py-1 hover:text-primary transition-colors"
                  style={{ color: "hsl(220 14% 55%)" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-secondary-foreground text-sm mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm" style={{ color: "hsl(220 14% 55%)" }}>
              <a href="tel:+919970062565" className="block hover:text-primary transition-colors">+91 99700 62565</a>
              <a href="mailto:hello@vyapartech.in" className="block hover:text-primary transition-colors">hello@vyapartech.in</a>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-border/20 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-xs" style={{ color: "hsl(220 14% 45%)" }}>
            © {new Date().getFullYear()} VyaparTech. Made with <Heart size={12} className="text-primary fill-primary mx-1" /> in Pune
          </div>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-xs font-medium hover:text-primary transition-colors"
            style={{ color: "hsl(220 14% 55%)" }}
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <ArrowUp size={14} className="text-primary" />
            </div>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
