import { motion } from 'framer-motion';
import { FaUtensils, FaWineGlassAlt, FaArrowRight, FaMobileAlt } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import ChefImage from '../../assets/chef.svg';

export default function Landing() {
  return (
    <section 
      className="relative overflow-hidden pt-20 pb-32"
      style={{ backgroundColor: '#F6F5F5' }}
    >
      {/* Background texture */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#812B1B 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          {/* Text content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span 
                  className="block mb-2"
                  style={{ color: '#812B1B' }}
                >
                  Culinary Excellence
                </span>
                <span 
                  className="block text-3xl md:text-4xl font-normal"
                  style={{ color: '#555' }}
                >
                  Redefined Dining Experience
                </span>
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
                style={{ color: '#555' }}
              >
                Our chefs transform seasonal ingredients into modern masterpieces, blending traditional techniques with contemporary flair for an unforgettable dining journey.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <motion.a
                  href="/reservations"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center px-8 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                  style={{
                    backgroundColor: '#812B1B',
                    color: '#F6F5F5'
                  }}
                >
                  <FaWineGlassAlt className="mr-3 text-lg" />
                  Reserve a Table
                  <FaArrowRight className="ml-3" />
                </motion.a>
                
                <motion.a
                  href="/menu"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center px-8 py-3.5 rounded-full font-medium border-2 hover:shadow-md transition-all"
                  style={{
                    borderColor: '#812B1B',
                    color: '#812B1B',
                    backgroundColor: 'rgba(129, 43, 27, 0.05)'
                  }}
                >
                  <FaUtensils className="mr-3 text-lg" />
                  Explore Menu
                </motion.a>
              </div>
              
              <div className="flex items-center bg-white rounded-lg p-3 shadow-sm max-w-md">
                <div className="flex items-center justify-center p-2 rounded-full mr-3" 
                  style={{ backgroundColor: 'rgba(129, 43, 27, 0.1)' }}>
                  <MdDeliveryDining className="text-xl" style={{ color: '#812B1B' }} />
                </div>
                <div>
                  <p className="font-medium" style={{ color: '#812B1B' }}>Now delivering</p>
                  <div className="flex items-center">
                    <FaMobileAlt className="mr-1 text-sm" style={{ color: '#555' }} />
                    <span style={{ color: '#555', fontSize: '0.9rem' }}>
                      Order through our mobile app
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Image section */}
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-xl"
            >
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  aspectRatio: '1/1',
                  backgroundColor: 'rgba(129, 43, 27, 0.03)',
                  border: '1px solid rgba(129, 43, 27, 0.1)'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={ChefImage} 
                    alt="Master Chef at work" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Decorative elements */}
                <div 
                  className="absolute top-0 left-0 w-32 h-32 -mt-6 -ml-6 rounded-full border-8 pointer-events-none"
                  style={{ 
                    borderColor: 'rgba(129, 43, 27, 0.1)'
                  }}
                ></div>
                <div 
                  className="absolute bottom-0 right-0 w-24 h-24 -mb-6 -mr-6 rounded-full border-8 pointer-events-none"
                  style={{ 
                    borderColor: 'rgba(129, 43, 27, 0.1)'
                  }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom accent */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ 
          background: 'linear-gradient(90deg, rgba(129,43,27,0) 0%, #812B1B 50%, rgba(129,43,27,0) 100%)'
        }}
      ></div>
    </section>
  );
}