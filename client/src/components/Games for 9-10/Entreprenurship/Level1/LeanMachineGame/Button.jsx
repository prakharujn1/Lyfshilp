// components/ui/button.jsx
import React from "react";

export function Button({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
