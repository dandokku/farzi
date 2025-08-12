import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";

export default function Contact() {
  return (
    <section 
      className="w-full py-28 px-6 md:px-12 lg:px-16 flex flex-col items-center"
      style={{ backgroundColor: '#F6F5F5' }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ color: '#812B1B' }}
      >
        Get In Touch
      </motion.h2>

      <motion.div 
        className="flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Contact Information */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col">
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#812B1B' }}>
            Contact Information
          </h3>
          
          <p className="text-lg mb-8" style={{ color: '#555' }}>
            Our team is ready to assist you with reservations, inquiries, or any special requests you may have.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <MdEmail className="text-2xl mt-1 mr-4" style={{ color: '#812B1B' }} />
              <div>
                <h4 className="font-semibold" style={{ color: '#333' }}>Email</h4>
                <a 
                  href="mailto:reservations@restaurant.com" 
                  className="hover:underline"
                  style={{ color: '#555' }}
                >
                  reservations@restaurant.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <MdPhone className="text-2xl mt-1 mr-4" style={{ color: '#812B1B' }} />
              <div>
                <h4 className="font-semibold" style={{ color: '#333' }}>Phone</h4>
                <a 
                  href="tel:+11234567890" 
                  className="hover:underline"
                  style={{ color: '#555' }}
                >
                  +1 (123) 456-7890
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <MdLocationOn className="text-2xl mt-1 mr-4" style={{ color: '#812B1B' }} />
              <div>
                <h4 className="font-semibold" style={{ color: '#333' }}>Location</h4>
                <p style={{ color: '#555' }}>123 Culinary Avenue<br />Gourmet City, GC 12345</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MdAccessTime className="text-2xl mt-1 mr-4" style={{ color: '#812B1B' }} />
              <div>
                <h4 className="font-semibold" style={{ color: '#333' }}>Hours</h4>
                <p style={{ color: '#555' }}>
                  Monday - Friday: 11am - 10pm<br />
                  Saturday - Sunday: 10am - 11pm
                </p>
              </div>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-auto"
          >
            <Link
              to="/reservations"
              className="inline-flex items-center px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              style={{
                backgroundColor: '#812B1B',
                color: '#F6F5F5'
              }}
            >
              Make a Reservation
            </Link>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-80 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.086078808252!2d77.0851679!3d28.502432199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1943f7fbd389%3A0x497033a06ada8b70!2s825%2C%20Phase%20V%2C%20Udyog%20Vihar%2C%20Sector%2019%2C%20Gurugram%2C%20Haryana%20122008%2C%20India!5e1!3m2!1sen!2sng!4v1727776582805!5m2!1sen!2sng"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}