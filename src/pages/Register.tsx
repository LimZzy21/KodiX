import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { AiFillDollarCircle } from "react-icons/ai";
import { TbServerBolt } from "react-icons/tb";
import { FaArrowRight, FaIdCardClip } from "react-icons/fa6";
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
    alert('Success!')
    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col px-4">
      <div className="flex items-center justify-center mb-5">
        <Logo />
      </div>
      <div className="w-full max-w-[750px] flex flex-col-reverse md:flex-row rounded-3xl border border-gray-300 ">
        <div className="w-full md:w-2/3  p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 md:mb-6 text-center md:text-left">
            Sign up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm md:text-base">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-2">
              <div className="w-full md:w-1/2">
                <label htmlFor="firstName" className="text-sm md:text-base">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your first name"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 mt-2 md:mt-0">
                <label htmlFor="lastName" className="text-sm md:text-base">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your last name"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <ShowPassword handleChange={handleChange} />
            <div className="">
              <a className="text-[#04AA00] text-sm font-semibold">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="w-full mt-4 font-semibold bg-green-600 text-white py-3 hover:cursor-pointer rounded-lg hover:bg-green-700 transition flex ps-3 justify-between items-center">
  Sign Up
  <span className="ml-auto text-end pe-4"><FaArrowRight /></span>
</button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-start">
            Already have an account? &nbsp;
            <Link
              to="/login"
              className="text-[#04AA00] cursor-pointer hover:underline font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>

        <div className="flex-1 bg-black md:rounded-tr-3xl md:rounded-br-3xl text-white p-4 md:p-6 flex flex-col text-center md:text-left min-h-[350px] md:min-h-[auto]">
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
            Get Your FREE <br /> 30-Days Trial Now!
          </h2>
          <ul className="space-y-4 text-xs md:text-sm">
            <li className="flex items-center space-x-2">
              <AiFillDollarCircle className="text-[#1FFF1A] text-4xl" />
              <span>
                Absolutely FREE <br />
                <span className="text-gray-400">
                  No hidden charges, No credit card required
                </span>
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <TbServerBolt className="text-[#1FFF1A]  text-4xl" />
              <span>
                Fast & Easy <br />
                <span className="text-gray-400">
                  Get access instantly, no downloads required
                </span>
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FaIdCardClip className="text-[#1FFF1A]  text-4xl" />
              <span>
                Your Own Data <br />
                <span className="text-gray-400">
                  Enjoy the Free Trial with your company data
                </span>
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <MdStars className="text-[#1FFF1A]  text-5xl" />
              <span>
                Unlimited Features <br />
                <span className="text-gray-400">
                  Access all features of the world's #1 business software!
                </span>
              </span>
            </li>
          </ul>
          <p className="mt-4 md:mt-6 font-bold text-xs md:text-sm">
            Call us at <span className="text-[#1FFF1A]">800 1301 448</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
