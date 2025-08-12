import { motion } from 'framer-motion';
import { FaUtensils, FaWineGlassAlt, FaArrowRight } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import Chef from '../../assets/chef.svg';

export default function Landing() {
  return (
    <section 
      className="relative overflow-hidden pt-16"
       
    >
      {/* Background elements */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#812B1B 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center h-full pt-12 pb-24">
          {/* Text content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span style={{ color: '#812B1B' }}>Exceptional Dining</span><br />
                <span className="font-light" style={{ color: '#333' }}>Experience</span>
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-8 max-w-lg"
                style={{ color: '#555' }}
              >
                Discover our carefully crafted menu featuring modern interpretations of classic dishes, prepared with the finest seasonal ingredients.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <motion.a
                  href="/reservations"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 rounded-full font-medium shadow-lg"
                  style={{
                    backgroundColor: '#812B1B',
                    color: '#FFFFFF'
                  }}
                >
                  <FaWineGlassAlt className="mr-2" />
                  Reserve a Table
                  <FaArrowRight className="ml-2" />
                </motion.a>
                
                <motion.a
                  href="/menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 rounded-full font-medium border-2"
                  style={{
                    borderColor: '#812B1B',
                    color: '#812B1B'
                  }}
                >
                  <FaUtensils className="mr-2" />
                  View Menu
                </motion.a>
              </div>
              
              <div className="flex items-center">
                <MdDeliveryDining 
                  className="text-2xl mr-2" 
                  style={{ color: '#812B1B' }} 
                />
                <span style={{ color: '#555' }}>
                  Now delivering - Order through our app
                </span>
              </div>
            </motion.div>
          </div>
          
          {/* Image/content placeholder */}
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-lg"
            >
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  aspectRatio: '1/1',
                }}
              >
                {/* This would be your hero image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={Chef} alt="" />
                </div>
                
                {/* Decorative elements */}
                <div 
                  className="absolute top-0 left-0 w-32 h-32 -mt-8 -ml-8 rounded-full"
                  style={{ 
                    backgroundColor: 'rgba(246, 245, 245, 0.1)',
                    border: '2px dashed rgba(246, 245, 245, 0.3)'
                  }}
                ></div>
                <div 
                  className="absolute bottom-0 right-0 w-24 h-24 -mb-6 -mr-6 rounded-full"
                  style={{ 
                    backgroundColor: 'rgba(246, 245, 245, 0.1)',
                    border: '2px dashed rgba(246, 245, 245, 0.3)'
                  }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{ 
          background: 'linear-gradient(to right, #812B1B, #F6F5F5, #812B1B)'
        }}
      ></div>
    </section>
  );
}