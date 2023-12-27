import { useState } from "react";
import { ArrowRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Neil Sano
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-2 ml-4">
              <a href="#projects" className="block text-white hover:text-gray-300 mb-2">
                Projects
              </a>
              <a href="#skills" className="block text-white hover:text-gray-300 mb-2">
                Skills
              </a>
            </div>
          )}
          <div className="hidden md:flex md:flex-wrap md:items-center md:justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
              Projects
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
          </div>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Info
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
