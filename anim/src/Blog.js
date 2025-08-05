import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "React + Spring Boot",
    date: "July 25, 2025",
    slug: "blog1"
  },
  {
    id: 2,
    title: "Deploy Portfolio to GitHub Pages",
    date: "July 26, 2025",
    slug: "blog2"
  }
];

<Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
  Read more →
</Link>
