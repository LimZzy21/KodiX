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
    <div className="max-w-6xl mx-auto p-6">
      {loading && <p className="text-center text-lg">loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {posts.length > 0 && <FeaturedPost post={posts[0]} />}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.slice(1, 5).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
