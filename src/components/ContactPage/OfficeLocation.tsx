 
import React from "react";

const OfficeLocation: React.FC = () => {
  return (
    <div className="flex relative flex-col items-start px-16 pt-44 pb-16 mt-24 max-w-full text-2xl font-medium min-h-[677px] text-stone-950 w-[1528px] max-md:px-5 max-md:pt-24 max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/270403fc003b1a759fe97d42e5b8b213cb120230e58d7f49951e378bb98d5c60?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e"
        alt="Office location background"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b23b0091dd558680f8c5df5f6b8a8fb4f8ff145704d79d725a68fdd313bee09f?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-[0.93] stroke-[2px] stroke-stone-950"
          />
        </a>
      </div>
    </div>
  );
};

export default OfficeLocation;
