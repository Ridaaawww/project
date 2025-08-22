import { useState } from "react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-4 md:px-12 py-0.5 md:py-1 bg-white/80 shadow-xl backdrop-blur-md text-gray-800 sticky top-0 z-50">
      {/* Left: Logo and Tagline */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="relative w-[160px] h-[48px] md:w-[300px] md:h-[80px]">
          <img
            src="/SuperAccountant.png"
            alt="Super Accountant Logo"
            className="h-[60px] md:h-[100px] w-full object-contain"
          />
        </div>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Right: Navigation Links */}
      <nav className="hidden md:flex items-center gap-4 md:gap-8 font-semibold uppercase tracking-wide text-base md:text-lg">
        <a href="#" className="hover:text-[#264174]">Home</a>
        <a href="#curriculum" className="hover:text-[#264174]">Curriculum</a>
        <a href="#FAQ" className="hover:text-[#264174]">FAQ</a>
        <a
          href="#apply-form"
          className="bg-[#E31E24] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-md"
        >
          Apply Now
        </a>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 shadow-lg flex flex-col items-center py-4 md:hidden animate-fade-in z-50">
          <a href="#" className="py-2 w-full text-center hover:text-[#264174]" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#curriculum" className="py-2 w-full text-center hover:text-[#264174]" onClick={() => setMobileMenuOpen(false)}>Curriculum</a>
          <a href="#FAQ" className="py-2 w-full text-center hover:text-[#264174]" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a
            href="#apply-form"
            className="bg-[#E31E24] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-md mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
}
