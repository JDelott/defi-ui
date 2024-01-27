import React, { useState } from 'react';
import image1 from '../assets/hero-img.png';
import image2 from '../assets/hero-img1.png';
import image3 from '../assets/trade.png';
import './EarnCarousel.css';

function EarnCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 2 + 3) % 3 + 1);
  };

  return (
    <div>
    {/* <h1> Bell Drums </h1> */}
    <div className="carousel-container">
     {/* <label className="carousel-label">Bell Drum 1</label> */}
      <div id={`slide${currentSlide}`} className="carousel-item">
        <div className="carousel-image-container">
          <img src={currentSlide === 1 ? image1 : currentSlide === 2 ? image2 : image3} className="carousel-image" alt={`Slide ${currentSlide}`} />
        </div>
        <div className="carousel-info">
         
          
          <label className="carousel-label">Description:</label>
          <p className="carousel-description">Bell Drums 14"x6.5" Cast Bronze Snare Drum with Matching Hoops - Trick Throw Off</p>
          <label className="carousel-label">Price:</label>
          <span className="carousel-price">$3200.00</span>

        </div>
        <button onClick={prevSlide} className="carousel-button carousel-button-prev">❮</button>
        <button onClick={nextSlide} className="carousel-button carousel-button-next">❯</button>
      </div>
    </div>
    </div>
  );
}

export default EarnCarousel;
