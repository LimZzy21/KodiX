import { FaFacebook } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa6"

interface FeaturedPostProps {
    post: {
      id: number;
      title: string;
      body: string;
    };
  }
  
  const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
    return (
      <div className=" p-6 rounded-lg shadow-lg">
        <p className="text-green-600 font-semibold flex items-center">
          <span className="mr-2">⭐</span> Featured
        </p>
        <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
        <p className="text-gray-600 mt-2">{post.body.slice(0, 120)}...</p>
        <div className="flex items-center mt-4 text-gray-500">
          <p>WEDNESDAY 12, MARCH 2024</p>
          <span className="mx-2">•</span>
          <p> John Doe</p>
        </div>
        <div className="mt-6 bg-gray-200 h-48 w-full rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Photo by Antara</p>
        </div>
        <div className="mt-4 flex space-x-4">
          <p className="text-gray-600">Share to:</p>
          <button className="text-blue-600 text-2xl">
            <FaFacebook/>
          </button>
          <button className="text-black text-2xl ">
            <FaXTwitter/>
          </button>
          <button className="text-red-500 text-2xl">
            <FaYoutube />
          </button>
        </div>
      </div>
    );
  };
  
  export default FeaturedPost;
  