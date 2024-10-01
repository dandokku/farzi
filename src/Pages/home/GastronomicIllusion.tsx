import React from 'react';
import Image1 from "../../assets/lightscape-CgZChBFUt04-unsplash.jpg"
import Image2 from "../../assets/louis-hansel-UtcOhVC-3VU-unsplash.jpg"
import Image3 from "../../assets/markus-spiske-ieJUV-Mrn3g-unsplash.jpg"

const GastronomicIllusion: React.FC = () => {
  return (
    <div className="w-full py-16 px-10 bg-graybg">
      <h1 className="text-3xl md:text-6xl text-center mb-12 quesha ">
        The Ultimate Gastronomic Illusion
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white hover:bg-gray hover:bg-gray p-6 flex flex-col justify-center text-center rounded-md">
          <h2 className="text-4xl font-semibold mb-4">Gourmet Experience</h2>
          <p className="text-gray-600">
            Focusing on the gourmet diner as well as the youth of India, Farzi
            Café aims to bring Indian cuisine back “In-Vogue”. Farzi Café has
            many connotations, but at Farzi Café, it has just one, “creating an
            illusion” with its cuisine. Best described as a gourmet experience.
          </p>
        </div>

        <div className="relative">
          <img
            src={Image1}
            alt="Gourmet Experience"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="relative">
          <img
            src={Image2}
            alt="Modernist Cuisine"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-white hover:bg-gray p-6 flex flex-col justify-center text-center rounded-md">
          <h2 className="text-4xl font-semibold mb-4">Modernist Cuisine</h2>
          <p className="text-gray-600">
            Flowing smoke, pebbles like smooth spheres, table theatrics and
            culinary illusion are a few aspects which describe the Farzi Café
            experience.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white hover:bg-gray p-6 flex flex-col justify-center text-center rounded-md">
          <h2 className="text-4xl font-semibold mb-4">Vision</h2>
          <p className="text-gray-600">
            With a vision of bringing Indian Cuisine back “In-Vogue”, Farzi Café
            endeavors to showcase a unique, modernist approach to Indian food,
            where guests not only enjoy culinary innovations.
          </p>
        </div>

        <div className="relative">
          <img
            src={Image3}
            alt="Vision"
            className="w-full h-[404px] object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default GastronomicIllusion;
