// components/Settings.jsx
import React from 'react';

const Settings = () => {
  return (
    <div className="container mt-4">
      <h2>Settings</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="siteName" className="form-label">Site Name</label>
          <input type="text" className="form-control" id="siteName" />
        </div>
        <div className="mb-3">
          <label htmlFor="siteUrl" className="form-label">Site URL</label>
          <input type="url" className="form-control" id="siteUrl" />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
