import BlogCard from "./components/BlogCard";

const getAllPosts = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data.posts;
};

async function blogPages() {
  const blogs = await getAllPosts();
  let filteredBlogs = blogs;

  return (
    <main className="hero min-h-screen">
      <div className="hero-content grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredBlogs &&
          filteredBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
      </div>
    </main>
  );
}

export default blogPages;
