import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Check, Clock, User } from 'lucide-react';

const App = () => {
  // Load the Leadshook script on component mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://axe-revenue.leadshook.io/s/js_embed";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-blue-900 uppercase">The Aussie Daily</span>
          </div>
          <div className="hidden sm:block">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase rounded-sm">
              Advertorial
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-8 pb-16 px-4">
        <div className="article-container rounded-lg overflow-hidden">
          
          {/* Above the Fold */}
          <header className="p-8 sm:p-12 pb-4 text-center sm:text-left">
            <h1 className="serif-text text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              How Australians 18 - 70 Can Qualify For Up To $1.5M¹ In Life Insurance (Depending On Your Age)
            </h1>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start text-sm text-gray-600 space-x-4 border-y border-gray-100 py-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-gray-400" />
                <span>30 Second Read</span>
              </div>
              <div className="flex items-center border-l border-gray-200 pl-4">
                <User className="w-4 h-4 mr-1 text-gray-400" />
                <span>By Frank Thompson</span>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <div className="px-8 sm:px-12 mb-8">
            <a href="https://ibb.co/GfqXCfSs" target="_blank" rel="noopener noreferrer" className="block group transition-all duration-300">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white group-hover:shadow-xl group-hover:border-blue-200 transition-all">
                <img 
                  src="https://i.ibb.co/JW9NrWJx/1766032019785-r67ft12gz9o.png" 
                  alt="Australian couple enjoying peace of mind" 
                  className="w-full h-full block object-cover mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center sm:text-left">
                  <p className="text-white serif-text italic text-lg sm:text-xl max-w-2xl leading-snug drop-shadow-md">
                    "I realized how simple it could be for Aussies like us to get peace of mind for our families." — Frank Thompson
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Body Text */}
          <article className="px-8 sm:px-12 text-gray-900 leading-relaxed text-lg serif-text pb-8">
            <p className="mb-6">
              I’ll be honest, I never really liked thinking about life insurance. Like most Aussies my age, I just assumed it was either too expensive or too much of a headache to set up. But as I’ve gotten older, and started thinking more about what I’d leave behind for my family, my perspective changed.
            </p>
            <p className="mb-6">
              Last month, I stumbled across something that caught my eye. It wasn't the usual jargon-heavy bank ad. It was simple. I found out that for many of us, getting covered doesn't have to involve hours of paperwork or invasive medicals - just a few health and lifestyle questions.
            </p>
            <p className="mb-6">
              In my opinion, the biggest hurdle for people is just not knowing where to start. I found a way to get covered in a way that made sense. It turns out coverage can be surprisingly affordable if you know where to look.
            </p>
            <p className="mb-6 font-bold text-blue-900 border-l-4 border-blue-600 pl-4 py-1 italic bg-blue-50/50 font-sans">
              Plans can start from $1.97* per fortnight, depending on your age and circumstances.
            </p>
            <p className="mb-8 font-sans text-gray-800">
              My experience showed me that peace of mind is worth more than the few minutes it takes to request a free quote. It’s about making sure the people you love are taken care of, no matter what happens.
            </p>

            {/* Bullet Points Section */}
            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
              <h3 className="font-sans text-xl font-bold mb-6 text-gray-900 uppercase tracking-wide border-b border-gray-200 pb-2">Why I used it:</h3>
              <ul className="space-y-4">
                {[
                  "Plans can start from $1.97* per fortnight, depending on your age and circumstances.",
                  "Coverage available up to $1.5 million¹ depending on your age",
                  "You can get paid out earlier if diagnosed as terminally ill²",
                  "A simple process to request a quote that takes 60 seconds"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start font-sans text-base">
                    <div className="mt-1 bg-green-500 rounded-full p-0.5 mr-3 flex-shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quiz Module Embed */}
            <div id="quiz-anchor" className="bg-white border-4 border-blue-600 rounded-2xl p-4 sm:p-6 font-sans shadow-2xl overflow-hidden block">
              {/* Header */}
              <div className="text-center mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1 uppercase tracking-tight">Request Your Free Quote In 60 Seconds</h2>
                <p className="text-gray-500 text-sm italic">"See what you qualify for"</p>
              </div>

              {/* Leadshook Container */}
              <div 
                className="quiz-container w-full" 
                style={{ textAlign: 'center', minHeight: '350px', display: 'block' }} 
                data-quiz="N6cQEY4FW1p9wp2n0UAJJ1w1tPpbMzoIOTZ0ryuA" 
                data-version="s" 
                data-offset="0" 
                data-autoscroll="no"
              >
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Updated Footer with all text centered */}
      <footer className="bg-white border-t border-gray-200 pt-12 pb-16 px-6 text-gray-500 text-[11px] leading-relaxed text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-bold text-gray-600 mb-6">
            © 2025 Smart Cover Official - All Rights Reserved
          </p>
          
          <p>Ad, not a real testimonial</p>
          
          <p>
            *Your actual premium may be different and will depend on your age, gender, smoking status and chosen benefit amount and answers to the underwriting questions as part of your application
          </p>
          
          <p>
            1 From $100,000 up to $1,500,000 of cover available (depending on your age). The benefit amount will not be paid if you die or are diagnosed with a Terminal Illness² as a result of an intentional self-inflicted injury or attempted suicide that occurred before the policy commencement date or within the first 13 months of the policy commencement date. Refer to the Product Disclosure Statement for full details.
          </p>
          
          <p>
            2 Terminal Illness is as defined in the Product Disclosure Statement. Upon payment of a Terminal Illness claim, the policy and cover will end.
          </p>
          
          <p className="pt-6 border-t border-gray-100">
            Smart Cover is a trading name of AXE REVENUE LIMITED. We are not a Life Insurance company and we do not provide Life Insurance cover. AXE REVENUE LIMITED runs a campaign to generate life insurance leads for Direct Cover. Direct Cover is a trading name of Neilson Financial Services Pty Ltd ABN 52 668 314 896, AFSL 552284. Direct Cover products are issued and managed by Direct Cover as agent of the insurer Hallmark Life Insurance Company Ltd ABN 87 008 446 884, AFSL 243469 (Hallmark Life), who underwrites the Direct Cover products. Hallmark Life is part of the St Andrew's Insurance Group. All information and advice provided is only general in nature and it does not consider your objectives, financial situation, or needs. It is important that you make your own decision on whether a product is suitable for you and to seek appropriate independent financial advice. Before making any decisions regarding a Direct Cover product, you should consider the relevant Product Disclosure Statement (PDS), Target Market Determination (TMD) and Financial Services Guide (FSG).
          </p>
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}