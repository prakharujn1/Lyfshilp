import React, { useState, useEffect } from "react";
import { useBlog } from "@/contexts/BlogContext";
import BlogCard from "@/components/BlogCard";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Hero from "@/BlogDesign/Hero";

const AllBlogs = () => {
  const { blogs, getAllBlogs, loading } = useBlog();
  const [selectedModule, setSelectedModule] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const { role } = useAuth();
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

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    getAllBlogs();
  }, []);

  useEffect(() => {
    if (selectedModule === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter((blog) => blog.module === selectedModule));
    }
    setCurrentPage(1); // Reset to page 1 when filter changes
  }, [blogs, selectedModule]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <>
      <Hero />

      <div className="max-w-7xl mx-auto px-4 mt-8">
        {/* Filters Header */}
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700">
            <img
              src="/blogDesign/filterIcon.svg"
              alt="Filter Icon"
              className="w-4 h-4"
            />
            Filters
          </button>
          <p className="text-sm font-semibold text-gray-600">
            {filteredBlogs.length} Blog{filteredBlogs.length !== 1 && "s"} found
          </p>
        </div>

        {/* Category Heading */}
        <p className="text-sm font-medium text-gray-600 mb-2">Category</p>

        {/* Module Buttons */}
        <div className="flex flex-wrap gap-2 mt-6">
          {modules.map((mod) => (
            <button
              key={mod}
              onClick={() => setSelectedModule(mod)}
              className={`px-4 py-1.5 text-sm font-semibold rounded-full border ${
                selectedModule === mod
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-gray-100 text-gray-700 border-transparent"
              }`}
            >
              {mod}
            </button>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-gray-300 mt-8 absolute left-0 right-0" />

        {/* Admin Create Button */}
        {role === "admin" && (
          <div className="mt-14">
            <button
              onClick={() => navigate("/create-blog")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              + Create Blog
            </button>
          </div>
        )}

        {/* Blog Cards Grid */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="mt-10 md:mt-16 px-4 pb-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedBlogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* Pagination (unchanged design, only logic added) */}
            <div className="flex justify-center mt-4 mb-10">
              <nav className="flex items-center space-x-1 text-sm font-medium">
                {/* Previous */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`flex items-center gap-1 px-2 py-1 text-gray-500 ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:underline"
                  }`}
                >
                  ← Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages || 1 }).map((_, index) => {
                  const page = index + 1;
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1;
                  const showDots =
                    (page === currentPage - 2 && page > 2) ||
                    (page === currentPage + 2 && page < totalPages - 1);

                  if (showPage) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 rounded-md text-sm font-semibold transition ${
                          currentPage === page
                            ? "bg-green-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (showDots) {
                    return (
                      <span key={page} className="px-1 text-gray-500">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                {/* Next */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(prev + 1, totalPages || 1)
                    )
                  }
                  disabled={currentPage === totalPages || totalPages === 0}
                  className={`flex items-center gap-1 px-2 py-1 text-gray-500 ${
                    currentPage === totalPages || totalPages === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:underline"
                  }`}
                >
                  Next →
                </button>
              </nav>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllBlogs;
