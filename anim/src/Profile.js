// src/Profile.js
import React from "react";

const Profile = () => (
   <section className="flex flex-col items-center text-center py-12 px-4 bg-gray-100 dark:bg-gray-900 transition-colors">
      <img
        src="img/anim.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-700 mb-4"
      />
      <h1 className="text-3xl font-bold mb-1 text-gray-800 dark:text-white">Hi, I'm Anim 👋</h1>
      <p className="text-gray-600 dark:text-gray-300">Full-Stack Developer | React & Spring Boot Enthusiast</p>
      
      <div className="flex space-x-6 mt-4">
        <a href="https://github.com/Anim-101" target="_blank" rel="noreferrer" className="text-gray-800 dark:text-white hover:text-blue-500 text-2xl">
          📱
        </a>
        <a href="https://www.linkedin.com/in/anim-101" target="_blank" rel="noreferrer" className="text-gray-800 dark:text-white hover:text-blue-500 text-2xl">
          💼
        </a>
        <a href="mailto:anmaksh@gmail.com.com" className="text-gray-800 dark:text-white hover:text-blue-500 text-2xl">
          ✉️
        </a>
      </div>
    </section>
);

export default Profile;