import React, { useState } from 'react';
import { UserIcon, EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import "../style/RSVP.css"; // Pastikan file CSS ini ada

const RSVP = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}, for your RSVP!`);
  };

  return (
    <div className="relative py-16 bg-gradient-to-b from-[#F1DDDB] to-[#EDD0CD]" id="rsvp">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#C29897] tracking-wider animate-pulse">RSVP</h2>
      <div className="max-w-lg mx-4 sm:mx-6 md:mx-8 lg:mx-auto">
        <form
          onSubmit={handleSubmit}
          className="relative bg-white p-8 shadow-lg rounded-xl transform hover:shadow-2xl transition-all duration-500 ease-in-out"
        >
          <div className="mb-6">
            <label className="block text-[#C29897] font-semibold mb-2">
              <div className="flex items-center">
                <UserIcon className="h-6 w-6 mr-2 text-[#C29897]" /> Name
              </div>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-[#D8B5B4] rounded-lg text-[#C29897] placeholder-[#C29897] bg-white focus:ring-2 focus:ring-[#C29897] focus:outline-none transition duration-300"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#C29897] font-semibold mb-2">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 mr-2 text-[#C29897]" /> Email
              </div>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-[#D8B5B4] rounded-lg text-[#C29897] placeholder-[#C29897] bg-white focus:ring-2 focus:ring-[#C29897] focus:outline-none transition duration-300"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#C29897] font-semibold mb-2">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 mr-2 text-[#C29897]" /> Will you be attending?
              </div>
            </label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full p-3 border border-[#D8B5B4] rounded-lg bg-white text-[#C29897] focus:ring-2 focus:ring-[#C29897] focus:outline-none transition duration-300"
              required
            >
              <option value="">Please select</option>
              <option value="yes">Yes, I'll be there</option>
              <option value="no">Sorry, I can't make it</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#C29897] text-white font-bold rounded-lg shadow-md hover:bg-[#D9B2AF] transition-all duration-300"
          >
            Submit RSVP
          </button>
        </form>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 8 + 3}rem`,
              height: `${Math.random() * 8 + 3}rem`,
              opacity: Math.random(),
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              backgroundImage: "url('path_to_heart_image.png')", // Ganti dengan path gambar hati Anda
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RSVP;
