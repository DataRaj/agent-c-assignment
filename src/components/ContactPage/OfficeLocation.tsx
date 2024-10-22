 
import React from "react";
import office from "../../assets/The Office.png";
import directions from "../../assets/direction.svg";
const OfficeLocation: React.FC = () => {
  return (
    <div className="flex relative flex-col items-start px-16 pt-44 pb-16 mt-24 max-w-full text-2xl font-medium min-h-[677px] text-stone-950 2xl:w-[1528px] max-md:px-5 max-md:pt-24 max-md:mt-10">
      <img
        loading="lazy"
        src={office}        alt="Office location background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-start px-11 pt-24 pb-14 max-w-full bg-white w-[381px] max-md:px-5 max-md:pt-24">
        <h3 className="text-4xl font-bold">New York, USA</h3>
        <address className="mt-4 opacity-50 not-italic">
          7626 W. 8th St. Massapequa, NY 11758
        </address>
        <div className="mt-6">
          <a href="mailto:info@dsgnr.com">info@dsgnr.com</a> <br />
          <a href="tel:+1543890098" className="text-stone-950">
            (543)890 98
          </a>
        </div>
        <a
          href="#"
          className="flex gap-4 items-center mt-14 text-xl font-semibold uppercase min-h-[25px] max-md:mt-10"
        >
          <span>get directions</span>
          <img
            loading="lazy"
            src={directions}            
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-[0.93] stroke-[2px] stroke-stone-950"
          />
        </a>
      </div>
    </div>
  );
};

export default OfficeLocation;
