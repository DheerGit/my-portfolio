// components/Navbar.js

import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-center px-4 md:px-8 py-4 bg-black/5 backdrop-blur-xl shadow-lg border-b border-indigo-700">
      <div className="flex items-center space-x-6 md:space-x-8">
        {[
          { to: "about", label: "About" },
          { to: "education", label: "Education" },
          { to: "projects", label: "Projects" },
          { to: "skills", label: "Skills" },
          { to: "experience", label: "Experience" },
          { to: "contact", label: "Contact" },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            spy={true}
            smooth="easeOutQuart"
            duration={900}
            offset={-80}
            activeClass="text-yellow-400 border-yellow-400"
            className="text-[#C5C6C7] text-lg font-medium border-b-2 border-transparent hover:text-white transition-all duration-300 hover:border-indigo-700 pb-1 uppercase cursor-pointer hover:scale-105"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}