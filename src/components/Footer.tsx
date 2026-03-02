import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-accent flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground text-xs">V</span>
            </div>
            <span className="font-heading font-bold text-secondary-foreground">VyaparTech</span>
          </div>

          <div className="flex items-center gap-6 text-xs" style={{ color: "hsl(220 14% 55%)" }}>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-1 text-xs" style={{ color: "hsl(220 14% 55%)" }}>
            Made with <Heart size={12} className="text-primary fill-primary" /> in Pune
          </div>
        </div>

        <div className="text-center mt-8 text-xs" style={{ color: "hsl(220 14% 45%)" }}>
          © {new Date().getFullYear()} VyaparTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
