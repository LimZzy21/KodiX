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
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter password"
        className="w-full p-3 border border-gray-300 rounded pr-10"
        required
        onChange={handleChange}
      />
      <button
        type="button"
        className="absolute right-3 top-4 text-gray-500"
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
