// components/Experience.js

import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experience = [
    {
      title: "Research Assistant – AI for Breast Cancer Detection",
      company: "Arizona State University",
      location: "Tempe, AZ",
      dates: "Jan 2024 – Present",
      description: "Developing and optimizing deep‑learning object‑detection pipelines (like Faster R‑CNN, YOLO‑based architectures) for automated breast‑cancer screening on the VinDR Mammogram dataset, streamlining data preprocessing and training workflows."+
" Collaborating with the team to annotate detailed tumor and lesion characteristics, enabling the creation of explainable‑AI models and rigorous side‑by‑side comparisons with traditional “black‑box” approaches."
    },
    {
      title: "Data & BI Analyst – Revenue & Operations Strategy",
      company: "Yocket (Avocation Educational Services)",
      location: "Remote",
      dates: "Mar 2024 – Jul 2024",
      description: "Developed SQL-powered Metabase dashboards to track potential premium users & performance metrics, raising revenue by 30%."+
      " Predicted staffing needs using sales KPIs in Python & Excel, aligning 15+ FTEs to boost output and add $200K/month in revenue."+
      " Automated lead flows employing CRM Automation; optimized workforce allocation, increasing lead to conversion rates by 1.5%."
    },
    {
      title: "Business Intelligence Analyst – Partner Strategy",
      company: "Azent Overseas Education Ltd",
      location: "Remote",
      dates: "Dec 2022 – Feb 2024",
      description: "Built Zoho Analytics dashboards, delivered weekly CEO reports, improved partner activation by 15%, and led predictive modeling on competitors’ data to onboard 500+ partners in 3 months."+
      " Led EDA on applications using Excel & Stats, evaluated product gaps & streamlined ops to raise partner activation by 15% MoM."+
      " Conducted predictive modeling on competitors' data to align B2B business strategy, onboarding 500+ consultants in 3 months."
    },
    {
      title: "Sales Data Analyst – Customer Insights & Segmentation",
      company: "Byju’s (Think and Learn Pvt Ltd)",
      location: "India",
      dates: "Jan 2021 – Nov 2022",
      description: "Conducted customer segmentation using K-Means clustering to optimize go-to-market strategy, uplifting conversion rates to 60%."+
      " Implemented SWOT analysis and SOP redesign to refine engagement & customer service, achieving a 90% student retention rate."
    },
    {
      title: "IT Operations Analyst – Service Analytics",
      company: "NCR Corporation",
      location: "India",
      dates: "Apr 2018 – Jul 2019",
      description: "Created service data visualizations via ServiceNow analytics suite, boosting SLA tracking accuracy and reducing breaches by 15%."+
      " Designed custom reports and incident trend models for clients, improving IT helpdesk efficiency and limiting backlog to 5%."
    },
  ];

  // Helper to split description into bullet points if multiple sentences
  function parseDescription(desc) {
    // Split by '.' followed by space, filter out empty strings
    const points = desc.split('. ').map(p => p.trim()).filter(p => p.length > 0);
    return points.length > 1 ? points : [desc];
  }

  return (
    <section id="experience" className="py-20 px-6">
      {/* Header */}
      <div className="flex items-center justify-center mb-12">
        <div className="hidden sm:flex flex-1 h-px bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
        <span className="mx-4 px-8 py-2 bg-indigo-700 rounded-full text-white font-semibold text-lg tracking-wide shadow-lg">
          Experience
        </span>
        <div className="hidden sm:flex flex-1 h-px bg-gradient-to-l from-transparent via-indigo-700 to-transparent" />
      </div>

      {/* Timeline container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line for md+ */}
        <div className="hidden md:block absolute top-0 left-5 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 rounded" />

        <div className="space-y-12 md:space-y-16">
          {experience.map((exp, i) => {
            const points = parseDescription(exp.description);

            return (
              <div
                key={i}
                className="relative md:flex md:items-start md:pl-16"
              >
                {/* Timeline dot for md+ except last */}
                <div className="hidden md:flex absolute left-0 top-2 w-10 h-10 rounded-full bg-yellow-400 shadow-yellow-400/60 shadow-lg ring-4 ring-indigo-900" />

                {/* Glass card */}
                <div className="relative bg-black/30 border border-indigo-700 rounded-xl backdrop-blur-md p-6 shadow-md transition-transform duration-300 hover:shadow-yellow-400/80 hover:scale-[1.03] hover:border-yellow-400 cursor-default group overflow-hidden">
                  {/* Shine effect */}
                  <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-yellow-400/40 via-yellow-300/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 animate-shine"></div>

                  {/* Background icon */}
                  <FaBriefcase className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400 opacity-10 text-[6rem] select-none" />

                  {/* Title and Dates */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                    <h3 className="text-white text-2xl font-bold flex-1 min-w-0">{exp.title}</h3>
                    <time className="text-yellow-300 text-sm md:text-base font-mono mt-2 md:mt-0">{exp.dates}</time>
                  </div>

                  {/* Company and Location */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center text-indigo-400 mb-2">
                    <span className="font-bold text-indigo-400">{exp.company}</span>
                    <span className="text-gray-400 mt-1 md:mt-0">{exp.location}</span>
                  </div>

                  {/* Divider */}
                  <hr className="border-t border-indigo-700 opacity-30 mb-4" />

                  {/* Bullet points */}
                  <ul className="mt-3 text-gray-200 list-disc list-inside space-y-2 pl-2 leading-relaxed text-lg">
                    {points.map((point, idx) => (
                      <li key={idx}>{point.replace(/\.$/, '')}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
            opacity: 0;
          }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}