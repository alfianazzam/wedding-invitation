import React, { useEffect } from "react";
import "../style/Welcome.css";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

const Welcome = ({ onInvitationOpen }) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleClick = () => {
    document.body.classList.remove("no-scroll");
    onInvitationOpen();

    setTimeout(() => {
      const nextComponent = document.getElementById("next-component");
      if (nextComponent) {
        nextComponent.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        {/* Menambahkan banyak bunga yang terbang */}
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className={`flower flower${(index % 4) + 1}`}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30">
        <h1 className="text-8xl mb-4 text-stone-50 custom-font zoom-text">
          Welcome to Our Wedding
        </h1>
        <p className="text-5xl text-[#f7e1de] custom-nama zoom-text">
          Reza & Calista
        </p>
        <button
          onClick={handleClick}
          className="mt-20 px-8 py-3 bg-gradient-to-r from-[#ce938f] to-[#cc8b85] text-white rounded-full shadow-lg hover:from-[#EDD0CD] hover:to-[#F1DDDB] transition duration-300 animate-pulse font-serif zoom-button"
        >
          <span className="flex items-center font-bold">
            Buka Undangan
          </span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
