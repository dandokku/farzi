import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-graybg to-white py-28">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Contact Information
      </h2>
      <div className="flex flex-col md:flex-row max-w-7xl w-full bg-white rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Reach Out</h3>
          <p className="text-gray-600 mb-4">
            Our team is ready to assist you with any inquiries.
          </p>
          <ul className="text-gray-700 mb-8">
            <li>
              <strong>Email:</strong> hello@website.com
            </li>
            <li>
              <strong>Phone:</strong> +123 456 789
            </li>
            <li>
              <strong>Location:</strong> 789 Street, City, Country
            </li>
          </ul>
          <Link
            to="/contact"
            className="w-max mt-6 px-6 py-3 bg-red text-white rounded-lg hover:bg-redhover"
          >
            Contact Us
          </Link>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.086078808252!2d77.0851679!3d28.502432199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1943f7fbd389%3A0x497033a06ada8b70!2s825%2C%20Phase%20V%2C%20Udyog%20Vihar%2C%20Sector%2019%2C%20Gurugram%2C%20Haryana%20122008%2C%20India!5e1!3m2!1sen!2sng!4v1727776582805!5m2!1sen!2sng"
            className="w-full h-80"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
