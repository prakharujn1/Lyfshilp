import React from "react";

export function Textarea({ placeholder, onChange, value }) {
  return (
    <textarea
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="w-full p-2 border border-gray-300 rounded-lg min-h-[80px]"
    />
  );
}
