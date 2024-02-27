import React, { useState } from 'react';
import './startups.css';
import bookit from "./logos/bookit.png";
import vango from "./logos/vango.png";

function Startups() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { type: 'image', src: bookit, alt: 'BookIt', content: 'BookIt' },
    { type: 'image', src: vango, alt: 'Vango.AI', content: 'Vango.AI' },
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const renderSlide = (slide, index) => (
    <div className={`slide ${index === currentSlide ? 'active' : ''}`}>
      <img src={slide.src} alt={slide.alt} className="startup-image" />
      <div className="startup-text">{slide.content}</div>
    </div>
  );

  return (
    <div className='startup-page'>
      <div className='carousel-container'>
        <div className='carousel-inner' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map(renderSlide)}
        </div>
      </div>
      <button className='prev' onClick={goToPrevSlide}>&#10094;</button>
      <button className='next' onClick={goToNextSlide}>&#10095;</button>
    </div>
  );
}

export default Startups;
