import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Brain,
  Globe
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "Python", "Kotlin", "JavaScript", "SQL", "NoSQL"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Frameworks & Tools",
      icon: Server,
      skills: ["Spring Boot", "Django", "MongoDB", "Postman"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["REST APIs", "Microservices", "System Design", "Spring Security"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Android", "Kotlin", "Flutter"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      skills: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="hero-gradient bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="p-6 card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-secondary/50 rounded-full text-foreground border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div 
                  className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: `linear-gradient(45deg, ${category.color.split(' ')[0].replace('from-', '')}, ${category.color.split(' ')[1].replace('to-', '')})`
                  }}
                ></div>
              </Card>
            ))}
          </div>

          {/* Technologies I'm Learning */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Docker", "Kubernetes", "AWS", "TensorFlow"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-accent/20 text-accent rounded-full border border-accent/30 animate-pulse"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;