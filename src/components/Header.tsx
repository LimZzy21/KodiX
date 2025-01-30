import { Link } from "react-router-dom";
import Logo from "./RegisterFormLogo";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow">
      <nav className="flex space-x-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/feature" className="hover:text-black">Feature</Link>
        <Link to="/blog" className="text-black font-semibold">Blog</Link>
        <Link to="/testimonials" className="hover:text-black">Testimonials</Link>
      </nav>

      <div className=" flex  h-[27px] w-[154px]">
        <Logo/>
      </div>

      <div className="flex space-x-4">
        <button className="border border-gray-400 rounded-full px-6 py-2 text-gray-700 hover:border-black">
          Log in
        </button>
        
        <Link to="/signup" className="bg-green-500 text-white rounded-full px-6 py-2  hover:bg-green-600">Sign Up</Link>

          
    
      </div>
    </header>
  );
};

export default Header;
