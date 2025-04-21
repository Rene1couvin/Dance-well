import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Event.css"; // Custom CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/event");
        console.log("API Response:", response.data);
        
        // Ensure data is an array before setting state
        if (Array.isArray(response.data)) {
          setEvents(response.data);
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (err) {
        setError("Failed to load events. Please try again later.");
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="EventPage">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1>Upcoming Dance Events</h1>
        <p>Join us for exciting dance sessions and performances.</p>
        <p>
          <a href="tel:+250788630520" className="btn btn-light">
            Call Us: +250 788 630 520
          </a>
        </p>
      </section>

      {/* Events Section */}
      <section className="events-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Upcoming Events</h2>

          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <p className="text-center text-danger">
              {error} <button onClick={() => window.location.reload()} className="btn btn-link">Retry</button>
            </p>
          ) : events.length === 0 ? (
            <p className="text-center">No upcoming events available.</p>
          ) : (
            <div className="row">
              {events.map((event) => (
                <div className="col-md-4 mb-4" key={event.id}>
                  <div className="card event-card">
                    <img
                      src={event.image || "https://via.placeholder.com/300x200"}
                      className="card-img-top"
                      alt={event.name || "Event image"}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{event.name}</h5>
                      <p className="card-text">{event.description}</p>
                      <a href={`/events/${event.id}/register`} className="btn btn-primary">
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stat-counters py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            {[
              { count: "150+", text: "Dance Classes" },
              { count: "49+", text: "Best Instructors" },
              { count: "17+", text: "Total Events" },
              { count: "507+", text: "Happy Customers" },
            ].map((stat, index) => (
              <div className="col-6 col-md-3" key={index}>
                <h3>{stat.count}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Gallery Section */}
      <section className="dance-gallery py-5">
        <div className="container">
          <h2 className="text-center mb-5">Gallery of Our Dance Classes</h2>
          <div className="row">
            {["gallery1.jpg", "gallery2.jpg", "gallery3.jpg"].map((img, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <img
                  src={`https://via.placeholder.com/300x200`}
                  className="img-fluid rounded"
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
