import { useState } from 'react';
import { FaBars, FaBlind } from 'react-icons/fa';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaBlind className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-600">Home</a></li>
          <li><a href="#" className="hover:text-gray-600">Blog</a></li>
        </ul>
        <h1 className="text-2xl font-bold">BrandLogo</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-600">Services</a></li>
          <li><a href="#" className="hover:text-gray-600">Contact</a></li>
        </ul>
      </div>
      {navOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-center">
          <li><a href="#" className="block hover:text-gray-600">Home</a></li>
          <li><a href="#" className="block hover:text-gray-600">Blog</a></li>
          <li><a href="#" className="block hover:text-gray-600">Services</a></li>
          <li><a href="#" className="block hover:text-gray-600">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
