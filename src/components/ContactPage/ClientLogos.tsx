import React from "react";
import stripe from "../../assets/stripe.svg";
import spotify from "../../assets/spotify.svg";
import airbnb from "../../assets/airbnb.svg";
import google from "../../assets/google.svg";
import tesla from "../../assets/tesla.svg";
import dropbox from "../../assets/dropbox.svg";
import dhl from "../../assets/dhl.svg";
import reddit from "../../assets/reddit.svg";

const ClientLogos: React.FC = () => {
  const logos = [
    { src: spotify, alt: "Spotify", style: { top: "10%", left: "5%", width: "200px" } },
    { src: dropbox, alt: "Dropbox", style: { top: "10%", left: "30%", width: "216px" } },
    { src: tesla, alt: "Tesla", style: { top: "10%", left: "55%", width: "232px" } },
    { src: reddit, alt: "Reddit", style: { top: "10%", left: "80%", width: "186px" } },
    { src: google, alt: "Google", style: { top: "60%", left: "5%", width: "179px" } },
    { src: stripe, alt: "Stripe", style: { top: "60%", left: "30%", width: "149px" } },
    { src: dhl, alt: "DHL", style: { top: "60%", left: "55%", width: "218px" } },
    { src: airbnb, alt: "Airbnb", style: { top: "60%", left: "80%", width: "210px" } },
  ];

  return (
    <section className="relative w-full h-[480px]">
      {/* Separator SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        width="1272"
        height="480"
        viewBox="0 0 1272 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <line x1="319" x2="319" y2="480" stroke="#9A9B9B" strokeWidth="2" />
          <line x1="636" x2="636" y2="480" stroke="#9A9B9B" strokeWidth="2" />
          <line x1="954" x2="954" y2="480" stroke="#9A9B9B" strokeWidth="2" />
          <line y1="239" x2="1272" y2="239" stroke="#9A9B9B" strokeWidth="2" />
        </g>
      </svg>

      {/* Logos */}
      <div className="absolute inset-0">
        {logos.map((logo, index) => (
          <img
            key={index}
            loading="lazy"
            src={logo.src}
            alt={logo.alt}
            className="absolute"
            style={logo.style}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
