import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
          Partner with <span className="text-brand-500">Bright.</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
          Stop turning away work because you're at capacity. Apply to become a partner agency and start scaling your revenue today.
        </p>

        <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 text-left backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Your Name</label>
                  <input type="text" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-4 text-white focus:border-white focus:ring-0 transition-colors outline-none" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-zinc-400">Agency Email</label>
                   <input type="email" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-4 text-white focus:border-white focus:ring-0 transition-colors outline-none" placeholder="jane@agency.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Agency Website</label>
                  <input type="url" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-4 text-white focus:border-white focus:ring-0 transition-colors outline-none" placeholder="https://" />
              </div>

              <button type="button" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg py-5 rounded-lg transition-all transform hover:scale-[1.01] shadow-xl shadow-brand-900/20">
                Get Wholesale Pricing
              </button>
              
              <p className="text-center text-zinc-600 text-xs mt-4">
                We review applications within 24 hours. Strict confidentiality assured.
              </p>
            </form>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-zinc-500">
           <div className="hover:text-white transition-colors cursor-pointer">partners@brightwhitelabel.com</div>
           <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full hidden md:block"></div>
           <div className="hover:text-white transition-colors cursor-pointer">San Francisco, CA</div>
           <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full hidden md:block"></div>
           <div className="hover:text-white transition-colors cursor-pointer">+1 (888) SEO-SCALE</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;