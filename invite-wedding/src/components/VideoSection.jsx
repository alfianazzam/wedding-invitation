import React from 'react';
import "../style/VideoSection.css"; // Import the CSS file

const VideoSection = () => {
  const videoUrl = 'https://www.youtube.com/embed/3wDnIk5tuwY'; // URL embed YouTube

  return (
    <div className="w-full flex items-center justify-center py-12 bg-[#F1DDDB] animate-fade-in">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoUrl}
            title="Our Journey"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg border-4 border-pink-200"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
