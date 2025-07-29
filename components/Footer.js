import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show after scrolling 150px
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Back to Top Button */}
      {showButton && (
        <button
          onClick={() => scroll.scrollToTop({ smooth: 'easeOutQuart', duration: 900 })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-indigo-700 text-white shadow-lg hover:bg-yellow-400 hover:text-indigo-900 transition-all duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
      {/* Footer */}
      <footer className="w-full text-center py-6 mt-16 text-gray-400 bg-white/5 backdrop-blur-lg">
        &copy; {new Date().getFullYear()} Dheeraj Pamnani. All Rights Reserved.
      </footer>
    </>
  );
}