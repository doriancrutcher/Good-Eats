import React from 'react';
import './HeroSection.css';
import video from '../assets/freshveggies.mp4'; // Adjust the path as necessary

const HeroSection = () => {
    return (
        <div className="hero-section">
            <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
            <h1 className="tagline">~ Food that Warms the Heart ~</h1>

                <button className="reservation-button">
                    <a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer">
                        Make Reservation
                    </a>
                </button>
            </div>
        </div>
    );
};

export default HeroSection; 