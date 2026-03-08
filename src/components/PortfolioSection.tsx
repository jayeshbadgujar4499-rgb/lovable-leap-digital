import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useGsapScrollTrigger";

const projects = [
  { title: "Sweet Bites Bakery", category: "Cake Shop", gradient: "from-[hsl(239_84%_60%)] to-[hsl(187_94%_43%)]", description: "Complete online presence with cake catalog & WhatsApp ordering.", tags: ["Website", "WhatsApp", "Catalog"] },
  { title: "FitZone Gym", category: "Fitness Center", gradient: "from-[hsl(187_94%_43%)] to-[hsl(160_60%_40%)]", description: "Membership booking system with class schedules and trainer profiles.", tags: ["Booking", "Dashboard", "Payments"] },
  { title: "Glamour Salon", category: "Beauty Salon", gradient: "from-[hsl(280_70%_55%)] to-[hsl(239_84%_60%)]", description: "Appointment booking website with service catalog and pricing.", tags: ["Appointments", "Gallery", "Reviews"] },
  { title: "Spice Route Restaurant", category: "Restaurant", gradient: "from-[hsl(38_92%_50%)] to-[hsl(15_80%_45%)]", description: "Digital menu, table reservation, and online food ordering system.", tags: ["Menu", "Booking", "Orders"] },
  { title: "MediCare Clinic", category: "Healthcare", gradient: "from-[hsl(160_60%_40%)] to-[hsl(187_94%_35%)]", description: "Patient appointment system with doctor profiles and health blog.", tags: ["Health Portal", "Appointments", "Blog"] },
  { title: "Bright Minds Academy", category: "Education", gradient: "from-[hsl(239_84%_67%)] to-[hsl(280_70%_55%)]", description: "Course enrollment platform with student portal and fee management.", tags: ["LMS", "Enrollment", "Portal"] },
];

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);
  const headingRef = useScrollReveal();

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-[0.04] blur-[80px]" style={{ background: "hsl(187 94% 43%)" }} />

      <div className="container mx-auto">
        <div ref={headingRef} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">Our Work</span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-base">
            See how we've helped businesses like yours succeed online.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                active === cat
                  ? "gradient-accent text-primary-foreground border-primary/30 shadow-lg glow-primary"
                  : "bg-muted/20 text-muted-foreground border-border/30 hover:border-primary/20 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card overflow-hidden group cursor-pointer border-glow"
            >
              <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-[120px] font-black text-foreground/[0.06] select-none">{project.title.charAt(0)}</span>
                </div>
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="w-12 h-12 rounded-full bg-foreground/90 flex items-center justify-center"
                  >
                    <ExternalLink size={20} className="text-background" />
                  </motion.div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/10 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-wider border border-foreground/10">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-primary/10 text-[10px] font-semibold text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
