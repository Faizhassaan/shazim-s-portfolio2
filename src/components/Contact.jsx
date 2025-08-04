import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import VideographyPackages from "./VideographyPackages";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import cameraSound from "../assets/camera-click.mp3";

const Contact = () => {
  const [flash, setFlash] = useState(false);
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);

  const handleGetQuote = () => {
    // Play sound
    audioRef.current.currentTime = 0;
    audioRef.current.play();

    // Flash effect
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
      setOpen(true);
    }, 300);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hassanshazim94@gmail.com",
      href: "mailto:hassanshazim94@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 325-5784785",
      href: "tel:+923255784785",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      {/* Camera Sound */}
      <audio ref={audioRef} src={cameraSound} />

      {/* Flash Overlay */}
      {flash && (
        <div className="fixed inset-0 bg-white opacity-100 z-[9999] transition duration-300" />
      )}

      {/* MUI Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        PaperProps={{
          style: {
            width: '60%',
            height: '80%',
            backgroundColor: "#141414",
            color: "#fff",
            padding: "0",
          },
        }}
      >
        <DialogContent style={{ padding: 0, position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 10,
              backgroundColor: "#222",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <VideographyPackages />
        </DialogContent>
      </Dialog>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your vision to life? Get in touch to discuss your next project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="text-blue-400 font-semibold mb-2">{item.label}</h4>
                {item.href ? (
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleGetQuote}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
