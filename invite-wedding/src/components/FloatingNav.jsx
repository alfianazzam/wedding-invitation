import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Floating Button */}
      <button
        className="fixed bottom-4 left-16 bg-[#e86765] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-50 transition-transform duration-300 transform hover:scale-105 hover:bg-pink-600"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Navigation Menu */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 bg-white shadow-lg rounded-lg z-40 w-56">
          <a
            href="#about-us"
            className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#video-section"
            className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
          >
            Video
          </a>
          <a
            href="#countdown"
            className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
          >
            Countdown
          </a>
          <a
            href="#event-details"
            className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
          >
            Event Details
          </a>
          <a
            href="#gallery"
            className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
          >
            Gallery
          </a>
          <a
            href="#sending-directly"
            className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
          >
            Sending Directly
          </a>
          <a
            href="#rsvp"
            className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
          >
            RSVP
          </a>
          <a
            href="#testimonials"
            className="block px-4 py-2 text-[#fc8987] hover:bg-gray-200 transition-colors duration-300"
          >
            Testimonials
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
