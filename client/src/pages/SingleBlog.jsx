import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBlog } from "@/contexts/BlogContext";
import BlogCard from "@/components/BlogCard";
import { useAuth } from "@/contexts/AuthContext";
// import { Helmet } from "react-helmet-async";
 
const SingleBlog = () => { 
  const { user, role } = useAuth();
  const { id } = useParams();
  const { getBlogById, singleBlog, similarBlogs, loading, postComment } = useBlog();

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
      {/* <Helmet>
        <title>{singleBlog.title} | Edumaniax Blog</title>
        <meta name="description" content={singleBlog.metaDescription} />
        <meta name="author" content="Edumaniax" />
      </Helmet> */}

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-2">{singleBlog.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(singleBlog.createdAt).toLocaleDateString()} • {singleBlog.readTime}
        </p>

        <img src={singleBlog.imageUrl} alt="blog" className="rounded-lg mb-6 w-full" />

        <h2 className="text-2xl font-semibold mb-2">Table of Contents</h2>
        <ol className="list-decimal list-inside mb-6">
          {singleBlog.tableOfContents.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>


        <div
          className="prose max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: singleBlog.blogBody }}
        ></div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Comments</h2>
          {singleBlog.comments.map((c) => (
            <div key={c.id} className="mb-2 border-b pb-2">
              <p className="font-semibold">{c.name}</p>
              <p>{c.content}</p>
              <span className="text-xs text-gray-400">
                {new Date(c.date).toLocaleString()}
              </span>
            </div>
          ))}

          {user || role === "admin" ? (
            <form onSubmit={handleSubmit} className="mt-4 space-y-2">
              <textarea
                placeholder="Your Comment"
                value={comment.content}
                onChange={(e) => setComment({ ...comment, content: e.target.value })}
                className="border p-2 w-full rounded"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          ) : (
            <p className="text-gray-600 italic mt-4">Please login to comment about the blog.</p>
          )}


        </div>

        {similarBlogs.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Similar Blogs</h2>
            <div className="grid md:grid-cols-2 gap-4">
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
