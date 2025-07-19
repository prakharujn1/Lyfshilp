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
        {/* Breadcrumb */}
        <nav className="text-sm mt-8">
          <div className="bg-gray-50 border border-gray-200 text-gray-800 px-4 py-2 rounded-xl inline-flex items-center space-x-2">
            {/* Home */}
            <Link
              to="/"
              className="flex items-center gap-1 text-gray-500 font-semibold hover:underline"
            >
              <img src="/blogDesign/home.svg" alt="Home" className="w-4 h-4" />
              <span>Home</span>
            </Link>

            {/* Arrow */}
            <img
              src="/blogDesign/rightArrow.svg"
              alt="Right Arrow"
              className="w-3 h-3"
            />

            {/* Blogs */}
            <Link
              to="/blogs"
              className="text-gray-500 font-semibold hover:underline"
            >
              Blogs
            </Link>

            {/* Arrow */}
            <img
              src="/blogDesign/rightArrow.svg"
              alt="Right Arrow"
              className="w-3 h-3"
            />

            {/* Current Blog Title */}
            <span className="font-semibold text-black flex items-center gap-1">
              {singleBlog.title}
            </span>
          </div>
        </nav>

        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mt-8 flex items-center gap-2">
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
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>

        <div
          className="prose max-w-none mt-6"
          dangerouslySetInnerHTML={{ __html: singleBlog.blogBody }}
        ></div>

        <div className="-ml-4">
          <CTA />
        </div>

        <div className=" flex items-center gap-3">
          <span className="text-gray-900 font-semibold">
            Share this blog on:
          </span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full"
          >
            <img
              src="/blogDesign/facebook.svg"
              alt="Facebook"
              className="w-4 h-4"
            />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full"
          >
            <img
              src="/blogDesign/twitter.svg"
              alt="Twitter"
              className="w-4 h-4"
            />
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full"
          >
            <img
              src="/blogDesign/whatsapp.svg"
              alt="WhatsApp"
              className="w-4 h-4"
            />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full"
          >
            <img
              src="/blogDesign/linkedin.svg"
              alt="LinkedIn"
              className="w-4 h-4"
            />
          </a>
        </div>

        {user || role === "admin" ? (
          <form onSubmit={handleSubmit} className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Leave your comment</h3>
            <div className="bg-white border rounded-lg p-4 flex items-start gap-4 shadow-sm">
              {/* Avatar */}
              <img
                src="/blogDesign/avatar.svg" // Replace with actual user avatar or default
                alt="User Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />

              {/* Input + Button */}
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
            Please login to comment about the blog.
          </p>
        )}

        {similarBlogs.length > 0 && (
          <div className="mt-10">
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
