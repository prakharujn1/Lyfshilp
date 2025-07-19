import React, { useState, useEffect } from "react";
import { useBlog } from "@/contexts/BlogContext";
import BlogCard from "@/components/BlogCard";
import { useAuth } from "@/contexts/AuthContext"; // or your actual path
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const { blogs, getAllBlogs, loading } = useBlog();
  const [selectedModule, setSelectedModule] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const { role } = useAuth(); // to get role
  const navigate = useNavigate();

  const modules = [
    "All",
    "Finance",
    "Communication",
    "Computers",
    "Entrepreneurship",
    "Environment",
    "Leadership",
    "Digital Marketing",
    "Law",
    "SEL",
  ];

  useEffect(() => {
    getAllBlogs();
  }, []);

  useEffect(() => {
    if (selectedModule === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.module === selectedModule));
    }
  }, [blogs, selectedModule]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>

      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-600">Blogs found: {filteredBlogs.length}</p>
        {role === "admin" && (
          <button
            onClick={() => navigate("/create-blog")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Create Blog
          </button>
        )}
      </div>

      <select
        onChange={(e) => setSelectedModule(e.target.value)}
        value={selectedModule}
        className="border px-3 py-2 rounded mb-6"
      >
        {modules.map((mod) => (
          <option key={mod} value={mod}>
            {mod}
          </option>
        ))}
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
