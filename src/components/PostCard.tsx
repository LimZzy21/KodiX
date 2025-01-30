import { Link } from "react-router-dom";

interface PostProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
  horizontal?: boolean;
}

const PostCard: React.FC<PostProps> = ({ post, horizontal = false }) => {
  return (
    <div
      className={`p-4 rounded-lg hover:shadow-md transition flex ${
        horizontal ? "items-center gap-4" : "flex-col"
      } w-fit h-fit`}
    >
      <div
        className={`${
          horizontal ? "w-60 h-38" : "w-full h-32"
        } bg-gray-100 rounded-3xl flex-shrink-0`}
      ></div>

      <div className={`flex flex-col flex-grow justify-between min-h-[80px] pt-2 ${horizontal ? "gap-4" : ''}`}>
        <p className="text-gray-400 text-xs">WEDNESDAY 12, MARCH 2024</p>

        <Link to={`/post/${post.id}`} className="block mt-1">
          <h2 className="text-lg font-semibold leading-tight line-clamp-2 h-[48px]">
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-500  text-sm line-clamp-1 h-[20px]">{post.body}</p>
      </div>
    </div>
  );
};

export default PostCard;
