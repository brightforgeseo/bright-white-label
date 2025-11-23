import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    name: "David Ross",
    role: "Agency Owner",
    company: "GrowthSpike Digital",
    content: "Bright White Label allowed me to fire three unreliable freelancers and double my margins. The reporting is so good my clients think I hired a data scientist.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "CEO",
    company: "Apex Marketing",
    content: "I was drowning in fulfillment work. Partnering with Bright let me focus on sales. We scaled from 10 to 45 clients in a year without hiring a single SEO specialist.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "Founder",
    company: "Thorne Creative",
    content: "The link quality is actually legitimate. I've tried other white label vendors who used spammy sites. Bright gets placements on real sites that actually move the needle.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Trusted by 45+ Agencies</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl relative hover:bg-zinc-900 transition-colors">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-zinc-800" />
              
              <p className="text-zinc-300 mb-8 leading-relaxed relative z-10">"{item.content}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover grayscale hover:grayscale-0 transition-all ring-2 ring-zinc-800"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-zinc-500 font-medium">{item.role}, {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;