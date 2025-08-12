import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WelcomeImage from "../../assets/1.png";
import { FaArrowRight } from "react-icons/fa";

export default function Welcome() {
  return (
    <section 
      className="relative py-20 md:py-32 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12"
      style={{ backgroundColor: '#F6F5F5' }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#812B1B 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Text content */}
      <motion.div 
        className="text-center md:text-left max-w-2xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ color: '#812B1B' }}
        >
          Welcome to Our Restaurant
        </h1>
        
        <p 
          className="text-lg md:text-xl mb-8"
          style={{ color: '#555' }}
        >
          With a vision of bringing culinary excellence back "in-Vogue", we endeavor to showcase a unique, 
          modernist approach to dining, where guests not only enjoy culinary innovations but experience 
          the artistry behind each creation.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/about" 
            className="inline-flex items-center px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
            style={{
              backgroundColor: '#812B1B',
              color: '#FFFFFF'
            }}
          >
            Discover Our Story
            <FaArrowRight className="ml-3" />
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Image */}
      <motion.div
        className="relative w-full max-w-2xl z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={WelcomeImage}
            alt="Restaurant Interior"
            className="w-full h-auto object-cover"
            style={{ aspectRatio: '4/3' }}
          />
          
          {/* Decorative border */}
          <div 
            className="absolute inset-0 border-8 pointer-events-none"
            style={{ 
              borderColor: 'rgba(129, 43, 27, 0.2)',
              borderRadius: '1rem'
            }}
          ></div>
          
          {/* Decorative corner elements */}
          <div 
            className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4"
            style={{ 
              borderColor: '#812B1B',
            }}
          ></div>
          <div 
            className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4"
            style={{ 
              borderColor: '#812B1B',
            }}
          ></div>
        </div>
      </motion.div>
    </section>
  );
}