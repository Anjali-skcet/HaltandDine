import React, { useState, useEffect, Children } from "react";
import "./Slideshow.css";

function Slideshow({ children, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = Children.toArray(children);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex + 1 === slides.length) {
                    return 0; // Go back to the first slide after the last
                } else {
                    return prevIndex + 1;
                }
            });
        }, interval);

        return () => clearInterval(slideInterval);
    }, [slides.length, interval]);

    const handleRadioChange = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slideshow">
            <div className="slide-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        {slide}
                    </div>
                ))}
            </div>
            <div className="slide-radios">
                {slides.map((_, index) => (
                    <input
                        key={index}
                        type="radio"
                        name="slide-radio"
                        className="slide-radio"
                        checked={currentIndex === index}
                        onChange={() => handleRadioChange(index)}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default Slideshow;
