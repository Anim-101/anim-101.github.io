import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => (
  <section className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Hi, I'm Anim 👋</h1>
    <p className="text-lg">A passionate developer building web experiences.</p>
  </section>
);

const About = () => (
  <section className="p-8">
    <h2 className="text-3xl font-semibold mb-2">About Me</h2>
    <p>I enjoy working with JavaScript, React, and backend technologies like Spring Boot.</p>
  </section>
);

const Projects = () => (
  <section className="p-8">
    <h2 className="text-3xl font-semibold mb-2">Projects</h2>
    <ul className="list-disc list-inside">
      <li><a href="#" className="text-blue-500">Project 1</a> - Description</li>
      <li><a href="#" className="text-blue-500">Project 2</a> - Description</li>
    </ul>
  </section>
);

const Contact = () => (
  <section className="p-8">
    <h2 className="text-3xl font-semibold mb-2">Contact</h2>
    <p>Reach me at <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a></p>
  </section>
);

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
