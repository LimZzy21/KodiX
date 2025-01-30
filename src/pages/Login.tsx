import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(formData.email, formData.password)) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="w-full p-2 border border-gray-300 rounded"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full p-2 border border-gray-300 rounded"
            required
            onChange={handleChange}
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
