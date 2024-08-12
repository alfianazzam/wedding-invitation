import React from 'react';
import '../style/BrideAndGroom.css';

const BrideAndGroom = () => {
  return (
    <div className="bride-groom-container">
      <div className="portrait-wrapper">
        <div className="portrait-frame bride-frame bg-[#F1DDDB]">
          <img src="/bride.jpg" alt="Bride" className="portrait-image" />
        </div>
        <div className="portrait-details">
          <h2 className="name tracking-wider text-[#aa8787] animate-pulse">
            Calista
          </h2>
          <p className="info text-[#a08c8a]">Lahir: 12 Mei 1990</p>
          <p className="info text-[#a4706f]">Orang Tua: John Doe & Jane Doe</p>
        </div>
      </div>
      <div className="portrait-wrapper">
        <div className="portrait-frame groom-frame bg-[#D8B5B4]">
          <img src="/groom.jpg" alt="Groom" className="portrait-image" />
        </div>
        <div className="portrait-details">
          <h2 className="name tracking-wider text-[#aa8787] animate-pulse">
            Reza Arap
          </h2>
          <p className="info text-[#a08c8a]">Lahir: 25 Agustus 1989</p>
          <p className="info text-[#a4706f]">Orang Tua: Michael Arap & Sarah Arap</p>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
