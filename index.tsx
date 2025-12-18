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
            <span className="text-2xl font-bold tracking-tighter text-blue-900 uppercase">Aussie Finance Daily</span>
          </div>
          <div className="hidden sm:block">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase rounded-sm">
              Special Consumer Report
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-8 pb-16 px-4">
        <div className="article-container rounded-lg">
          
          {/* Above the Fold */}
          <header className="p-8 sm:p-12 pb-6">
            <h1 className="serif-text text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              How Australians 18 - 70 Can Qualify Up To $1.5M¹ In Life Insurance (Depending On Your Age)
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-600 space-x-4 border-y border-gray-100 py-4">
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

          {/* Hero Image - High quality, safe image of an Australian couple in their 50s/60s */}
          <div className="px-8 sm:px-12 mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop" 
                alt="Australian couple in their 60s enjoying a peaceful walk outdoors" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm italic">"Protecting the future of Australian families nationwide." — Frank Thompson</p>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <article className="px-8 sm:px-12 text-gray-800 leading-relaxed text-lg serif-text pb-8">
            <p className="mb-6">
              I’ll be honest, I never really liked thinking about life insurance. Like most Aussies my age, I just assumed it was either too expensive or too much of a headache to set up. But as I’ve gotten older, and started thinking more about what I’d leave behind for my family, my perspective changed.
            </p>
            <p className="mb-6">
              Last month, I stumbled across something that caught my eye. It wasn't the usual jargon-heavy bank ad. It was simple. I found out that for many of us, getting covered doesn't have to involve hours of paperwork or invasive medicals.
            </p>
            <p className="mb-6">
              In my opinion, the biggest hurdle for people is just not knowing where to start. I found a way to compare options that actually made sense. It turns out, coverage can be surprisingly affordable if you know where to look.
            </p>
            <p className="mb-6 font-bold text-blue-900">
              Plans can start from $1.97* per fortnight, depending on your age and circumstances.
            </p>
            <p className="mb-8">
              My experience showed me that peace of mind is worth more than the few minutes it takes to request a free quote. It’s about making sure the people you love are taken care of, no matter what happens.
            </p>

            {/* Bullet Points Section */}
            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
              <h3 className="font-sans text-xl font-bold mb-6 text-gray-900 uppercase tracking-wide border-b border-gray-200 pb-2">Why I used it:</h3>
              <ul className="space-y-4">
                {[
                  "Plans can start from $1.97* per fortnight, depending on your age and circumstances.",
                  "Coverage available up to $1.5 million¹",
                  "Payouts if you are diagnosed as terminally ill²",
                  "Quick and easy online process with no complex medical exams for most people.",
                  "A simple 60-second request for your free quote."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start font-sans text-base">
                    <div className="mt-1 bg-green-500 rounded-full p-0.5 mr-3 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quiz Module Embed */}
            <div className="bg-white border-4 border-blue-600 rounded-2xl p-4 sm:p-6 font-sans shadow-2xl overflow-hidden block">
              {/* Header */}
              <div className="text-center mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-1 uppercase tracking-tight">Request A Free Quote</h2>
                <p className="text-gray-500 text-sm">Get started in less than 60 seconds.</p>
              </div>

              {/* Leadshook Container */}
              <div 
                className="quiz-container w-full" 
                style={{ textAlign: 'center', minHeight: '350px', display: 'block' }} 
                data-quiz="N6cQEY4FW1p9wp2n0UAJJ1w1tPpbMzoIOTZ0ryuA" 
                data-version="s" 
                data-offset="0" 
                data-autoscroll="yes"
              >
              </div>

              {/* Security Footer */}
              <div className="text-center mt-4 border-t border-gray-50 pt-4">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Your information is safe and secure.</p>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-12 pb-8 px-6 text-gray-500 text-[11px] leading-tight">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 text-center font-bold uppercase tracking-widest text-gray-400">Legal Disclaimer</p>
          <div className="space-y-4">
            <p>
              Ad, not a real testimonial.
            </p>
            <p>
              * For a female 18-year-old non-smoker with $100,000 of cover, in their first year accepted at standard rates.
            </p>
            <p>
              ¹ From $100,000 up to $1,500,000 of cover available. T&Cs apply.
            </p>
            <p>
              ² Terminal Illness is as defined in the PDS. T&Cs apply.
            </p>
            <p>
              General information only. Issuer: Hallmark Life Insurance Company Ltd AFSL 243469. Consider the PDS & TMD at directcover.com.au before deciding. T&Cs apply.
            </p>
            <p className="pt-4 border-t border-gray-100 text-center">
              &copy; {new Date().getFullYear()} Aussie Finance Daily. All Rights Reserved.
            </p>
          </div>
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