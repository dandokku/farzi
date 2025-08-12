import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of image URLs for the gallery
  const images = [
    'https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1671394138163-ba8be139614b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1445979323117-80453f573b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1528451635828-f28cd48439a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1685156328658-da6116852b4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1582391123232-6130296f1fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1631791956434-42468596a5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1498531872221-ce6d6216be71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D'
  ];

  const openFullscreen = (imgSrc, index) => {
    setSelectedImage(imgSrc);
    setCurrentIndex(index);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="w-full py-16 px-6 md:px-12" style={{ backgroundColor: '#F6F5F5' }}>
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ color: '#812B1B' }}
      >
        Culinary Gallery
      </motion.h1>

      {/* Bento Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${
              index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : 
              index % 7 === 0 ? 'md:col-span-2' : 
              'col-span-1 row-span-1'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            onClick={() => openFullscreen(image, index)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium">View Dish</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullscreen}
          >
            <FiX
              className="absolute top-6 right-6 text-white text-3xl cursor-pointer z-50 hover:text-gray-300 transition-colors"
              onClick={closeFullscreen}
            />
            
            <button 
              className="absolute left-6 text-white text-3xl z-50 p-2 hover:bg-white/10 rounded-full transition-all"
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
            >
              <FiChevronLeft size={32} />
            </button>
            
            <motion.img
              key={currentIndex}
              src={selectedImage}
              alt="Fullscreen"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            <button 
              className="absolute right-6 text-white text-3xl z-50 p-2 hover:bg-white/10 rounded-full transition-all"
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
            >
              <FiChevronRight size={32} />
            </button>

            <div className="absolute bottom-6 left-0 right-0 text-center text-white">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;