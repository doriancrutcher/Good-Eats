import React from 'react';
import './Locations.css';
// Updated map image link
const googleMapImage = 'https://i.imgur.com/sGPoHBU.png';

const Locations = () => {
    return (
        <div className="locations">
            <h1>Our Location</h1>
            <p>
                Visit us at our Santa Monica location! We are dedicated to providing you with the best dining experience.
            </p>
            <div className="location">
                <h2>GoodEats Santa Monica</h2>
                <p>789 Ocean Drive, Santa Monica, CA 90401</p>
                <img src={googleMapImage} alt="Google Map of GoodEats Santa Monica" className="map-image" />
            </div>
        </div>
    );
};

export default Locations; 