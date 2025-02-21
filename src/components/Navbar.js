import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/GoodEatsLogo.svg'; // Adjust the path as necessary
// Updated Instagram logo link
const instagramLogo = 'https://i.imgur.com/TA91Hse.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu when a link is clicked
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" onClick={handleLinkClick}>
                    <img src={logo} alt="GoodEats Logo" />
                </Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
                <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
                <li><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
                <li>
                    <a 
                        href="https://www.opentable.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                    >
                        Make Reservation
                    </a>
                </li>
                <li><Link to="/locations" onClick={handleLinkClick}>Locations</Link></li>
                <li>
                    <a 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                    >
                        <img src={instagramLogo} alt="Instagram" className="instagram-logo" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar; 