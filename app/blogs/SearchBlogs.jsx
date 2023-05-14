"use client";

import Link from "next/link";
import { useState } from "react";

function SearchBlogs() {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchPosts = async (keyword) => {
    setIsLoading(true);

    if (searchKeyword.length >= 3) {
      const response = await fetch(
        "https://dummyjson.com/posts/search?q=" + keyword
      );

      if (response.status === 200) {
        const data = await response.json();
        setFilteredBlogs(data.posts);
      } else {
        setFilteredBlogs([]);
      }
      setSearchKeyword("");
    }

    setIsLoading(false);
  };

  return (
    <>
      <input type="checkbox" id="search-modal" className="modal-toggle" />
      <label htmlFor="search-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">
                What do you want to search?
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Type search keyword here..."
                className="input input-bordered focus:outline-none focus:border-primary w-full"
                onChange={(e) => setSearchKeyword(e.target.value)}
              />

              <button
                htmlFor="search-modal"
                className={`btn btn-primary btn-circle ${
                  isLoading ? "loading disabled" : ""
                }`}
                onClick={() => searchPosts(searchKeyword)}
              >
                {!isLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </button>
            </label>
            {searchKeyword.length <= 3 && searchKeyword.length > 0 ? (
              <label className="label">
                <span className="label-text text-xs text-error">
                  Search keyword must be longer than 3 characters.
                </span>
              </label>
            ) : (
              ""
            )}
          </div>

          <ul className="menu mt-4 overflow-y-hidden">
            {filteredBlogs.length !== 0 ? (
              filteredBlogs?.map((blog, index) => (
                <li key={index} className="hover-bordered">
                  <Link href={`/blogs/${blog?.id}`}>{blog.title}</Link>
                </li>
              ))
            ) : (
              <li className="hover:bg-none">
                <span>Nothing to display.</span>
              </li>
            )}
          </ul>
        </label>
      </label>
    </>
  );
}

export default SearchBlogs;
