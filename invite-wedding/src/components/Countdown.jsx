import React, { useEffect, useState, useRef } from "react";
import { ClockIcon, HeartIcon } from "@heroicons/react/24/outline";
import "../style/Countdown.css";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isShaking, setIsShaking] = useState(false);
  const countdownRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeLeft({});
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  useEffect(() => {
    const handleScroll = () => {
      if (countdownRef.current) {
        const rect = countdownRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsShaking(true);
        } else {
          setIsShaking(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount to check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative py-8 md:py-12 bg-gradient-to-r from-[#F1DDDB] via-[#EDD0CD] to-[#D9B2AF] text-center overflow-hidden">
      <h2
        className={`text-3xl md:text-4xl font-bold text-[#C29897] mb-10 relative z-10 animate-fadeIn tracking-wider animate-pulse${
          isShaking ? "animate-shake" : ""
        }`}
        ref={countdownRef}
      >
        Countdown to <br />
        the Big Day
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center relative z-10">
        {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
          <div key={index} className="countdown-item p-4 md:p-6 bg-white shadow-lg rounded-lg flex flex-col items-center animate-bounce-in">
            <ClockIcon className="h-10 w-10 md:h-12 md:w-12 text-[#e76969] mb-2 animate-pulse" />
            <span className="text-3xl md:text-5xl font-bold text-[#C29897]">
              {timeLeft[unit] ?? "0"}
            </span>
            <span className="text-sm md:text-lg text-[#D9B2AF] capitalize">
              {unit}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <HeartIcon
            key={i}
            className={`h-16 w-16 md:h-24 md:w-24 text-pink-300 opacity-50 animate-love-rain absolute`}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Countdown;
