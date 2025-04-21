// components/UsersManagement.jsx
import React from 'react';

const UsersManagement = () => {
  return (
    <div className="container mt-4">
      <h2>Manage Users</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>Admin</td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default UsersManagement;
