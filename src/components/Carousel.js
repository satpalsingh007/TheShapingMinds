import React, { useState, useEffect } from 'react';
import testimonial from "../images/testimonial.jpg";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: testimonial,
            text: "“It was an amazing and eye opening experience for me, would definitely recommend Akriti ma'am. She builds a very comfortable and friendly environment for you and helps you in the most effective way possible. I'm glad I made a decision to meet her.”",
            author:"Nisha"
        },
        {
            image: testimonial,
            text: "“Aakriti ma'am has been educating students from the very beginning and always there to help in shaping towards good skills.. She is so dedicated and devoted to her work. She always keeps intact with politeness and kindness, she has really nice approach to interact with anyone.”",
            author:"Rohit Kumar"
        },
        {
            image: testimonial,
            text: "“I find Dr. Aakriti very kind , compassionate and helpful during different consultations for various issues in life. Got very clear , objective and rational approach in those tough times. Her kindness & unbiased listening helped in gaining inner equilibrium & peace. I wish her all the best for future endeavours in life.”",
            author:"Rama Jain",
        },
        {
            image: testimonial,
            text: "“Aakriti is a wonderful person and is blessed with great knowledge. She is like an angel in my life . No words can express how thankful I am for her suggestions .I appreciate her friendly presence and kind assistance in addressing my issues. Thank you so much Aakriti !”",
            author:"Shweta Nagpal"
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
                        {/* <img className="testimonial-img" src={slide.image} alt={`Slide ${index + 1}`} /> */}
                        <p className="p">⁓{slide.author}</p>
                        <div className='ratings'>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        </div>
                        <p className="p">{slide.text}</p>
                        
                    </div>
                ))}
            </div>
            <button className="carousel-control prev" aria-label="Previous Slide" onClick={handlePrev}>&#10094;</button>
            <button className="carousel-control next" aria-label="Next Slide" onClick={handleNext}>&#10095;</button>
        </div>
    );
};

export default Carousel;
