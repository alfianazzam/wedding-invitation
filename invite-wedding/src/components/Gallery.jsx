import React, { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/24/outline";
import "../style/Gallery.css"; // Import the CSS file

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
    "/gallery9.jpg",
  ];

  const totalImages = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); // Mengubah gambar setiap 3 detik
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="gallery-container py-12 bg-[#f0f4f8] relative overflow-hidden">
      <h2 className="gallery-title text-4xl font-extrabold text-center mb-8 text-[#C29897] animate-fadeIn tracking-wider animate-pulse">
        Gallery
      </h2>
      <div className="relative max-w-6xl mx-auto">
        <button className="gallery-button prev-button" onClick={prevSlide}>
          <ChevronLeftIcon className="icon" />
        </button>
        <button className="gallery-button next-button" onClick={nextSlide}>
          <ChevronRightIcon className="icon" />
        </button>
        <button
          className="gallery-button play-pause-button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <PauseIcon className="icon" />
          ) : (
            <PlayIcon className="icon" />
          )}
        </button>
        <div className="relative w-full h-96 overflow-hidden">
          <div
            className="slides flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {[...Array(totalImages)].map((_, i) => {
              const index = (currentIndex + i - 1 + totalImages) % totalImages;
              return (
                <div
                  key={index}
                  className="slide-container flex-shrink-0 w-full h-full relative"
                >
                  <div className="border-container">
                    <img
                      src={images[index]}
                      alt={`Gallery ${index}`}
                      className={`slide-image ${i === 1 ? "main-image" : ""}`}
                      loading="lazy" // Lazy load gambar
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="thumbnail-container mt-4 flex gap-2 overflow-x-auto mx-5">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`mx-auto thumbnail ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              loading="lazy" // Lazy load thumbnail
            />
          ))}
        </div>
        <div className="floating-hearts">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="heart"
              style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 10 + 5}rem`,
                height: `${Math.random() * 10 + 5}rem`,
                opacity: Math.random(),
                animationDelay: `${Math.random() * 10}s`,
              }}
            >
              <svg
                className="heart-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
