import React, { useState, useEffect, useRef } from "react";
import {
  SparklesIcon,
  PaperAirplaneIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const WishBox = () => {
  const [wishList, setWishList] = useState([
    {
      name: "John Doe",
      message:
        "Congratulations on your big day! Wishing you a lifetime of love and happiness.",
    },
    {
      name: "Jane Smith",
      message:
        "What a beautiful journey you two have started together. Best wishes!",
    },
    {
      name: "Emily Johnson",
      message:
        "So happy for you both! Can’t wait to celebrate your special day.",
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const wishBoxRef = useRef(null);

  const handleAddWish = (e) => {
    e.preventDefault();
    if (newName && newMessage) {
      setWishList([...wishList, { name: newName, message: newMessage }]);
      setNewName("");
      setNewMessage("");
    }
  };

  // Love effect within WishBox component
  useEffect(() => {
    const createLoveEffect = () => {
      const loveContainer = document.createElement("div");
      loveContainer.className =
        "love-container absolute top-0 left-0 w-full h-full pointer-events-none";
      loveContainer.style.overflow = "hidden";
      loveContainer.style.position = "relative";
      wishBoxRef.current.appendChild(loveContainer);

      const createLove = () => {
        const love = document.createElement("div");
        love.className = "love absolute text-pink-400";
        love.innerHTML = "❤";
        love.style.left = `${Math.random() * 90}%`;
        love.style.animationDuration = `${2 + Math.random() * 3}s`;
        loveContainer.appendChild(love);

        setTimeout(() => {
          love.remove();
        }, 5000);
      };

      const intervalId = setInterval(createLove, 700);

      return () => {
        clearInterval(intervalId);
        loveContainer.remove();
      };
    };

    const cleanUp = createLoveEffect();

    return cleanUp;
  }, []);

  return (
    <div
      ref={wishBoxRef}
      className="relative py-10 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F1DDDB" }}
    >
      <h2
        className="text-4xl font-extrabold text-center mb-10 tracking-wider animate-pulse"
        style={{ color: "#C29897" }}
      >
        <SparklesIcon className="h-8 w-8 inline-block text-pink-400 mr-2" />{" "}
        Wish Box
      </h2>

      {/* Formulir Input */}
      <div
        className="max-w-lg mx-auto p-6 shadow-2xl rounded-xl mb-10"
        style={{ backgroundColor: "#EDD0CD", backdropFilter: "blur(10px)" }}
      >
        <h3
          className="text-2xl font-bold mb-4 flex items-center"
          style={{ color: "#C29897" }}
        >
          <PaperAirplaneIcon className="h-6 w-6 text-pink-400 mr-2" /> Add Your
          Wish
        </h3>
        <form onSubmit={handleAddWish} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold"
              style={{ color: "#C29897" }}
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg text-gray-800 placeholder-[#C29897] focus:ring-2 focus:ring-pink-200 focus:outline-none"
              style={{ backgroundColor: "#ffffff", borderColor: "#C29897" }}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold"
              style={{ color: "#C29897" }}
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg text-gray-800 placeholder-[#C29897] focus:ring-2 focus:ring-pink-200 focus:outline-none"
              style={{ backgroundColor: "#ffffff", borderColor: "#C29897" }}
              placeholder="Write your message here"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{ backgroundColor: "#C29897" }}
          >
            Send Wish
          </button>
        </form>
      </div>

      {/* Display Wishes */}
      <div className="max-w-lg mx-auto grid grid-cols-1 gap-6">
        {wishList.map((wish, index) => (
          <div
            key={index}
            className="p-5 shadow-2xl rounded-lg border transform hover:-translate-y-1 transition-transform"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "#C29897",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="text-lg mb-3" style={{ color: "#4B2E39" }}>
              "{wish.message}"
            </p>
            <p
              className="text-md font-semibold text-right"
              style={{ color: "#803F47" }}
            >
              - {wish.name}
            </p>
            <div className="flex justify-end mt-4">
              <HeartIcon className="h-5 w-5 text-pink-400 animate-ping" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishBox;
