import { Link } from "react-router-dom";
import WelcomeImage from "../../assets/1.png";

export default function Welcome() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-16 bg-gray-50">
      <div className="text-center md:text-left max-w-md">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 quesha">
          Welcome to Farzi Café
        </h1>
        <p className="mt-4 mb-4 text-lg md:text-xl text-gray-600">
          With a vision of bringing Indian Cuisine back “in-Vogue”, Farzi Café
          endeavours to showcase a unique, modernist approach to Indian food,
          where guests not only enjoy culinary innovations as part of it’s...
        </p>
        <Link to="/about" className="mt-6 px-6 py-3 bg-red text-white rounded-lg hover:bg-redhover">
          Find Out More
        </Link>
      </div>
        <img
          src={WelcomeImage}
          alt="Hero Image"
          className="w-[50%] rounded-lg shadow-sm hidden xl:block"
        />
    </section>
  );
}
