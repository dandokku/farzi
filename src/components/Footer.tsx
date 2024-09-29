// import Logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h4 className="text-lg font-bold">YourCompany</h4>
        <p className="mt-2 text-gray-600">We provide innovative solutions for your business.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <div className="mt-6">&copy; 2024 YourCompany. All rights reserved.</div>
      </div>
    </footer>
  );
}
