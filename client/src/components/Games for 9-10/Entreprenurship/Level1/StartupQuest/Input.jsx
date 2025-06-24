import React from "react";

export function Input({ placeholder, onChange, value }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="w-full p-2 border border-gray-300 rounded-lg"
    />
  );
}
