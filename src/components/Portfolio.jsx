import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Mail, Phone, MapPin, Clock, Camera, Film, Music, Users, Tv, Edit } from 'lucide-react';
import VideoCard from './VideoCard'
import WeddingHighlight from '../assets/WeddingHighlight.png'

const Portfolio = () => {
  const videos = [
    {
      title: "Wedding Highlight Reel",
      description: "A beautiful celebration of love captured in cinematic style with emotional storytelling and stunning visuals.",
      driveLink: "https://drive.google.com/drive/folders/1x_K1PUSlCB75shc_3QkgrhgX0L_lLoiv?usp=sharing",
      thumbnail: WeddingHighlight
    },
    {
      title: "Corporate Brand Video",
      description: "Professional brand storytelling that showcases company values and vision through compelling visuals.",
      driveLink: "https://drive.google.com/drive/folders/1x_K1PUSlCB75shc_3QkgrhgX0L_lLoiv?usp=sharing",
      thumbnail: WeddingHighlight
    },
    {
      title: "Music Video",
      description: "Creative music video with dynamic editing, color grading, and artistic cinematography.",
      driveLink: "https://drive.google.com/drive/folders/1x_K1PUSlCB75shc_3QkgrhgX0L_lLoiv?usp=sharing",
      thumbnail: WeddingHighlight
    },
    {
      title: "Event Documentation",
      description: "Complete event coverage capturing all the important moments and atmosphere of the celebration.",
      driveLink: "https://drive.google.com/drive/folders/1x_K1PUSlCB75shc_3QkgrhgX0L_lLoiv?usp=sharing",
      thumbnail: WeddingHighlight
    },
    {
      title: "Commercial Advertisement",
      description: "High-impact commercial video designed to engage audiences and drive brand awareness.",
      driveLink: "https://drive.google.com/drive/folders/1x_K1PUSlCB75shc_3QkgrhgX0L_lLoiv?usp=sharing",
      thumbnail: WeddingHighlight
    },
    {
      title: "Documentary Short",
      description: "Compelling documentary storytelling that explores human experiences and social narratives.",
      driveLink: "https://drive.google.com/drive/folders/1x_K1PUSlCB75shc_3QkgrhgX0L_lLoiv?usp=sharing",
      thumbnail: WeddingHighlight
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              driveLink={video.driveLink}
              thumbnail={video.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio