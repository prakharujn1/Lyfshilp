// components/ui/dialog.jsx
import React from "react";

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-4">
        {children}
      </div>
      <div className="absolute top-0 right-0 p-4">
        <button
          onClick={() => onOpenChange(false)}
          className="text-white text-xl font-bold"
        >
          ✖
        </button>
      </div>
    </div>
  );
}
