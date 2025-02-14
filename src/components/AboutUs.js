import React from 'react';
import './AboutUs.css';
import familyImage from '../assets/family.jpg'; // Adjust the path as necessary

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-image-block">
                <img src={familyImage} alt="Family" className="about-us-image" />
            </div>
            <div className="about-us-text-block">
                <h1>About Us</h1>
                <p>
                    Welcome to GoodEats, where our passion for fresh food and exceptional dining experiences has been at the heart of our restaurant since our founding in 1995. Nestled in the heart of the city, we have been serving our community with love and dedication for over two decades. Our journey began with a simple vision: to create a place where people could come together to enjoy delicious, wholesome meals made from the freshest ingredients. Our founder, a culinary enthusiast, traveled the world to learn about different cuisines and cooking techniques, bringing back a wealth of knowledge and inspiration. At GoodEats, we believe that food should not only be tasty but also nourishing. That's why we source our ingredients from local farmers and markets, ensuring that every dish is made with the highest quality produce. Our menu is a celebration of seasonal flavors, featuring a variety of dishes that cater to all tastes and dietary preferences. Over the years, we have built a loyal community of food lovers who appreciate our commitment to freshness and quality. Our chefs are passionate about creating innovative dishes that highlight the natural flavors of our ingredients, and our friendly staff is dedicated to providing an unforgettable dining experience. Join us at GoodEats, where every meal is a celebration of fresh food, good company, and cherished memories. We look forward to welcoming you to our table!
                </p>
            </div>
        </div>
    );
};

export default AboutUs; 