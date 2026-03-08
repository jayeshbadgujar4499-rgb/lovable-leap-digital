import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/10" style={{ background: "linear-gradient(180deg, hsl(222 47% 6%) 0%, hsl(222 47% 4%) 100%)" }}>
      <div className="section-divider" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-3 gap-14 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-lg">
                <span className="font-heading font-bold text-primary-foreground text-sm">V</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground tracking-tight">
                Vyapar<span className="text-gradient">Tech</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-muted-foreground/60 font-light">
              Helping small businesses in Pune go digital with stunning websites, apps, and marketing solutions.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground text-sm mb-5 tracking-wide">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Services", "Portfolio", "Pricing", "Process", "Testimonials", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm py-1.5 text-muted-foreground/50 hover:text-primary transition-colors font-light"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground text-sm mb-5 tracking-wide">Get In Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground/50 font-light">
              <a href="tel:+919970062565" className="block hover:text-primary transition-colors">+91 99700 62565</a>
              <a href="mailto:hello@vyapartech.in" className="block hover:text-primary transition-colors">hello@vyapartech.in</a>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="section-divider my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/40 font-light">
            © {new Date().getFullYear()} VyaparTech. Made with <Heart size={11} className="text-destructive fill-destructive mx-1" /> in Pune
          </div>

          <a
            href="#home"
            className="flex items-center gap-2.5 text-xs font-medium text-muted-foreground/40 hover:text-primary transition-all duration-300 group"
          >
            Back to top
            <div className="w-9 h-9 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-300">
              <ArrowUp size={14} className="text-primary" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
