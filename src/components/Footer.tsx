import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sagarsingh",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sagarsingh",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:sagarsinghrajput0226@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative bg-card border-t border-border/50">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        variant="hero"
        size="icon"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold hero-gradient bg-clip-text text-transparent">
                Sagar Singh
              </h3>
              <p className="text-muted-foreground">
                Backend Developer | Full Stack Enthusiast | Tech Explorer
              </p>
              <p className="text-sm text-muted-foreground">
                Building scalable solutions and exploring new technologies.
                Always ready for the next challenge.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="grid grid-cols-2 gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Let's Connect</h4>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  sagarsinghrajput0226@gmail.com
                </p>
                <p className="text-sm text-muted-foreground">
                  +91-7091662963
                </p>
              </div>
              
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>© {currentYear} Sagar Singh. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>and lots of coffee.</span>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Built with</span>
                <span className="text-primary">React</span>
                <span>•</span>
                <span className="text-primary">TypeScript</span>
                <span>•</span>
                <span className="text-primary">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              Open to exciting opportunities and collaborations. Let's build something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;