import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../store/usePostStore";
import BgDecoration from "../components/BackgroundDecoration";
import PostCard from "../components/PostCard";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useAuthStore } from "../store/useAuthStore";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { postDetails, posts, fetchPostDetails, fetchPosts } = usePostStore();
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated);

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (id) {
      fetchPostDetails(Number(id));
    }
    if (posts.length === 0) {
      fetchPosts();
    }
  }, [id, fetchPostDetails, isAuthenticated, navigate]);

  if (!postDetails)
    return <p className="text-center text-gray-500">Post not found</p>;

  return (
    <div className="relative min-h-screen flex flex-col py-10 px-6 ">
      <BgDecoration />
      <div className="w-full max-w-5xl  grid grid-cols-12 gap-x-36 relative z-10">
        <div className="col-span-7 flex flex-col items-center ">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 text-start whitespace-pre-wrap">
              {postDetails.title}
            </h1>
            <p className="text-gray-600 mt-4 max-w-[700px] text-lg break-words  leading-relaxed text-justify">
              {postDetails.body}
            </p>

            <div className="flex mt-4 text-gray-500 items-center">
              <p>WEDNESDAY 12, MARCH 2024</p>
              <div className="rounded-full border border-gray-300 flex items-center ms-8">
                <div className="w-6 h-6 ms-2 bg-[#00000033] rounded-full"></div>
                <p className="p-2 font-sans font-semibold text-black">
                  John Doe
                </p>
              </div>
            </div>

            <div className="mt-6 max-w-[700px] min-w-[700px] h-64 bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400 text-lg mx-auto">
              Photo by Artist
            </div>

            <div className="mt-4 flex space-x-4">
              <p className="text-gray-600">Share to:</p>
              <button className="text-blue-600 text-2xl">
                <FaFacebook />
              </button>
              <button className="text-black text-2xl">
                <FaXTwitter />
              </button>
              <button className="text-red-500 text-2xl">
                <FaYoutube />
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-5 place-content-end">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              📄 Related Articles
            </h2>
            <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg">
              Read more
            </button>
          </div>

          <div className="space-y-4">
            {posts.slice(0, 5).map((post) => (
              <PostCard key={post.id} post={post} horizontal />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
