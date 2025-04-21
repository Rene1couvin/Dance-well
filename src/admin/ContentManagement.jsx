// components/ContentManagement.jsx
import React from 'react';

const ContentManagement = () => {
  return (
    <div className="container mt-4">
      <h2>Manage Content</h2>
      <div className="mb-3">
        <button className="btn btn-success">Add New Content</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dance Class 101</td>
            <td>Beginner</td>
            <td>Active</td>
            <td><button className="btn btn-warning">Edit</button></td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default ContentManagement;