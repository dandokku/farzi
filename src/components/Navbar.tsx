import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Blog', href: '#blog' },
    { name: 'Services', href: '#services' },
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
          >
            <img 
              src={Logo} 
              alt="Company Logo" 
              className={`h-10 transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
            />
          </motion.div>

          {/* Desktop Navigation */}
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="pt-4 pb-6 space-y-4">
                {navItems.map((item) => (
                  <motion.li 
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a 
                      href={item.href} 
                      className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      onClick={() => setNavOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}