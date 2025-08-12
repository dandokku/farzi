import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaYelp } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer 
      className="w-full pt-16 pb-8"
      style={{ backgroundColor: '#812B1B', color: '#F6F5F5' }}
    >
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-opacity-20 border-white w-full">
              About Us
            </h3>
            <p className="mb-6 leading-relaxed text-center md:text-left">
              Bringing culinary innovation with a modern twist to traditional flavors since 2010.
            </p>
            <div className="flex space-x-4">
              {[FaInstagram, FaFacebookF, FaTwitter, FaYelp].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="text-xl transition-opacity hover:opacity-80"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-opacity-20 border-white w-full">
              Quick Links
            </h3>
            <nav className="grid grid-cols-1 gap-3 w-full">
              {[
                { name: 'Home', to: '/' },
                { name: 'Menu', to: '/menu' },
                { name: 'Gallery', to: '/gallery' },
                { name: 'Events', to: '/events' },
                { name: 'Careers', to: '/careers' },
                { name: 'Contact', to: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.to}
                  className="transition-all hover:pl-2 hover:font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-opacity-20 border-white w-full">
              Contact Us
            </h3>
            <div className="space-y-4 w-full">
              <div className="flex items-start">
                <MdLocationOn className="mt-1 mr-3 flex-shrink-0 text-lg" />
                <address className="not-italic">
                  123 Culinary Street<br />
                  Foodie City, FC 12345
                </address>
              </div>
              <div className="flex items-start">
                <MdOutlinePhone className="mt-1 mr-3 flex-shrink-0 text-lg" />
                <div>
                  <a href="tel:+11234567890" className="hover:underline">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MdOutlineEmail className="mt-1 mr-3 flex-shrink-0 text-lg" />
                <div>
                  <a href="mailto:info@restaurant.com" className="hover:underline">
                    info@restaurant.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-opacity-20 border-white w-full">
              Newsletter
            </h3>
            <p className="mb-4 text-center md:text-left">
              Subscribe for exclusive offers and events
            </p>
            <form className="w-full">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-4 py-2 rounded focus:outline-none"
                  style={{ 
                    backgroundColor: 'rgba(246, 245, 245, 0.1)',
                    border: '1px solid rgba(246, 245, 245, 0.3)',
                    color: '#F6F5F5',
                  }}
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 font-medium rounded transition-colors hover:bg-opacity-90 whitespace-nowrap"
                  style={{ 
                    backgroundColor: '#F6F5F5',
                    color: '#812B1B',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="mt-6 w-full">
              <h4 className="font-medium mb-2">Opening Hours</h4>
              <p>Mon-Thu: 11am - 10pm</p>
              <p>Fri-Sat: 11am - 11pm</p>
              <p>Sun: 10am - 9pm</p>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-opacity-20 border-white flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0 text-sm">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <Link to="/sitemap" className="hover:underline">Sitemap</Link>
          </div>
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}