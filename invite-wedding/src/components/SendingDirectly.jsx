import React from "react";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import "../style/SendingDirectly.css"; // Pastikan file CSS terhubung

const SendingDirectly = () => {
  const brideAccount = {
    name: "Nama Mempelai Wanita",
    bank: "Bank ABC",
    accountNumber: "1234 5678 9012 3456",
  };

  const groomAccount = {
    name: "Nama Mempelai Pria",
    bank: "Bank XYZ",
    accountNumber: "6543 2109 8765 4321",
  };

  const renderCard = (account) => (
    <div
      className="relative bg-white text-[#C29897] p-6 shadow-xl rounded-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out mx-5 sm:mx-8 md:mx-10"
    >
      <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg">
        <CreditCardIcon className="h-8 w-8 text-[#C29897]" />
      </div>
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold tracking-wide">{account.bank}</h3>
        <div className="text-sm italic">ATM Card</div>
      </div>
      <div className="mb-6">
        <p className="text-2xl font-bold tracking-wider">
          {account.accountNumber}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg">{account.name}</p>
        <p className="text-sm">VALID THRU 12/28</p>
      </div>
    </div>
  );

  return (
    <div className="py-16 bg-gradient-to-b from-[#EDD0CD] to-[#F1DDDB] relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#C29897] relative z-10 tracking-wider animate-pulse">
        Sending Directly
      </h2>
      <div className="max-w-lg mx-auto grid grid-cols-1 gap-10 relative z-10">
        {renderCard(brideAccount)}
        {renderCard(groomAccount)}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 15 + 5}rem`,
              height: `${Math.random() * 15 + 5}rem`,
              opacity: Math.random(),
              animation: `move ${
                Math.random() * 20 + 10
              }s infinite ease-in-out`,
            }}
          >
            <svg
              className="text-[#D8B5B4] h-full w-full"
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
  );
};

export default SendingDirectly;
