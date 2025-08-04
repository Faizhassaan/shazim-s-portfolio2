import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Mail, Phone, MapPin, Clock, Camera, Film, Music, Users, Tv, Edit } from 'lucide-react';
import profile from '../assets/profile.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text ">
                Cinematic Videographer & Editor
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Hi, I'm Shazim Hassan, a creative and detail-oriented videographer and video editor with 5+ years of freelance experience in filming, editing, and producing content for clients across various industries. Adept at visual storytelling, using industry-standard tools, and managing projects from concept to delivery. Passionate about creating visually compelling content that engages audiences.
                </p>
                <p>
                  I believe every story deserves to be told beautifully. Whether it's capturing the joy of a wedding day, the energy of a corporate event, or the essence of a brand, I bring passion and professionalism to every project.
                </p>
                <p>
                  I shoot with Sony mirrorless cameras, applying modern cinematic techniques to every project. My work was also recognized at SZABIST’s Cinematic Saga competition, where our university film project won first place.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-start">
              <div className="w-70 min-h-[400px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden flex items-center justify-center">
  <img src={profile} className="h-full w-full object-cover" alt="Profile" />
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About