import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide text-gray-900 uppercase relative">
            SHAHAMA
            <span className="absolute top-0 right-0 w-2 h-2 bg-amber-500 rounded-full"></span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-6 lg:space-x-8">
            <li><a href="#Home" className="py-2 text-gray-800 hover:text-amber-500 transition-colors font-medium">Home</a></li>
            <li><a href="#About-Me" className="py-2 text-gray-800 hover:text-amber-500 transition-colors font-medium">About Me</a></li>
            <li><a href="#Skills" className="py-2 text-gray-800 hover:text-amber-500 transition-colors font-medium">Skills</a></li>
            <li><a href="#Project" className="py-2 text-gray-800 hover:text-amber-500 transition-colors font-medium">Project</a></li>
            <li><a href="#Contact-Me" className="py-2 text-gray-800 hover:text-amber-500 transition-colors font-medium">Contact Me</a></li>
          </ul>
        </div>

        {/* Resume Button */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href="/Ayishath Shahama.pdf"
            download="Ayishath Shahama.pdf"
            className="py-2 px-5 bg-amber-400 border border-amber-400 hover:bg-white rounded-md text-sm font-medium text-stone-700 transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden rounded-md p-2 focus:outline-none text-gray-800 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? "max-h-96" : "max-h-0"
      }`}>
        <div className="px-4 py-3 bg-gray-50 border-t">
          <ul className="space-y-3">
            <li><a href="#Home" className="block py-2 text-gray-800 hover:text-amber-500 font-medium" onClick={toggleMenu}>Home</a></li>
            <li><a href="#About-Me" className="block py-2 text-gray-800 hover:text-amber-500 font-medium" onClick={toggleMenu}>About Me</a></li>
            <li><a href="#Skills" className="block py-2 text-gray-800 hover:text-amber-500 font-medium" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#Project" className="block py-2 text-gray-800 hover:text-amber-500 font-medium" onClick={toggleMenu}>Project</a></li>
            <li><a href="#Contact-Me" className="block py-2 text-gray-800 hover:text-amber-500 font-medium" onClick={toggleMenu}>Contact Me</a></li>
            <li className="pt-2">
              <a
                href="/Ayishath Shahama.pdf"
                download="Ayishath Shahama.pdf"
                className="inline-block w-full py-2.5 px-4 bg-amber-400 border border-amber-400 hover:bg-white rounded-md text-center font-medium text-stone-700 transition-colors"
                onClick={toggleMenu}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;