import React from "react";
import hands from "../../assets/Hands.png";
import Logo from "../../assets/Logo.png";
import mailLogo from "../../assets/mail-logo.svg";
import socialMediaImages from "../../assets/social-media-images.svg";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FDCA09] mt-72 flex flex-col">
      <div className="pt-16 pr-6 flex flex-row gap-[86px] md:flex-row md:gap-[86px] md:justify-evenly relative items-center">
        <img
          src={Logo}
          alt="Company logo"
          className="w-1/4 flex items-start absolute left-0"
        />
        <h2 className="text-4xl font-bold text-stone-950 flex md:w-1/3 pl-20 justify-end items-end">
          Grow Your Business. <br /> Build Great Products.
        </h2>

        <div className="relative flex items-start">
          <button className="px-14 py-6 bg-stone-950 text-2xl text-white font-bold">
            Book a free call
          </button>
        </div>

        <img
          src={hands}
          alt="Hand"
          className="absolute -bottom-28 right-0 w-72 h-auto"
        />
      </div>

      <div className="bg-stone-950 text-white py-28 px-20 mt-28 md:py-24">
        <div className="flex flex-col gap-[86px] md:flex-row md:justify-between">
          <div>
            <img src={Logo} alt="Company logo" className="w-24" />
            <p className="mt-6">
              Dsgnr. is an award-winning creative and design agency based in New
              York, USA.
            </p>
            <a
              href="mailto:info@dsgnr.com"
              className="mt-8 inline-flex items-center gap-4 border-2 border-yellow-400 py-3 px-6"
            >
              <img src={mailLogo} alt="Mail icon" className="w-8" />
              info@dsgnr.com
            </a>
          </div>

          <nav className="flex flex-col gap-[86px] md:flex-row">
            <div>
              <h3 className="font-bold">What We Do</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#">Intro</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Work</a></li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Who We Are</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex justify-between items-center mt-16 gap-[86px]">
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
          <img
            src={socialMediaImages}
            alt="Social media icons"
            className="w-32"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
