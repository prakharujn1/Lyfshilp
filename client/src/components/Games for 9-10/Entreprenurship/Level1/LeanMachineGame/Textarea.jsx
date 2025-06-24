// components/ui/textarea.jsx
import React from "react";

export function Textarea({ value, onChange, placeholder, className = "" }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-2 border border-gray-300 rounded-lg min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
    />
  );
}
