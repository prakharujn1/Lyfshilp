import React, { useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import { useBlog } from "@/contexts/BlogContext";
import toast from "react-hot-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const modules = [
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

const CreateBlog = () => {
  const navigate = useNavigate();
  const { createBlog } = useBlog();
  const { role } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    module: "Finance",
    blogBody: "",
    metaDescription: "",
    introduction: "",
    readTime: "",
    tableOfContents: [],
  });
  const [tocInput, setTocInput] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddTOC = () => {
    if (tocInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        tableOfContents: [...prev.tableOfContents, tocInput],
      }));
      setTocInput("");
    }
  };

  const isFormValid = () => {
    const { title, module, blogBody, metaDescription, introduction, readTime, tableOfContents } = formData;
    return (
      title &&
      module &&
      blogBody &&
      metaDescription &&
      introduction &&
      readTime &&
      tableOfContents.length > 0 &&
      file
    );
  };

  const resetForm = () => {
    setFormData({
      title: "",
      module: "Finance",
      blogBody: "",
      metaDescription: "",
      introduction: "",
      readTime: "",
      tableOfContents: [],
    });
    setTocInput("");
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error("Please fill all fields and upload an image.");
      return;
    }

    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "tableOfContents") {
        data.append(key, JSON.stringify(value));
      } else {
        data.append(key, value);
      }
    });
    data.append("image", file);

    try {
      await createBlog(data);
      toast.success("Blog created successfully!");
      resetForm();
    } catch (err) {
      toast.error("Error creating blog.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (role && role !== "admin") {
      navigate("/blogs");
    }
  }, [role]);

  if (!role || role !== "admin") return null;


  return (
    <div className="max-w-4xl mx-auto mt-10 shadow-lg p-6 rounded bg-white border border-gray-800">
      <h1 className="text-2xl font-bold mb-6">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full p-3 border border-gray-800 rounded shadow-sm"
          />
        </div>

        <div>
          <label className="block font-medium">Module</label>
          <select
            value={formData.module}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, module: e.target.value }))
            }
            className="w-full p-2 border border-gray-800 rounded shadow-sm"
          >
            {modules.map((mod) => (
              <option key={mod} value={mod}>
                {mod}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium">Introduction</label>
          <textarea
            rows="2"
            value={formData.introduction}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, introduction: e.target.value }))
            }
            className="w-full p-2 border border-gray-800 rounded shadow-sm"
          />
        </div>

        <div>
          <label className="block font-medium">Meta Description</label>
          <textarea
            rows="2"
            value={formData.metaDescription}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                metaDescription: e.target.value,
              }))
            }
            className="w-full p-2 border border-gray-800 rounded shadow-sm"
          />
        </div>

        <div>
          <label className="block font-medium">Table of Contents</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={tocInput}
              onChange={(e) => setTocInput(e.target.value)}
              className="w-full p-2 border border-gray-800 rounded shadow-sm"
            />
            <button
              type="button"
              onClick={handleAddTOC}
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              Add
            </button>
          </div>
          <ul className="list-disc pl-5 text-sm">
            {formData.tableOfContents.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <label className="block font-medium">Blog Body</label>
          <div className="border border-gray-800 rounded shadow-sm p-1">
            <JoditEditor
              value={formData.blogBody}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, blogBody: value }))
              }
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">Read Time (in minutes)</label>
          <input
            type="text"
            value={formData.readTime}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, readTime: e.target.value }))
            }
            className="w-full p-2 border border-gray-800 rounded shadow-sm"
          />
        </div>

        <div>
          <label className="block font-medium">Thumbnail Image</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept="image/*"
            className="w-full p-2 border border-gray-800 rounded shadow-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`${loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            } text-white px-6 py-2 rounded`}
        >
          {loading ? "Creating..." : "Submit Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
