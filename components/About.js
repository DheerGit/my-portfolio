// components/About.js

import Image from "next/image";
import React from "react";


export default function About() {
  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px #fff, 0 0 10px #FFDE59, 0 0 20px #FFDE59; }
          50%      { box-shadow: 0 0 10px #fff, 0 0 20px #FFDE59, 0 0 30px #FFDE59; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .hover-glow-hover:hover {
          animation: glow 2s infinite;
        }
        .shimmer {
          background: linear-gradient(to right, #fff 0%, #4338ca 50%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
      <section className="animate-fadeInUp relative max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Who I Am panel */}
          <div className="w-full lg:w-3/5 bg-black/20 backdrop-blur-md rounded-xl p-8 space-y-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-[#FFDE59]/40 hover-glow-hover">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#66FCF1] via-[#45A29E] to-[#2A2F4E] shimmer">Who I Am?</h2>
            <p className="text-gray-200 leading-relaxed">
  I’m <span className="text-yellow-400 font-semibold">Dheeraj Pamnani</span> — a data storyteller and problem solver driven by curiosity. 
  What began as building small automation scripts has grown into creating
  <span className="text-yellow-400 font-semibold"> intelligent, data-driven systems</span> that simplify decisions and spark business impact.
  <br />
  <br />
  At <span className="text-yellow-400 font-semibold">Arizona State University</span>, I’ve explored how
  <span className="text-indigo-400 font-semibold"> analytics, AI,</span> and
  <span className="text-indigo-400 font-semibold"> machine learning</span> can transform insights into outcomes —
  from training <span className="text-yellow-400 font-semibold">breast cancer detection models</span> on HPC clusters
  to developing <span className="text-yellow-400 font-semibold">forecasting dashboards</span> that guide real-world strategy.
  I thrive at the intersection of <span className="text-indigo-400 font-semibold">data and decision-making</span>, 
  where each model, metric, and visualization connects the dots between 
  <span className="text-yellow-400 font-semibold"> technology and human impact</span>.
</p>
            <p className="text-gray-400 leading-relaxed font-medium">
  <span className="text-yellow-400 font-semibold">Open to:</span> Data Science, Analytics, Business Intelligence, or other roles where data meets impact.
</p>
          </div>

          {/* Photo + pill wrapper */}
          <div className="relative w-full lg:w-auto flex-shrink-0 mt-8 lg:mt-0 pr-12 overflow-visible">
            {/* Photo box */}
            <div className="group bg-black/20 backdrop-blur-md rounded-xl overflow-hidden ring-2 ring-indigo-700 transition-transform duration-300 ease-out hover:scale-105">
              <Image
                src="/profile_picture.png"
                alt="Dheeraj Pamnani"
                width={320}
                height={320}
                className="object-cover filter grayscale group-hover:grayscale-0 transition duration-300 ease-out"
              />
            </div>

            {/* Floating “About Me” pill + lines */}
            <div className="hidden lg:flex flex-col items-center absolute top-1/2 -right-30 transform -translate-y-1/2">
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-indigo-700 to-transparent mb-2" />
              <span className="bg-indigo-700 text-white px-4 py-2 rounded-full text-sm uppercase tracking-widest transform rotate-90 origin-center">
                About Me
              </span>
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-indigo-700 to-transparent mt-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}