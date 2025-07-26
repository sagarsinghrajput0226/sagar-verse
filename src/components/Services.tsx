import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Server, 
  Globe, 
  Database, 
  Brain, 
  Code, 
  Smartphone 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Backend API Development",
      description: "Building robust and scalable REST APIs using Spring Boot and Django. Expert in designing secure, high-performance backend systems with proper authentication and authorization.",
      icon: Server,
      technologies: ["Spring Boot", "Django", "REST APIs", "Spring Security"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Web Application Development",
      description: "Creating modern, responsive web applications with React and full-stack technologies. Focus on user experience, performance optimization, and cross-browser compatibility.",
      icon: Globe,
      technologies: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Database Design & Integration",
      description: "Designing efficient database schemas and implementing seamless integrations with MySQL, MongoDB, and other database systems for optimal data management.",
      icon: Database,
      technologies: ["MySQL", "MongoDB", "Database Design", "Data Modeling"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "API Integration Services",
      description: "Integrating third-party APIs and services into applications. Expertise in RESTful API design, documentation, and ensuring reliable data exchange between systems.",
      icon: Code,
      technologies: ["REST APIs", "Postman", "API Documentation", "Integration"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile App Development",
      description: "Developing Android applications using Kotlin and exploring cross-platform solutions. Creating intuitive mobile experiences with modern design principles.",
      icon: Smartphone,
      technologies: ["Android", "Kotlin", "Mobile UI/UX", "App Architecture"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Data Science Projects",
      description: "Working on machine learning projects and data analysis solutions. Building recommendation systems and exploring AI applications for business insights.",
      icon: Brain,
      technologies: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis"],
      gradient: "from-yellow-500 to-orange-500",
      badge: "In Progress"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="hero-gradient bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="p-6 card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Badge for In Progress */}
                {service.badge && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                    {service.badge}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary/50 rounded text-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.gradient.split(' ')[0].replace('from-', '')}, ${service.gradient.split(' ')[1].replace('to-', '')})`
                  }}
                ></div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass-effect rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate and bring your ideas to life with modern, scalable solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Get In Touch
                </Button>
                <Button variant="glass" size="lg">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;