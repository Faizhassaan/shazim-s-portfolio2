import React from 'react';
import bgVideo from '../assets/bgVideo.mp4';
import logo from '../assets/logo2.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dark gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900 opacity-70 z-0" />

      {/* Content */}
      <div className="text-center z-10 max-w-4xl px-4">
        {/* <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
          Art by Shazim
        </h1> */}

        <img
  className="mx-auto w-40 sm:w-52 md:w-64 mb-6"
  src={logo}
  alt="Logo"
/>
        <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
          I'm Shazim Hassan, a videographer with a passion for capturing life's moments through a cinematic lens...
        </p>
        <a
          href="#portfolio"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
