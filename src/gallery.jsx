import React, { useState, useEffect } from 'react';
import './App.css'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const images = [
    { src: 'images/2.jpg', alt: 'Main bedroom' },
    { src: 'images/1.jpg', alt: 'Living room' },
    { src: 'images/3.jpg', alt: 'Door lock' },
    { src: 'images/5.jpg', alt: 'Dining area' },
    { src: 'images/room1.jpg', alt: 'Work space' },
  ];

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const showPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleSwipe = (touchStartX, touchEndX) => {
    if (touchStartX - touchEndX > 50) {
      showNextImage();
    } else if (touchEndX - touchStartX > 50) {
      showPreviousImage();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isSliderVisible) {
        if (e.key === 'ArrowLeft') {
          showPreviousImage();
        } else if (e.key === 'ArrowRight') {
          showNextImage();
        } else if (e.key === 'Escape') {
          setIsSliderVisible(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSliderVisible]);

  return (
    <div className="container">
      <div className="image-grid">
        {images.map((img, index) => (
          <div className={`image-item ${index === 0 ? 'main-image' : ''}`} key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
        <button className="show-all" onClick={() => setIsSliderVisible(true)}>Show all photos</button>
      </div>

      {isSliderVisible && (
        <div className="img-slider-container" style={{ display: isSliderVisible ? 'block' : 'none' }}>
          <div
            id="imageSlider"
            className="image-slider"
            onTouchStart={(e) => (this.touchStartX = e.changedTouches[0].screenX)}
            onTouchEnd={(e) => handleSwipe(this.touchStartX, e.changedTouches[0].screenX)}
          >
            <div className="slider-container">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className={index === currentIndex ? 'active' : ''}
                />
              ))}
            </div>
            <button className="img-slider-nav-button prev" onClick={showPreviousImage}>&lt;</button>
            <button className="img-slider-nav-button next" onClick={showNextImage}>&gt;</button>
            <div className="close-button" onClick={() => setIsSliderVisible(false)}>&times;</div>
            <div className="slide-counter">{currentIndex + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
