// src/BlogPost.js
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/blog/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then(setContent)
      .catch((err) => setError("Blog post not found."));
  }, [slug]);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <ReactMarkdown>{content}</ReactMarkdown>
      )}
    </div>
  );
}
