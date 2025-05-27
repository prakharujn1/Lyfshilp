import React from "react";
import { Wallet } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16 px-6 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Wallet size={32} className="text-yellow-300" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Budgeting 101
          </h1>
        </div>
        <p className="text-xl md:text-2xl max-w-2xl opacity-90">
          Learn the basics of managing your money wisely and building healthy
          financial habits early.
        </p>
      </div>
    </header>
  );
};

export default Header;
