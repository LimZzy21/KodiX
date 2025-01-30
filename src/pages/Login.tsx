import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import ShowPassword from "../components/ShowPassword";
import Logo from "../components/RegisterFormLogo";
import { FaArrowRight } from "react-icons/fa6";

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
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
      <div className="flex items-center justify-center mb-7">
        <Logo />
      </div>
      <div className="flex flex-col md:flex-row  rounded-3xl border border-gray-300 overflow-hidden w-full max-w-3xl ">
        <div className="w-full md:w-2/3 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
            Sign in
          </h2>
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
            <ShowPassword handleChange={handleChange} />
            <div className="">
              <a className="text-[#04AA00] text-sm font-semibold">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full mt-4 font-semibold bg-green-600 text-white py-3 hover:cursor-pointer rounded-lg hover:bg-green-700 transition flex ps-3 justify-between items-center"
            >
              Sign In
              <span className="ml-auto text-end pe-4">
                <FaArrowRight />
              </span>
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4 ">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#04AA00] font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="w-full md:w-1/3 bg-black text-white flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-xl font-bold flex items-center">
            Kodix
            <span className="text-[#1FFF1A] text-xs px-2 py-1 rounded border border-[#1FFF1A] ml-2">
              PRO
            </span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Unlimited traffic, strategic support, and AI-driven upsells
          </p>
          <a className="mt-4 text-[#1FFF1A] underline">Learn More</a>
        </div>
      </div>
    </div>
  );
}
