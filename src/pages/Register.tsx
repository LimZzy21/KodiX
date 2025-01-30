import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import {
  AiFillDollarCircle,
} from "react-icons/ai";
import { TbServerBolt } from "react-icons/tb";
import { FaIdCardClip } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import Logo from "../components/RegisterFormLogo";
import ShowPassword from "../components/ShowPassword";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(formData);
    navigate("/login");
  };

  return (
    <div className="h-screen flex  items-center justify-center flex-col">
      <div className="flex items-center justify-center align-bottom mb-7">
        <Logo />
      </div>
      <div>
        <div className="flex w-[800px] rounded-2xl border border-[#000000] overflow-hidden">
          <div className="w-2/3 bg-[#FFFFFF] p-8">
            <h2 className="text-2xl font-bold mb-6">Sign up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full p-3 border border-gray-300 rounded"
                required
                onChange={handleChange}
              />
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your first name"
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your last name"
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <label htmlFor="password">Password</label>
            <ShowPassword handleChange={handleChange}/>
              <p className="text-[#04AA00] text-sm cursor-pointer font-inter">
                Forgot password?
              </p>
              <button
                type="submit"
                className="w-full bg-[#04AA00] text-white py-3 rounded font-semibold"
              >
                Sign In
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#04AA00] cursor-pointer">
                Sign In
              </Link>
            </p>
          </div>

          <div className="w-1/3 bg-black text-white p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-4">
              Get Your FREE <br />
              30-Days Trial Now!
            </h2>
            <ul className="space-y-8 text-sm h-full">
              <li className="flex items-center space-x-2">
                <span className="text-[#1FFF1A] text-2xl">
                  <AiFillDollarCircle />
                </span>
                <span>
                  Absolutely FREE <br />
                  <span className="text-[#484848]">
                    No hidden changes, No credit card required
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#1FFF1A] text-2xl">
                  <TbServerBolt />
                </span>
                <span>
                  Fast & Easy <br />
                  <span className="text-[#484848]">
                    Get access instantly, no downloads required
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#1FFF1A] text-2xl">
                  <FaIdCardClip />
                </span>
                <span>
                  Your Own Data <br />
                  <span className="text-[#484848]">
                    Enjoy the Free Trial with your company data
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#1FFF1A] text-2xl">
                  <MdStars />
                </span>
                <span>
                  Unlimited Features <br />
                  <span className="text-[#484848]">
                    Access all features of the world's #1 business software!
                  </span>
                </span>
              </li>
            </ul>
            <p className="mt-6 font-bold text-sm">
              Call us at <span className="text-[#1FFF1A]">800 1301 448</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
