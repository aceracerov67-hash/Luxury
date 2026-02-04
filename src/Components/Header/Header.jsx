import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          <div className="flex-shrink-0">
            <h1 className="text-xl font-serif font-bold tracking-[0.3em] text-gray-900 uppercase cursor-pointer hover:text-pink-400 transition duration-500">
              Luxury Line  Perfumes
            </h1>
            
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-10 font-medium text-gray-600 tracking-wide">
              {["Home", "About us", "Our Brands", "Contacts"].map((item, i) => (
                <li key={i} className="relative group cursor-pointer">
                  <a className="transition duration-300 group-hover:text-pink-400">
                    {item}
                  </a>

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-500 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

         
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-8 w-8 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-500 bg-white shadow-lg`}
      >
        <ul className="px-6 pt-6 pb-8 space-y-6 text-center">
          {["Home", "About us", "Our Brands", "Contacts"].map((item, i) => (
            <li key={i}>
              <a className="block text-gray-700 text-lg tracking-wide hover:text-pink-600 transition duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
