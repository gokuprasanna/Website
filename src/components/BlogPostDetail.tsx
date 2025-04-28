
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, MessageCircle, Send } from 'lucide-react';
import FadeIn from './animations/FadeIn';

// Types for blog post and comments
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
};

type Comment = {
  id: number;
  author: string;
  content: string;
  date: string;
  replies?: Comment[];
};

// Sample blog posts data (same as in BlogPage.tsx)
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development in the AI Era",
    slug: "future-web-dev",
    excerpt: "Exploring how artificial intelligence is transforming the landscape of modern web development.",
    content: `
      <p>As we venture deeper into the 21st century, artificial intelligence is no longer just a concept from science fiction—it's becoming an integral part of our development workflow. AI-powered tools are changing how we write code, design interfaces, and debug applications.</p>
      
      <h2>Automated Code Generation</h2>
      <p>AI models like GitHub's Copilot and OpenAI's GPT-4 are already capable of generating functional code snippets from natural language descriptions. This is fundamentally changing the developer experience, allowing us to focus more on architecture and problem-solving rather than syntax and boilerplate.</p>
      
      <pre class="bg-cyber-dark/30 p-4 rounded-md my-6 overflow-auto">
// Example of AI-assisted code generation
function calculateOptimalPath(graph, start, end) {
  const visited = new Set();
  const distances = {};
  const previous = {};
  const queue = [];
  
  // Initialize distances
  for (let vertex in graph) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
    queue.push(vertex);
  }
  distances[start] = 0;
  
  while (queue.length > 0) {
    // Find vertex with minimum distance
    let minVertex = queue.reduce((min, vertex) => 
      distances[vertex] < distances[min] ? vertex : min, queue[0]);
      
    // Remove vertex from queue
    queue.splice(queue.indexOf(minVertex), 1);
    
    // If we've reached our destination, we're done
    if (minVertex === end) break;
    
    // For each neighbor of the current vertex
    for (let neighbor in graph[minVertex]) {
      let alt = distances[minVertex] + graph[minVertex][neighbor];
      if (alt < distances[neighbor]) {
        distances[neighbor] = alt;
        previous[neighbor] = minVertex;
      }
    }
  }
  
  // Build the path
  let path = [];
  let current = end;
  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }
  
  return path;
}
      </pre>
      
      <h2>Intelligent UI Generation</h2>
      <p>We're seeing the emergence of tools that can convert design mockups directly into working UI components. These systems analyze the visual elements and generate the corresponding HTML, CSS, and JavaScript code. This is not just about saving time; it's about creating a more collaborative environment between designers and developers.</p>
      
      <h2>Testing and Quality Assurance</h2>
      <p>AI is enhancing our testing capabilities by automatically generating test cases, identifying potential edge cases, and even predicting which parts of the codebase are most likely to contain bugs based on historical data. This leads to more robust applications with fewer defects making it to production.</p>
      
      <h2>The Role of the Developer in an AI-Assisted Future</h2>
      <p>As AI takes over more of the mechanical aspects of coding, developers will need to evolve their skill sets. Understanding how to effectively prompt AI systems, having a strong grasp of system architecture, and maintaining a critical eye for evaluating generated code will become crucial skills.</p>
      
      <p>While some fear that AI might replace developers, the more likely scenario is that it will augment their capabilities, allowing them to build more complex and sophisticated applications than ever before.</p>
      
      <h2>Conclusion</h2>
      <p>The integration of AI into web development is not a distant future prospect—it's happening right now. Developers who embrace these tools and adapt their workflows accordingly will be well-positioned to thrive in this new era. The future of web development is not about human versus machine, but about human and machine working together to create better software.</p>
    `,
    date: "April 22, 2025",
    author: "CyberDev",
    readTime: 8,
    tags: ["Technology", "AI", "Web Development"],
  },
  {
    id: 2,
    title: "Cyberpunk Aesthetics in Modern UI Design",
    slug: "cyberpunk-ui",
    excerpt: "Breaking down the elements of cyberpunk visual language and how to implement them in interfaces.",
    content: `
      <p>The cyberpunk aesthetic has seen a resurgence in recent years, influencing everything from fashion to film, and nowhere is this more evident than in UI design. With its neon colors, digital glitches, and high-tech/low-life contrast, cyberpunk visuals offer a unique approach to creating interfaces that feel both futuristic and rebellious.</p>
      
      <h2>Key Elements of Cyberpunk UI</h2>
      <ul>
        <li><strong>Neon Glows:</strong> Vivid blues, purples, and pinks that seem to illuminate the surrounding elements</li>
        <li><strong>Retro-Futurism:</strong> A blend of 80s retro tech aesthetics with futuristic elements</li>
        <li><strong>Digital Artifacts:</strong> Glitches, scanlines, and other digital imperfections that add a sense of reality</li>
        <li><strong>Typography:</strong> Monospaced fonts, broken text elements, and unconventional arrangements</li>
        <li><strong>Layered Information:</strong> Dense information displays with multiple layers of data</li>
      </ul>
      
      <h2>Implementing Cyberpunk Elements in Modern UIs</h2>
      <p>While a full cyberpunk aesthetic might be too intense for many commercial applications, we can incorporate elements of this style to create unique and engaging user experiences.</p>
      
      <h3>Color Palette</h3>
      <p>Start with a dark base (blacks, dark blues, or purples) and accent with bright neon colors. The contrast between the dark background and vibrant accents creates the characteristic cyberpunk glow effect.</p>
      
      <div class="grid grid-cols-5 gap-2 my-6">
        <div class="h-10 rounded" style="background-color: #0f0f12;"></div>
        <div class="h-10 rounded" style="background-color: #1A1F2C;"></div>
        <div class="h-10 rounded" style="background-color: #9b87f5;"></div>
        <div class="h-10 rounded" style="background-color: #1EAEDB;"></div>
        <div class="h-10 rounded" style="background-color: #8B5CF6;"></div>
      </div>
      
      <h3>Glassmorphism and Layers</h3>
      <p>Use transparent elements with backdrop filters to create depth. This technique gives the impression of high-tech interfaces while maintaining usability.</p>
      
      <h3>Animation and Interaction</h3>
      <p>Subtle glitch effects, scan lines, or flicker animations can add character to your UI. Use these sparingly and ensure they don't interfere with the usability of your interface.</p>
      
      <h3>Typography Choices</h3>
      <p>Monospaced fonts like JetBrains Mono, Space Mono, or VT323 can instantly add a tech feel. Consider using display fonts with distinctive characteristics for headers or special elements.</p>
      
      <h2>Case Study: Cyberpunk Elements in a Dashboard</h2>
      <p>Let's consider how we might apply cyberpunk aesthetics to a data dashboard without compromising usability:</p>
      
      <ul>
        <li>A dark interface with strategic neon accents to highlight important data</li>
        <li>Glowing borders around interactive elements</li>
        <li>Data visualizations with a technological edge—think holographic-style charts</li>
        <li>Subtle scan line animations in the background</li>
        <li>Terminal-style typography for data readouts</li>
      </ul>
      
      <h2>Balancing Aesthetics and Usability</h2>
      <p>The most successful implementations of cyberpunk UI strike a balance between visual impact and usability. Remember that while cyberpunk aesthetics can create a strong brand identity and user experience, they should never come at the expense of functionality.</p>
      
      <p>When used thoughtfully, cyberpunk design elements can create memorable interfaces that stand out in an increasingly homogenized digital landscape.</p>
    `,
    date: "April 15, 2025",
    author: "CyberDev",
    readTime: 6,
    tags: ["Design", "UI/UX", "Cyberpunk"],
  }
];

