import React, { useState } from 'react';
import image1 from '../assets/hero-img.png';
import image2 from '../assets/trade.png';
import image3 from '../assets/hero-img1.png';
import './Carousel.css';

function SimpleCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 2 + 3) % 3 + 1);
  };

  return (
    <div className="carousel-container">
     <label className="carousel-label">Bell Drum 1 Bell Drum 1 </label>
      <div id={`slide${currentSlide}`} className="carousel-item">
        <div className="carousel-image-container">
          <img src={currentSlide === 1 ? image1 : currentSlide === 2 ? image2 : image3} className="carousel-image" alt={`Slide ${currentSlide}`} />
        </div>
        <div className="carousel-line"></div>
        <div className="carousel-info">
         
          <span className="carousel-name">Picture Name {currentSlide}</span>
          <label className="carousel-label">Price:</label>
          <span className="carousel-price">$10.00</span>
          <label className="carousel-label">Description:</label>
          <p className="carousel-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <button onClick={prevSlide} className="carousel-button carousel-button-prev">❮</button>
        <button onClick={nextSlide} className="carousel-button carousel-button-next">❯</button>
      </div>
    </div>
  );
}

export default SimpleCarousel;
