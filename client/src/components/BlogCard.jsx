import React from "react";
import { useNavigate } from "react-router-dom";
import { useBlog } from "@/contexts/BlogContext";
import { useAuth } from "@/contexts/AuthContext";

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();
    const { deleteBlog } = useBlog();
    const { role } = useAuth();

    const handleDelete = (e) => {
        e.stopPropagation(); // prevent opening blog
        if (window.confirm("Are you sure you want to delete this blog?")) {
            deleteBlog(blog.id);
        }
    };

    const handleClick = () => {
        navigate(`/blog/${blog.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="border border-gray-300 bg-white cursor-pointer hover:shadow-lg transition duration-300 rounded-lg p-4"
        >
            <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-3">{blog.title}</h2>
            <p className="text-sm text-gray-600 mt-1">
                {blog.introduction.slice(0, 100)}...
            </p>
            <div className="text-xs text-gray-500 mt-2">
                <p>Module: {blog.module}</p>
                <p>Read time: {blog.readTime} min</p>
            </div>

            {role === "admin" && (
                <button
                    onClick={handleDelete}
                    className="bg-red-600 text-white px-3 py-1 rounded mt-2 hover:bg-red-700"
                >
                    Delete
                </button>
            )}
        </div>
    );
};

export default BlogCard; 
