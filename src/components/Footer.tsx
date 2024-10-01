import Logo from "../assets/footerlogo.png"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray p-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-5">
          <Link to="/">Home</Link>
          <Link to="about">About Us</Link>
          <Link to="contact">Contact</Link>
        </div>
        <img src={Logo} alt="Farzi Logo" className="scale-75" />
        <div className="flex flex-col md:flex-row gap-5">
          <Link to="events">Events</Link>
          <Link to="career">Career</Link>
          <Link to="privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
