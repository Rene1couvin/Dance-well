import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { useParams } from 'react-router-dom'; // Import useParams for routing

const BlogDetail = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get the post ID from the URL using useParams hook
  const { id } = useParams();

  useEffect(() => {
    // Fetch the blog post using its ID
    axios.get(`http://127.0.0.1:8000/blogs/${id}/`) // Replace with your real API URL
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching the blog post:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    
    <div className="container blog-detail mt-4">
      <h1 className="text-center mb-4">{post.title}</h1>
      <img src={post.image} alt={post.title} className="img-fluid mb-4" />
      <p><strong>Posted on:</strong> {new Date(post.date).toLocaleDateString()}</p>
      <p>{post.description}</p>
      {/* You can add more detailed content here */}
      <a href="/blog" className="btn btn-primary">Back to Blog</a>
    </div>
  );
};

export default BlogDetail;
