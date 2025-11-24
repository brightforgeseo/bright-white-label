import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { getBlogPosts } from '../services/contentfulService';
import { BlogPost, NavigationHandler } from '../types';

interface BlogListProps {
  onNavigate: NavigationHandler;
}

const BlogList: React.FC<BlogListProps> = ({ onNavigate }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getBlogPosts();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-black pt-44 pb-24">
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-brand-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
            AGENCY INTELLIGENCE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Insights for the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-fuchsia-400">Modern Agency Owner</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Tactical advice on scaling margins, white-label operations, and technical SEO. No fluff, just fulfillment strategy.
          </p>
        </div>

        {/* Content Grid */}
        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse">
                <div className="bg-zinc-900 h-64 rounded-2xl mb-4"></div>
                <div className="bg-zinc-900 h-8 w-3/4 rounded mb-2"></div>
                <div className="bg-zinc-900 h-4 w-1/2 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                onClick={() => onNavigate(`/blog/${post.slug}`)}
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Image Card */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-zinc-800 group-hover:border-brand-500/50 transition-colors">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs text-white font-medium">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3 font-mono">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-zinc-400 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-zinc-900 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                       <img src={post.author.avatar} className="w-6 h-6 rounded-full grayscale" alt={post.author.name} />
                       <span className="text-xs text-zinc-500">{post.author.name}</span>
                    </div>
                    <span className="text-brand-500 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
