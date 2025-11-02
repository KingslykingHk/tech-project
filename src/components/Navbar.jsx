import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-2xl bg-[rgba(255,255,255,0.2)] shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Hosur Infratech" className="h-12" />
          <span className="text-xl font-bold text-black">Hosur Infratech</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="group relative text-black font-semibold cursor-pointer"
            >
              <span className="inline-block pb-1 transition-transform duration-200 group-hover:scale-105">
                {item}
              </span>
              <span className="block h-0.5 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 space-y-4 bg-white">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="block text-black font-semibold"
              onClick={() => setIsOpen(false)} // close on click
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
