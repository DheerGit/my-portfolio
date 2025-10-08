// components/Education.js

export default function Education() {
  const education = [
    {
      degree: "🎓 MS – Business Analytics (Big Data Track)",
      school: "W.P. Carey School of Business, Arizona State University",
      logo: "ASU.png", // Place your ASU logo here (public/logos/asu.png)
      location: "Tempe, AZ, USA",
      dates: "2024 – 2025",
      details: "Advanced analytics, machine learning, data engineering, and strategy. Capstone: Built a Power BI/Python financial forecasting dashboard. SCMA member.",
    },
    {
      degree: "🎓 B.Tech – Computer Science & Engineering",
      school: "Amity School of Engineering and Technology, Amity University",
      logo: "Amity_logo.png", // Place your Amity logo here (public/logos/amity.png)
      location: "Noida, India",
      dates: "2014 – 2018",
      details: "First Division. AI Club member. Volunteered at Amity Youth Fest.",
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      {/* Header */}
      <div className="flex items-center justify-center mb-12">
        <div className="hidden sm:flex flex-1 h-px bg-gradient-to-r from-transparent via-indigo-700 to-transparent" />
        <span className="mx-4 px-8 py-2 bg-indigo-700 rounded-full text-white font-extrabold uppercase tracking-wide shadow-lg">
          Education
        </span>
        <div className="hidden sm:flex flex-1 h-px bg-gradient-to-l from-transparent via-indigo-700 to-transparent" />
      </div>
      <div className="h-14"></div>
      <div className="grid gap-8 md:grid-cols-2">
        {education.map((edu, i) => (
          <div
            key={i}
            className="relative pt-20 pb-10 px-6 rounded-2xl bg-white/20 backdrop-blur-xl shadow-lg group transition-all duration-300 flex flex-col items-center overflow-visible group-hover:shadow-[0_0_32px_8px_#FFDE59] group-hover:-translate-y-1 hover:scale-105 hover:shadow-yellow-300/80"
          >
            {/* Transcript button for ASU - top right */}
            {edu.school === "W.P. Carey School of Business, Arizona State University" && (
              <a href="Recent_Master's_Transcript.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-indigo-800/80 text-yellow-300 text-xs font-semibold shadow-lg border border-yellow-400 hover:bg-yellow-400 hover:text-indigo-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 animate-pulse"
              title="Download Transcript"
              >
                <span className="inline-block align-middle mr-1"></span>
                Get Transcript
              </a>
            )}
            {/* Logo glass circle */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-white/30 flex items-center justify-center border-4 border-indigo-700 shadow-lg group-hover:border-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_24px_#FFDE59]">
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            {/* Text content */}
            <div className="flex flex-col items-center text-center">
              <div className="text-white text-lg font-extrabold mb-1 underline decoration-indigo-500/30 decoration-2">
                {edu.degree}
              </div>
              {edu.school === "W.P. Carey School of Business, Arizona State University" && (
                <div className="mb-3 px-4 py-1 rounded-full font-bold shadow text-yellow-400 bg-indigo-900">
                  4.0 GPA
                </div>
              )}
              <div className="text-indigo-400 font-extrabold text-xl">{edu.school}</div>
              <div className="text-gray-400 text-sm mb-2">{edu.location} &mdash; {edu.dates}</div>
              <div className="text-gray-200">{edu.details}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}