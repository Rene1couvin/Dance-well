import React, { useState, useEffect } from 'react';
import '../styles/Blog.css'; // Custom CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const Blog = () => {
  // Sample state for blog posts (this will be replaced with real backend data)
  const [blogPosts, setBlogPosts] = useState([]);

  // Simulating fetching data from a backend
  useEffect(() => {
    // For demo, using static data
    const fetchedPosts = [
      {
        title: "Classical Dance Class",
        image: "https://via.placeholder.com/300x200",
        date: "January 2025",
        description: "Join our classical dance classes and learn the art of movement.",
        link: "#"
      },
      {
        title: "Classical Dance Class",
        image: "https://via.placeholder.com/300x200",
        date: "February 2025",
        description: "Learn the beauty of classical dance with our expert instructors.",
        link: "#"
      },
      {
        title: "Classical Dance Class",
        image: "https://via.placeholder.com/300x200",
        date: "March 2025",
        description: "Improve your dancing skills in our classical dance classes.",
        link: "#"
      },
    ];

    // Replace the static posts with the fetched ones
    setBlogPosts(fetchedPosts);
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1>Our Blog & News</h1>
        <p>Join us today for your first dance</p>
        <p>
          <a href="tel:714-783-2205" className="btn btn-light">Call Us: 714-783-2205</a>
        </p>
      </section>

      {/* Blog & News Section */}
      <section className="blog-news py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Latest News & Articles</h2>
          <div className="row">
            {/* Loop through the blog posts */}
            {blogPosts.map((post, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <img src={post.image} className="card-img-top" alt="Blog Post Image" />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                    <a href={post.link} className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stat-counters py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h3>150+ Dance Classes</h3>
            </div>
            <div className="col-md-3">
              <h3>49+ Best Instructors</h3>
            </div>
            <div className="col-md-3">
              <h3>17+ Total Events</h3>
            </div>
            <div className="col-md-3">
              <h3>507+ Happy Customers</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Training Platform Section */}
      <section className="training-platform py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Training Platform</h2>
          <div className="row">
            {/* Step 1 */}
            <div className="col-md-4">
              <div className="training-card">
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="Personalized Learning"
                />
                <div className="card-body">
                  <h3>02</h3>
                  <p>Personalized Learning</p>
                  <p>
                    Learn at your pace, with personalized dance lessons tailored
                    to your needs.
                  </p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-4">
              <div className="training-card">
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="Convenient Dancing"
                />
                <div className="card-body">
                  <h3>03</h3>
                  <p>Convenient Dancing</p>
                  <p>
                    Dance anytime, anywhere with our flexible class schedule.
                  </p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-4">
              <div className="training-card">
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="Dance Theater"
                />
                <div className="card-body">
                  <h3>04</h3>
                  <p>Dance Theater</p>
                  <p>
                    Showcase your skills in a professional dance theater
                    performance.
                  </p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
