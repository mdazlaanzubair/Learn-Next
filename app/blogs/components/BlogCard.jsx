import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-5">{blog.title}</h2>
        <p>{blog.body.substring(0, 150)}...</p>
        <Link
          href={`/blogs/${blog.id}`}
          className="btn btn-outline btn-primary btn-xs w-28 ml-auto"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
        <div className="card-actions mt-5 justify-end">
          {blog.tags.map((tag, index) => (
            <div className="badge badge-accent badge-outline" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
