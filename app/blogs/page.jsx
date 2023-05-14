import BlogCard from "./BlogCard";
import SearchBlogs from "./SearchBlogs";

const getAllPosts = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
};

async function blogPostsPage() {
  const blogs = await getAllPosts();

  return (
    <main className="hero min-h-screen">
      <div className="hero-content grid grid-cols-1 md:grid-cols-3 gap-5">
        {blogs &&
          blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)}
      </div>
      <SearchBlogs />
    </main>
  );
}

export default blogPostsPage;
