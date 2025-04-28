
import React from 'react';
import { Mail, Github, Twitter, Linkedin, Globe, MapPin, Code, Download } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const AboutPage = () => {
  // Skills data
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"] },
    { category: "Other", items: ["UI/UX Design", "SEO", "Performance Optimization", "WebGL"] }
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="cyber-text">About Me</span>
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Software developer, UI/UX enthusiast, and cyberpunk aesthetics lover. Building digital experiences for the modern web.
          </p>
        </FadeIn>
        
        {/* Profile section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FadeIn delay={0.2}>
            <div className="cyber-card p-6 md:col-span-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full cyber-panel flex items-center justify-center mb-6 border-4 border-cyber-accent/30 overflow-hidden">
                  <Code className="w-20 h-20 text-cyber-accent" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2">CyberDev</h2>
                <p className="text-cyber-blue mb-2">Full Stack Developer</p>
                
                <div className="flex items-center text-sm text-gray-400 mb-6">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Digital Nomad</span>
                </div>
                
                {/* Social links */}
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:border-cyber-accent hover:text-cyber-accent">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:border-cyber-primary hover:text-cyber-primary">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue">
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="mt-8 w-full">
                  <a href="#contact" className="cyber-button block w-full text-center">
                    Contact Me
                  </a>
                </div>
                
                <div className="mt-4 w-full">
                  <a href="#" className="block w-full text-center border border-gray-600 px-6 py-2 rounded hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" /> Resume
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="cyber-card p-6 md:col-span-2">
              <h2 className="text-xl font-bold mb-4 cyber-text">Bio</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. With over 8 years of experience in web development, I've worked on everything from small business websites to complex enterprise applications.
                </p>
                <p>
                  My journey in tech started with a fascination for cyberpunk novels and sci-fi movies, which inspired me to learn how to code and build my own digital worlds. Today, I bring that same sense of wonder and creativity to every project I tackle.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or writing about my experiences on my blog. I believe in sharing knowledge and helping others grow in their technical journeys.
                </p>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4 cyber-text">Experience & Education</h2>
                <div className="relative border-l border-cyber-accent/30 pl-6 space-y-8 py-2">
                  <div className="relative">
                    <div className="absolute -left-[29px] w-5 h-5 rounded-full bg-cyber-dark border-2 border-cyber-accent"></div>
                    <h3 className="text-lg font-semibold">Senior Developer at FutureCode Inc.</h3>
                    <p className="text-cyber-blue mb-1">2023 - Present</p>
                    <p className="text-gray-400">Leading development of next-generation web applications with focus on performance and accessibility.</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[29px] w-5 h-5 rounded-full bg-cyber-dark border-2 border-cyber-accent"></div>
                    <h3 className="text-lg font-semibold">Frontend Developer at TechNova</h3>
                    <p className="text-cyber-blue mb-1">2020 - 2023</p>
                    <p className="text-gray-400">Developed responsive and interactive user interfaces for enterprise clients using React and TypeScript.</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[29px] w-5 h-5 rounded-full bg-cyber-dark border-2 border-cyber-accent"></div>
                    <h3 className="text-lg font-semibold">Computer Science, MS</h3>
                    <p className="text-cyber-blue mb-1">2018 - 2020</p>
                    <p className="text-gray-400">Focused on Human-Computer Interaction and Advanced Web Technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Skills section */}
        <FadeIn delay={0.4}>
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
              <span className="cyber-text">Skills & Technologies</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyber-blue">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={idx} className="px-3 py-1 rounded-full bg-cyber-dark border border-cyber-accent/30 text-gray-300">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
        
        {/* Contact section */}
        <FadeIn delay={0.5}>
          <section id="contact" className="cyber-card p-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
              <span className="cyber-text">Get In Touch</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Contact info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <p className="text-gray-400 mb-6">Have a project in mind or just want to chat? Reach out using the form or contact me directly.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-accent/20 p-2 rounded">
                    <Mail className="w-5 h-5 text-cyber-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:contact@example.com" className="text-cyber-blue hover:text-cyber-accent">contact@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-accent/20 p-2 rounded">
                    <Globe className="w-5 h-5 text-cyber-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Website</h4>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-accent">example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-accent/20 p-2 rounded">
                    <Github className="w-5 h-5 text-cyber-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">GitHub</h4>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-accent">github.com/cyberdev</a>
                  </div>
                </div>
              </div>
              
              {/* Contact form */}
              <div className="md:col-span-3">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="cyber-input w-full" 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="cyber-input w-full" 
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="cyber-input w-full" 
                      placeholder="What is this regarding?" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="cyber-input w-full" 
                      placeholder="Your message..." 
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="cyber-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
};

export default AboutPage;
