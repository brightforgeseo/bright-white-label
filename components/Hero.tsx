import React from 'react';
import { ArrowDownRight, Check, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Ambient Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[128px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-300 text-sm font-mono mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Accepting New Agency Partners
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9] max-w-5xl">
            Scale your agency, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-fuchsia-400 to-white"> not your payroll.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
            The invisible <strong>White Label SEO Reseller</strong> partner for ambitious marketing agencies. We deliver premium <strong>Wholesale SEO Fulfillment</strong>—rankings, content, and links—while you take the credit.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#ai-tool"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-brand-200 hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              Generate Strategy
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm"
            >
              See Partner Pricing
              <ArrowDownRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 md:mt-32 w-full max-w-4xl border-t border-white/5 pt-10">
             {[
               { label: 'Agency Partners', value: '45+' },
               { label: 'Campaigns Managed', value: '1,200+' },
               { label: 'Client Retention', value: '96%' },
               { label: 'Hours Saved/Mo', value: '40,000+' },
             ].map((stat, i) => (
               <div key={i} className="text-left">
                 <p className="text-2xl md:text-4xl font-bold text-white mb-1 font-mono tracking-tight">{stat.value}</p>
                 <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider font-medium">{stat.label}</p>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;