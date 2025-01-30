import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import ShowPassword from "../components/ShowPassword";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(formData.email, formData.password);
    if (success) {
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex shadow-lg rounded-lg overflow-hidden w-[700px] border border-black">
        <div className="w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-6">Sign in</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email address</label>
              <input
                type="email"
                name="email"
                
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
           <ShowPassword handleChange={handleChange}/>
            <a href="#" className="text-green-500 text-sm">Forgot password?</a>
            <button type="submit" className="w-full mt-4 bg-green-600 hover:cursor-pointer text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center">
              Sign In <span className="ml-2">&rarr;</span>
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account? <Link to='/signup' className="text-green-500">Sign Up</Link>
          </p>
        </div>
        <div className="w-1/2 bg-black text-white flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-xl font-bold flex items-center">
            Kodix
            <span className="text-[#1FFF1A] text-xs px-2 py-1 rounded border border-[#1FFF1A] ml-2">
              PRO
            </span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Unlimited traffic, strategic support, and AI-driven upsells
          </p>
          <a className="mt-4 text-green-500">Learn More</a>
        </div>
      </div>
    </div>
  );
}
