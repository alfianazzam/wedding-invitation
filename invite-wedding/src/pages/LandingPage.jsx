import React, { useState } from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import VideoSection from "../components/VideoSection";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import Gallery from "../components/Gallery";
import RSVP from "../components/RSVP";
import Testimonials from "../components/Wishbox";
import SendingDirectly from "../components/SendingDirectly";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import FloatingMusicPlayer from "../components/FloatingMusicPlayer";
import BrideAndGroom from "../components/BrideAndGroom";

const LandingPage = () => {
  const weddingDate = new Date("2024-12-31T00:00:00");
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleInvitationOpen = () => {
    setIsInvitationOpened(true);
    setIsPlaying(true); // Mulai musik saat undangan dibuka
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Hero Section */}
      <div className="hidden lg:block lg:flex-none lg:w-2/3 heroSticky">
        <Hero isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>

      {/* Landing Page */}
      <div className="w-full lg:w-1/3 flex-1">
        <Welcome onInvitationOpen={handleInvitationOpen} />
        {isInvitationOpened && (
          <>
            <div id="next-component">
              <BrideAndGroom />
            </div>
            <div id="about-us">
              <AboutUs />
            </div>
            <div id="video-section">
              <VideoSection />
            </div>
            <div id="countdown">
              <Countdown targetDate={weddingDate} />
            </div>
            <div id="event-details">
              <EventDetails />
            </div>
            <div id="gallery">
              <Gallery />
            </div>
            <div id="sending-directly">
              <SendingDirectly />
            </div>
            <div id="rsvp">
              <RSVP />
            </div>
            <div id="testimonials">
              <Testimonials />
            </div>
            <div id="footer">
              <Footer />
            </div>
          </>
        )}
        <FloatingMusicPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  );
};

export default LandingPage;
