import { useEffect } from "react";
import { usePostStore } from "../store/usePostStore";

import PostCard from "../components/PostCard";
import FeaturedPost from "../components/FeaturedPost";

const Home = () => {
  const { posts, loading, error, fetchPosts } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[735px] h-[772px] bg-[#1FFF1A]  blur-[200px] rounded-full absolute top-48 -left-44"></div>
        <div className="w-[545px] h-[573px] bg-[#1FFF1A]  blur-[200px] rounded-full absolute top-16 -right-32"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {loading && <p className="text-center text-lg">loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {posts.length > 0 && <FeaturedPost post={posts[0]} />}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-3xl border border-gray-200 bg-white">
          {posts.slice(1, 5).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
