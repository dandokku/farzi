import Logo from "../assets/footerlogo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaTripadvisor } from "react-icons/fa";
import { MdOutlineDeliveryDining, MdOutlineLocalPhone } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-dark-800 text-golden-100 pt-16 pb-8 border-t-4 border-saffron-500">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-saffron-400 via-turmeric-500 to-saffron-400 mb-12"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Restaurant Info */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={Logo} 
              alt="Royal Spice Logo" 
              className="h-20 mb-6 filter brightness-0 invert opacity-90"
            />
            <p className="text-golden-200 text-center md:text-left mb-6 leading-relaxed">
              Experience authentic Indian cuisine crafted with generations-old recipes and modern culinary artistry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-golden-300 hover:text-white transition-colors duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-golden-300 hover:text-white transition-colors duration-300">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="text-golden-300 hover:text-white transition-colors duration-300">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-golden-300 hover:text-white transition-colors duration-300">
                <FaTripadvisor className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-serif text-xl font-bold mb-6 border-b border-golden-300/30 pb-2">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-golden-200 hover:text-saffron-400 transition-colors duration-300 flex items-center"
              >
                <span className="w-2 h-2 bg-saffron-400 rounded-full mr-3"></span>
                Home
              </Link>
              <Link 
                to="/menu" 
                className="text-golden-200 hover:text-saffron-400 transition-colors duration-300 flex items-center"
              >
                <span className="w-2 h-2 bg-saffron-400 rounded-full mr-3"></span>
                Our Menu
              </Link>
              <Link 
                to="/about" 
                className="text-golden-200 hover:text-saffron-400 transition-colors duration-300 flex items-center"
              >
                <span className="w-2 h-2 bg-saffron-400 rounded-full mr-3"></span>
                Our Story
              </Link>
              <Link 
                to="/gallery" 
                className="text-golden-200 hover:text-saffron-400 transition-colors duration-300 flex items-center"
              >
                <span className="w-2 h-2 bg-saffron-400 rounded-full mr-3"></span>
                Gallery
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-serif text-xl font-bold mb-6 border-b border-golden-300/30 pb-2">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MdOutlineLocalPhone className="text-saffron-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-golden-200 font-medium">Reservations</p>
                  <a href="tel:+11234567890" className="text-golden-300 hover:text-white transition-colors duration-300">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MdOutlineDeliveryDining className="text-saffron-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-golden-200 font-medium">Delivery</p>
                  <a href="tel:+11234567891" className="text-golden-300 hover:text-white transition-colors duration-300">
                    +1 (123) 456-7891
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <IoTimeOutline className="text-saffron-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-golden-200 font-medium">Hours</p>
                  <p className="text-golden-300">
                    Mon-Fri: 11AM - 10PM<br />
                    Sat-Sun: 10AM - 11PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-serif text-xl font-bold mb-6 border-b border-golden-300/30 pb-2">
              Newsletter
            </h3>
            <p className="text-golden-200 mb-4 text-center md:text-left">
              Subscribe for exclusive offers and events
            </p>
            <form className="w-full">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-4 py-2 rounded bg-dark-700 border border-golden-300/20 text-white focus:outline-none focus:ring-1 focus:ring-saffron-400"
                />
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-saffron-600 hover:bg-saffron-700 text-white font-medium rounded transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-golden-300/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
            <Link 
              to="/privacy" 
              className="text-golden-300 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-golden-300 hover:text-white transition-colors duration-300 text-sm"
            >
              Terms of Service
            </Link>
            <Link 
              to="/careers" 
              className="text-golden-300 hover:text-white transition-colors duration-300 text-sm"
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="text-golden-300 hover:text-white transition-colors duration-300 text-sm"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-golden-300/80 text-sm">
            &copy; {new Date().getFullYear()} Royal Spice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}