// components/Projects.js

export default function Projects() {
  const projects = [
    {
      title: "Financial Forecasting Dashboard",
      organization: "MedAire, Inc.",
      tech: "Power BI, DAX, Python",
      description:
        "Developed an interactive Power BI dashboard with advanced DAX to forecast contractual revenue, improving budgeting accuracy. Built forecasting pipelines in Python and evaluated Time Series, RNN, and Exponential Smoothing models, reducing RMSE by 50%. Enabled cross-functional teams to simulate scenarios with dynamic KPIs and sensitivity levers.",
      link: "",
      github: "https://github.com/DheerGit/Financial_Forecasting_Dashboard_PowerBI", // Add your GitHub repo link here
    },
    {
      title: "Wait Time Estimation for Campus Eateries",
      organization: "Arizona State University",
      tech: "YOLOv8, Regression, Python, OpenCV",
      description:
        "Engineered a YOLOv8-based model to detect and count customers from video feeds, using spatial filtering to improve queue monitoring. Trained a regression (MLP) model on image-derived counts to estimate wait times, delivering high predictive correlation and actionable real-time analytics for campus dining.",
      link: "",
      github: "https://github.com/DheerGit/CV-Project-Queue-Monitoring-Wait-Time-Estimation-ASUeateries-usingYOLOv8", // Add your GitHub repo link here
    },
    {
      title: "ChatGPT Market Positioning & Segmentation",
      organization: "Arizona State University",
      tech: "Python, PCA, K-Means, Survey Analytics",
      description:
        "Conducted a perceptual study and applied PCA to define ChatGPT's key positioning dimensions (99.8% variance explained). Segmented users via K-Means and delivered pricing recommendations for high-loyalty customer segments, driving strategy for targeted product development.",
      link: "",
      github: "https://github.com/DheerGit/AdvMarketingAnalyticsProject-ChatGPT-Market-Positioning", // Add your GitHub repo link here
    },
    {
      title: "BERT Topic Modeling & Sentiment Analysis",
      organization: "Arizona State University",
      tech: "Python, BERTopic, UMAP, Deep Learning",
      description:
        "Engineered a BERTopic model with UMAP on 100K+ Yelp tips to uncover 30 high-impact customer experience themes. Achieved 92% sentiment classification accuracy with deep learning, enabling actionable segmentation by cuisine, sentiment, and location for strategic business insights.",
      link: "",
      github: "https://github.com/DheerGit/Yelp-Restaurant-Reviews-Tips-Topic-Modeling", // Add your GitHub repo link here
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      {/* Enhanced Header - pill with indigo lines, matching Experience */}
      <div className="flex items-center justify-center mb-16">
        <div className="hidden sm:flex flex-1 h-px bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
        <h2 className="mx-4 px-8 py-2 bg-indigo-700 rounded-full text-white font-extrabold uppercase tracking-wide shadow-lg">
          Projects
        </h2>
        <div className="hidden sm:flex flex-1 h-px bg-gradient-to-l from-transparent via-indigo-700 to-transparent" />
      </div>

      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
        A selection of recent analytics, AI, and data engineering projects.
      </p>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="group relative p-8 rounded-2xl bg-glass/50 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-yellow-300/50 hover:scale-105 hover:border-yellow-400 transition-all duration-500 flex flex-col"
          >
            {/* Faint 💡 icon background */}
            <span className="animate-bulb-glow absolute top-4 right-4 text-yellow-400/10 text-7xl select-none pointer-events-none">💡</span>

            <h3 className="text-white text-2xl font-bold mb-1 z-10">{proj.title}</h3>
            <p className="text-indigo-300 font-semibold mb-3 z-10">{proj.organization}</p>
            <span className="inline-block bg-indigo-700/70 text-yellow-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 z-10">
              {proj.tech}
            </span>
            <p className="text-gray-300 flex-1 z-10">{proj.description}</p>
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center space-x-2 text-indigo-400 group-hover:text-yellow-400 underline text-sm font-semibold transition-all z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.62-5.48 5.92.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.217.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                <span>View on GitHub</span>
              </a>
            )}
            <style jsx>{`
              .group:hover .animate-bulb-glow {
                filter: drop-shadow(0 0 16px #FFDE59) drop-shadow(0 0 40px #FFDE59);
                color: #FFDE59;
                transition: filter 0.3s, color 0.3s;
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
}