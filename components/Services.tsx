import React from 'react';
import { Code2, Layout, Globe, Search, PenTool, BarChart3, ArrowUpRight } from 'lucide-react';
import { NavigationHandler } from '../types';

interface ServicesProps {
  onNavigate: NavigationHandler;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background decorative glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Your invisible <br />
              <span className="text-brand-500">fulfillment team.</span>
            </h2>
            <p className="text-zinc-400 max-w-md text-lg">
              Full-service <strong>Private Label SEO</strong> fulfillment executed under your brand. We do the work, you own the client relationship. The ultimate SEO Reseller program.
            </p>
          </div>
          
          <div className="hidden md:block">
             <button onClick={() => onNavigate('/#contact')} className="text-white hover:text-brand-400 flex items-center gap-2 transition-colors font-medium">
                View partner capabilities <ArrowUpRight className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(280px,auto)]">
          
          {/* 1. Technical SEO (Large, Top Left, Col Span 2) */}
          <button 
            onClick={() => onNavigate('/service/technical-seo')}
            className="md:col-span-2 group relative glass rounded-3xl p-8 overflow-hidden transition-all hover:border-brand-500/30 text-left w-full"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
               <Code2 className="w-48 h-48 text-white" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="bg-brand-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-400 border border-brand-500/20">
                <Code2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Technical Audits & Fixes</h3>
                <p className="text-zinc-400 max-w-lg leading-relaxed">
                  Sell high-ticket technical audits without needing a dev team. We crawl, analyze, and optimize your client's infrastructure. We provide white-label PDF reports and direct dev implementation.
                </p>
              </div>
            </div>
          </button>

          {/* 2. Content Strategy (Tall, Top Right, Row Span 2) */}
          <button 
            onClick={() => onNavigate('/service/content-strategy')}
            className="md:row-span-2 group relative glass rounded-3xl p-8 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition-all border-zinc-800/50 hover:border-fuchsia-500/30 text-left w-full"
          >
            <div className="h-full flex flex-col">
               <div className="bg-fuchsia-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-fuchsia-400 border border-fuchsia-500/20">
                  <Layout className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Ghostwritten Content</h3>
               <p className="text-zinc-400 mb-8 leading-relaxed">
                 Scale your content production effortlessly. Our team researches, outlines, and writes SEO-optimized articles that match your client's tone of voice perfectly. Delivered ready to publish.
               </p>
               
               {/* Abstract visualization of content blocks */}
               <div className="mt-auto space-y-3 opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-500"></div>
                    <div className="h-2 bg-zinc-600 rounded-full w-full"></div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-500/50"></div>
                    <div className="h-2 bg-zinc-700 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-500/30"></div>
                    <div className="h-2 bg-zinc-800 rounded-full w-1/2"></div>
                  </div>
               </div>
            </div>
          </button>

          {/* 3. Link Building (Standard) */}
          <button 
            onClick={() => onNavigate('/service/link-building')}
            className="group glass rounded-3xl p-8 hover:bg-white/5 transition-all border-zinc-800/50 hover:border-cyan-500/30 flex flex-col justify-between text-left w-full"
          >
             <div>
               <div className="bg-cyan-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-cyan-400 border border-cyan-500/20">
                  <Globe className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Safe Link Acquisition</h3>
               <p className="text-sm text-zinc-400 leading-relaxed">
                 Protect your clients from penalties. We secure placements on real business sites—no PBNs, no link farms, just clean authority.
               </p>
             </div>
          </button>

          {/* 4. Local Dominance (Standard) */}
          <button 
            onClick={() => onNavigate('/service/local-dominance')}
            className="group glass rounded-3xl p-8 hover:bg-white/5 transition-all border-zinc-800/50 hover:border-emerald-500/30 flex flex-col justify-between text-left w-full"
          >
             <div>
               <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-emerald-400 border border-emerald-500/20">
                  <Search className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Local SEO Fulfillment</h3>
               <p className="text-sm text-zinc-400 leading-relaxed">
                 We manage GMB profiles, citations, and reviews for your multi-location clients. You get the credit for the Map Pack rankings.
               </p>
             </div>
          </button>

          {/* 5. Creative Content (Standard) */}
          <button 
            onClick={() => onNavigate('/service/creative-content')}
            className="group glass rounded-3xl p-8 hover:bg-white/5 transition-all border-zinc-800/50 hover:border-orange-500/30 flex flex-col justify-between text-left w-full"
          >
             <div>
               <div className="bg-orange-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-orange-400 border border-orange-500/20">
                  <PenTool className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Resellable Assets</h3>
               <p className="text-sm text-zinc-400 leading-relaxed">
                 Infographics and whitepapers produced under your agency's brand. Upsell high-value creative work without hiring designers.
               </p>
             </div>
          </button>

          {/* 6. Analytics & CRO (Wide, Col Span 2) */}
          <button 
            onClick={() => onNavigate('/service/analytics-cro')}
            className="md:col-span-2 group glass rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center gap-8 hover:bg-white/5 transition-all border-zinc-800/50 hover:border-violet-500/30 text-left w-full"
          >
             <div className="flex-1">
               <div className="bg-violet-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-violet-400 border border-violet-500/20">
                  <BarChart3 className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">White-Label Reporting</h3>
               <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                 Stop spending hours on monthly reports. We provide automated, unbranded Looker Studio dashboards that show your clients exactly how much money you made them.
               </p>
             </div>
             
             {/* Mini Chart Visualization */}
             <div className="hidden md:flex gap-2 items-end h-24 w-48 opacity-60 pr-4">
                <div className="w-full bg-zinc-800 h-[30%] rounded-t-sm group-hover:bg-violet-500/20 transition-colors"></div>
                <div className="w-full bg-zinc-800 h-[50%] rounded-t-sm group-hover:bg-violet-500/30 transition-colors delay-75"></div>
                <div className="w-full bg-zinc-800 h-[40%] rounded-t-sm group-hover:bg-violet-500/40 transition-colors delay-100"></div>
                <div className="w-full bg-zinc-800 h-[70%] rounded-t-sm group-hover:bg-violet-500/60 transition-colors delay-150"></div>
                <div className="w-full bg-brand-500 h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(139,92,246,0.6)] relative">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-brand-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">+240%</div>
                </div>
             </div>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Services;