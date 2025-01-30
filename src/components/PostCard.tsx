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
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
        <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline mt-2 block">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
        
      </Link>
    </div>
  );
};

export default PostCard;
