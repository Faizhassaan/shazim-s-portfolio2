import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Mail, Phone, MapPin, Clock, Camera, Film, Music, Users, Tv, Edit } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 border border-white/10 hover:border-blue-500/30">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard