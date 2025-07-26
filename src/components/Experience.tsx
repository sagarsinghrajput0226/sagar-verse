import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, TrendingUp, Target } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Corporate Co-Lead",
    company: "E-Cell, VIT Bhopal",
    period: "Dec 2023 – Present",
    location: "VIT Bhopal, India",
    description: "Leading corporate partnerships and strategic initiatives to drive entrepreneurial growth and innovation within the university ecosystem.",
    achievements: [
      {
        icon: Users,
        title: "Partnership Management",
        description: "Managed partnerships with 5+ organizations, establishing strong collaborative relationships"
      },
      {
        icon: TrendingUp,
        title: "Event Growth",
        description: "Led team operations and boosted event participation by 50% through strategic planning"
      },
      {
        icon: Target,
        title: "External Collaboration",
        description: "Strengthened external collaboration and secured additional funding for initiatives"
      }
    ],
    skills: ["Leadership", "Partnership Management", "Event Planning", "Team Operations", "Strategic Planning"]
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="hero-gradient bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6">
              Building leadership skills and driving meaningful impact
            </p>
          </div>

          {/* Main Experience Card */}
          <Card className="p-8 card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 mb-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Company Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Experience Details */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">{experience.title}</h3>
                    <p className="text-xl text-primary font-medium">{experience.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">{experience.period}</p>
                    <p className="text-sm text-muted-foreground">{experience.location}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {experience.achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="p-6 card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Timeline Visualization */}
          <div className="mt-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {/* Current Role */}
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-card border border-border/50 rounded-lg p-4 ml-8 max-w-md">
                  <div className="text-sm text-primary font-medium">Present</div>
                  <div className="font-semibold">Corporate Co-Lead at E-Cell</div>
                  <div className="text-sm text-muted-foreground">Continuing leadership and growth</div>
                </div>
              </div>

              {/* Start Date */}
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-card border border-border/50 rounded-lg p-4 mr-8 max-w-md">
                  <div className="text-sm text-accent font-medium">Dec 2023</div>
                  <div className="font-semibold">Started as Corporate Co-Lead</div>
                  <div className="text-sm text-muted-foreground">Beginning of leadership journey</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;