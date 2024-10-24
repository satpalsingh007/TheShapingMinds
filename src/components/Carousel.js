import React, { useState, useEffect } from 'react';


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: 'dd.jpeg',
            text: "“Impact of Stress: Chronic stress can lead to significant health problems, including cardiovascular disease and weakened immune function.”"
        },
        {
            image: 'dd.jpeg',
            text: "“I was scared to talk to anyone because they would judge me, but every question I wanted to ask was answered on your website. My mind’s clear now and I’ve realized it’s not just my health I’m jeopardizing, but also the people I love. I’m a better man thanks to you.”"
        },
        {
            image: 'dd.jpeg',
            text: "“This website is an incredible source of knowledge and comfort for me. I'm going through one of the hardest times of my life mentally, and you have made me feel less alone.”"
        },
        {
            image: 'dd.jpeg',
            text: "“Just wanted to express my appreciation for developing this great resource. It has been very beneficial to me as I battle alcoholism and depression and gave me a lot of good coping techniques to win my battles and control my urges.”"
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
            {/* <h4 className="h4">How HelpingMind.org changes lives</h4> */}
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="carousel-slide" key={index}>
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
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
