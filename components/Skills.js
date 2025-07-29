// components/Skills.js

import { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import {
  SiMysql,
  SiPostgresql,
  SiPython,
  SiJupyter,
  SiR,
  SiVscodium,
  SiGit,
  SiGooglesheets,
  SiTableau,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiScikitlearn,
  SiTensorflow,
  SiSnowflake,
  SiStatista,
} from "react-icons/si";
import { FaChartLine, FaBrain, FaAws, FaMicrosoft } from "react-icons/fa";

const categories = {
  "Programming Languages & Tools": [
    { name: "Python",           icon: SiPython,       color: "text-blue-500",  confidence: 98 },
    { name: "SQL",              icon: SiMysql,        color: "text-green-500", confidence: 95 },
    { name: "Jupyter Notebooks",icon: SiJupyter,      color: "text-yellow-500",confidence: 90 },
    { name: "JavaScript",       icon: SiJavascript,   color: "text-yellow-400",confidence: 87 },
    { name: "HTML5",            icon: SiHtml5,        color: "text-orange-500",confidence: 85 },
    { name: "R",                icon: SiR,            color: "text-blue-700",  confidence: 85 },
    { name: "VS Code",          icon: SiVscodium,     color: "text-gray-500",  confidence: 88 },
    { name: "Git",              icon: SiGit,          color: "text-orange-500",confidence: 90 },
  ],
  "Data Analytics & BI": [
    { name: "Excel / Sheets",   icon: SiGooglesheets, color: "text-green-500", confidence: 91 },
    { name: "Analytical Decision Modeling", icon: FaChartLine, color: "text-blue-600", confidence: 90 },
    { name: "Quantitative Risk Management", icon: FaChartLine, color: "text-purple-500", confidence: 88 },
    { name: "Tableau",          icon: SiTableau,      color: "text-orange-500",confidence: 92 },
    { name: "Power BI",         icon: FaChartLine,    color: "text-yellow-400",confidence: 85 },
    { name: "A/B Testing",      icon: FaChartLine,    color: "text-pink-500",  confidence: 85 },
    { name: "KPI Development",  icon: FaChartLine,    color: "text-green-400", confidence: 84 },
    { name: "Supply Chain",     icon: FaChartLine,    color: "text-indigo-500",confidence: 84 },
  ],
  "Statistical Analysis": [
    { name: "Statistics",         icon: SiStatista, color: "text-indigo-700",  confidence: 90 },
    { name: "Exploratory Data Analysis", icon: SiStatista, color: "text-indigo-700",  confidence: 88 },
    { name: "Regression", icon: SiStatista, color: "text-indigo-700",  confidence: 87 },
    { name: "Time Series Analysis", icon: SiStatista, color: "text-indigo-700",  confidence: 85 },
    { name: "ANOVA", icon: SiStatista, color: "text-indigo-700",  confidence: 86 },
    { name: "Hypothesis Testing", icon: SiStatista, color: "text-indigo-700",  confidence: 85 },
  ],
  "Machine Learning & AI": [
    { name: "scikit-learn",        icon: SiScikitlearn, color: "text-blue-600",  confidence: 90 },
    { name: "PyTorch / TensorFlow",          icon: SiTensorflow,  color: "text-orange-600",confidence: 86 },
    { name: "XGBoost",             icon: FaBrain,       color: "text-purple-600",confidence: 85 },
    { name: "Neural Networks",     icon: FaBrain,       color: "text-purple-500",confidence: 84 },
    { name: "NLP / Computer Vision",icon: FaBrain,      color: "text-indigo-400",confidence: 82 },
    { name: "Supervised / Unsupervised",icon: SiScikitlearn, color: "text-blue-600",confidence: 87 },
    { name: "ML Lifecycle",        icon: SiScikitlearn, color: "text-blue-600",confidence: 84 },
  ],
  "Database & Cloud": [
    { name: "AWS (S3, RDS)",   icon: FaAws,        color: "text-orange-500",confidence: 85 },
    { name: "Azure",           icon: FaMicrosoft,  color: "text-blue-500",  confidence: 82 },
    { name: "Snowflake",       icon: SiSnowflake,  color: "text-indigo-500",confidence: 83 },
    { name: "ETL / Pipelines", icon: SiVscodium,   color: "text-gray-500",  confidence: 84 },
    { name: "Databricks",      icon: SiVscodium,   color: "text-red-500",   confidence: 80 },
    { name: "Data Warehousing",icon: SiMysql,      color: "text-green-500", confidence: 82 },
  ],
  "Business & Collaboration": [
    { name: "Agile / Scrum",           icon: FaChartLine,    color: "text-indigo-400",confidence: 80 },
    { name: "Project Management",      icon: SiGit,          color: "text-orange-500",confidence: 80 },
    { name: "Microsoft Office",        icon: FaMicrosoft,    color: "text-blue-500",  confidence: 85 },
    { name: "DevOps",                  icon: SiGit,          color: "text-orange-500",confidence: 80 },
  ],
};

const allSkills = (() => {
  const seen = new Set();
  const uniqueSkills = [];
  for (const skill of Object.values(categories).flat()) {
    if (!seen.has(skill.icon)) {
      seen.add(skill.icon);
      uniqueSkills.push(skill);
    }
  }
  return uniqueSkills;
})();

function AnimatedProgressBar({ confidence }) {
  const [width, setWidth] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    let animationFrame;
    let start;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const duration = 1000; // 1 second animation
      const progress = Math.min(elapsed / duration, 1);
      setWidth(progress * confidence);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [confidence]);

  return (
    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden mt-2">
      <div
        ref={progressRef}
        className="h-3 rounded-full bg-indigo-700 transition-width duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
          <span className="mx-4 px-6 py-2.5 bg-indigo-700 rounded-full text-white font-semibold tracking-wide text-lg shadow-lg">
            Skills
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-indigo-700 to-transparent" />
        </div>
        {/* Added mb-8 for spacing */}
        <div className="mb-8" />
        {/* Rotating marquee of all skill icons */}
        <Marquee gradient={false} speed={50} pauseOnHover className="flex items-center mb-12">
          {allSkills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="w-20 h-20 mx-4 bg-white/10 backdrop-blur-md rounded-xl flex flex-col items-center justify-center hover:bg-indigo-700/50 transition flex-shrink-0"
              aria-label={name}
              title={name}
            >
              <Icon className={`text-3xl ${color}`} />
            </div>
          ))}
        </Marquee>

        {/* Category panels side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {Object.entries(categories).map(([category, skills]) => (
            <div
              key={category}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg flex flex-col transition-all duration-300 group hover:shadow-[0_0_24px_6px_#FFDE59] relative overflow-hidden hover:scale-105 hover:-translate-y-1"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-6 tracking-wide text-center drop-shadow-md">
                {category}
              </h3>
              <div className="space-y-5">
                {skills.map(({ name, icon: Icon, color, confidence = 85 }) => (
                  <div key={name} className="flex items-center gap-4">
                    {/* Icon and name */}
                    <div className="flex items-center space-x-3 w-2/3 min-w-0">
                      <Icon className={`text-2xl ${color}`} />
                      <span className="text-white font-medium truncate" title={name}>
                        {name}
                      </span>
                    </div>
                    {/* Bar and % */}
                    <div className="flex items-center w-1/3 min-w-[110px]">
                      <AnimatedProgressBar confidence={confidence} />
                      <span className="ml-2 text-sm text-gray-300 font-mono tabular-nums min-w-[28px] text-right">
                        {Math.round(confidence)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}