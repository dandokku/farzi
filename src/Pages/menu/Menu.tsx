import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaPepperHot, FaWineGlassAlt } from 'react-icons/fa';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

const menuItems = {
  starters: [
    { name: 'Crispy Samosa Bites', description: 'Flaky pastry with spiced potato filling and chutney', price: '$12', vegetarian: true, spicy: false },
    { name: 'Tandoori Scallops', description: 'Grilled scallops with smoky seasoning and mint sauce', price: '$18', vegetarian: false, spicy: true },
    { name: 'Chaat Platter', description: 'Yogurt, chutney, and crunchy sev mix', price: '$14', vegetarian: true, spicy: false },
    { name: 'Mini Dhokla', description: 'Steamed savory cakes with herbs', price: '$16', vegetarian: true, spicy: false },
    { name: 'Watermelon Feta Salad', description: 'Chilled watermelon with feta and basil', price: '$15', vegetarian: true, spicy: false },
    { name: 'Pani Puri', description: 'Crispy shells filled with tangy and spicy water', price: '$17', vegetarian: true, spicy: true },
    { name: 'Carrot Soup', description: 'Smooth carrot soup with ginger', price: '$14', vegetarian: true, spicy: false },
    { name: 'Seaweed Tempura', description: 'Crispy seaweed with soy dip', price: '$16', vegetarian: false, spicy: false },
    { name: 'Eggplant Dip', description: 'Smoky mashed eggplant with bread', price: '$15', vegetarian: true, spicy: false },
    { name: 'Beetroot Salad', description: 'Beets with light dressing and herbs', price: '$14', vegetarian: true, spicy: false },
    { name: 'Popcorn Shrimp', description: 'Crispy shrimp bites', price: '$18', vegetarian: false, spicy: false },
    { name: 'Avocado Bites', description: 'Creamy avocado with a bit of spice', price: '$16', vegetarian: true, spicy: true },
    { name: 'Corn Cups', description: 'Sweet corn with butter and herbs', price: '$14', vegetarian: true, spicy: false }
  ],
  mains: [
    { name: 'Butter Chicken Pasta', description: 'Pasta stuffed with butter chicken', price: '$24', vegetarian: false, spicy: true },
    { name: 'Lamb Rogan Josh', description: 'Tender lamb with spiced sauce and rice', price: '$32', vegetarian: false, spicy: true },
    { name: 'Jackfruit Biryani', description: 'Basmati rice with jackfruit and fried onions', price: '$22', vegetarian: true, spicy: false },
    { name: 'Coconut Curry Noodles', description: 'Noodles in creamy coconut curry', price: '$20', vegetarian: true, spicy: true },
    { name: 'Duck with Tamarind Sauce', description: 'Grilled duck with sweet tamarind glaze', price: '$34', vegetarian: false, spicy: false },
    { name: 'Grilled Salmon', description: 'Salmon with miso and sesame', price: '$28', vegetarian: false, spicy: false },
    { name: 'Paneer Puff Layers', description: 'Puff pastry with paneer tikka filling', price: '$23', vegetarian: true, spicy: true },
    { name: 'Herb Fish', description: 'White fish with fresh herb sauce', price: '$30', vegetarian: false, spicy: false },
    { name: 'Veggie Stack', description: 'Layered roasted vegetables', price: '$22', vegetarian: true, spicy: false },
    { name: 'Venison with Parsnip Mash', description: 'Roasted venison with mash', price: '$36', vegetarian: false, spicy: false },
    { name: 'Chocolate Chili Chicken', description: 'Chicken in mild chocolate and chili sauce', price: '$26', vegetarian: false, spicy: true },
    { name: 'Quinoa Salad', description: 'Healthy quinoa with lemon dressing', price: '$20', vegetarian: true, spicy: false },
    { name: 'Beef Bao Buns', description: 'Soft buns filled with beef stew', price: '$28', vegetarian: false, spicy: true }
  ],
  desserts: [
    { name: 'Gulab Jamun Soufflé', description: 'Fluffy cake with gulab jamun flavor', price: '$14', vegetarian: true, spicy: false },
    { name: 'Saffron Panna Cotta', description: 'Creamy dessert with saffron', price: '$12', vegetarian: true, spicy: false },
    { name: 'Chocolate Chai Mousse', description: 'Chocolate mousse with chai flavor', price: '$16', vegetarian: true, spicy: false },
    { name: 'Coconut Ice with Pineapple', description: 'Shaved coconut ice and pineapple', price: '$14', vegetarian: true, spicy: false },
    { name: 'Mango Parfait', description: 'Layered dessert with mango and cream', price: '$15', vegetarian: true, spicy: false },
    { name: 'Raspberry Mousse', description: 'Soft raspberry mousse in chocolate shell', price: '$16', vegetarian: true, spicy: false },
    { name: 'Chocolate Chili Dome', description: 'Chocolate dessert with a hint of chili', price: '$18', vegetarian: true, spicy: true },
    { name: 'Pistachio Rolls', description: 'Sweet pastry rolls with pistachio', price: '$14', vegetarian: true, spicy: false },
    { name: 'Lemon Meringue', description: 'Tangy lemon dessert with meringue', price: '$13', vegetarian: true, spicy: false },
    { name: 'Black Sesame Pudding', description: 'Smooth sesame-flavored pudding', price: '$15', vegetarian: true, spicy: false },
    { name: 'Tiramisu', description: 'Classic coffee-flavored dessert', price: '$14', vegetarian: true, spicy: false }
  ],
  drinks: [
    { name: 'Masala Martini', description: 'Spiced gin cocktail', price: '$15', vegetarian: true, spicy: false },
    { name: 'Mango Lassi', description: 'Chilled mango yogurt drink', price: '$10', vegetarian: true, spicy: false },
    { name: 'Spiced Old Fashioned', description: 'Bourbon with warm spices', price: '$18', vegetarian: true, spicy: false },
    { name: 'Cucumber Mint Cooler', description: 'Refreshing cucumber and mint drink', price: '$12', vegetarian: true, spicy: false },
    { name: 'Pineapple Chili Margarita', description: 'Sweet pineapple with mild chili', price: '$14', vegetarian: true, spicy: true },
    { name: 'Rose Lemon Spritz', description: 'Rose-flavored sparkling drink', price: '$13', vegetarian: true, spicy: false },
    { name: 'Lavender Cold Brew', description: 'Iced coffee with lavender', price: '$12', vegetarian: true, spicy: false },
    { name: 'Tamarind Mule', description: 'Tamarind with ginger beer', price: '$15', vegetarian: true, spicy: false },
    { name: 'Saffron Gin Fizz', description: 'Gin cocktail with saffron', price: '$14', vegetarian: true, spicy: false },
    { name: 'Cardamom Iced Tea', description: 'Iced tea with cardamom flavor', price: '$11', vegetarian: true, spicy: false },
    { name: 'Matcha Latte', description: 'Green tea latte with coconut', price: '$12', vegetarian: true, spicy: false },
    { name: 'Passionfruit Mojito', description: 'Passionfruit with mint and lime', price: '$14', vegetarian: true, spicy: false },
    { name: 'Berry Hibiscus Cooler', description: 'Berry drink with hibiscus flavor', price: '$12', vegetarian: true, spicy: false }
  ]
};



  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Craft Drinks' }
  ];

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
          Our Culinary Creations
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#555' }}>
          Experience our modernist approach to traditional flavors through this carefully crafted menu
        </p>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-2 rounded-full font-medium transition-all ${activeCategory === category.id ? 'shadow-md' : 'shadow-sm'}`}
            style={{
              backgroundColor: activeCategory === category.id ? '#812B1B' : 'rgba(129, 43, 27, 0.1)',
              color: activeCategory === category.id ? '#F6F5F5' : '#812B1B'
            }}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuItems[activeCategory].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold" style={{ color: '#812B1B' }}>{item.name}</h3>
                <span className="font-medium" style={{ color: '#812B1B' }}>{item.price}</span>
              </div>
              <p className="mb-4" style={{ color: '#555' }}>{item.description}</p>
              <div className="flex gap-4">
                {item.vegetarian && (
                  <span className="flex items-center text-sm" style={{ color: '#555' }}>
                    <FaLeaf className="mr-1" /> Vegetarian
                  </span>
                )}
                {item.spicy && (
                  <span className="flex items-center text-sm" style={{ color: '#555' }}>
                    <FaPepperHot className="mr-1" /> Spicy
                  </span>
                )}
                {activeCategory === 'drinks' && (
                  <span className="flex items-center text-sm" style={{ color: '#555' }}>
                    <FaWineGlassAlt className="mr-1" /> Alcoholic
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dietary Key */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto"
      >
        <h3 className="text-lg font-bold mb-4 text-center" style={{ color: '#812B1B' }}>
          Dietary Information
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center">
            <FaLeaf className="mr-2" style={{ color: '#812B1B' }} />
            <span style={{ color: '#555' }}>Vegetarian</span>
          </div>
          <div className="flex items-center">
            <FaPepperHot className="mr-2" style={{ color: '#812B1B' }} />
            <span style={{ color: '#555' }}>Spicy</span>
          </div>
          <div className="flex items-center">
            <FaWineGlassAlt className="mr-2" style={{ color: '#812B1B' }} />
            <span style={{ color: '#555' }}>Contains Alcohol</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;