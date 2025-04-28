
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Star } from 'lucide-react';
import FadeIn from './animations/FadeIn';

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
};

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "CyberVault",
    description: "A secure password management system with end-to-end encryption and biometric authentication.",
    image: "",
    tags: ["React", "TypeScript", "Encryption", "Security"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    status: "completed"
  },
  {
    id: 2,
    title: "NeoGrid UI Library",
    description: "A futuristic UI component library with cyberpunk aesthetics for React applications.",
    image: "",
    tags: ["UI/UX", "React", "Animation", "Design System"],
    githubUrl: "https://github.com",
    featured: true,
    status: "completed"
  },
  {
    id: 3,
    title: "QuantumChat",
    description: "Real-time chat application with encryption and ephemeral messaging features.",
    image: "",
    tags: ["WebSockets", "Encryption", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    status: "in-progress"
  },
  {
    id: 4,
    title: "Neural Canvas",
    description: "An AI-powered drawing application that enhances sketches with machine learning.",
    image: "",
    tags: ["AI", "Canvas API", "TensorFlow.js"],
    githubUrl: "https://github.com",
    featured: false,
    status: "planned"
  },
  {
    id: 5,
    title: "SynthWave Audio Visualizer",
    description: "A retro-futuristic audio visualization tool with WebAudio API and 3D graphics.",
    image: "",
    tags: ["WebAudio", "Three.js", "GLSL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    status: "completed"
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'in-progress' | 'planned'>('all');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));
  
  // Filter projects based on status and tags
  const filteredProjects = projectsData.filter(project => {
    const statusMatch = filter === 'all' || project.status === filter;
    const tagMatch = !activeTag || project.tags.includes(activeTag);
    return statusMatch && tagMatch;
  });
  
  // Function to render the status badge
  const renderStatusBadge = (status: 'completed' | 'in-progress' | 'planned') => {
    switch(status) {
      case 'completed':
        return <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Completed</span>;
      case 'in-progress':
        return <span className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded">In Progress</span>;
      case 'planned':
        return <span className="px-2 py-1 bg-cyber-accent/10 text-cyber-accent text-xs rounded">Planned</span>;
    }
  };
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="cyber-text">Projects</span>
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Explore my portfolio of digital experiments, web applications, and open-source contributions—all with a cyberpunk twist.
          </p>
        </FadeIn>
        
        {/* Filters */}
        <div className="mb-12">
          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Status filter */}
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-md border transition-all ${filter === 'all' ? 'border-cyber-accent text-cyber-accent' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}
                >
                  All Projects
                </button>
                <button 
                  onClick={() => setFilter('completed')}
                  className={`px-4 py-2 rounded-md border transition-all ${filter === 'completed' ? 'border-cyber-accent text-cyber-accent' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}
                >
                  Completed
                </button>
                <button 
                  onClick={() => setFilter('in-progress')}
                  className={`px-4 py-2 rounded-md border transition-all ${filter === 'in-progress' ? 'border-cyber-accent text-cyber-accent' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}
                >
                  In Progress
                </button>
                <button 
                  onClick={() => setFilter('planned')}
                  className={`px-4 py-2 rounded-md border transition-all ${filter === 'planned' ? 'border-cyber-accent text-cyber-accent' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}
                >
                  Planned
                </button>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="mt-6">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Filter by Technology:</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    className={`px-2 py-1 rounded text-xs transition-all ${
                      activeTag === tag 
                        ? 'bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/50' 
                        : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-800'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * (index % 3 + 1)}>
              <div className={`cyber-card h-full ${project.featured ? 'border-cyber-accent/30' : ''}`}>
                <div className="h-40 bg-gradient-to-br from-cyber-dark to-cyber-dark/80 flex items-center justify-center border-b border-cyber-accent/20">
                  <Code className="w-12 h-12 text-cyber-accent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    {project.featured && (
                      <Star className="w-5 h-5 text-cyber-primary" />
                    )}
                  </div>
                  
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-800/70 text-gray-300 text-xs rounded border border-gray-700">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      {renderStatusBadge(project.status)}
                    </div>
                    
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyber-accent transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyber-blue transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No projects found with the current filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
