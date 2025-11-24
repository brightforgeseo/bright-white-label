import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown, Layout, Search, PenTool, Globe, BarChart3, ArrowRight, Code2 } from 'lucide-react';
import { NavigationHandler } from '../types';

interface HeaderProps {
  onNavigate: NavigationHandler;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close dropdown on scroll to avoid visual clutter
  useEffect(() => {
    const handleScroll = () => setActiveDropdown(null);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const services = [
    {
      title: "Technical Audits",
      description: "Unbranded site architecture reports",
      icon: Code2,
      id: "technical-seo"
    },
    {
      title: "Content Production",
      description: "Ghostwritten expert articles",
      icon: Layout,
      id: "content-strategy"
    },
    {
      title: "Link Acquisition",
      description: "Safe, white-hat outreach",
      icon: Globe,
      id: "link-building"
    },
    {
      title: "Local Fulfillment",
      description: "GMB management for clients",
      icon: Search,
      id: "local-dominance"
    },
    {
      title: "Creative Assets",
      description: "Infographics you can resell",
      icon: PenTool,
      id: "creative-content"
    },
    {
      title: "Client Reporting",
      description: "Whitelabel Data Studio",
      icon: BarChart3,
      id: "analytics-cro"
    }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
        <div 
          className="relative glass rounded-3xl px-2 py-2 md:px-3 md:py-2.5 flex items-center justify-between gap-4 md:gap-8 shadow-2xl shadow-black/20 backdrop-blur-xl bg-dark-900/80 border border-white/10 w-full max-w-5xl transition-all hover:border-white/20"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          
          {/* Logo */}
          <button onClick={() => handleNav('/')} className="flex items-center pl-2 md:pl-4 group z-20 relative transition-transform hover:scale-105">
            <img
              src="/logo.png"
              alt="Bright White Label"
              className="h-32 w-auto object-contain drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-dark-800/50 rounded-full px-2 py-1.5 border border-white/5 relative z-20">
            
            {/* Services Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
            >
              <button 
                className={`flex items-center gap-1 text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                  activeDropdown === 'services' 
                    ? 'text-white bg-white/10 shadow-inner' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Agency Solutions
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <button onClick={() => handleNav('/#ai-tool')} className="text-sm text-zinc-400 hover:text-white px-5 py-2 rounded-full transition-all hover:bg-white/5">
              Strategy Gen
            </button>
            <button onClick={() => handleNav('/blog')} className="text-sm text-zinc-400 hover:text-white px-5 py-2 rounded-full transition-all hover:bg-white/5">
              Insights
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 pr-1 z-20 relative">
             <button 
              onClick={() => handleNav('/#contact')}
              className="hidden md:flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Partner With Us
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* MEGA MENU CONTAINER */}
          <div 
            className={`absolute top-full left-0 right-0 pt-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
              activeDropdown === 'services' 
                ? 'opacity-100 translate-y-0 visible' 
                : 'opacity-0 -translate-y-4 invisible pointer-events-none'
            }`}
          >
            <div className="bg-[#09090b] backdrop-blur-3xl border border-white/10 rounded-3xl p-1 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
              
              <div className="relative bg-zinc-900/40 rounded-[20px] p-6 flex gap-8">
                
                {/* Column 1: Featured / Intro */}
                <div className="w-1/3 bg-gradient-to-br from-brand-900/50 to-zinc-900 rounded-2xl p-6 border border-white/5 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl group-hover:bg-brand-500/30 transition-all"></div>
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-mono mb-4 border border-brand-500/20">
                      <Zap className="w-3 h-3" />
                      WHOLESALE SEO
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">We fulfill. You profit.</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Scale your agency without hiring more overhead. We are your invisible back-office team.
                    </p>
                  </div>
                  
                  <button onClick={() => handleNav('/#contact')} className="mt-8 group/link inline-flex items-center gap-2 text-white text-sm font-bold hover:text-brand-300 transition-colors">
                    Get Pricing
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Column 2: Grid of Services */}
                <div className="w-2/3 grid grid-cols-2 gap-2">
                  {services.map((service, idx) => (
                    <button 
                      key={idx}
                      onClick={() => handleNav(`/service/${service.id}`)}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 text-left w-full"
                    >
                      <div className="mt-1 p-2.5 rounded-xl bg-black/50 border border-white/5 group-hover:bg-brand-500/20 group-hover:border-brand-500/20 group-hover:text-brand-300 text-zinc-500 transition-all duration-300">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-zinc-200 font-bold text-sm mb-1 group-hover:text-white">{service.title}</div>
                        <div className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-400">{service.description}</div>
                      </div>
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-6 md:hidden animate-fade-in">
          <div className="flex flex-col space-y-6">
             <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Solutions</div>
            <button onClick={() => handleNav('/')} className="text-3xl font-bold text-zinc-300 hover:text-white text-left">Overview</button>
            <button onClick={() => handleNav('/#ai-tool')} className="text-3xl font-bold text-zinc-300 hover:text-white text-left">AI Strategy</button>
            <button onClick={() => handleNav('/blog')} className="text-3xl font-bold text-zinc-300 hover:text-white text-left">Insights</button>
            
            <div className="h-px bg-zinc-800 my-4"></div>
            
            <div className="grid grid-cols-2 gap-4">
               {services.map(s => (
                 <button key={s.id} onClick={() => handleNav(`/service/${s.id}`)} className="text-zinc-400 hover:text-white text-left text-sm py-2">
                   {s.title}
                 </button>
               ))}
            </div>

            <div className="h-px bg-zinc-800 my-4"></div>
            <button
              onClick={() => handleNav('/#contact')}
              className="block w-full bg-white text-black text-center py-4 rounded-xl font-bold text-lg"
            >
              Apply to Partner
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;