// Sample comments data
const commentsData: Record<string, Comment[]> = {
  "future-web-dev": [
    {
      id: 1,
      author: "NetRunner42",
      content: "Great insights on how AI is changing the development landscape. I've started using GitHub Copilot and it's already saving me hours each week!",
      date: "April 23, 2025",
      replies: [
        {
          id: 101,
          author: "CyberDev",
          content: "Thanks! Yes, those tools are game-changers. I'm curious to see how they evolve over the next few years.",
          date: "April 23, 2025"
        }
      ]
    },
    {
      id: 2,
      author: "QuantumCoder",
      content: "Do you think there's a risk of developers becoming too dependent on AI assistance? I worry about losing deeper understanding of fundamentals.",
      date: "April 24, 2025"
    }
  ],
  "cyberpunk-ui": [
    {
      id: 1,
      author: "NeonGlitch",
      content: "I've been using cyberpunk elements in my designs for years. It's great to see it getting mainstream recognition!",
      date: "April 16, 2025"
    }
  ]
};

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [commentText, setCommentText] = useState('');
  
  // Find the blog post matching the slug
  const post = blogPostsData.find(post => post.slug === slug);
  
  // Get comments for this post
  const comments = commentsData[slug || ''] || [];
  
  // Handle posting a new comment
  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (commentText.trim()) {
      alert(`Comment submitted: ${commentText}`);
      // In a real app, you would add the comment to your database
      setCommentText('');
    }
  };
  
  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="cyber-button inline-flex items-center">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          {/* Back link */}
          <div className="mb-6">
            <Link to="/blog" className="text-cyber-blue hover:text-cyber-accent flex items-center">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
            </Link>
          </div>
          
          {/* Post header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="bg-cyber-accent/10 text-cyber-accent text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-400 space-x-4 flex-wrap">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </FadeIn>
        
        {/* Post content */}
        <FadeIn delay={0.2}>
          <div className="cyber-card p-6 mb-10">
            <div className="prose prose-invert max-w-none prose-pre:bg-cyber-dark/50 prose-pre:border prose-pre:border-cyber-accent/20 prose-headings:text-cyber-blue">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </FadeIn>
        
        {/* Comments section */}
        <FadeIn delay={0.3}>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-2" />
              Comments
              <span className="ml-2 text-lg text-cyber-blue">({comments.length})</span>
            </h2>
            
            {/* Comment form */}
            <div className="cyber-card p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Leave a comment</h3>
              <form onSubmit={handlePostComment}>
                <div className="mb-4">
                  <textarea
                    className="cyber-input w-full h-32 resize-none"
                    placeholder="Share your thoughts..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cyber-button flex items-center">
                  Post Comment <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
            
            {/* Comments list */}
            {comments.length > 0 ? (
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="cyber-card p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-semibold text-cyber-blue">{comment.author}</div>
                      <div className="text-sm text-gray-500">{comment.date}</div>
                    </div>
                    <p className="text-gray-300 mb-4">{comment.content}</p>
                    
                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="ml-6 pl-4 border-l border-cyber-accent/20 space-y-4 mt-4">
                        {comment.replies.map((reply) => (
                          <div key={reply.id}>
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-semibold text-cyber-primary">{reply.author}</div>
                              <div className="text-xs text-gray-500">{reply.date}</div>
                            </div>
                            <p className="text-gray-400">{reply.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <button className="mt-3 text-sm text-cyber-blue hover:text-cyber-accent">Reply</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 cyber-card">
                <p className="text-gray-400">No comments yet. Be the first to comment!</p>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default BlogPostDetail;
