import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/uploadEvent.css";

const UploadEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    startDate: "",
    startTime: "",
    endTime: "",
    location: "",
    price: "free",
    tickets: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleImageChange = (e) => {
    setEventData({ ...eventData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Data Submitted:", eventData);
  };

  const handleAddTicket = () => {
    setEventData({
      ...eventData,
      tickets: [...eventData.tickets, { type: "", price: "" }],
    });
  };

  const handleTicketChange = (index, field, value) => {
    const updatedTickets = [...eventData.tickets];
    updatedTickets[index][field] = value;
    setEventData({ ...eventData, tickets: updatedTickets });
  };

  return (
    <div className="container event-upload-container mt-4 pt-4">
      <div className="card upload-card p-4">
        <h2 className="text-center mb-4 text-white">Upload Event</h2>
        <form className="text-white" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Event Title</label>
            <input type="text" className="form-control" name="title" placeholder="Enter event title" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" rows="3" placeholder="Enter event description" onChange={handleChange} required></textarea>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Start Date</label>
              <input type="date" className="form-control" name="startDate" onChange={handleChange} required />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Start Time</label>
              <input type="time" className="form-control" name="startTime" onChange={handleChange} required />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">End Time</label>
              <input type="time" className="form-control" name="endTime" onChange={handleChange} required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" name="location" placeholder="Enter event location" onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Event Price</label>
            <select className="form-control" name="price" onChange={handleChange} required>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          {eventData.price === "paid" && (
            <div className="mb-3">
              <label className="form-label">Ticket Types</label>
              {eventData.tickets.map((ticket, index) => (
                <div key={index} className="d-flex mb-2">
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Ticket Type (e.g., VIP, Regular)"
                    value={ticket.type}
                    onChange={(e) => handleTicketChange(index, "type", e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    className="form-control me-2"
                    placeholder="Price"
                    value={ticket.price}
                    onChange={(e) => handleTicketChange(index, "price", e.target.value)}
                    required
                  />
                </div>
              ))}
              <button type="button" className="btn btn-primary mt-2" onClick={handleAddTicket}>
                Add Ticket Type
              </button>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input type="file" className="form-control" onChange={handleImageChange} accept="image/*" required />
          </div>

          <button type="submit" className="btn btn-success w-100">Submit Event</button>
        </form>
      </div>
    </div>
  );
};

export default UploadEvent;
