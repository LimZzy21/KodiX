import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

interface FeaturedPostProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  const words = post.title.split(" ");
  const midIndex = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, midIndex).join(" ");
  const secondLine = words.slice(midIndex).join(" ");

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex justify-center items-center">
        <p className="flex items-center font-semibold text-lg sm:text-xl">
          <span className="mr-2 text-green-600">
            <CiStar />
          </span>
          Featured
        </p>
      </div>

      <div className="flex flex-col items-center font-bold">
        <h1 className="text-3xl sm:text-3xl text-center leading-tight">
          {firstLine}
        </h1>
        <h1 className="text-3xl sm:text-3xl text-center leading-tight">
          {secondLine}
        </h1>
      </div>

      <p className="text-black mt-2 text-center px-2 sm:px-4">
        {post.body.slice(0, 120)}.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center text-gray-500 text-center mt-4 gap-2 sm:gap-8">
        <p>WEDNESDAY 12, MARCH 2024</p>
        <div className="rounded-full border border-gray-300 flex items-center text-center px-2 py-1">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <p className="ml-2 font-sans font-semibold text-black">John Doe</p>
        </div>
      </div>

      <div className="mt-6 bg-gray-200 h-[200px] sm:h-[339px] w-full rounded-2xl flex ps-4 pb-4 items-end">
        <p className="bg-black/40 text-white px-2 rounded">Photo by Antara</p>
      </div>

      <div className="mt-4 flex space-x-4 items-center">
        <p className="text-gray-600">Share to:</p>

        <button className="relative flex items-center justify-center w-10 h-10">
          <div className="absolute w-8 h-8 bg-white rounded-full"></div>
          <FaFacebook className="relative text-blue-600 text-2xl w-8 h-8 " />
        </button>

        <button className="relative flex items-center justify-center w-10 h-10">
          <div className="absolute w-8 h-8 bg-black rounded-full"></div>
          <FaXTwitter className="relative text-white text-2xl" />
        </button>

        <button className="relative flex items-center justify-center w-10 h-10">
          <div className="absolute w-8 h-8 bg-[#FF0209] rounded-full"></div>
          <FaYoutube className="relative text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedPost;
