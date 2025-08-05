// src/Profile.js
import React from "react";

const Profile = () => (
   <section className="flex flex-col items-center text-center py-12 px-4 bg-gray-100 dark:bg-gray-900 transition-colors">
      <img
        src="img/anim.jpg"
        alt="Anim's Profile Photo"
        className="w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-700 mb-4"
      />
      <h1 className="text-3xl font-bold mb-1 text-gray-800 dark:text-white">Hi, I'm Anim 👋</h1>
      <p className="text-gray-600 dark:text-gray-300">Full-Stack Developer | React & Spring Boot Enthusiast</p>
      
      <div className="flex space-x-6 mt-4">
        <a href="https://github.com/Anim-101" target="_blank" rel="noreferrer" className="text-gray-800 dark:text-white hover:text-blue-500 text-2xl" aria-label="GitHub Profile">
          📱
        </a>
        <a href="https://www.linkedin.com/in/anim-101" target="_blank" rel="noreferrer" className="text-gray-800 dark:text-white hover:text-blue-500 text-2xl" aria-label="LinkedIn Profile">
          💼
        </a>
        <a href="mailto:anmaksh@gmail.com" className="text-gray-800 dark:text-white hover:text-blue-500 text-2xl" aria-label="Send Email">
          ✉️
        </a>
      </div>
      <a
        href="/resume.pdf"
        download
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
);

export default Profile;