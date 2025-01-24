import React from 'react';
import './styles/preloader.css'; // Import CSS for styling

const Preloader = () => {
    return (
        <div className="Preloader">
            <div className="loader"></div>
            <p>Loading...</p>
        </div>
    );
};

export default Preloader;
