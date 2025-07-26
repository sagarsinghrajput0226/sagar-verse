import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Server, Database, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Backend",
      description: "Comprehensive backend system with Java, Spring Boot, MySQL, and Spring Security. Features full CRUD operations, category search functionality, and optimized performance for high-traffic applications.",
      technologies: ["Java", "Spring Boot", "MySQL", "Spring Security", "REST APIs"],
      github: "https://github.com/sagarsinghrajput0226/E-Com",
      image: "https://i.postimg.cc/htHjyZYH/Screenshot-2025-07-26-164600.png",
      icon: Server,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "TuneStream",
      description: "Intelligent music recommendation system built with Django and Scikit-learn. Uses cosine similarity algorithms to provide personalized music suggestions based on user preferences and listening history.",
      technologies: ["Django", "Python", "Scikit-learn", "MongoDB", "Machine Learning"],
      github: "https://github.com/sagarsinghrajput0226/TuneStream",
      image: "https://i.postimg.cc/G2mZkdQr/Screenshot-2025-07-26-164910.png",
      icon: Database,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Movie Watchlist",
      description: "Full-featured CRUD application with Spring Boot and MySQL integration. Includes live movie ratings via OMDB API, user authentication, and personalized watchlist management.",
      technologies: ["Spring Boot", "MySQL", "OMDB API", "REST APIs", "Java"],
      github: "https://github.com/sagarsinghrajput0226/watchlistApplication",
      image: "https://i.postimg.cc/Y9mQDyMV/Screenshot-2025-07-26-165743.png",
      icon: Globe,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="hero-gradient bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Showcasing my passion for building scalable and innovative solutions
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="p-8 card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 group"
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  {/* Project Info */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Button 
                        variant="hero" 
                        size="sm" 
                        className="group"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        View Code
                      </Button>
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <div className="relative overflow-hidden rounded-lg glass-effect border border-border/50 aspect-video">
                      <img 
                        src={project.image} 
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="absolute top-4 left-10 w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="absolute top-4 left-16 w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => window.open('https://github.com/sagarsinghrajput0226?tab=repositories', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;