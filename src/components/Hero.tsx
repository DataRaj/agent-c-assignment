export const Hero = () => {
  return (
    <section className="w-full container grid lg:grid-cols-2 place-items-center  md:py-32 gap-10 bg-[rgb(253,202,9)] lg:w-[1728px] h-[881px] ">
      
      <div className="text-center lg:text-start space-y-6">
          {/* <img 
            src={shape_1}
            alt="Decorative Shape"
            className=" h-[589px] w-[512px] flex absolute top-[57px] left-[7px] "
          />
          <img src={shape_2} 
               alt="shape_2" 
               className=" h-[857px] w-[1280px] flex absolute top-0 left-[234px] z-0"
          /> */}
        <h1 className="text-5xl lg:text-6xl font-bold text-black z-1">The future of work is here</h1>
      </div>
    </section>
  );
};
