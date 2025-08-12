import Logo from "../assets/footerlogo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaTripadvisor } from "react-icons/fa";
import { MdOutlineDeliveryDining, MdOutlineLocalPhone } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer 
      className="pt-16 pb-8" 
      style={{ 
        backgroundColor: '#812B1B',
        borderTop: '2px solid #F6F5F5'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Restaurant Info */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={Logo} 
              alt="Restaurant Logo" 
              className="h-20 mb-6"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p 
              className="mb-6 leading-relaxed text-center md:text-left"
              style={{ color: '#F6F5F5' }}
            >
              Experience our modern culinary approach that blends tradition with innovation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaInstagram className="text-xl" />, href: "#" },
                { icon: <FaFacebookF className="text-xl" />, href: "#" },
                { icon: <FaTwitter className="text-xl" />, href: "#" },
                { icon: <FaTripadvisor className="text-xl" />, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="transition-colors duration-300 hover:opacity-80"
                  style={{ color: '#F6F5F5' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 
              className="text-xl font-bold mb-6 pb-2"
              style={{ 
                color: '#FFFFFF',
                borderBottom: '1px solid rgba(246, 245, 245, 0.3)'
              }}
            >
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {[
                { name: 'Home', to: '/' },
                { name: 'Our Menu', to: '/menu' },
                { name: 'Our Story', to: '/about' },
                { name: 'Gallery', to: '/gallery' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.to}
                  className="flex items-center transition-colors duration-300 hover:translate-x-1"
                  style={{ 
                    color: '#F6F5F5',
                  }}
                >
                  <span 
                    className="w-2 h-2 rounded-full mr-3 transition-all duration-300"
                    style={{ backgroundColor: '#F6F5F5' }}
                  ></span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 
              className="text-xl font-bold mb-6 pb-2"
              style={{ 
                color: '#FFFFFF',
                borderBottom: '1px solid rgba(246, 245, 245, 0.3)'
              }}
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MdOutlineLocalPhone 
                  className="mt-1 mr-3 flex-shrink-0" 
                  style={{ color: '#F6F5F5' }}
                />
                <div>
                  <p style={{ color: '#F6F5F5', fontWeight: '500' }}>Reservations</p>
                  <a 
                    href="tel:+11234567890"
                    className="transition-colors duration-300 hover:underline"
                    style={{ 
                      color: '#FFFFFF',
                    }}
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MdOutlineDeliveryDining 
                  className="mt-1 mr-3 flex-shrink-0" 
                  style={{ color: '#F6F5F5' }}
                />
                <div>
                  <p style={{ color: '#F6F5F5', fontWeight: '500' }}>Delivery</p>
                  <a 
                    href="tel:+11234567891"
                    className="transition-colors duration-300 hover:underline"
                    style={{ 
                      color: '#FFFFFF',
                    }}
                  >
                    +1 (123) 456-7891
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <IoTimeOutline 
                  className="mt-1 mr-3 flex-shrink-0" 
                  style={{ color: '#F6F5F5' }}
                />
                <div>
                  <p style={{ color: '#F6F5F5', fontWeight: '500' }}>Hours</p>
                  <p style={{ color: '#FFFFFF' }}>
                    Mon-Fri: 11AM - 10PM<br />
                    Sat-Sun: 10AM - 11PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 
              className="text-xl font-bold mb-6 pb-2"
              style={{ 
                color: '#FFFFFF',
                borderBottom: '1px solid rgba(246, 245, 245, 0.3)'
              }}
            >
              Newsletter
            </h3>
            <p 
              className="mb-4 text-center md:text-left"
              style={{ color: '#F6F5F5' }}
            >
              Subscribe for exclusive offers and events
            </p>
            <form className="w-full">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
                  style={{ 
                    backgroundColor: 'rgba(246, 245, 245, 0.1)',
                    border: '1px solid rgba(246, 245, 245, 0.3)',
                    color: '#FFFFFF',
                  }}
                />
                <button 
                  type="submit" 
                  className="px-6 py-2 font-medium rounded transition-colors duration-300 hover:bg-opacity-90"
                  style={{ 
                    backgroundColor: '#F6F5F5',
                    color: '#812B1B',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom footer */}
        <div 
          className="pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderTop: '1px solid rgba(246, 245, 245, 0.3)' }}
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
            {[
              { name: 'Privacy Policy', to: '/privacy' },
              { name: 'Terms of Service', to: '/terms' },
              { name: 'Careers', to: '/careers' },
              { name: 'Contact Us', to: '/contact' }
            ].map((link) => (
              <Link 
                key={link.name}
                to={link.to}
                className="transition-colors duration-300 text-sm hover:underline"
                style={{ 
                  color: '#F6F5F5',
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p 
            className="text-sm"
            style={{ color: 'rgba(246, 245, 245, 0.8)' }}
          >
            &copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}