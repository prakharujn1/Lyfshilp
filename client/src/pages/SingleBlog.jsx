import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBlog } from "@/contexts/BlogContext";
import BlogCard from "@/components/BlogCard";
import { useAuth } from "@/contexts/AuthContext";
import CTA from "@/BlogDesign/CTA";
// import { Helmet } from "react-helmet-async";

const SingleBlog = () => {
  const { user, role } = useAuth();
  const { id } = useParams();
  const { getBlogById, singleBlog, similarBlogs, loading, postComment } =
    useBlog();

  const [comment, setComment] = useState({ content: "" });

  useEffect(() => {
    getBlogById(id);
  }, [id]);

  if (loading || !singleBlog) return <div>Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = user?.name || (role === "admin" ? "Admin" : null);
    if (!name || !comment.content) return;
    postComment(id, name, comment.content);
    setComment({ name: "", content: "" });
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        {/* Breadcrumb - outside the border */}
        <nav className="text-sm mt-8">
          <div className="bg-gray-50 border border-gray-300 text-gray-800 px-4 py-3 rounded-xl inline-flex items-center space-x-3">
            <Link
              to="/"
              className="flex items-center gap-1 text-gray-500 font-semibold hover:underline"
            >
              <img
                src="/blogDesign/home.svg"
                alt="Home"
                className="w-4 h-4 -mt-1"
              />
              <span className="-mt-1">Home</span>
            </Link>
            <img
              src="/blogDesign/rightArrow.svg"
              alt="Right Arrow"
              className="w-3 h-3"
            />
            <Link
              to="/blogs"
              className="text-gray-500 hover:underline -mt-1 block"
            >
              Blogs
            </Link>
            <img
              src="/blogDesign/rightArrow.svg"
              alt="Right Arrow"
              className="w-3 h-3"
            />
            <span className="font-semibold text-black flex items-center gap-1 -mt-1">
              {singleBlog.title}
            </span>
          </div>
        </nav>

        {/* Bordered Box Starts Here */}
        <div className="border border-gray-300 rounded-2xl p-6 shadow-sm mt-6">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 flex items-center gap-2">
            {singleBlog.title}
          </h1>

          {/* Author, Date, Read Time */}
          <div className="flex items-center gap-2 flex-wrap text-sm text-gray-600 mt-2">
            <span>By Edumaniax</span>
            <span className="text-gray-400">|</span>
            <span>
              {new Date(singleBlog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <div className="mt-1 inline-flex items-center gap-1 text-green-700 bg-green-100 rounded-full px-3 py-1 text-xs font-medium w-fit">
              <img
                src="/blogDesign/4-5minRead.svg"
                alt="read-time-icon"
                className="w-4 h-4"
              />
              {(singleBlog.readTime || "4-5")
                .replace(/mins?|minutes?/gi, "")
                .trim() + " Min Read"}
            </div>
          </div>

          <img
            src={singleBlog.imageUrl}
            alt="blog"
            className="rounded-lg mt-4 w-full"
          />

          <div className="bg-[#EFFFD9] border border-green-700 rounded-lg p-4 mt-8">
            <h2 className="text-xl font-bold text-black mt-2">
              Table of Contents
            </h2>
            <ol className="mt-2 list-decimal list-inside space-y-2 text-green-900 font-medium text-sm md:text-base">
              {singleBlog.tableOfContents.map((item, idx) => (
                <li key={idx}>
                  <a href={`#point-${idx}`} className="hover:underline text-green-800">
                    {item.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 space-y-10">
            {singleBlog.tableOfContents.map((point, index) => (
              <div key={index} id={`point-${index}`} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{point.heading}</h2>
                <ul className="list-disc list-inside text-gray-800 pl-4 space-y-1">
                  {point.explanation.map((item, i) => (
                    <li key={i}>
                      <span className="font-medium">
                        {String.fromCharCode(65 + i)}.
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 italic text-gray-700">
                  <strong>Reflection:</strong> {point.reflection}
                </p>
              </div>
            ))}
          </div>

          <div className="-ml-4">
            <CTA />
          </div>

          <div className="flex items-center gap-3 mt-6">
            <span className="text-gray-900 font-semibold">
              Share this blog on:
            </span>
            {/* Social icons */}
            {/* ... existing share buttons ... */}
          </div>

          {/* Comment Section Inside Border */}
          {user || role === "admin" ? (
            <form onSubmit={handleSubmit} className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Leave your comment</h3>
              <div className="bg-white border rounded-lg p-4 flex items-start gap-4 shadow-sm">
                <img
                  src="/blogDesign/avatar.svg"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Ask your question in comment"
                    value={comment.content}
                    onChange={(e) =>
                      setComment({ ...comment, content: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md bg-[#F3F3F3] focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                  <div className="flex justify-end mt-3">
                    <button
                      type="submit"
                      className="bg-[#10903E] hover:bg-green-700 text-white font-medium px-5 py-2 rounded-md flex items-center gap-1 transition"
                    >
                      Post Now
                      <span>
                        <img src="/blogDesign/buttonArrow.svg" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <p className="text-gray-600 italic mt-4">
              Please{" "}
              <span className="text-green-700 font-semibold italic">
                login to comment
              </span>{" "}
              about the blog.
            </p>
          )}
        </div>

        {/* Outside Border - Similar Posts */}
        {similarBlogs.length > 0 && (
          <div className="mt-10 mb-32">
            <h2 className="text-3xl font-bold mt-6">Similar Posts</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {similarBlogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleBlog;
