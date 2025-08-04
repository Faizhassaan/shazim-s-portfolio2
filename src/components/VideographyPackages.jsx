import React from "react";

const VideographyPackages = () => {
  const openWhatsApp = (packageType) => {
    const message = `Hi Shazim,\n\nI’m interested in booking the *${packageType} Package* for my wedding videography. Could you please share more details regarding availability, inclusions, and next steps?\n\nLooking forward to your response.`;
    const phoneNumber = "923255784785";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const packageData = {
    Silver: [
      "1 Photographer, 1 Videographer",
      "Indoor/Outdoor Shoot",
      "1920x1080 HD Video",
      "Highlights",
      "12x36 Digital Album",
      "Price: 45,000 Rs",
    ],
    Gold: [
      "2 Photographers, 1 Videographer",
      "Indoor/Outdoor Shoot",
      "1920x1080 HD Video",
      "Highlights",
      "12x36 Digital Album",
      "Price: 55,000 Rs",
    ],
    Platinum: [
      "2 Photographers, 2 Videographers",
      "Indoor/Outdoor Shoot",
      "1920x1080 HD Video",
      "Highlights",
      "12x36 Digital Album",
      "Price: 75,000 Rs",
    ],
  };

  const packageColors = {
    Silver: "text-[#C0C0C0]",
    Gold: "text-[#FFD700]",
    Platinum: "text-[#E5E4E2]",
  };

  const buttonColors = {
    Silver:
      "bg-[#C0C0C0] text-black hover:bg-[#b0b0b0]",
    Gold:
      "bg-[#FFD700] text-black hover:bg-[#e6c200]",
    Platinum:
      "bg-[#E5E4E2] text-black hover:bg-[#d4d3d1]",
  };

  return (
    <div
      className="relative min-h-screen bg-[#141414] text-white"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="mx-auto w-full max-w-[1140px] px-4 py-6">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight pb-4">
          Videography Packages
        </h1>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-xl border border-[#474747] bg-[#141414]">
            <table className="w-full">
              <thead className="bg-[#212121]">
                <tr>
                  {Object.keys(packageData).map((type) => (
                    <th
                      key={type}
                      className={`px-4 py-3 text-left text-sm font-medium ${packageColors[type]}`}
                    >
                      {type}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Features rows */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <tr key={i} className="border-t border-[#474747]">
                    {Object.keys(packageData).map((type) => (
                      <td
                        key={type}
                        className={`px-4 py-2 text-sm font-normal ${packageColors[type]}`}
                      >
                        {packageData[type][i]}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Book Now Buttons Row */}
                <tr className="border-t border-[#474747]">
                  {Object.keys(packageData).map((type) => (
                    <td key={type} className="px-4 py-3 text-sm text-center">
                      <button
                        onClick={() => openWhatsApp(type)}
                        className={`rounded-full px-4 py-2 font-bold text-sm transition duration-300 ${buttonColors[type]}`}
                      >
                        Book Now ({type})
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden flex flex-col gap-4">
          {Object.entries(packageData).map(([type, features]) => (
            <div
              key={type}
              className="rounded-xl border border-[#474747] bg-[#1a1a1a] p-4"
            >
              <h2
                className={`text-lg font-semibold mb-2 ${packageColors[type]}`}
              >
                {type} Package
              </h2>
              <ul className={`list-disc list-inside text-sm space-y-1 ${packageColors[type]}`}>
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button
                onClick={() => openWhatsApp(type)}
                className={`mt-4 w-full rounded-full py-2 font-bold text-sm transition duration-300 ${buttonColors[type]}`}
              >
                Book Now ({type})
              </button>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-[#ababab] text-sm mt-6">
          Packages above are one-day packages.
        </p>
      </div>
    </div>
  );
};

export default VideographyPackages;
