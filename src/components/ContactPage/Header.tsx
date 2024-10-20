 
import React from "react";
import logo from "../../assets/logo.svg";
import menuButton from "../../assets/menuButton.svg";
import HeroImage from "../../assets/Hero Image.png";
import shape_1 from "../../assets/shape_1.svg";
import shape_2 from "../../assets/shape_2.svg";
import mouse from "../../assets/mouse.svg";
import HeroSection from "../../assets/Hero Section.png";
const Header: React.FC = () => {
  return (
    <header
      className="flex flex-col items-start self-stretch pt-px pb-6 w-full bg-[#FDCA09] max-md:pr-5 max-md:max-w-full h-[881px]"
      style={{ backgroundImage: `url(${HeroSection})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="pt-11 max-w-full rounded-none w-[1602px] max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 text-7xl font-bold text-center leading-[110px] text-stone-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
              <img
                loading="lazy"
                src={logo}
                alt=""
                className="object-contain aspect-[3] fill-white w-[84px]"
              />
              <div className=" flex justify-center items-center self-end mt-52 w-[942px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                We would love to hear from you.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col max-md:mt-10 max-md:mr-0">
              <button
                className="flex flex-col self-end px-3.5 py-5 bg-white border-8 border-white border-solid h-[66px] w-[66px]"
                aria-label="Menu"
              >
                <span className="shrink-0 w-full border-solid bg-stone-950 border-[5px] border-stone-950 h-[5px]"></span>
                <span className="shrink-0 mt-4 w-full border-solid bg-stone-950 border-[5px] border-stone-950 h-[5px]"></span>
              </button>
              <img
                loading="lazy"
                src={HeroImage}
                height={388}
                width={735}
                alt=""
                className="object-contain self-start mt-96 relative bottom-52 aspect-[0.63] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src={mouse}
        alt=""
        className="object-contain mt-9 w-16 aspect-square"
      />
    </header>
  );
};

export default Header;
