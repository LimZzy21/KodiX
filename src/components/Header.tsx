import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./RegisterFormLogo";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md sticky top-0 z-50">
     
      
      <nav className="hidden lg:flex space-x-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/feature" className="hover:text-black">Feature</Link>
        <Link to="/blog" className="text-black font-semibold">Blog</Link>
        <Link to="/testimonials" className="hover:text-black">Testimonials</Link>
      </nav>
      
      <div className="flex items-center space-x-4">
        <button 
          className="lg:hidden p-2 rounded-md focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className=" flex  h-[27px] w-[154px]">
        <Logo/>
      </div>
      </div>

      <div className="hidden lg:flex space-x-4">
        <Link to="/login" className="border border-gray-400 rounded-full px-6 py-2 text-gray-700 hover:border-black">Sign In</Link>
        <Link to="/signup" className="bg-green-500 text-white rounded-full px-6 py-2 hover:bg-green-600">Sign Up</Link>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4">
          <Link to="/" className="hover:text-black" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/feature" className="hover:text-black" onClick={() => setIsMenuOpen(false)}>Feature</Link>
          <Link to="/blog" className="text-black font-semibold" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/testimonials" className="hover:text-black" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
          <div className="flex flex-col space-y-2 mt-4">
            <Link to="/login" className="border border-gray-400 rounded-full px-6 py-2 text-gray-700 hover:border-black">Sign In</Link>
            <Link to="/signup" className="bg-green-500 text-white rounded-full px-6 py-2 hover:bg-green-600">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;