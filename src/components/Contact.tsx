import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin,
  MessageCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sagarsinghrajput0226@gmail.com",
      href: "mailto:sagarsinghrajput0226@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-7091662963",
      href: "tel:+917091662963"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "VIT Bhopal, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/sagarsinghrajput0226",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/sagar-singh-9b4587242/",
      color: "hover:text-blue-400"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      href: "https://wa.me/917091662963",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="hero-gradient bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Ready to discuss your next project? Let's connect and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 card-gradient border-border/50">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                {contactInfo.map((info) => (
                  <Card key={info.title} className="p-6 card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group-hover:scale-105 transition-transform"
                    >
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card className="p-6 card-gradient border-border/50">
                <h3 className="text-xl font-semibold mb-4">Connect on Social</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.title}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.title}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability Status */}
              <Card className="p-6 card-gradient border-border/50 border-l-4 border-l-green-500">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-green-400">Available for Projects</h4>
                    <p className="text-muted-foreground text-sm">
                      Currently accepting new opportunities and collaborations
                    </p>
                  </div>
                </div>
              </Card>

              {/* Quick Response */}
              <Card className="p-6 card-gradient border-border/50">
                <h4 className="font-semibold mb-2">Quick Response</h4>
                <p className="text-muted-foreground text-sm">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to reach out via WhatsApp or phone.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;