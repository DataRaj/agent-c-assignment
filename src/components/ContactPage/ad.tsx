import logo from "../../assets/logo.svg";
import midhand from "../../assets/mbot-hand.svg";
import lefhand from "../../assets/lbot-hand.svg";
import righthand from "../../assets/rbot-hand.svg";
const Ad = () => {
      return (
            <div className="w-full bg-[#FEC00A] py-24 relative">
              <div className="grid grid-cols-4 gap-4 items-center max-lg:grid-cols-1 md-[810px]:flex-col md-[810]:justify-center max-md:py-12 ">
          
                {/* Left column - Logo */}
                <div className="col-span-1 flex justify-start">
                  <img src={logo} alt="logo" className="h-[164px]" />
                </div>
          
                {/* Middle column - Text (spanning 2 columns) */}
                <div className="col-span-2 flex justify-start">
                  <h2 className="text-5xl font-bold text-stone-950 text-center md:w-3/4">
                    Grow Your Business. <br /> Build Great Products.
                  </h2>
                </div>
          
                {/* Right column - Button */}
                <div className="col-span-1 flex-start">
                  <button className="px-14 py-6 bg-stone-950 text-white font-bold mr-32 max-lg:mr-0">
                    Book a free call
                  </button>
                </div>
                
                <div className="absolute bottom-0 right-6 px-20 flex flex-wrap flex-row md:pt-20">
    <img src={lefhand} alt="left hand" className="w-20 md:w-24 lg:w-28 xl:w-28 relative -bottom-1" />
    <img src={midhand} alt="middle hand" className="w-20 md:w-24 lg:w-28 xl:w-28 relative -bottom-1" />
    <img src={righthand} alt="right hand" className="w-20 md:w-24 lg:w-28 xl:w-28" />
  </div>
              </div>
            </div>
          );
          
      }

export default Ad
