import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface ShowPasswordProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const ShowPassword:React.FC<ShowPasswordProps> = ({ handleChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <label htmlFor="password">Password</label>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter password"
        className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        required
        onChange={handleChange}
      />
      <button
        type="button"
        className="absolute right-3 top-11 text-gray-500"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <AiFillEyeInvisible size={20} />
        ) : (
          <AiFillEye size={20} />
        )}
      </button>
    </div>
  );
};
export default ShowPassword
