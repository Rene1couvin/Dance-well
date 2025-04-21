import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [events, setEvents] = useState([]);
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetching data from the backend using axios
    axios.get('/api/blogs') // Replace with your backend URL
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));

    axios.get('/api/events') // Replace with your backend URL
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));

    axios.get('/api/students') // Replace with your backend URL
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));

    axios.get('/api/instructors') // Replace with your backend URL
      .then(response => setInstructors(response.data))
      .catch(error => console.error('Error fetching instructors:', error));
  }, []);

  const handleEdit = (table, id) => {
    alert(`Edit row ${id} in ${table}`);
  };

  const handleView = (table, id) => {
    alert(`View row ${id} in ${table}`);
  };

  const handleDelete = (table, id) => {
    alert(`Delete row ${id} from ${table}`);
  };

  const generateReport = (table) => {
    alert(`Generate report for ${table}`);
  };

  const renderTable = (data, tableName) => {
    return (
      <div className="table-container my-4">
        <h2 className="text-xl font-bold mb-4">{tableName}</h2>
        <table className="table table-striped w-full">
          <thead className="bg-gray-200">
            <tr>
              {Object.keys(data[0] || {}).map((key) => (
                <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
                <td className="flex space-x-2">
                  <button
                    onClick={() => handleView(tableName, item.id)}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(tableName, item.id)}
                    className="btn btn-warning btn-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(tableName, item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => generateReport(tableName)}
          className="btn btn-primary mt-4"
        >
          Generate Report
        </button>
      </div>
    );
  };

  return (
    <div className="admin-dashboard container mx-auto p-4">
      {renderTable(blogs, 'Blogs')}
      {renderTable(events, 'Events')}
      {renderTable(students, 'Students')}
      {renderTable(instructors, 'Instructors')}
    </div>
  );
};

export default AdminDashboard;
