import { useEffect } from "react";
import { usePostStore } from "../store/usePostStore";

import PostCard from "../components/PostCard";
import FeaturedPost from "../components/FeaturedPost";
import BgDecoration from "../components/BackgroundDecoration";

const Home = () => {
  const { posts, loading, error, fetchPosts } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="relative ">
      <BgDecoration/>
      <div className="relative z-10 max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
        {loading && <p className="text-center text-lg">loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {posts.length > 0 && <FeaturedPost post={posts[0]} />}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-4 md:p-4">
          {posts.slice(1, 5).map((post) => (
            <div className="w-full sm:w-auto" key={post.id}>

              <PostCard  post={post}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
