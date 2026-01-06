import React from 'react';
import { createRoot } from 'react-dom/client';
import { Check, Clock, Shield } from 'lucide-react';

const App = () => {
  const scrollToQuiz = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('quiz-anchor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-blue-900 uppercase">Smart Cover</span>
          </div>
          <div>
            <span className="bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 uppercase rounded-sm whitespace-nowrap">
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
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <span className="text-2xl mr-2">🇺🇸</span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">United States</span>
            </div>
            <h1 className="serif-text text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
              Americans 35-60 May Now Qualify For Up To $500,000 In Term Life Insurance
            </h1>
            <p className="serif-text text-lg sm:text-2xl text-gray-500 font-medium mb-6">
              Starting As Low As $21/Month*
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start text-sm text-gray-600 space-x-4 border-y border-gray-100 py-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-gray-400" />
                <span>30 Second Read</span>
              </div>
              <div className="flex items-center border-l border-gray-200 pl-4">
                <Shield className="w-4 h-4 mr-1 text-gray-400" />
                <span>Smart Cover</span>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <div className="px-8 sm:px-12 mb-8">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white transition-all">
              <img
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1200&h=675&fit=crop"
                alt="Happy mature couple reviewing their options together"
                className="w-full h-full block object-cover mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center sm:text-left">
                <p className="text-white serif-text italic text-lg sm:text-xl max-w-2xl leading-snug drop-shadow-md">
                  Affordable term life insurance options are helping Americans protect their families' financial future.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href="#quiz-anchor"
                onClick={scrollToQuiz}
                className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 rounded shadow-lg transition-transform transform hover:scale-105 uppercase tracking-wide cursor-pointer"
              >
                Check My Rate
              </a>
            </div>
          </div>

          {/* Body Text */}
          <article className="px-8 sm:px-12 text-gray-900 leading-relaxed text-lg serif-text pb-8">
            <p className="mb-6">
              Many Americans assume that term life insurance is either too expensive or too complicated to set up. However, securing financial protection for your family has never been more accessible—or more affordable.
            </p>
            <p className="mb-6">
              Finding the right coverage doesn't have to involve hours of paperwork. For many people, the process is simple and can involve just a few health and lifestyle questions to request a quote. <strong>No medical exam options are available</strong> for those who qualify.
            </p>
            <p className="mb-6">
              The biggest hurdle for most people is simply knowing where to start. Fortunately, there are options designed to be straightforward and surprisingly affordable for everyday Americans between 35 and 60.
            </p>
            <p className="mb-6 font-bold text-blue-900 border-l-4 border-blue-600 pl-4 py-1 italic bg-blue-50/50 font-sans">
              $250,000 in coverage can start as low as $15/month. $500,000 can start as low as $21/month.*
            </p>
            <p className="mb-2 text-xs text-gray-500 font-sans italic">
              *Sample rates based on 30 yr. old female, non-tobacco, 10-year term.
            </p>
            <p className="mb-8 font-sans text-gray-800">
              Peace of mind comes from knowing that your loved ones are taken care of financially, no matter what happens. Taking a minute to request a free quote can be that first step towards that security.
            </p>


            {/* Use Cases Section */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-10">
              <h3 className="font-sans text-xl font-bold mb-4 text-blue-900">What Can A Life Insurance Payout Be Used For?</h3>
              <p className="font-sans text-gray-700 mb-4">
                A term life insurance payout gives your loved ones the financial flexibility they need during a difficult time. Here's how families typically use these funds:
              </p>
              <ul className="space-y-3 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span><strong>Pay off the mortgage</strong> — so your family can stay in their home without worrying about monthly payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span><strong>Cover daily living expenses</strong> — groceries, utilities, car payments, and other bills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span><strong>Fund your children's education</strong> — from college tuition to private school fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span><strong>Replace lost income</strong> — helping your spouse maintain their standard of living</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span><strong>Pay off debts</strong> — credit cards, car loans, medical bills, or other outstanding balances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span><strong>Cover final expenses</strong> — funeral costs and other end-of-life arrangements</span>
                </li>
              </ul>
            </section>

            {/* Bullet Points Section */}
            <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
              <h3 className="font-sans text-xl font-bold mb-6 text-gray-900 uppercase tracking-wide border-b border-gray-200 pb-2">Why Americans Are Choosing Term Life:</h3>
              <ul className="space-y-4">
                <li className="flex items-start font-sans text-base">
                  <div className="mt-1 bg-green-500 rounded-full p-0.5 mr-3 flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-700">Coverage as low as <span className="font-bold text-gray-900">$15/month for $250K</span> or <span className="font-bold text-gray-900">$21/month for $500K</span>*</span>
                </li>
                <li className="flex items-start font-sans text-base">
                  <div className="mt-1 bg-green-500 rounded-full p-0.5 mr-3 flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-700">Coverage available up to <span className="font-bold text-gray-900">$2 million</span> depending on eligibility</span>
                </li>
                <li className="flex items-start font-sans text-base">
                  <div className="mt-1 bg-green-500 rounded-full p-0.5 mr-3 flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-700"><span className="font-bold text-gray-900">No medical exam options available</span> for qualifying applicants</span>
                </li>
                <li className="flex items-start font-sans text-base">
                  <div className="mt-1 bg-green-500 rounded-full p-0.5 mr-3 flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-700">A simple process to request a quote that takes less than 60 seconds</span>
                </li>
                <li className="flex items-start font-sans text-base">
                  <div className="mt-1 bg-green-500 rounded-full p-0.5 mr-3 flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-700">Compare quotes from top-rated insurance companies</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500 italic">
                *Sample rates based on 30 yr. old female, non-tobacco, 10-year term.
              </p>
            </section>

            {/* CTA Section */}
            <div id="quiz-anchor" className="scroll-mt-32 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 sm:p-12 font-sans shadow-2xl overflow-hidden block text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 uppercase tracking-tight">Ready To See Your Options?</h2>
              <p className="text-blue-200 text-base mb-6">Find out if you qualify for affordable term life coverage in under 60 seconds.</p>

              <a
                href="https://example.com/your-affiliate-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white text-xl sm:text-2xl font-bold py-5 px-10 sm:px-16 rounded-lg shadow-xl transition-all transform hover:scale-105 uppercase tracking-wide"
              >
                Check Eligibility
              </a>

              <p className="text-blue-300 text-xs mt-6 italic">
                *No obligation. Compare quotes from top-rated insurers.
              </p>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-12 pb-16 px-6 text-gray-500 text-[11px] leading-relaxed text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-bold text-gray-600 mb-6">
            © 2026 Smart Cover - All Rights Reserved
          </p>

          <p>
            *Sample rates based on 30 yr. old female, non-tobacco, 10-year term. Your actual premium may vary based on your age, gender, health status, smoking status, and chosen coverage amount.
          </p>

          <p>
            Coverage amounts and eligibility are subject to underwriting approval. Not all applicants will qualify for coverage or the advertised rates. Term life insurance provides coverage for a specified period and does not build cash value.
          </p>

          <p className="pt-6 border-t border-gray-100">
            This is an advertisement. We are not an insurance company. We connect consumers with licensed insurance agents and companies to help them find coverage that fits their needs. Insurance products are offered through licensed agents and insurance companies. All insurance products are governed by the terms in the applicable insurance policy. Approval for insurance, as well as premium rates, is determined by the underwriting insurance company.
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