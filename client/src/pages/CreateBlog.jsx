import React, { useState, useEffect } from "react";
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
    metaDescription: "",
    introduction: "",
    readTime: "",
    tableOfContents: [],
  });
  const [currentTOCItem, setCurrentTOCItem] = useState({
    heading: "",
    explanation: [""],
    reflection: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddTOC = () => {
    const { heading, explanation, reflection } = currentTOCItem;
    const hasExplanation = explanation.some((e) => e.trim() !== "");

    if (heading.trim() && reflection.trim() && hasExplanation) {
      setFormData((prev) => ({
        ...prev,
        tableOfContents: [...prev.tableOfContents, currentTOCItem],
      }));
      setCurrentTOCItem({
        heading: "",
        explanation: [""],
        reflection: "",
      });
    } else {
      toast.error("Please fill all TOC fields before adding.");
    }
  };

  const isFormValid = () => {
    const { title, module, metaDescription, introduction, readTime, tableOfContents } = formData;
    // const { title, module, metaDescription, introduction, readTime, tableOfContents } = formData;
    return (
      title &&
      module &&
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
      metaDescription: "",
      introduction: "",
      readTime: "",
      tableOfContents: [],
    });

    setCurrentTOCItem({
      heading: "",
      explanation: [""],
      reflection: "",
    });

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

          <div className="space-y-2 border p-4 rounded border-gray-300 bg-gray-50">
            <input
              type="text"
              placeholder="Heading"
              value={currentTOCItem.heading}
              onChange={(e) =>
                setCurrentTOCItem((prev) => ({ ...prev, heading: e.target.value }))
              }
              className="w-full p-2 border border-gray-800 rounded"
            />

            {currentTOCItem.explanation.map((exp, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={`Explanation ${idx + 1}`}
                value={exp}
                onChange={(e) => {
                  const updated = [...currentTOCItem.explanation];
                  updated[idx] = e.target.value;
                  setCurrentTOCItem((prev) => ({ ...prev, explanation: updated }));
                }}
                className="w-full p-2 border border-gray-800 rounded"
              />
            ))}

            <button
              type="button"
              className="text-sm text-blue-600 underline"
              onClick={() =>
                setCurrentTOCItem((prev) => ({
                  ...prev,
                  explanation: [...prev.explanation, ""],
                }))
              }
            >
              + Add Explanation
            </button>

            <textarea
              rows="2"
              placeholder="Reflection"
              value={currentTOCItem.reflection}
              onChange={(e) =>
                setCurrentTOCItem((prev) => ({
                  ...prev,
                  reflection: e.target.value,
                }))
              }
              className="w-full p-2 border border-gray-800 rounded"
            />

            <button
              type="button"
              onClick={handleAddTOC}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add TOC Entry
            </button>
          </div>

          {/* Preview of added TOC */}
          <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
            {formData.tableOfContents.map((item, i) => (
              <li key={i}>
                <strong>{item.heading}</strong>
                <ul className="list-decimal pl-4">
                  {item.explanation.map((e, j) => (
                    <li key={j}>{e}</li>
                  ))}
                </ul>
                <em className="block mt-1">Reflection: {item.reflection}</em>
              </li>
            ))}
          </ul>
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
