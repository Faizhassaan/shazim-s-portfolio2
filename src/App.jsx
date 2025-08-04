import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Mail, Phone, MapPin, Clock, Camera, Film, Music, Users, Tv, Edit } from 'lucide-react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Contact />
      <Footer />
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          
          html {
            scroll-behavior: smooth;
          }
        `
      }} />
    </div>
  );
};

export default App;