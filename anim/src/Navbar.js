// src/Navbar.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="flex gap-5">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/projects" className="hover:text-gray-300">Projects</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        <Link to="/profile" className="hover:text-gray-300">Profile</Link>
        <Link to="/blog" className="hover:text-gray-300">Blog</Link> {/* 🆕 */}
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-700 hover:bg-gray-600 text-sm px-3 py-1 rounded"
      >
        {darkMode ? '☀ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
};

export default Navbar;
