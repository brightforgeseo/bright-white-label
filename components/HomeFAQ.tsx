import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Will you ever contact my clients?",
    a: "Never. We sign a strict Non-Disclosure Agreement (NDA) and Non-Compete. We are strictly a back-end fulfillment partner. Your clients will never know Bright White Label exists."
  },
  {
    q: "How does communication work?",
    a: "We communicate solely with you (the agency owner) or your account managers via Slack or Email. If you need us to be on a client call, we can join as a 'Technical Specialist' from your agency team."
  },
  {
    q: "What is the pricing model?",
    a: "We offer both wholesale packages (e.g., 'Gold Package' at a fixed cost) and à la carte pricing (e.g., $X per link, $Y per article). Our pricing is designed to leave you with a healthy 40-60% margin."
  },
  {
    q: "What if a client cancels?",
    a: "We operate on a month-to-month basis with no long-term lock-ins for agencies. If your client churns, you simply stop ordering for that account."
  }
];

const HomeFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Partner FAQs</h2>
        
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-white/10">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-white text-lg">{item.q}</span>
                {openIndex === idx ? <Minus className="w-5 h-5 text-brand-500" /> : <Plus className="w-5 h-5 text-zinc-500" />}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-white/5">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;