import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUtensils, FaWineGlassAlt } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery', icon: null },
    { name: 'Delivery', href: '/delivery' },
    { name: 'Contact', href: '/contact', icon: null }
  ];

  return (
    <nav 
      className="fixed w-full z-50 transition-all duration-500" 
      style={{ 
        backgroundColor: scrolled ? 'rgba(204, 85, 0, 0.95)' : 'rgba(204, 102, 0, 0.9)',
        backdropFilter: 'blur(8px)'
      }}
    >
      {/* Top decorative border */}
      <div 
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(to right, #ff9933, #ffcc00, #ff9933)'
        }}
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={Logo} 
              alt="Farzi Cafe Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`}
              style={{ width: 'auto' }}
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 rounded-lg transition-all duration-300 group"
                  style={{
                    color: '#ffffff',
                    backgroundColor: 'transparent'
                  }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <span 
                    className="block h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    style={{ backgroundColor: '#ffffff' }}
                  ></span>
                </a>
              </li>
            ))}
            {/* Reserve Table Button */}
            <li>
              <a
                href="/reservations"
                className="ml-2 flex items-center px-4 py-2 font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#cc5500',
                }}
              >
                <FaWineGlassAlt className="mr-2" />
                Reserve Table
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-expanded={navOpen}
            style={{ color: '#ffffff' }}
          >
            {navOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
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
              className="md:hidden overflow-hidden rounded-b-lg shadow-xl"
              style={{ backgroundColor: '#cc5500' }}
            >
              <ul className="py-2 px-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      className="flex items-center px-4 py-3 rounded-lg transition-colors duration-200"
                      style={{
                        color: '#ffffff',
                      }}
                      onClick={() => setNavOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                  className="pt-2"
                  style={{ borderTop: '1px solid rgba(255, 204, 0, 0.3)' }}
                >
                  <a
                    href="/reservations"
                    className="flex items-center justify-center px-4 py-3 font-medium rounded-lg transition-colors duration-200"
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#cc5500',
                    }}
                    onClick={() => setNavOpen(false)}
                  >
                    <FaWineGlassAlt className="mr-2" />
                    Reserve Table
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}