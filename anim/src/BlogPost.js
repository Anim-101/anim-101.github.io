// src/BlogPost.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/blog/${slug}.md`)
      .then(res => res.text())
      .then(text => setContent(marked(text)));
  }, [slug]);

  return (
    <div className="prose dark:prose-invert mx-auto p-8 max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
