import React, { useState } from 'react';
import { Sparkles, Search, Loader2, Terminal, ChevronRight, Copy } from 'lucide-react';
import { generateKeywordStrategy } from '../services/geminiService';
import { KeywordStrategyResult, LoadingState } from '../types';

const AiTool: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [audience, setAudience] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<KeywordStrategyResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche || !audience) return;

    setStatus(LoadingState.LOADING);
    const data = await generateKeywordStrategy(niche, audience);
    
    if (data) {
      setResult(data);
      setStatus(LoadingState.SUCCESS);
    } else {
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="ai-tool" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:flex md:items-end md:justify-between">
          <div>
             <h2 className="text-3xl font-bold text-white flex items-center gap-3">
               <Terminal className="w-8 h-8 text-brand-500" />
               Keyword Intelligence_
             </h2>
             <p className="text-zinc-500 mt-2 font-mono text-sm">
               // POWERED BY GOOGLE GEMINI 2.5
             </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left: Input Console */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-2 text-xs text-zinc-600 font-mono">input_parameters.sh</div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-brand-400 uppercase tracking-wider">target_niche</label>
                  <input
                    type="text"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    placeholder="e.g. SaaS CRM"
                    className="w-full bg-black border border-zinc-800 rounded p-3 text-white font-mono text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder-zinc-700"
                    required
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-mono text-fuchsia-400 uppercase tracking-wider">audience_segment</label>
                  <input
                    type="text"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    placeholder="e.g. Startups"
                    className="w-full bg-black border border-zinc-800 rounded p-3 text-white font-mono text-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none transition-all placeholder-zinc-700"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === LoadingState.LOADING}
                  className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-3 rounded flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === LoadingState.LOADING ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                  RUN_STRATEGY
                </button>
              </form>
            </div>
          </div>

          {/* Right: Output Terminal */}
          <div className="lg:col-span-7">
             <div className="h-full min-h-[400px] bg-[#0d0d0d] border border-zinc-800 rounded-xl overflow-hidden flex flex-col">
                <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800 flex justify-between items-center">
                  <div className="text-xs text-zinc-500 font-mono">output_console</div>
                  {status === LoadingState.SUCCESS && <div className="text-[10px] text-green-500 font-mono bg-green-500/10 px-2 py-0.5 rounded">STATUS: 200 OK</div>}
                </div>

                <div className="p-6 font-mono text-sm overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                  {status === LoadingState.IDLE && (
                    <div className="h-full flex flex-col items-center justify-center text-zinc-700">
                      <Terminal className="w-12 h-12 mb-4 opacity-20" />
                      <p>Awaiting input stream...</p>
                    </div>
                  )}

                  {status === LoadingState.LOADING && (
                    <div className="space-y-2">
                      <p className="text-zinc-500"><span className="text-blue-500">➜</span> Initializing Gemini 2.5 agent...</p>
                      <p className="text-zinc-500"><span className="text-blue-500">➜</span> Analyzing SERP data...</p>
                      <p className="text-zinc-500 animate-pulse"><span className="text-blue-500">➜</span> Clustering keywords...</p>
                    </div>
                  )}

                  {status === LoadingState.ERROR && (
                    <div className="text-red-400">
                      <p>Error: Process failed.</p>
                      <p>Check API configuration.</p>
                    </div>
                  )}

                  {status === LoadingState.SUCCESS && result && (
                    <div className="space-y-8 animate-fade-in">
                      <div>
                        <span className="text-zinc-500">Subject:</span> <span className="text-white font-bold">"{result.topic}"</span>
                      </div>
                      
                      {result.strategy.map((cluster, idx) => (
                        <div key={idx} className="border-l-2 border-zinc-800 pl-4 hover:border-brand-500 transition-colors">
                          <h4 className="text-brand-400 font-bold mb-1 flex items-center gap-2">
                            <ChevronRight className="w-3 h-3" />
                            {cluster.clusterName}
                          </h4>
                          <div className="grid gap-2 mb-3">
                             <div className="text-xs text-zinc-500 uppercase">Intent: <span className="text-zinc-300">{cluster.searchIntent}</span></div>
                             <div className="flex flex-wrap gap-2">
                               {cluster.keywords.map((k, i) => (
                                 <span key={i} className="text-xs bg-zinc-900 text-zinc-300 px-2 py-1 rounded border border-zinc-800">"{k}"</span>
                               ))}
                             </div>
                          </div>
                          <div className="bg-zinc-900/50 p-3 rounded text-xs text-green-400 border border-zinc-800/50">
                             <span className="text-zinc-500 select-none">$ </span>
                             suggested_title: "{cluster.contentIdea}"
                          </div>
                        </div>
                      ))}
                      
                      <div className="text-zinc-500 pt-4 border-t border-zinc-900">
                        <span className="animate-pulse">_</span>
                      </div>
                    </div>
                  )}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiTool;