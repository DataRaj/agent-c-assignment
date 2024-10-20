
import React from "react";
import Header from "./Header";
import ContactForm from "./ContactForm";
import OfficeLocation from "./OfficeLocation";
import Statistics from "./Statistics";
import ClientLogos from "./ClientLogos";
import Footer from "./Footer";
import Sidebar from "../../assets/side-image.png";
const ContactPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <Header />
      <main>
        <section className="mt-24 w-full max-w-[1528px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-end px-20 pt-40 pb-20 mt-2 w-full bg-orange-100 max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={Sidebar} 
                  alt=""
                  className="object-contain max-w-full aspect-[0.58] w-[622px]"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
        <h2 className="mt-40 text-5xl font-bold text-center text-stone-950 max-md:mt-10 max-md:max-w-full">
          Come stop by our office sometime
        </h2>
        <OfficeLocation />
        <Statistics />
        <div className="flex flex-col justify-center items-center">

        <h2 className="mt-32 text-5xl font-bold text-center text-stone-950 w-[852px] max-md:mt-10 max-md:max-w-full">
          We worked with the world's biggest brands and the most innovative
          startups
        </h2>
        <ClientLogos />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
