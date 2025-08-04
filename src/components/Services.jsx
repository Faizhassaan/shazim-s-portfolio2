import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Mail, Phone, MapPin, Clock, Camera, Film, Music, Users, Tv, Edit } from 'lucide-react';
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Wedding Videography",
      description: "Capture your special day with cinematic wedding films that tell your unique love story. From ceremony to reception, every moment beautifully preserved."
    },
    {
      icon: Users,
      title: "Corporate Videos",
      description: "Professional corporate video production including brand videos, training materials, event coverage, and promotional content."
    },
    {
      icon: Music,
      title: "Music Videos",
      description: "Creative music video production with artistic direction, dynamic cinematography, and post-production excellence."
    },
    {
      icon: Film,
      title: "Event Coverage",
      description: "Complete event documentation for conferences, parties, festivals, and special occasions with professional quality."
    },
    {
      icon: Tv,
      title: "Commercial Production",
      description: "High-impact commercial videos and advertisements designed to engage your target audience and boost brand awareness."
    },
    {
      icon: Edit,
      title: "Post-Production",
      description: "Professional editing, color grading, motion graphics, and audio mixing to bring your footage to life."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services