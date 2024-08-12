import React, { useState } from 'react';
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const AboutUs = () => {
  const [showLetter, setShowLetter] = useState(false);

  const toggleLetter = () => {
    setShowLetter(!showLetter);
  };

  return (
    <div className="py-12 bg-[#F1DDDB] relative overflow-hidden" id="about-us">
      <h2 className="text-5xl font-extrabold text-center mb-8 text-[#C29897] tracking-wider animate-pulse">About Us</h2>
      <div className="max-w-4xl mx-auto text-center space-y-12 relative">
        
        {/* Card dengan Pita */}
        <div className="relative bg-[#FBE4E4] p-8 rounded-lg shadow-lg border border-[#DFC1BE] mx-4 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-t from-[#DFC1BE] via-[#F1DDDB] to-[#FBE4E4] opacity-20"></div>
          <div className="relative z-10">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <HeartIcon className="h-12 w-12 text-[#fc8987] mx-auto animate-bounce" />
              </div>
              <button 
                onClick={toggleLetter} 
                className="bg-[#C29897] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#B58685] focus:outline-none">
                Baca Kisah Kami
              </button>
            </div>
            {showLetter && (
              <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-[#DFC1BE] text-left">
                <p className="text-lg text-[#775E5C]">
                  Kami pertama kali bertemu di sebuah acara yang tidak terduga. Percikan cinta itu mulai tumbuh, dan tanpa kami sadari, benih cinta itu terus tumbuh. Tahun demi tahun berlalu, dan cinta kami semakin kuat. Dengan penuh cinta dan keyakinan, kami memutuskan untuk mengambil langkah besar ini dan mengikat janji suci pernikahan.
                </p>
                <p className="text-lg text-[#775E5C] mt-4">
                  Kami sangat senang dapat berbagi momen ini dengan Anda, teman-teman, dan keluarga yang kami cintai. Terima kasih telah menjadi bagian dari perjalanan kami. Kami tidak sabar untuk merayakan hari istimewa ini bersama Anda semua.
                </p>
              </div>
            )}
          </div>
          <div className="absolute top-0 left-0 transform -translate-y-8 translate-x-4">
            <div className="w-20 h-20 bg-[#f8dbdd] rounded-full absolute -top-4 -left-4 border-4 border-[#f2cdca] z-0"></div>
          </div>
        </div>

        {/* Surat Ar-Rum dan Terjemahan Latin */}
        <div className="relative bg-[#FBE4E4] p-8 rounded-lg shadow-lg border border-[#DFC1BE] mx-4 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in">
          <div className="absolute inset-0 pointer-events-none">
            <HeartIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4" />
            <HeartIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
            <SparklesIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4" />
            <SparklesIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4" />
          </div>
          <blockquote className="relative text-lg italic text-[#775E5C] font-serif">
            <p className="mb-4">
              "Dan di antara tanda-tanda-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri supaya kamu merasa tenteram kepadanya dan dijadikannya di antaramu rasa kasih dan sayang."
            </p>
            <footer>
              <cite className="block text-base text-[#302625]">
                Surah Ar-Rum, Ayat 21
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Burung Terbang */}
        <div className="absolute inset-0 pointer-events-none">
          <SparklesIcon className="h-16 w-16 text-[#D8B5B4] opacity-60 animate-bird-fly absolute top-0 left-1/4" />
          <SparklesIcon className="h-16 w-16 text-[#D8B5B4] opacity-60 animate-bird-fly absolute bottom-0 right-1/4" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
