import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";
// components/Hero.js
export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 pt-16 md:pt-32 pb-16 md:pb-32 max-w-7xl mx-auto"
    >
      {/* Left column */}
      <div className="w-full md:w-1/2 text-left space-y-6 order-2 md:order-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-xl">
          Hello,<br/>
          This is <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 drop-shadow-2xl">Dheeraj Pamnani</span>,<br/>
          <motion.span
            className="text-[#C5C6C7]"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          >
            Welcome to my digital universe.
          </motion.span>
        </h1>
        <p className="text-gray-400 max-w-md">
          Turning business problems into data-driven solutions with experience in Python, SQL, machine learning, and analytics.
        </p>
        {/* Social icons */}
        <div className="flex items-center space-x-4 text-xl text-[#C5C6C7]">
          <a href="https://www.linkedin.com/in/dheerajpamnani" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform duration-300 hover:scale-110"><FaLinkedin /></a>
          <a href="https://github.com/DheerGit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform duration-300 hover:scale-110"><FaGithub /></a>
          <a href="https://www.instagram.com/dheerajpamnani_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform duration-300 hover:scale-110"><FaInstagram /></a>
        </div>
        {/* CTA buttons */}
        <div className="flex items-center space-x-4 pt-4">
          <a href="#contact"
             className="px-6 py-3 border-2 border-indigo-700 text-white uppercase rounded-full font-semibold hover:bg-indigo-700 hover:text-[#0B0C10] transition-colors transition-shadow duration-300 hover-glow-yellow hover:shadow-indigo-700/60">
            Contact Me
          </a>
          <a href="my-portfolio/Dheeraj_Pamnani_Resume.pdf" target="_blank" rel="noopener noreferrer"
             className="px-6 py-3 border-2 border-transparent bg-indigo-700 text-white rounded-full font-semibold flex items-center space-x-2 transition-transform duration-300 hover:scale-110 hover-glow-yellow hover:shadow-yellow-300/60">
            <span className="bg-clip-text text-white bg-gradient-to-r from-[#66FCF1] via-indigo-700 to-[#2A2F4E] uppercase">Get Resume</span>
          </a>
        </div>
      </div>

      {/* Right column - code snippet */}
      <div className="w-full md:w-2/4 mb-12 md:mb-0 flex justify-center order-1 md:order-2">
        <motion.div
          className="w-full max-w-2xl bg-white/1 backdrop-blur-lg border border-[#1F2833] rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          {/* Window header */}
          <div className="flex items-center space-x-2 px-4 py-2 bg-[#161b22]">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          {/* Code block */}
          <pre className="p-6 overflow-x-auto text-sm font-mono text-gray-200">
{`Profile = {
    'name': 'Dheeraj Pamnani',
    'skills': [
        'SQL & Databases', 'Python','Machine Learning & AI',
        'Data Visualization','ETL & Data Modeling',
        'Cloud Data Platforms'
    ],
    'hard_worker': True,
    'quick_learner': True,
    'problem_solver': True,
}

def is_hireable(Profile):
    return (
        Profile['hard_worker'] and
        Profile['quick_learner'] and
        Profile['problem_solver'] and
        len(Profile['skills']) >= 5
    )
`}
          </pre>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes glowIndigo {
          0%, 100% { box-shadow: 0 0 8px #4338ca; }
          50%      { box-shadow: 0 0 16px #4338ca; }
        }
        .hover-glow-indigo:hover {
          border-color: #4338ca !important;
          animation: glowIndigo 1.5s ease-in-out infinite;
        }
        @keyframes glowYellow {
          0%, 100% { box-shadow: 0 0 8px #FFDE59; }
          50%      { box-shadow: 0 0 16px #FFDE59; }
        }
        .hover-glow-yellow:hover {
          border-color: #FFDE59 !important;
          animation: glowYellow 1.5s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
}