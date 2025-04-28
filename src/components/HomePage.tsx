
import React from 'react';
import { ArrowRight, Code, FileText, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from './animations/FadeIn';

const HomePage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 cyber-grid">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 space-y-6 mb-10 md:mb-0">
              <FadeIn delay={0.1}>
                <h2 className="text-sm uppercase tracking-wider text-cyber-blue">Welcome to my digital space</h2>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="cyber-text animate-text-flicker">Cyber</span>
                  <span className="text-white">Dev</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <p className="text-lg text-gray-300 max-w-md">
                  A software architect navigating the digital frontier. Building futuristic web experiences with cutting-edge technology.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.7}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/projects" className="cyber-button inline-flex items-center">
                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link to="/blog" className="border border-gray-500 px-6 py-2 rounded hover:bg-white/5 transition-all duration-300 inline-flex items-center">
                    Read Blog <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-cyber-primary/20 to-cyber-blue/20 rounded-full blur-3xl absolute -z-10 animate-pulse"></div>
                <div className="w-64 h-64 md:w-96 md:h-96 border border-cyber-accent/20 rounded-full relative cyber-panel flex items-center justify-center">
                  <div className="text-8xl text-cyber-accent animate-pulse-glow">&lt;/&gt;</div>
                  {/* Abstract digital elements */}
                  <div className="absolute top-6 right-12 w-4 h-4 bg-cyber-blue rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 left-14 w-6 h-6 bg-cyber-primary rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyber-accent/20"></div>
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-cyber-accent/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
              <span className="cyber-text">What I Do</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.2}>
              <div className="cyber-card p-6 h-full">
                <Code className="w-12 h-12 text-cyber-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-gray-400">Creating responsive and interactive web applications with modern frameworks and cutting-edge technologies.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="cyber-card p-6 h-full">
                <FileText className="w-12 h-12 text-cyber-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">Technical Writing</h3>
                <p className="text-gray-400">Sharing insights, tutorials, and thoughts about technology and development processes.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <div className="cyber-card p-6 h-full">
                <Star className="w-12 h-12 text-cyber-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Open Source</h3>
                <p className="text-gray-400">Contributing to and maintaining open source projects that push the boundaries of what's possible.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Recent Projects Preview */}
      <section className="py-20 bg-cyber-black/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold">
                <span className="cyber-text">Recent Projects</span>
              </h2>
              <Link to="/projects" className="text-cyber-blue hover:text-cyber-accent flex items-center">
                View All <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <div className="cyber-card overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-cyber-dark to-cyber-dark/80 flex items-center justify-center border-b border-cyber-accent/20">
                  <Code className="w-16 h-16 text-cyber-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Alpha</h3>
                  <p className="text-gray-400 mb-4">A NextGen web application with AI integration and real-time data processing.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-cyber-accent/10 text-cyber-accent text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded">TypeScript</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="cyber-card overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-cyber-dark to-cyber-dark/80 flex items-center justify-center border-b border-cyber-accent/20">
                  <FileText className="w-16 h-16 text-cyber-blue group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Beta</h3>
                  <p className="text-gray-400 mb-4">An experimental UI library with cyberpunk-inspired components and animations.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-cyber-accent/10 text-cyber-accent text-xs rounded">UI/UX</span>
                    <span className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded">Animation</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold">
                <span className="cyber-text">Latest Articles</span>
              </h2>
              <Link to="/blog" className="text-cyber-blue hover:text-cyber-accent flex items-center">
                View All <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div className="cyber-card p-6 hover:transform hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-cyber-accent/20 text-cyber-accent text-xs px-2 py-1 rounded">Technology</div>
                  <span className="text-gray-500 text-sm ml-4">April 22, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-cyber-accent transition-colors">The Future of Web Development in the AI Era</h3>
                <p className="text-gray-400">Exploring how artificial intelligence is transforming the landscape of modern web development and what it means for developers.</p>
                <Link to="/blog/future-web-dev" className="mt-4 inline-block text-cyber-blue hover:text-cyber-accent">Read More &rarr;</Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="cyber-card p-6 hover:transform hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-cyber-blue/20 text-cyber-blue text-xs px-2 py-1 rounded">Design</div>
                  <span className="text-gray-500 text-sm ml-4">April 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-cyber-accent transition-colors">Cyberpunk Aesthetics in Modern UI Design</h3>
                <p className="text-gray-400">Breaking down the elements of cyberpunk visual language and how to effectively implement them in contemporary user interfaces.</p>
                <Link to="/blog/cyberpunk-ui" className="mt-4 inline-block text-cyber-blue hover:text-cyber-accent">Read More &rarr;</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-t from-cyber-dark/50 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              <span className="cyber-text">Let's Connect</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-lg mx-auto mb-10">
              Interested in collaborating or just want to say hi? Feel free to reach out.
            </p>
            <Link to="/about" className="cyber-button inline-flex items-center">
              Contact Me <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
