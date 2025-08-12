import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaPepperHot, FaWineGlassAlt } from 'react-icons/fa';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuItems = {
  starters: [
    { name: 'Deconstructed Samosa', description: 'Crispy pastry with spiced potato foam, chutney gel', price: '$12', vegetarian: true, spicy: false },
    { name: 'Tandoori Scallops', description: 'Seared scallops with smoked paprika foam, mint chutney', price: '$18', vegetarian: false, spicy: true },
    { name: 'Molecular Chaat', description: 'Spherified yogurt, tamarind air, sev crisp', price: '$14', vegetarian: true, spicy: false },
    { name: 'Truffle Dhokla Bites', description: 'Steamed gram flour cake with truffle oil mist', price: '$16', vegetarian: true, spicy: false },
    { name: 'Compressed Watermelon Salad', description: 'Feta snow, basil air, balsamic pearls', price: '$15', vegetarian: true, spicy: false },
    { name: 'Goat Cheese Pani Puri', description: 'Crisp puris with goat cheese espuma and jalapeño caviar', price: '$17', vegetarian: true, spicy: true },
    { name: 'Carrot Ginger Espuma Soup', description: 'Served in a test tube with coconut foam', price: '$14', vegetarian: true, spicy: false },
    { name: 'Seaweed Tempura Clouds', description: 'Nori tempura with miso vapor', price: '$16', vegetarian: false, spicy: false },
    { name: 'Smoked Eggplant Velouté', description: 'Eggplant purée with edible ash', price: '$15', vegetarian: true, spicy: false },
    { name: 'Pickled Beet Tartare', description: 'Beetroot pearls with horseradish air', price: '$14', vegetarian: true, spicy: false },
    { name: 'Nitrogen Popcorn Shrimp', description: 'Tempura shrimp with instant-freeze popcorn dust', price: '$18', vegetarian: false, spicy: false },
    { name: 'Avocado Wasabi Sphere', description: 'Encased avocado purée with wasabi microfoam', price: '$16', vegetarian: true, spicy: true },
    { name: 'Charred Corn Espuma Cups', description: 'Corn espuma in edible spoons', price: '$14', vegetarian: true, spicy: false }
  ],
  mains: [
    { name: 'Butter Chicken Cannelloni', description: 'House-made pasta filled with butter chicken, makhani foam', price: '$24', vegetarian: false, spicy: true },
    { name: 'Lamb Shank Rogan Josh', description: 'Slow-cooked lamb with Kashmiri spices, saffron risotto', price: '$32', vegetarian: false, spicy: true },
    { name: 'Jackfruit Biryani', description: 'Young jackfruit with basmati rice, caramelized onions', price: '$22', vegetarian: true, spicy: false },
    { name: 'Coconut Curry Ramen', description: 'Coconut milk broth with curry foam', price: '$20', vegetarian: true, spicy: true },
    { name: 'Tamarind Glazed Duck Breast', description: 'With beetroot purée and black garlic dust', price: '$34', vegetarian: false, spicy: false },
    { name: 'Blackened Salmon with Miso Foam', description: 'On edamame purée with sesame soil', price: '$28', vegetarian: false, spicy: false },
    { name: 'Paneer Tikka Mille-Feuille', description: 'Layered puff pastry with paneer tikka and mint oil', price: '$23', vegetarian: true, spicy: true },
    { name: 'Herb Crusted Sea Bass', description: 'Served with pea purée and dill vapor', price: '$30', vegetarian: false, spicy: false },
    { name: 'Ratatouille Towers', description: 'Compressed vegetable stacks with saffron espuma', price: '$22', vegetarian: true, spicy: false },
    { name: 'Venison with Juniper Smoke', description: 'On parsnip mash with cocoa nib dust', price: '$36', vegetarian: false, spicy: false },
    { name: 'Chili Chocolate Mole Chicken', description: 'Dark chocolate mole with chili air', price: '$26', vegetarian: false, spicy: true },
    { name: 'Quinoa & Edamame Terrine', description: 'With lemon verbena foam', price: '$20', vegetarian: true, spicy: false },
    { name: 'Beef Rendang Bao', description: 'Soft bao buns with beef rendang and coconut mist', price: '$28', vegetarian: false, spicy: true }
  ],
  desserts: [
    { name: 'Gulab Jamun Soufflé', description: 'Deconstructed gulab jamun with cardamom anglaise', price: '$14', vegetarian: true, spicy: false },
    { name: 'Saffron Panna Cotta', description: 'With rose petal brittle, pistachio dust', price: '$12', vegetarian: true, spicy: false },
    { name: 'Chocolate Chai Mousse', description: 'Dark chocolate mousse with masala chai reduction', price: '$16', vegetarian: true, spicy: false },
    { name: 'Coconut Snow with Pineapple Gel', description: 'Shaved coconut ice with pineapple gel spheres', price: '$14', vegetarian: true, spicy: false },
    { name: 'Mango Cardamom Parfait', description: 'Layered parfait with cardamom foam', price: '$15', vegetarian: true, spicy: false },
    { name: 'Raspberry Rose Sphere', description: 'Chocolate shell filled with raspberry mousse', price: '$16', vegetarian: true, spicy: false },
    { name: 'Chili Infused Chocolate Dome', description: 'Hot caramel pour reveal with chili mousse', price: '$18', vegetarian: true, spicy: true },
    { name: 'Pistachio Baklava Cigars', description: 'With honey foam and saffron threads', price: '$14', vegetarian: true, spicy: false },
    { name: 'Lemon Meringue Cloud', description: 'Nitrogen-frozen lemon foam with meringue shards', price: '$13', vegetarian: true, spicy: false },
    { name: 'Black Sesame Panna Sphere', description: 'Encased panna cotta with sesame crunch', price: '$15', vegetarian: true, spicy: false },
    { name: 'Espresso Tiramisu Jar', description: 'Coffee air and mascarpone snow', price: '$14', vegetarian: true, spicy: false }
  ],
  drinks: [
    { name: 'Masala Martini', description: 'Gin infused with whole spices, citrus twist', price: '$15', vegetarian: true, spicy: false },
    { name: 'Mango Lassi Foam', description: 'Deconstructed lassi with saffron foam', price: '$10', vegetarian: true, spicy: false },
    { name: 'Spiced Old Fashioned', description: 'Bourbon with garam masala syrup', price: '$18', vegetarian: true, spicy: false },
    { name: 'Cucumber Mint Cooler', description: 'With mint vapor and lime pearls', price: '$12', vegetarian: true, spicy: false },
    { name: 'Pineapple Chili Margarita', description: 'Pineapple juice with chili rim and foam', price: '$14', vegetarian: true, spicy: true },
    { name: 'Rose Lemon Spritz', description: 'Rose essence, lemon, and prosecco mist', price: '$13', vegetarian: true, spicy: false },
    { name: 'Lavender Cold Brew', description: 'Nitro cold brew with lavender foam', price: '$12', vegetarian: true, spicy: false },
    { name: 'Smoky Tamarind Mule', description: 'Tamarind, ginger beer, and mezcal smoke', price: '$15', vegetarian: true, spicy: false },
    { name: 'Saffron Gin Fizz', description: 'Gin with saffron air and tonic pearls', price: '$14', vegetarian: true, spicy: false },
    { name: 'Cardamom Iced Tea', description: 'Cold brew tea with cardamom cloud', price: '$11', vegetarian: true, spicy: false },
    { name: 'Matcha Coconut Latte', description: 'Matcha with coconut foam', price: '$12', vegetarian: true, spicy: false },
    { name: 'Passionfruit Mojito Sphere', description: 'Encased mojito essence with passionfruit mist', price: '$14', vegetarian: true, spicy: false },
    { name: 'Berry Hibiscus Cooler', description: 'With hibiscus vapor and berry pearls', price: '$12', vegetarian: true, spicy: false }
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