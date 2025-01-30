import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../store/usePostStore";
import BgDecoration from "../components/BackgroundDecoration";
import PostCard from "../components/PostCard";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useAuthStore } from "../store/useAuthStore";
import { BiFile } from "react-icons/bi";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { postDetails, posts, comments, fetchPostDetails, fetchPosts } = usePostStore();
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
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
  }, [id, fetchPostDetails, isAuthenticated, navigate, posts.length, fetchPosts]);

  if (!postDetails) return <p className="text-center text-gray-500">Post not found</p>;

  return (
    <div className="relative min-h-screen flex flex-col py-10 px-4 sm:px-6 lg:px-12">
      <BgDecoration />
      <div className="w-full max-w-5xl grid grid-cols-1 xl:grid-cols-12 gap-32 relative z-10 mx-auto">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start lg:ms-10 max-w-full lg:max-w-[700px]">
          <h1 className="text-3xl font-bold text-gray-900 text-center lg:text-left whitespace-pre-wrap">
            {postDetails.title}
          </h1>
          <p className="text-gray-600 mt-4 text-lg break-words leading-relaxed text-justify">
            {postDetails.body}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center mt-4 text-gray-500 text-center sm:text-left">
            <p>WEDNESDAY 12, MARCH 2024</p>
            <div className="rounded-full border border-gray-300 flex items-center sm:ms-8 mt-2 sm:mt-0">
              <div className="w-6 h-6 ms-2 bg-[#8f8f8f] rounded-full"></div>
              <p className="p-2 font-sans font-semibold text-black">John Doe</p>
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

          <div className="mt-8 w-full">
            <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
            <div className="mt-4 space-y-4">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.id} className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                      <p className="text-gray-900 font-semibold">{comment.name}</p>
                    </div>
                    <p className="text-gray-600 mt-2">{comment.body}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <BiFile className="text-[#FF4405]" />
              Related Articles
            </h2>
            <button className="px-3 py-2 rounded-3xl text-sm bg-white shadow-sm hover:cursor-pointer">
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