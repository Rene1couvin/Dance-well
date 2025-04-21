// components/Reports.jsx
import React from 'react';

const Reports = () => {
  return (
    <div className="container mt-4">
      <h2>Reports</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-02-04</td>
            <td>Monthly Stats</td>
            <td>Completed</td>
            <td><button className="btn btn-info">View</button></td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
