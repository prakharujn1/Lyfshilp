import axios from "axios";
import { createContext, useContext, useState } from "react";
const BlogContext = createContext();
export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [similarBlogs, setSimilarBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const server = "http://localhost:3000";

  // Get all blogs
  const getAllBlogs = async () => {
    if (blogs.length > 0) return; // already fetched

    setLoading(true);
    try {
      const cached = localStorage.getItem("blogs");
      if (cached) {
        setBlogs(JSON.parse(cached));
        setLoading(false); // show cached immediately
      }

      const res = await axios.get(`${server}/blogs`);
      setBlogs(res.data);
      localStorage.setItem("blogs", JSON.stringify(res.data));
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get single blog by ID + similar blogs
  const getBlogById = async (id) => {
    setLoading(true);
    try {
      const cached = localStorage.getItem(`blog-${id}`);
      if (cached) {
        const { blog, similar } = JSON.parse(cached);
        setSingleBlog(blog);
        setSimilarBlogs(similar);
      }

      const res = await axios.get(`${server}/blogs/${id}`);
      setSingleBlog(res.data.blog);
      setSimilarBlogs(res.data.similar);
      localStorage.setItem(
        `blog-${id}`,
        JSON.stringify({
          blog: res.data.blog,
          similar: res.data.similar,
        })
      );
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  // Create blog (expects FormData)
  const createBlog = async (blogData) => {
    try {
      console.log("📤 Sending blogData to server...");
      for (let pair of blogData.entries()) {
        console.log("➡️", pair[0], ":", pair[1]);
      }

      await axios.post(`${server}/blogs`, blogData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      getAllBlogs();
    } catch (error) {
      console.error(
        "❌ Error creating blog:",
        error.response?.data || error.message
      );
    }
  };

  // Delete blog
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${server}/blogs/${id}`);
      getAllBlogs();
    } catch (error) {
      console.log("Error deleting blog:", error.message);
      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response data:", error.response.data);
      }
    }
  };

  // Post comment
  const postComment = async (blogId, name, content) => {
    try {
      await axios.post(`${server}/blogs/comment`, { blogId, name, content });
      getBlogById(blogId); // refresh comments
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        singleBlog,
        similarBlogs,
        loading,
        getAllBlogs,
        getBlogById,
        createBlog,
        deleteBlog,
        postComment,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
