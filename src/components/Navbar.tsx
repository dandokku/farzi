import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUtensils, FaWineGlassAlt } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png'; // Replace with your restaurant logo

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
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Delivery', href: '/delivery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-saffron-700 shadow-lg' : 'bg-saffron-600/90 backdrop-blur-sm'}`}>
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-saffron-400 via-turmeric-500 to-saffron-400"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo with cultural motif */}
          <div className="flex items-center space-x-2">
            <img 
              src={Logo} 
              alt="Royal Spice Logo" 
              className={`h-12 transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`}
            />
            <span className="hidden md:block text-white font-serif text-xl font-bold tracking-wider">
              Farzi Cafe
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 text-white hover:bg-saffron-500 rounded-lg transition-all duration-300 group"
                >
                  {item.icon && item.icon}
                  <span>{item.name}</span>
                  <span className="block h-0.5 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </a>
              </li>
            ))}
            {/* Special CTA Button */}
            <li>
              <a
                href="#reservations"
                className="ml-2 flex items-center px-4 py-2 bg-white text-saffron-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <FaWineGlassAlt className="mr-2" />
                Reserve Table
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-expanded={navOpen}
          >
            {navOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu with Indian-inspired design */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-saffron-700 rounded-b-lg shadow-xl"
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
                      className="flex items-center px-4 py-3 text-white hover:bg-saffron-600 rounded-lg transition-colors duration-200"
                      onClick={() => setNavOpen(false)}
                    >
                      {item.icon && item.icon}
                      <span>{item.name}</span>
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                  className="pt-2 border-t border-saffron-500/30"
                >
                  <a
                    href="#reservations"
                    className="flex items-center justify-center px-4 py-3 bg-white text-saffron-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
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