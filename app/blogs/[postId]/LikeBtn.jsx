const likePost = async (postId, likes) => {
  const response = await fetch("https://dummyjson.com/posts/" + postId, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      reactions: likes + 1,
    }),
  });

  const data = await response.json();
  return data;
};

const LikeBtn = ({ blog }) => {
  return (
    <button className="btn btn-sm btn-ghost">
      Likes {blog?.reactions}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};

export default LikeBtn;
