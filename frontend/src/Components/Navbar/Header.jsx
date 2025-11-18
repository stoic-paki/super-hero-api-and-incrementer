import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down → hide
        setShowNavbar(false);
      } else {
        // scrolling up → show
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 
        bg-gray-900/60 backdrop-blur-lg shadow-lg 
        transition-all duration-500 ease-in-out 
        ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">MyLogo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
           <NavLink to="/" end className={({ isActive }) => `links ${isActive ? "active" : ""}`}>Home</NavLink>
          <NavLink to={'/about'}  className={({ isActive }) => `links ${isActive ? "active" : ""}`}>About</NavLink>
          <NavLink to={'/service'}  className={({ isActive }) => `links ${isActive ? "active" : ""}`}>Services</NavLink>
          <NavLink to={'/contact'}  className={({ isActive }) => `links ${isActive ? "active" : ""}`}>Contact</NavLink>  
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none transition-transform hover:scale-110"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 bg-gray-800/80 backdrop-blur-md rounded-lg p-4">
           <NavLink to="/" end className={({ isActive }) => `links ${isActive ? "active" : ""}`}>Home</NavLink>
          <NavLink to={'/about'}  className={({ isActive }) => `links ${isActive ? "active" : ""}`}>About</NavLink>
          <NavLink to={'/service'}  className={({ isActive }) => `links ${isActive ? "active" : ""}`}>Services</NavLink>
          <NavLink to={'/contact'}  className={({ isActive }) => `links ${isActive ? "active" : ""}`}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
