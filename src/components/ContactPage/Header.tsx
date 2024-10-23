 
// import React from "react";
// import logo from "../../assets/logo.svg";
// import HeroImage from "../../assets/Hero Image.png";
// // import mouse from "../../assets/mouse.svg";
// import menuButton from "../../assets/menuButton.svg";
// // import HeroSection from "../../assets/Hero Section.png";
// const Header: React.FC = () => {
//   return (
//     <header
//       className="flex flex-col items-start self-stretch w-full bg-[#FDCA09] max-md:pr-5 max-md:max-w-full h-[881px]"
      
//       // style={{ backgroundImage: `url(${HeroSection})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       <nav className="flex flex-row justify-between pt-12 px-[88px]">
//          <img src={logo} alt="" className=" 2xl:w-[96px] "/>
//          <img src={menuButton} alt="" className=" 2xl:h-[76px] 2xl:w-[72px]"/>
//       </nav>
//       <div className="pt-11 max-w-full rounded-none xl:w-[1602px] max-md:pl-5">
//         <div className="flex gap-5 max-md:flex-col">
//           <div className=" flex-col"></div>
//           <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col mt-5 text-7xl font-bold text-center leading-[110px] text-stone-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
//               <img
//                 loading="lazy"
//                 src={logo}
//                 alt=""
//                 className="object-contain aspect-[3] fill-white w-[84px]"
//               />
//               <div className=" flex justify-center items-center self-end mt-52 w-[942px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
//                 We would love to hear from you.
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
//             <div className="flex z-10 flex-col max-md:mt-10 max-md:mr-0">
//               <button 
//                 className="flex flex-col self-end "
//                 aria-label="Menu"
//               >
//                 <img src={menuButton} alt="" />
//                 {/* <span className="shrink-0 w-full border-solid bg-stone-950 border-[5px] border-stone-950 h-[5px]"></span>
//                 <span className="shrink-0 mt-4 w-full border-solid bg-stone-950 border-[5px] border-stone-950 h-[5px]"></span> */}
//               </button>
//               <img
//                 loading="lazy"
//                 src={HeroImage}
//                 height={388}
//                 width={735}
//                 alt=""
//                 className="object-contain self-start mt-96 relative bottom-52 aspect-[0.63] max-md:mt-10"
//               />
//             </div>
            
//           </div>
//         </div>
//       </div>

//     </header>
//   );Office Location
// };

// export default Header;


import Logo from "../../assets/logo.svg";
import Group from "../../assets/menuButton.svg";
import VuesaxOutlineMouse from "../../assets/mouse.svg";
import lefhand from "../../assets/btop-hand.svg"
import midhand from "../../assets/mtop-hand.svg"
import righthand from "../../assets/rtop-hand.svg"
import bg from "../../assets/bg.png";

export default function Header() {

  return (
    <div className="flex flex-col justify w-full">
  <header 
  className="h-[90vh] flex flex-col flex-wrap self-stretch w-full relative md:py-8 sm:py-16"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FDCA09', // Fallback color
  }}
>
        <nav className="mt-12 flex flex-wrap shrink-0 justify-between items-center px-24">
          <img src={Logo} alt="Logo" className="w-34 h-7 flex-shrink-0" />
          <img src={Group} alt="Group" className="w- h-12 flex-shrink-0" />
        </nav>
        <div className="flex flex-1 justify-center items-center text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[100px] px-48 font-bold">
          We would love to hear from you.
        </div>
        <div className="md:justify-center md:items-center">
          <div className="absolute bottom-0 right-5 px-20 flex flex-wrap flex-row">
            <img src={lefhand} alt="left hand" className="w-20 md:w-24 lg:w-28 xl:w-48" />
            <img src={midhand} alt="middle hand" className="w-20 md:w-24 lg:w-28 xl:w-48" />
            <img src={righthand} alt="right hand" className="w-20 md:w-24 lg:w-28 xl:w-48" />
          </div>
        </div>
      </header>
      <div className="flex flex-1 justify-center items-center py-8">
        <img src={VuesaxOutlineMouse} alt="" className="" />
      </div>
    </div>
  );
}






//   return (
//     <div className={`flex w-full flex-col items-center gap-y-9 ${className}`}>
//       <div className="flex items-center self-stretch bg-yellow-400 pb-[22px] pl-[0.23px] pr-32 pt-[1.4px]" >
//         <div className="bg-t-bg-group-1ttimage-4timage-5timage-6tttlogo-rectangle-558thero-text relative z-0 flex flex-grow items-end justify-end bg-cover bg-center pl-[864px] pr-1 pt-[492px]" >
//           <div className="absolute right-0 top-11 z-[2] flex h-16 w-[1502px] flex-shrink-0 flex-col items-center" >
//             <div className="flex flex-wrap items-center justify-center gap-x-[1359px] gap-y-3.5 min-[1718px]:flex-nowrap" >
//               <div className="flex flex-col items-center pb-[0.04px]">
//                 <img src={Logo} className="h-7 w-20 shrink-0" />
//               </div>
//               <div className="flex flex-col items-center justify-center border-8 border-solid border-x-white border-y-white bg-white px-px py-2.5" >
//                 <div className="flex items-center justify-end pb-[3px] pl-2">
//                   <img src={Group} className="h-7 w-8 flex-shrink-0" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="z-[3] flex flex-wrap justify-center max-[1718px]:flex-nowrap" >

//             {/* <div className="flex h-96 flex-col items-center">
//               <div className="bg-image mb-[-22.22px] h-96 max-h-full w-60 max-w-full flex-shrink-0 bg-no-repeat [background-position:-13.06px_0px] [background-size:111%_124%]" />
//             </div>
//             <div className="flex h-96 flex-col items-center">
//               <div className="bg-image- mb-[-22.22px] h-96 max-h-full w-60 max-w-full flex-shrink-0 bg-no-repeat [background-position:-9.34px_0px] [background-size:108%_120%]" />
//             </div>
//             <div className="flex h-96 flex-col items-center">
//               <div className="bg-image-1 mb-[-22.22px] h-96 max-h-full w-60 max-w-full flex-shrink-0 bg-no-repeat [background-position:-2.97px_0px] [background-size:102%_117%]" />
//             </div> */}
//           </div>
//           <div className="absolute left-[calc(50%_+_-110px_+_-298.12px)] top-[calc(50%_+_-110px_+_-25.08px)] z-[4] flex h-56 w-[942px] flex-shrink-0 items-start pl-[942px] pt-56" >
//             <div className="font-roobert-trial absolute inset-0 flex items-start justify-center text-center text-[100px] font-bold leading-[110px] tracking-[0px] text-neutral-950" >
//               <p>We would love to hear from you.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <img src={VuesaxOutlineMouse} className="h-16 w-16 flex-shrink-0" />
//     </div>
//   );
// }
