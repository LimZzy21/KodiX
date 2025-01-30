import { Link } from "react-router-dom";

interface PostProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="rounded-lg p-4 hover:shadow-md transition">
      <div className="w-full h-32 bg-gray-100 rounded-lg"></div>

      <p className="text-gray-400 text-sm mt-3">WEDNESDAY 12, MARCH 2024</p>

      <Link to={`/post/${post.id}`} className="block mt-2">
        <h2 className="text-lg font-semibold leading-tight h-12 overflow-hidden text-ellipsis">
          {post.title}
        </h2>
      </Link>

      <p className="text-gray-500 text-sm leading-snug mt-1 h-10 overflow-hidden text-ellipsis">
        {post.body}
      </p>
    </div>
  );
};

export default PostCard;
