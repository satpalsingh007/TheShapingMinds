import React, { useState, useEffect } from 'react';
import testimonial from "../images/testimonial.jpg";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: testimonial,
            text: "“After years of struggling with anxiety, I finally feel like I have control over my mind. Dr. Mehta’s compassionate approach helped me heal in ways I never thought possible.”",
            author:"Riya K."
        },
        {
            image: testimonial,
            text: "“Dr. Aakriti’s premarital counseling and relationship sessions made a world of difference. We’re stronger than ever and communicate better than we ever have before.”",
            author:"Arjun & Neha S."
        },
        {
            image: testimonial,
            text: "“Our son was diagnosed with ADHD and struggled in school. The support we received from Aakriti’s team has been life-changing for our family. Our child is thriving, and we couldn’t be more grateful.”",
            author:"Priya R.",
        },
        {
            image: testimonial,
            text: "“As an executive, I’ve seen firsthand the impact of mental wellness in the workplace. Dr. Mehta’s Employee Assistance Program has led to higher productivity and happier employees. Highly recommend!”",
            author:"Rajeev P., HR Manager"
        }
    ];

    const totalSlides = slides.length;

    const showSlide = (index) => {
        if (index >= totalSlides) {
            setCurrentSlide(0);
        } else if (index < 0) {
            setCurrentSlide(totalSlides - 1);
        } else {
            setCurrentSlide(index);
        }
    };

    const handlePrev = () => {
        showSlide(currentSlide - 1);
    };

    const handleNext = () => {
        showSlide(currentSlide + 1);
    };

    // Optional: Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="carousel">
                <h2>How the Shaping Mind Shape Lives</h2>
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="carousel-slide" key={index}>
                        <img className="testimonial-img" src={slide.image} alt={`Slide ${index + 1}`} />
                        <p className="p">{slide.text}</p>
                        <p className="p">⁓{slide.author}</p>
                    </div>
                ))}
            </div>
            <button className="carousel-control prev" aria-label="Previous Slide" onClick={handlePrev}>&#10094;</button>
            <button className="carousel-control next" aria-label="Next Slide" onClick={handleNext}>&#10095;</button>
        </div>
    );
};

export default Carousel;
