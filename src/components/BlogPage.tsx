
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Tag, User, Clock, MessageCircle } from 'lucide-react';
import FadeIn from './animations/FadeIn';

// Define types
type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: number;
  tags: string[];
  commentCount: number;
  featured: boolean;
};

// Sample blog posts data
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development in the AI Era",
    slug: "future-web-dev",
    excerpt: "Exploring how artificial intelligence is transforming the landscape of modern web development and what it means for developers.",
    content: "Full blog post content here...",
    date: "April 22, 2025",
    author: "CyberDev",
    readTime: 8,
    tags: ["Technology", "AI", "Web Development"],
    commentCount: 12,
    featured: true
  },
  {
    id: 2,
    title: "Cyberpunk Aesthetics in Modern UI Design",
    slug: "cyberpunk-ui",
    excerpt: "Breaking down the elements of cyberpunk visual language and how to effectively implement them in contemporary user interfaces.",
    content: "Full blog post content here...",
    date: "April 15, 2025",
    author: "CyberDev",
    readTime: 6,
    tags: ["Design", "UI/UX", "Cyberpunk"],
    commentCount: 8,
    featured: false
  },
  {
    id: 3,
    title: "Building Resilient Distributed Systems",
    slug: "resilient-systems",
    excerpt: "Learn how to architect systems that can gracefully handle failures and recover automatically.",
    content: "Full blog post content here...",
    date: "April 7, 2025",
    author: "CyberDev",
    readTime: 12,
    tags: ["Architecture", "Systems", "Resilience"],
    commentCount: 5,
    featured: false
  },
  {
    id: 4,
    title: "The Evolution of JavaScript Frameworks",
    slug: "js-frameworks",
    excerpt: "A look at how JavaScript frameworks have evolved over the years and what might be coming next.",
    content: "Full blog post content here...",
    date: "March 28, 2025",
    author: "CyberDev",
    readTime: 10,
    tags: ["JavaScript", "Frameworks", "Web Development"],
    commentCount: 15,
    featured: true
  },
  {
    id: 5,
    title: "Neural Networks Explained for Web Developers",
    slug: "neural-networks",
    excerpt: "A beginner-friendly introduction to neural networks with examples relevant to web development.",
    content: "Full blog post content here...",
    date: "March 20, 2025",
    author: "CyberDev",
    readTime: 9,
    tags: ["AI", "Machine Learning", "Neural Networks"],
    commentCount: 7,
    featured: false
  }
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(new Set(blogPostsData.flatMap(post => post.tags)));
  
  // Filter blog posts based on search term and selected tag
  const filteredPosts = blogPostsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });
  
  // Featured posts
  const featuredPosts = blogPostsData.filter(post => post.featured);
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="cyber-text">Blog</span>
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Thoughts, tutorials, and insights on web development, design, and the future of technology.
          </p>
        </FadeIn>
        
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <FadeIn delay={0.2}>
              <h2 className="text-xl font-semibold mb-6">Featured Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.slice(0, 2).map((post) => (
                  <div key={post.id} className="cyber-card p-6 border-cyber-accent/30">
                    <div className="mb-4 flex items-center space-x-2">
                      <span className="bg-cyber-accent/20 text-cyber-accent text-xs px-2 py-1 rounded">{post.tags[0]}</span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> {post.date}
                      </span>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold mb-3 hover:text-cyber-accent transition-colors">{post.title}</h3>
                    </Link>
                    
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime} min read</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        <span>{post.commentCount}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>
        )}
        
        {/* Search and filters */}
        <div className="mb-12">
          <FadeIn delay={0.3}>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="cyber-input pl-10 w-full"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Tag filter */}
              <div className="flex items-center space-x-2">
                <Tag className="w-5 h-5 text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-2 py-1 rounded text-xs transition-all ${
                      selectedTag === null 
                        ? 'bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/50' 
                        : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-800'
                    }`}
                  >
                    All
                  </button>
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`px-2 py-1 rounded text-xs transition-all ${
                        selectedTag === tag 
                          ? 'bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/50' 
                          : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:bg-gray-800'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Blog Posts List */}
        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <FadeIn key={post.id} delay={0.1 * (index % 4 + 1)}>
              <div className="cyber-card p-6 hover:transform hover:scale-[1.01] transition-all duration-300">
                <div className="flex items-center mb-4 flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <div 
                      key={tag} 
                      className="bg-gray-800/70 text-gray-300 text-xs px-2 py-1 rounded border border-gray-700 cursor-pointer"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </div>
                  ))}
                  <span className="text-gray-500 text-sm flex items-center ml-auto">
                    <Calendar className="w-3 h-3 mr-1" /> {post.date}
                  </span>
                </div>
                
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-cyber-accent transition-colors">{post.title}</h3>
                </Link>
                
                <p className="text-gray-400">{post.excerpt}</p>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime} min read</span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="text-cyber-blue hover:text-cyber-accent">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No blog posts found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
