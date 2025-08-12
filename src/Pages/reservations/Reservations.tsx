import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUserFriends, FaPhone, FaEnvelope } from 'react-icons/fa';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Reservation submitted:', formData);
    setSubmitted(true);
  };

  const availableTimes = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '5:00 PM',
    '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  if (submitted) {
    return (
      <section className="w-full py-28 px-6 md:px-12 flex items-center justify-center" style={{ backgroundColor: '#F6F5F5' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#812B1B' }}>Reservation Confirmed!</h2>
          <p className="text-lg mb-6" style={{ color: '#555' }}>
            Thank you, <span className="font-semibold">{formData.name}</span>. Your table for {formData.guests} on {formData.date} at {formData.time} has been reserved.
          </p>
          <p className="mb-8" style={{ color: '#555' }}>
            We've sent a confirmation to <span className="font-semibold">{formData.email}</span>. Please contact us if you need to make any changes.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full font-medium shadow-md"
            style={{ backgroundColor: '#812B1B', color: '#F6F5F5' }}
            onClick={() => setSubmitted(false)}
          >
            Make Another Reservation
          </motion.button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="w-full py-28 px-6 md:px-12" style={{ backgroundColor: '#F6F5F5' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#812B1B' }}>
          Reserve Your Table
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#555' }}>
          Experience our culinary artistry by booking a table below. We'll contact you to confirm your reservation.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Reservation Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="mb-6">
              <label className="block mb-2 font-medium" style={{ color: '#812B1B' }}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  borderColor: 'rgba(129, 43, 27, 0.3)',
                  focusRing: '#812B1B'
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#812B1B' }}>Email</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: 'rgba(129, 43, 27, 0.5)' }} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pl-10 rounded-lg border focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: 'rgba(129, 43, 27, 0.3)',
                      focusRing: '#812B1B'
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#812B1B' }}>Phone</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: 'rgba(129, 43, 27, 0.5)' }} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pl-10 rounded-lg border focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: 'rgba(129, 43, 27, 0.3)',
                      focusRing: '#812B1B'
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#812B1B' }}>Date</label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: 'rgba(129, 43, 27, 0.5)' }} />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 pl-10 rounded-lg border focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: 'rgba(129, 43, 27, 0.3)',
                      focusRing: '#812B1B'
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: '#812B1B' }}>Time</label>
                <div className="relative">
                  <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: 'rgba(129, 43, 27, 0.5)' }} />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pl-10 rounded-lg border focus:outline-none focus:ring-2 appearance-none"
                    style={{ 
                      borderColor: 'rgba(129, 43, 27, 0.3)',
                      focusRing: '#812B1B'
                    }}
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium" style={{ color: '#812B1B' }}>Number of Guests</label>
              <div className="relative">
                <FaUserFriends className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: 'rgba(129, 43, 27, 0.5)' }} />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-10 rounded-lg border focus:outline-none focus:ring-2 appearance-none"
                  style={{ 
                    borderColor: 'rgba(129, 43, 27, 0.3)',
                    focusRing: '#812B1B'
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                  ))}
                  <option value="9+">9+ people (contact us)</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block mb-2 font-medium" style={{ color: '#812B1B' }}>Special Requests</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  borderColor: 'rgba(129, 43, 27, 0.3)',
                  focusRing: '#812B1B'
                }}
                placeholder="Allergies, celebrations, seating preferences..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-full font-medium shadow-lg"
              style={{ backgroundColor: '#812B1B', color: '#F6F5F5' }}
            >
              Reserve Table
            </motion.button>
          </form>
        </motion.div>

        {/* Reservation Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#812B1B' }}>Reservation Details</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#333' }}>Hours</h3>
                <p style={{ color: '#555' }}>
                  <span className="font-medium">Monday - Friday:</span> 11:00 AM - 10:00 PM<br />
                  <span className="font-medium">Saturday - Sunday:</span> 10:00 AM - 11:00 PM
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#333' }}>Special Occasions</h3>
                <p style={{ color: '#555' }}>
                  Planning a celebration? Let us know in your special requests and we'll do our best to make it memorable.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#333' }}>Large Parties</h3>
                <p style={{ color: '#555' }}>
                  For parties of 9 or more, please call us directly at <span className="font-semibold">+1 (123) 456-7890</span> to arrange your reservation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#333' }}>Cancellation Policy</h3>
                <p style={{ color: '#555' }}>
                  Please notify us at least 24 hours in advance if you need to cancel or modify your reservation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservations;