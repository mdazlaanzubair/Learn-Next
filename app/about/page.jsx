import Link from "next/link";

const aboutPage = () => {
  return (
    <main className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="w-full lg:max-w-xl rounded-lg shadow-2xl"
        />
        <div className="text-center mt-10 lg:text-left lg:my-0 lg:ml-5">
          <h1 className="text-5xl font-bold pb-3">Something About Codrad!</h1>
          <p className="pb-3">
            Welcome to Codrad, a blog dedicated to coding and technology
            enthusiasts. Our mission is to provide you with valuable insights,
            resources, and tips to help you master the art of coding.
          </p>
          <p className="pb-3">
            As a team of experienced developers, we know the challenges that
            come with learning to code, and we are here to guide you through
            your coding journey. We believe that anyone can learn to code,
            regardless of their age, background, or experience level. Our blog
            is designed to cater to both beginners and advanced coders, and we
            cover a wide range of topics including web development, mobile app
            development, data science, and more.
          </p>
          <Link href="/blogs" className="btn btn-primary">
            Explore
          </Link>
        </div>
      </div>
    </main>
  );
};

export default aboutPage;
