import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="hero-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl glass-effect overflow-hidden border border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl font-bold text-primary">
                  SS
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aspiring Backend and Full-Stack Developer with a strong foundation in{" "}
                <span className="text-primary font-semibold">Java</span>,{" "}
                <span className="text-primary font-semibold">Spring Boot</span>, and{" "}
                <span className="text-primary font-semibold">RESTful APIs</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about solving complex problems and building scalable, secure, and 
                high-performance software solutions. Enthusiastic about continuous learning 
                and delivering impactful technology.
              </p>

              {/* Education Card */}
              <Card className="p-6 card-gradient border-border/50">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">B.Tech</span>
                        <span className="text-primary font-semibold">CGPA: 8.44</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        VIT Bhopal (2023 – 2027)
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Download Resume Button */}
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;