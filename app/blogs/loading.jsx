import Image from "next/image";
import spinner from "../../public/loader.svg";

function loadingBlogs() {
  return (
    <main className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Image priority src={spinner} alt="Spinner for blogs" />
        </div>
      </div>
    </main>
  );
}

export default loadingBlogs;
