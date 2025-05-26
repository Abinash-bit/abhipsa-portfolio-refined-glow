import { useEffect, useState } from "react";
import { ChevronDown, ExternalLink, Mail, Phone, MapPin, Code, Zap, Brain, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      company: "Larsen and Toubro",
      role: "Graduate Engineer Trainee",
      duration: "July 2024 – April 2025",
      description: "MEP Systems Design & Project Management",
      highlights: [
        "Utilised advanced CAD software to create detailed engineering drawings",
        "Designed MEP systems in AUTOCAD as per client requirements",
        "Monitored project progress against timelines and budgets",
        "Conducted site inspections for quality assurance"
      ]
    },
    {
      company: "Variable Energy Cyclotron Centre (VECC), Kolkata",
      role: "Summer Intern",
      duration: "June 2023 - July 2023",
      description: "PLC-Based Control Systems Development",
      highlights: [
        "Developed PLC-based control systems for industrial automation",
        "Used simulation tools (RSLogix 500 pro, SCADA)",
        "Hands-on experience with Siemens & Allen-Bradley hardware",
        "Worked on power generation, distribution and protection systems"
      ]
    },
    {
      company: "Salesforce",
      role: "Developer (Virtual Internship)",
      duration: "May 2023 - July 2023",
      description: "Cloud Platform Development",
      highlights: [
        "Mastered Salesforce fundamentals and organizational setup",
        "Developed expertise in Apex, LWC, and API integration",
        "Implemented process automation and security protocols"
      ]
    }
  ];

  const projects = [
    {
      title: "Remote Fault Monitoring System",
      description: "Transformer monitoring using Arduino & NodeMCU",
      tech: ["Arduino", "NodeMCU", "IoT", "Real-time Monitoring"],
      features: [
        "Real-time fault, oil level, temperature monitoring",
        "WhatsApp integration for alerts",
        "Local IP dashboard access",
        "User-friendly mobile app interface"
      ]
    },
    {
      title: "Amazon's User Segmentation",
      description: "K-means clustering for customer analysis",
      tech: ["Python", "Machine Learning", "Google Colab", "K-means"],
      features: [
        "600+ customer dataset analysis",
        "WCSS clustering model implementation",
        "User behavior pattern detection"
      ]
    },
    {
      title: "Zomato Review Analysis",
      description: "NLP-based sentiment classification",
      tech: ["Python", "NLP", "Kaggle", "Text Analysis"],
      features: [
        "1000+ review dataset processing",
        "Good/bad review classification",
        "Natural Language Processing implementation"
      ]
    }
  ];

  const skills = {
    "Programming": ["Python", "C++", "Apex"],
    "Engineering": ["AutoCAD", "MEP Systems", "PLC Programming", "SCADA"],
    "Data Science": ["Machine Learning", "NLP", "Google Colab"],
    "Tools": ["RSLogix 500 Pro", "Salesforce", "Arduino", "NodeMCU"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Abhipsa Mohapatra
          </div>
          <div className="hidden md:flex space-x-6">
            {["about", "experience", "projects", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-blue-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-10 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Electrical Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Automation • Control Systems • Machine Learning
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Bridging the gap between electrical engineering and modern technology through innovative solutions in automation, PLC systems, and data analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
              >
                Get In Touch
              </Button>
            </div>
            <div className="animate-bounce">
              <ChevronDown 
                className="mx-auto cursor-pointer" 
                size={32} 
                onClick={() => scrollToSection('about')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Electrical Engineering Excellence</h3>
              <p className="text-gray-300 mb-6">
                As an Electrical Engineering graduate with a CGPA of 8.7, I specialize in industrial automation, 
                control systems, and modern software development. My experience spans from traditional electrical 
                systems to cutting-edge machine learning applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <Zap className="mx-auto mb-2 text-blue-400" size={24} />
                  <p className="font-semibold">Automation</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <Settings className="mx-auto mb-2 text-purple-400" size={24} />
                  <p className="font-semibold">Control Systems</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <Code className="mx-auto mb-2 text-green-400" size={24} />
                  <p className="font-semibold">Programming</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <Brain className="mx-auto mb-2 text-pink-400" size={24} />
                  <p className="font-semibold">ML/AI</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-gray-300">B.Tech Electrical Engineering</p>
                <p className="text-blue-400">CGPA: 8.7</p>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2">Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>abhipsa102@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>7205186730</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-400">{exp.company}</CardTitle>
                      <CardDescription className="text-lg text-white mt-1">{exp.role}</CardDescription>
                      <p className="text-gray-400 mt-2">{exp.description}</p>
                    </div>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-400 group-hover:text-blue-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gray-700 text-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-center text-purple-400">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillList.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="border-gray-600 text-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in discussing automation projects, control systems, or innovative engineering solutions? 
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
              <Mail className="mr-2" size={16} />
              abhipsa102@gmail.com
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent">
              <Phone className="mr-2" size={16} />
              7205186730
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Abhipsa Mohapatra. Crafted with passion for engineering excellence.</p>
      </footer>
    </div>
  );
};

export default Index;
