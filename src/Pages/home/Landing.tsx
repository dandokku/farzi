import { motion } from 'framer-motion';
import { FaUtensils, FaRegCalendarAlt } from 'react-icons/fa';
import heroImage from '../../assets/markus-spiske-ieJUV-Mrn3g-unsplash.jpg'; // Replace with your high-quality restaurant image

export default function Landing() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Farzi Cafe signature dishes"
          className="w-full h-full object-cover"
          style={{ opacity: 0.6 }}
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(26,26,26,0.8) 100%)'
          }}
        ></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Tagline */}
          <div 
            className="inline-block px-4 py-2 mb-6 rounded-full"
            style={{ backgroundColor: 'rgba(255, 140, 0, 0.2)' }}
          >
            <p 
              className="font-medium tracking-wider"
              style={{ color: '#FF8C00' }}
            >
              MODERN INDIAN GASTRONOMY
            </p>
          </div>

          {/* Main headline */}
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: '#ffffff', fontFamily: "'Playfair Display', serif" }}
          >
            Reimagining <span style={{ color: '#FF8C00' }}>Indian</span> Flavors
          </h1>

          {/* Subheading */}
          <p 
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
            style={{ color: '#e6d8b5' }}
          >
            Experience culinary innovation where traditional Indian recipes meet contemporary techniques
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/menu"
              className="flex items-center justify-center px-8 py-4 rounded-lg font-medium"
              style={{ 
                backgroundColor: '#FF8C00',
                color: '#ffffff',
                hoverBackgroundColor: '#E67300'
              }}
            >
              <FaUtensils className="mr-3" />
              Explore Our Menu
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/reservations"
              className="flex items-center justify-center px-8 py-4 rounded-lg font-medium border"
              style={{ 
                borderColor: '#FF8C00',
                color: '#ffffff',
                hoverBackgroundColor: 'rgba(255, 140, 0, 0.1)'
              }}
            >
              <FaRegCalendarAlt className="mr-3" />
              Book a Table
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ color: '#ffffff' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}