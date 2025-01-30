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
  return (
    <div className=" p-6  ">
      <div className="flex justify-center items-center ">
        <p className="flex items-center font-semibold text-xl">
          <span className="mr-2 text-green-600">
            <CiStar />
          </span>
          Featured
        </p>
      </div>

      <div className="flex flex-col items-center font-bold">
        <h1 className="text-3xl font-inter text-center max-w-[50%]">
          {post.title.split(" ").slice(0, 5).join(" ")}
        </h1>
        <h1 className="text-3xl font-inter text-center max-w-[70%]">
          {post.title.split(" ").slice(5).join(" ")}
        </h1>
      </div>

      <p className="text-gray-600 mt-2 text-center justify-center">
        {post.body.slice(0, 120)}.
      </p>
      <div className="flex items-center mt-4 text-gray-500 text-center justify-center ">
        <p>WEDNESDAY 12, MARCH 2024</p>
        <div className="rounded-full border border-gray-300 flex items-center text-center justify-center ms-8">
          <div className="w-6 h-6 ms-2   bg-[#00000033] rounded-full"></div>

          <p className=" p-2 font-sans font-semibold text-black">John Doe</p>
        </div>
      </div>

      <div className="mt-6 bg-gray-200 h-[339px] w-full rounded-2xl flex ps-4 pb-4 items-end ">
        <p className=" bg-black/40 text-white px-2 rounded">Photo by Antara</p>
      </div>
      <div className="mt-4 flex space-x-4 text-center justify-center ">
        <p className="text-gray-600">Share to:</p>
        <button className="text-blue-600 text-2xl">
          <FaFacebook />
        </button>
        <button className="text-black text-2xl ">
          <FaXTwitter />
        </button>
        <button className="text-red-500 text-2xl">
          <FaYoutube />
        </button>
      </div>
    </div>
  );
};

export default FeaturedPost;
