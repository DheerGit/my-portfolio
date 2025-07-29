// components/Navbar.js

import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "about", label: "About" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/5 backdrop-blur-xl shadow-lg border-b border-indigo-700">
      <div className="relative flex items-center justify-center px-4 md:px-8 py-4">
        {/* Hamburger for mobile */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden flex flex-col justify-center items-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-indigo-400 mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-indigo-400 mb-1 transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-indigo-400 transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
        {/* Centered Nav Links */}
        <div className="hidden md:flex items-center space-x-6 md:space-x-8">
          {navLinks.map(({ to, label }) => (
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
      </div>
      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden flex flex-col items-center bg-black/90 backdrop-blur-xl py-4 space-y-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth="easeOutQuart"
              duration={900}
              offset={-80}
              activeClass="text-yellow-400 border-yellow-400"
              className="text-[#C5C6C7] text-lg font-medium border-b-2 border-transparent hover:text-white transition-all duration-300 hover:border-indigo-700 pb-1 uppercase cursor-pointer hover:scale-105"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}