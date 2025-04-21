import React, { useState } from "react";
import bg1 from "../assets/Image/salsa/15.jpg";
import bg2 from "../assets/Image/salsa/4.jpeg";
import "../styles/1home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1 .3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>;
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [darkMode] = useState(false);
  return (
    <div>

      {/* Section 1: Hero Section */}
      <div style={{padding:"2rem"}}></div>
      <section className="d-flex align-items-center justify-content-center vh-100 text-center text-white"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <div className="p-4  vw-100 " style={{ fontFamily: "'Roboto', sans-serif",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <h1 className="display-4 fw-bold" style={{ fontFamily: "'Roboto', sans-serif" }}>
          Dance is the hidden language of the soul
        </h1>
        
        <div className="mt-4">
          <button className="btn btn-danger me-3">Join Now</button>
          <button className="btn btn-primary">Read More</button>
        </div>
        <p className="mt-4 fs-5">
          Join us today for your first dance <a
        href="tel:+250788630520"
        className="no-underline text-white font-weight-bold"
      >
        📞 +250 788 630 520
      </a>
        </p>
      </div>
    </section>

    {/* Section 2 : about dance well */}
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="img-container">
            <img
              src={bg2}
              alt="About Dance Well"
              className="img-fluid rounded shadow slide-in"
              style={{ height: "auto", maxWidth: "100%" }} // Responsive image
            />
          </div>
        </div>
          <div className="col-md-6 text-md-right">
            <h2 className="display-4 font-weight-bold mb-4">About Dance Well Class</h2>
              <p className="lead mb-4">
              At Dance Well, we believe in the transformative power of movement. Our class is a welcoming space for all ages and skill levels, where you can explore the joy of dance while improving physical fitness, mental wellness, and creativity. Join us to discover how dance can enrich your life!

              <p>This version still conveys the essence of your class and its benefits, but in a more concise manner.</p>
              </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </section>


      {/* Section 3: Dance Training Platform */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            
            <h2 className="text-l font-bold">Training Platform</h2>
            <h1>OUR Training Platform</h1>
            <button className="bg-blue-500 px-4 py-2 rounded">
              View Trainings
            </button>
          </div>
          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded">
              &#8592;
            </button>
            <Carousel
              additionalTransfrom={0}
              autoPlay
              autoPlaySpeed={3000}
              centerMode={false}
              infinite
              keyBoardControl
              minimumTouchDrag={80}
              showDots={false}
              slidesToSlide={1}
              responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
                tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
                mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
              }}
            >
              {[1, 2, 3, 4, 5].map((card, index) => (
                <div key={index} className="p-4">
                  <img
                    src={`/path-to-card${card}.jpg`}
                    alt={`Card ${card}`}
                    className="rounded shadow"
                  />
                  <p className="mt-2 text-center">Card {card}</p>
                </div>
              ))}
            </Carousel>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded">
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Events</h2>
            <button className="bg-blue-500 px-4 py-2 rounded">
              View All Events
            </button>
          </div>
          <Carousel
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={3000}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            showDots={false}
            slidesToSlide={1}
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
              tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
              mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
            }}
          >
            {[1, 2, 3, 4].map((event, index) => (
              <div key={index} className="p-4">
                <img
                  src={`/path-to-event${event}.jpg`}
                  alt={`Event ${event}`}
                  className="rounded shadow"
                />
                <p className="mt-2 text-center">Event {event}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      
        {/* Section 5: Blogs and News */}
        <section className="py-20">
          <div className="container mx-auto flex justify-between items-center">
            <h2 className="text-2xl font-bold">Our Latest News & Articles</h2>
            <div className="flex space-x-4">
              <button className="text-xl">&#8592;</button>
              <button className="text-xl">&#8594;</button>
            </div>
          </div>
          <div className="carousel mt-10">
            <div className="flex space-x-4 overflow-x-auto">
              {/* Add blog cards here */}
              <div className="card w-64 bg-gray-200 p-4 rounded-lg">
                <img
                  src="blog-image.jpg"
                  alt="Blog"
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="font-bold mt-2">Blog Title</h3>
                <p className="text-sm mt-2">Short description of the blog.</p>
              </div>
              {/* Repeat for more blog cards */}
            </div>
          </div>
        </section>

        {/* Section 6: Dance Instructor */}
        <section className="py-20">
          <div className="container mx-auto flex justify-between items-center">
            <h2 className="text-2xl font-bold">Our Professional Instructors</h2>
            <div className="flex space-x-4">
              <button className="text-xl">&#8592;</button>
              <button className="text-xl">&#8594;</button>
            </div>
          </div>
          <div className="carousel mt-10">
            <div className="flex space-x-4 overflow-x-auto">
              {/* Instructor cards */}
              <div className="card w-64 bg-gray-200 p-4 rounded-lg relative group">
                <img
                  src="instructor1.jpg"
                  alt="Instructor"
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-white">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <h3 className="font-bold mt-2">Instructor Name</h3>
                <p className="text-sm mt-2">What they teach</p>
              </div>
              {/* Repeat for more instructors */}
            </div>
          </div>
        </section>

        {/* Section 7: Dance Gallery */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              Our Dance Well Class Gallery
            </h2>
            <div className="flex space-x-4 mb-6">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                All
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Salsa
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Bachata
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Kompa
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Semba
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Kizomba
              </button>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {/* Gallery cards */}
              <div className="card bg-gray-200 p-4 rounded-lg">
                <img
                  src="gallery-image.jpg"
                  alt="Gallery"
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              {/* Repeat for more gallery cards */}
            </div>
          </div>
        </section>

        {/* Section 8: Feedback from Customers */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
            <div className="carousel mt-10">
              <div className="flex space-x-4 overflow-x-auto">
                {/* Feedback cards */}
                <div className="card w-64 bg-gray-200 p-4 rounded-lg">
                  <h3 className="font-bold">Customer Name</h3>
                  <p className="text-sm mt-2">Rate: 5/5</p>
                  <p className="text-sm mt-2">Feedback text...</p>
                </div>
                {/* Repeat for more feedback cards */}
              </div>
            </div>
          </div>
        </section>

       
        
      
    </div>
  );
};

export default HomePage;
