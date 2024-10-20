 
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="self-stretch w-full">
      <div className="self-stretch pt-16 pr-6 mt-96 w-full bg-yellow-400 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59974339444b205078418a95e5bcf9617d51561b3e35858a690e8efb6ab32e7b?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e"
              alt="Company logo"
              className="object-contain w-full aspect-[2.63] fill-white max-md:mt-10 max-md:max-w-full"
            />
          </div>
          Continuing from where we left off:
          <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
            <h2 className="mt-7 text-5xl font-bold text-stone-950 max-md:mt-10 max-md:max-w-full">
              Grow Your Business. <br /> Build Great Products.
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <div className="grow mt-11 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col w-full text-2xl font-bold text-white">
                    <button className="z-10 gap-2.5 self-start px-14 py-6 bg-stone-950 max-md:px-5">
                      Book a free call
                    </button>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea538b5bd9c1499a33364bc61b2320c8fb39218daf07bdaf080c7a01202e68d6?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e"
                      alt=""
                      className="object-contain self-end -mt-11 max-w-full aspect-[0.63] w-[123px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c93ea9c23774d186ab3b3678dc3ac1560523348b08d50132bcfa6588e46e3a23?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e"
                    alt=""
                    className="object-contain grow shrink-0 mt-9 max-w-full aspect-[0.63] w-[123px]"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/09f4a722ff7f2db44141271633539defa30b090e1599a988d5755b4f73e687e5?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e"
                    alt=""
                    className="object-contain grow shrink-0 mt-9 max-w-full aspect-[0.63] w-[123px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch px-20 py-28 mt-16 w-full text-2xl text-white bg-stone-950 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1300px] max-md:max-w-full">
          <div className="flex flex-col items-start max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/10449bd1c10b5f803cd7d82f654f2236c08a36b156ae4c0b6e3fd081b6b86bd1?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e"
              alt="Company logo"
              className="object-contain max-w-full aspect-[2.98] fill-white w-[119px]"
            />
            <p className="self-stretch mt-16 font-medium leading-7 max-md:mt-10 max-md:max-w-full">
              Dsgnr. is an award winning creative and design agency <br /> based
              in New York, USA.
            </p>
            <a
              href="mailto:info@dsgnr.com"
              className="flex flex-wrap gap-5 justify-between px-9 py-6 mt-20 max-w-full font-bold whitespace-nowrap border-2 border-yellow-400 border-solid w-[493px] max-md:px-5 max-md:mt-10"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7650c29d57ba9142f599b41112ce3b6bcffd68ba3f1a3ac1a877d5ca18a3b5fa?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e"
                alt=""
                className="object-contain shrink-0 aspect-square w-[30px]"
              />
              <span>info@dsgnr.com</span>
            </a>
          </div>
          <nav className="flex gap-10 my-auto font-medium">
            <div className="flex flex-col items-start">
              <h3 className="self-stretch font-bold">What We Do</h3>
              <ul className="mt-9 space-y-4">
                <li>
                  <a href="#">Intro</a>
                </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col self-start">
              <h3 className="font-bold">Who We Are</h3>
              <ul className="mt-9 space-y-4">
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
        <div className="flex flex-wrap gap-5 justify-between self-center mt-24 mb-0 w-full font-medium leading-none max-w-[1525px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-10">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70280b0fa72ea71ed9a0f1c6123d5d02a718b9c2a9bce55bfbb52c44cc903091?placeholderIfAbsent=true&apiKey=8f6b5fb6960b4b8ea6a283ba30b22d6e"
            alt="Social media icons"
            className="object-contain shrink-0 max-w-full aspect-[6.49] w-[169px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
