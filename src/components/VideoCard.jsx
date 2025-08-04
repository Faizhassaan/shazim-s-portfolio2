import React from 'react';
import { Play } from 'lucide-react';

const VideoCard = ({ title, description, driveLink, thumbnail }) => {
  const openVideo = (link) => {
    const videoId = link.match(/\/d\/(.+?)\//);
    if (videoId) {
      const embedLink = `https://drive.google.com/file/d/${videoId[1]}/preview`;
      window.open(embedLink, '_blank', 'width=800,height=600');
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 border border-white/10 hover:border-blue-500/30">
      <div 
        className="relative h-48 w-full cursor-pointer group"
        onClick={() => openVideo(driveLink)}
      >
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover object-[0px_-80px]"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 text-gray-800 ml-1" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
