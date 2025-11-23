import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
             <img src="/logo.png" alt="Bright White Label" className="h-10 w-auto opacity-80" />
             <p className="text-zinc-600 text-sm font-mono border-l border-zinc-800 pl-4">
              © {new Date().getFullYear()} Bright White Label.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Twitter</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">LinkedIn</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Instagram</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;