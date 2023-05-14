import Link from "next/link";
import LikeBtn from "./LikeBtn";

const getPostDetails = async (postId) => {
  const response = await fetch("https://dummyjson.com/posts/" + postId);

  if (response.status === 200) {
    const post = await response.json();
    return post;
  } else {
    return false;
  }
};

async function blogPostPage({ params }) {
  const blog = await getPostDetails(params.postId);

  return (
    <main className="hero min-h-screen">
      <div className="hero-content flex flex-row justify-center items-center">
        {!blog ? (
          <div className="card w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581431886281-93ae50c19271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="blog 404 not found image"
              className="rounded-xl shadow-xl mt-10 mx-10"
            />
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-5 text-3xl font-bold">
                Oops! we could'nt find for the post you're looking for...
              </h2>

              <div className="card-actions">
                <Link className="btn btn-ghost capitalize px-10" href="/blogs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                  </svg>
                  Back
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="card w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/picsum/400/200"
              alt="blog random image"
              className="rounded-xl shadow-xl mt-10 mx-10"
            />
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-5 text-3xl font-bold">
                {blog?.title}
              </h2>
              <p>{blog?.body}</p>

              <div className="flex flex-row justify-between items-center gap-3">
                <LikeBtn blog={blog} />
                <div className="tags">
                  {blog?.tags?.map((tag, index) => (
                    <div
                      className="badge badge-accent badge-outline m-1"
                      key={index}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-actions">
                <Link className="btn btn-ghost capitalize px-10" href="/blogs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                  </svg>
                  Back
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default blogPostPage;
