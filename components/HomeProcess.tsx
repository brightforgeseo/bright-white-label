import React from 'react';
import { Search, Target, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Integration",
    description: "We onboard your agency, sign NDAs, and get access to your client's GSC/GA4/CMS under your brand email."
  },
  {
    icon: Target,
    title: "The Plan",
    description: "We analyze the client site and produce a white-label strategy document for you to present for approval."
  },
  {
    icon: Rocket,
    title: "Fulfillment",
    description: "We execute the work (content, links, code). You simply forward our updates to the client."
  },
  {
    icon: BarChart,
    title: "Reporting",
    description: "At month's end, you get a polished, branded report proving the ROI. You invoice the client; we invoice you."
  }
];

const HomeProcess: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How we partner</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A seamless extension of your agency. We work in the background, you shine in the foreground.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-800 via-brand-900 to-zinc-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 group">
                <div className="bg-black border border-zinc-800 p-8 rounded-2xl hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
                  <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-colors text-zinc-400">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-zinc-600 font-mono text-sm">0{idx + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;