import React, { useState } from 'react';
import './slide.css'; // Import your CSS file for styling

const Slide = () => {
    const imageUrls = [
        'https://source.unsplash.com/1600x1200?female,portrait',
        'https://source.unsplash.com/1024x768?female,portrait',
        'https://source.unsplash.com/1366x768?female,portrait',
        'https://source.unsplash.com/1366x762?female,portrait',
        'https://source.unsplash.com/1364x763?female,portrait',
        // Add more image URLs here
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
    };

    return (
        <div className="container">
            <div className="carousel">
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                {imageUrls.map((url, index) => (
                    <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                        <img src={url} alt={`Slide ${index}`} />
                       
                    </div>
                ))}
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
};

export default Slide;
