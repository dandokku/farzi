import React from 'react';
import { motion } from 'framer-motion';

const GastronomicIllusion: React.FC = () => {
  const contentItems = [
    {
      title: "Gourmet Experience",
      description: "Focusing on the gourmet diner as well as the youth of India, we aim to bring Indian cuisine back 'In-Vogue'. Our concept has many connotations, but here it has just one - creating an illusion with our cuisine. Best described as a transformative gourmet journey.",
      image: "https://images.unsplash.com/photo-1464093515883-ec948246accb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdvdXJtZXR8ZW58MHx8MHx8fDA%3D",
      color: '#812B1B'
    },
    {
      title: "Modernist Cuisine",
      description: "Flowing smoke, pebble-like smooth spheres, table theatrics and culinary illusion are just a few aspects that define our unique dining experience where presentation meets innovation.",
      image: "https://plus.unsplash.com/premium_photo-1695582868702-5b0f91584d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fE1vZGVybmlzdCUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D",
      color: '#5E1F15'
    },
    {
      title: "Our Vision",
      description: "With a vision of bringing Indian Cuisine back 'In-Vogue', we showcase a unique, modernist approach to Indian food, where guests don't just eat but experience culinary artistry through all senses.",
      image: "https://plus.unsplash.com/premium_photo-1669150852127-2435412047f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwQ3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D",
      color: '#3A130D'
    }
  ];

  return (
    <div 
      className="w-full py-20 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: '#F6F5F5' }}
    >
      <motion.h1 
        className="text-4xl md:text-6xl text-center mb-16 font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ color: '#812B1B' }}
      >
        The Ultimate Gastronomic Illusion
      </motion.h1>

      <div className="space-y-16">
        {contentItems.map((item, index) => (
          <motion.div 
            key={index}
            className={`grid grid-cols-1 ${index === 1 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-8`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {index % 2 === 0 ? (
              <>
                <div className="bg-white p-8 flex flex-col justify-center rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h2>
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ color: '#555' }}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="relative h-80 md:h-full rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="relative h-80 md:h-full rounded-xl overflow-hidden order-first md:order-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="bg-white p-8 flex flex-col justify-center rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h2 
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h2>
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ color: '#555' }}
                  >
                    {item.description}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GastronomicIllusion;