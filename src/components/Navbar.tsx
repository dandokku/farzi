import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
=======
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
>>>>>>> 333c0de0b8d96472980b76bf024e3429c3eb3674
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

<<<<<<< HEAD
  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => setNavOpen(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
=======
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    // Track scroll for navbar effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
>>>>>>> 333c0de0b8d96472980b76bf024e3429c3eb3674
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Blog', href: '#blog' },
    { name: 'Services', href: '#services' },
<<<<<<< HEAD
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
=======
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo - Centered on mobile, left on desktop */}
          <motion.div 
            className="md:order-1 order-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
>>>>>>> 333c0de0b8d96472980b76bf024e3429c3eb3674
          >
            <img 
              src={Logo} 
              alt="Company Logo" 
<<<<<<< HEAD
              className="h-10 w-auto" 
              width={160}
              height={40}
=======
              className={`h-10 transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
>>>>>>> 333c0de0b8d96472980b76bf024e3429c3eb3674
            />
          </motion.div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                    aria-label={item.name}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Search and CTA could be added here */}
            <div className="flex items-center space-x-4 ml-6">
              <button 
                aria-label="Search"
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                <FaSearch className="h-5 w-5" />
              </button>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-gray-700 hover:text-primary-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {navOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with animations */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
=======
          <ul className="hidden md:flex md:order-2 md:space-x-8">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="relative text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 py-2 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Navigation - Right Side */}
          <ul className="hidden md:flex md:order-3 md:space-x-8">
            {navItems.slice(2).map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="relative text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 py-2 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden order-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setNavOpen(!navOpen)}
            aria-label={navOpen ? "Close menu" : "Open menu"}
          >
            {navOpen ? (
              <FaTimes className="h-6 w-6 text-gray-700" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div 
>>>>>>> 333c0de0b8d96472980b76bf024e3429c3eb3674
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
<<<<<<< HEAD
              <ul className="px-2 pt-2 pb-4 space-y-2">
=======
              <ul className="pt-4 pb-6 space-y-4">
>>>>>>> 333c0de0b8d96472980b76bf024e3429c3eb3674
                {navItems.map((item) => (
                  <motion.li 
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
<<<<<<< HEAD
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
=======
                    transition={{ duration: 0.3 }}
                  >
                    <a 
                      href={item.href} 
                      className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      onClick={() => setNavOpen(false)}
>>>>>>> 333c0de0b8d96472980b76bf024e3429c3eb3674
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
<<<<<<< HEAD
                <li className="pt-2">
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium">
                    Get Started
                  </button>
                </li>
=======
>>>>>>> 333c0de0b8d96472980b76bf024e3429c3eb3674
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
<<<<<<< HEAD
      </nav>
    </header>
=======
      </div>
    </nav>
>>>>>>> 333c0de0b8d96472980b76bf024e3429c3eb3674
  );
}