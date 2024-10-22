import React from "react";
import stripe from "../../assets/stripe.svg";
import spotify from "../../assets/spotify.svg";
import airbnb from "../../assets/Airbnb.svg";
import google from "../../assets/google.svg";
import tesla from "../../assets/tesla.svg";
import dropbox from "../../assets/dropbox.svg";
import dhl from "../../assets/dhl.svg";
import reddit from "../../assets/reddit.svg";
import separator from "../../assets/Seperators.svg";

const ClientLogos = () => {
  const logos = [
    { src: spotify, alt: "Spotify" },
    { src: dropbox, alt: "Dropbox" },
    { src: tesla, alt: "Tesla" },
    { src: reddit, alt: "Reddit" },
    { src: google, alt: "Google" },
    { src: stripe, alt: "Stripe" },
    { src: dhl, alt: "DHL" },
    { src: airbnb, alt: "Airbnb" }
  ];

  return (
    <section className="w-full py-16 px-4 bg-white my-10 mb-32">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-3xl mx-auto mb-16 leading-tight">
          We worked with the world's biggest
          <br className="hidden md:block" /> brands and the most innovative startups
        </h2>

        {/* Logo Grid with Separators */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Separators */}
          <div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none">
            <div className="col-span-1 border-r lg:border-gray-400" />
            <div className="col-span-1 border-r lg:border-gray-400" />
            <div className="col-span-1 border-r lg:border-gray-400" />
          </div>

          {/* Horizontal Separator */}
          <div className="absolute left-0 right-0 top-1/2 border-b lg:border-gray-400 pointer-events-none" />

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 relative">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-12 md:p-16"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full max-w-[120px] h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;