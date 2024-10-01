import backgroundImage from '../../assets/louis-hansel-UtcOhVC-3VU-unsplash.jpg';

export default function Cta() {
  return (
    <section
      className="relative bg-cover bg-center h-96"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-5xl font-bold mb-4">
          Every Dish has its own <span className="text-red">Story</span> to tell
        </h2>
        <button className="px-6 py-3 bg-red text-white rounded-lg hover:bg-redhover">
          Try it Now
        </button>
      </div>
    </section>
  );
}
