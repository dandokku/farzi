import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUtensils, FaWineGlassAlt, FaInstagram, FaFacebook } from 'react-icons/fa';
import { MdDeliveryDining, MdEmail } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Menu', href: '/menu', icon: <FaUtensils className="mr-2" /> },
    { name: 'Gallery', href: '/gallery', icon: null },
    { name: 'Delivery', href: '/delivery', icon: <MdDeliveryDining className="mr-2" /> },
    { name: 'Contact', href: '/contact', icon: null }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://instagram.com' },
    { icon: <FaFacebook />, href: 'https://facebook.com' },
    { icon: <MdEmail />, href: 'mailto:contact@example.com' }
  ];

  return (
    <>      
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'shadow-lg' : ''}`}
        style={{ 
          backgroundColor: scrolled ? '#812B1B' : 'rgba(129, 43, 27, 0.95)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 group">
              <img 
                src={Logo} 
                alt="Restaurant Logo" 
                className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`}
                style={{ width: 'auto' }}
              />
              {!scrolled && (
                <span 
                  className="hidden md:block text-xl font-serif italic transition-all duration-300"
                  style={{ color: '#F6F5F5' }}
                >
                  Fine Dining Experience
                </span>
              )}
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 group ${activeLink === item.name ? 'font-semibold' : ''}`}
                    style={{
                      color: '#F6F5F5',
                      backgroundColor: activeLink === item.name ? 'rgba(255,255,255,0.1)' : 'transparent'
                    }}
                    onClick={() => setActiveLink(item.name)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <span 
                      className="block h-0.5 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                      style={{ backgroundColor: '#F6F5F5' }}
                    ></span>
                  </a>
                </li>
              ))}
              
              {/* Social Links (Desktop) */}
              <li className="ml-4 flex space-x-3">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
                    style={{ color: '#F6F5F5' }}
                  >
                    {link.icon}
                  </a>
                ))}
              </li>
              
              {/* Reserve Table Button */}
              <li>
                <a
                  href="/reservations"
                  className="ml-4 flex items-center px-5 py-2.5 font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                  style={{
                    backgroundColor: '#F6F5F5',
                    color: '#812B1B',
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
              style={{ color: '#F6F5F5' }}
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
                style={{ backgroundColor: '#812B1B' }}
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
                        className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${activeLink === item.name ? 'font-semibold bg-white bg-opacity-10' : ''}`}
                        style={{
                          color: '#F6F5F5',
                        }}
                        onClick={() => {
                          setActiveLink(item.name);
                          setNavOpen(false);
                        }}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </a>
                    </motion.li>
                  ))}
                  
                  {/* Social Links (Mobile) */}
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                    className="flex justify-center space-x-4 py-3"
                  >
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
                        style={{ color: '#F6F5F5' }}
                        onClick={() => setNavOpen(false)}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </motion.li>
                  
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (navItems.length + 1) * 0.1, duration: 0.3 }}
                    className="pt-2"
                    style={{ borderTop: '1px solid rgba(246, 245, 245, 0.3)' }}
                  >
                    <a
                      href="/reservations"
                      className="flex items-center justify-center px-4 py-3 font-medium rounded-lg transition-colors duration-200 hover:scale-105"
                      style={{
                        backgroundColor: '#F6F5F5',
                        color: '#812B1B',
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
    </>
  );
}