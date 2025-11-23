import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { getBlogPostBySlug } from '../services/contentfulService';
import { BlogPost as BlogPostType, NavigationHandler } from '../types';

interface BlogPostProps {
  slug: string;
  onNavigate: NavigationHandler;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug, onNavigate }) => {
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const data = await getBlogPostBySlug(slug);
      if (data) setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
       <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
        <button onClick={() => onNavigate('/blog')} className="text-brand-400 hover:text-white">Back to Blog</button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black pt-32 pb-24 relative">
      {/* ProgressBar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-900 z-50">
        {/* Simple scroll progress implementation could go here */}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <button 
          onClick={() => onNavigate('/blog')}
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 text-sm font-mono group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </button>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-zinc-500 mb-6">
            <span className="bg-brand-500/10 text-brand-400 px-3 py-1 rounded-full border border-brand-500/20">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-y border-zinc-800 py-6">
            <div className="flex items-center gap-4">
              <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border border-zinc-700" />
              <div>
                <div className="text-white font-bold">{post.author.name}</div>
                <div className="text-zinc-500 text-sm">{post.author.role}</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><Twitter className="w-4 h-4" /></button>
              <button className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><Linkedin className="w-4 h-4" /></button>
              <button className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><LinkIcon className="w-4 h-4" /></button>
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <div className="rounded-3xl overflow-hidden mb-16 border border-zinc-800 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <img src={post.coverImage} alt={post.title} className="w-full aspect-video object-cover" />
        </div>

        {/* Layout with Sidebar */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-400 prose-img:rounded-xl">
              <ReactMarkdown 
                 components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-brand-500 pl-4" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-bold text-zinc-100 mt-8 mb-4" {...props} />,
                    p: ({node, ...props}) => <p className="text-zinc-400 leading-relaxed mb-6" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 mb-6 text-zinc-400" {...props} />,
                    li: ({node, ...props}) => <li className="pl-2" {...props} />,
                    strong: ({node, ...props}) => <strong className="text-white font-bold" {...props} />,
                 }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
             <div className="sticky top-32 space-y-8">
               
               {/* CTA Card */}
               <div className="bg-gradient-to-br from-brand-900/50 to-zinc-900 border border-brand-500/20 rounded-2xl p-6 text-center">
                 <h3 className="text-white font-bold text-lg mb-2">Scale Your Agency</h3>
                 <p className="text-zinc-400 text-sm mb-6">Stop trading time for money. Get our partner pricing guide.</p>
                 <button 
                  onClick={() => onNavigate('/#contact')}
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                 >
                   Apply for Partnership
                 </button>
               </div>

               {/* Related Topics */}
               <div>
                 <h4 className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-4">Related Topics</h4>
                 <div className="flex flex-wrap gap-2">
                   {['Scalability', 'Pricing', 'Sales', 'Operations'].map((tag) => (
                     <span key={tag} className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>

             </div>
          </div>

        </div>
      </div>
    </article>
  );
};

export default BlogPost;
