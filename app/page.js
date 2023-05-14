import Link from "next/link";

export default function Home() {
  return (
    <main className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1558636815-1978d0419bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="w-full lg:max-w-lg rounded-lg shadow-2xl"
          alt="Home page image"
        />
        <div className="text-center mt-10 lg:text-left lg:my-0">
          <h1 className="text-5xl font-bold pb-6">Welcome to Codrad!</h1>
          <p className="pb-6">
            Join me on this journey of discovery, where we will dive into
            thought-provoking discussions and find new perspectives. Let&apos;s
            create a community of learners, thinkers, and doers. Don&apos;t miss out
            on the fun!
          </p>
          <p className="pb-6">
            Explore the world of ideas and insights with me. Codrad covers a
            wide range of topics including lifestyle, health, technology, and
            more. Stay updated with the latest trends and discover new ways to
            improve your well-being.
          </p>
          <Link href="/blogs" className="btn btn-primary">
            Explore
          </Link>
        </div>
      </div>
    </main>
  );
}
