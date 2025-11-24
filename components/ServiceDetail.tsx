import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight, Plus, Minus, Layers, Settings, FileCheck, HelpCircle } from 'lucide-react';
import { servicesData } from '../data/services';
import { NavigationHandler } from '../types';

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: NavigationHandler;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onNavigate }) => {
  const service = servicesData.find(s => s.id === serviceId);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) return <div>Service not found</div>;

  const colorMap = {
    brand: 'text-brand-500 bg-brand-500/10 border-brand-500/20',
    fuchsia: 'text-fuchsia-500 bg-fuchsia-500/10 border-fuchsia-500/20',
    cyan: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    emerald: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    orange: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    violet: 'text-violet-500 bg-violet-500/10 border-violet-500/20'
  };

  const borderMap = {
    brand: 'border-brand-500/30',
    fuchsia: 'border-fuchsia-500/30',
    cyan: 'border-cyan-500/30',
    emerald: 'border-emerald-500/30',
    orange: 'border-orange-500/30',
    violet: 'border-violet-500/30'
  };

  const glowMap = {
    brand: 'bg-brand-500',
    fuchsia: 'bg-fuchsia-500',
    cyan: 'bg-cyan-500',
    emerald: 'bg-emerald-500',
    orange: 'bg-orange-500',
    violet: 'bg-violet-500'
  };

  const activeColorClass = colorMap[service.color];
  const activeBorderClass = borderMap[service.color];
  const glowColorClass = glowMap[service.color];

  return (
    <div className="min-h-screen bg-black pt-44 pb-24 animate-fade-in relative overflow-hidden">
      
      {/* Ambient Background */}
      <div className="fixed top-0 left-0 w-full h-[800px] overflow-hidden pointer-events-none z-0">
         <div className={`absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] ${glowColorClass} opacity-[0.08] blur-[120px] rounded-full`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 text-sm font-mono group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </button>

        {/* Hero Header */}
        <div className="mb-20 max-w-4xl">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-8 border ${activeColorClass}`}>
            <service.icon className="w-3 h-3" />
            {service.title.toUpperCase()}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            {service.subtitle}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl font-light">
            {service.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN (MAIN CONTENT) */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Problem / Solution Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/30 border border-red-900/30 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Minus className="w-16 h-16 text-red-500" />
                </div>
                <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2 relative z-10">
                  Agency Challenge
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm relative z-10">{service.problem}</p>
              </div>
              <div className="bg-zinc-900/30 border border-green-900/30 p-8 rounded-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Plus className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2 relative z-10">
                  Bright Solution
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm relative z-10">{service.solution}</p>
              </div>
            </div>

            {/* Execution Process */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Layers className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white">Fulfillment Process</h3>
              </div>
              
              <div className="relative pl-8 border-l border-zinc-800 space-y-12">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Dot */}
                    <div className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-black ${glowColorClass}`}></div>
                    
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-zinc-500 font-mono text-sm">0{idx + 1}</span>
                      {step.title}
                    </h4>
                    <p className="text-zinc-400 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
               <div className="flex items-center gap-3 mb-6">
                <Settings className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white">Tools We Use</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {service.tools.map((tool, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

             {/* Deliverables */}
             <div>
               <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white">What You Receive</h3>
              </div>
              <div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl p-8">
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${activeColorClass.split(' ')[0]}`} />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
               <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white">Partner FAQ</h3>
              </div>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/20">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="font-semibold text-white pr-8">{faq.question}</span>
                      {openFaq === idx ? <Minus className="w-4 h-4 text-zinc-500 flex-shrink-0" /> : <Plus className="w-4 h-4 text-zinc-500 flex-shrink-0" />}
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 mt-2">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (SIDEBAR) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Stats Card */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl sticky top-24">
              <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-wider mb-6">Partner Metrics</h4>
              <div className="space-y-6 mb-8">
                {service.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-end justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                     <span className="text-zinc-400 text-sm">{stat.label}</span>
                     <span className="text-2xl font-bold text-white font-mono">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className={`rounded-2xl p-1 ${glowColorClass}`}>
                <div className="bg-black rounded-xl p-6 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">Need to scale?</h3>
                  <p className="text-zinc-400 text-xs mb-4">
                    Offload this service to us and focus on client acquisition.
                  </p>
                  <button 
                      onClick={() => onNavigate('/#contact')}
                      className={`w-full ${glowColorClass} text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm`}
                  >
                    Get Wholesale Rate <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;