import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './TestimonialSection.css';

const TestimonialSection = () => {
    return (
        <div className="testimonial-section">
            <h2 className="testimonial-header">Dining Experience Like No Other</h2>
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-content">
                        <p className="testimonial-body">
                            "The ambiance was perfect, the food was exquisite, and the service was exceptional. I can't recommend this place enough!"
                        </p>
                        <p className="testimonial-author">~ John Doe Group</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-content">
                        <p className="testimonial-body">
                            "A delightful experience! The flavors were incredible, and the staff was so friendly. Will definitely return!"
                        </p>
                        <p className="testimonial-author">~ Jane Smith</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-content">
                        <p className="testimonial-body">
                            "An unforgettable dining experience! Every dish was a masterpiece. Highly recommend to food lovers!"
                        </p>
                        <p className="testimonial-author">~ The Foodies</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-content">
                        <p className="testimonial-body">
                            "This place is a gem! The atmosphere is cozy, and the food is to die for. A must-visit!"
                        </p>
                        <p className="testimonial-author">~ Emily Johnson</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-content">
                        <p className="testimonial-body">
                            "Absolutely loved it! The dishes were bursting with flavor, and the service was top-notch."
                        </p>
                        <p className="testimonial-author">~ Michael Brown</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-content">
                        <p className="testimonial-body">
                            "A culinary delight! Each bite was a new adventure. Can't wait to come back!"
                        </p>
                        <p className="testimonial-author">~ Sarah Connor</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TestimonialSection; 