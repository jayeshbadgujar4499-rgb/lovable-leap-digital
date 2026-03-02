import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sweet Bites Bakery",
    category: "Cake Shop",
    color: "from-pink-500/20 to-orange-500/20",
    description: "Complete online presence with cake catalog & WhatsApp ordering.",
  },
  {
    title: "FitZone Gym",
    category: "Fitness Center",
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Membership booking system with class schedules and trainer profiles.",
  },
  {
    title: "Glamour Salon",
    category: "Beauty Salon",
    color: "from-purple-500/20 to-pink-500/20",
    description: "Appointment booking website with service catalog and pricing.",
  },
  {
    title: "Spice Route Restaurant",
    category: "Restaurant",
    color: "from-orange-500/20 to-red-500/20",
    description: "Digital menu, table reservation, and online food ordering system.",
  },
  {
    title: "MediCare Clinic",
    category: "Healthcare",
    color: "from-emerald-500/20 to-teal-500/20",
    description: "Patient appointment system with doctor profiles and health blog.",
  },
  {
    title: "Bright Minds Academy",
    category: "Education",
    color: "from-yellow-500/20 to-orange-500/20",
    description: "Course enrollment platform with student portal and fee management.",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            See how we've helped businesses like yours succeed online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="font-heading text-4xl font-bold text-foreground/10">{project.title.charAt(0)}</div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink size={24} className="text-foreground/0 group-hover:text-foreground/50 transition-colors duration-300" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
