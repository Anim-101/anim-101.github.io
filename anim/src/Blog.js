import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "React + Spring Boot",
      description: "Learn how to integrate React with Spring Boot.",
      slug: "react-spring-boot"
    },
    {
      title: "Deploy Portfolio to GitHub Pages",
      description: "A step-by-step guide to deploying your portfolio.",
      slug: "deploy-portfolio"
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      {posts.map((post) => (
        <div key={post.slug}>
          <h3 className="text-xl font-bold">{post.title}</h3>
    <p>{post.description}</p>
    <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
      Read more →
    </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;