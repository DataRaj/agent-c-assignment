
// import { Hero } from "./components/Hero";

import "./App.css";
import Ad from "./components/ContactPage/ad";
import ClientLogos from "./components/ContactPage/ClientLogos";
import ContactForm from "./components/ContactPage/ContactForm";
// import Header from "./components/ContactPage/Header";
// import ContactForm from "./components/ContactPage/ContactForm";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/ContactPage/Footer";
import Header from "./components/ContactPage/Header";
import OfficeLocation from "./components/ContactPage/OfficeLocation";
import Statistics from "./components/ContactPage/Statistics";
import Desktop from "./components/Fullpage";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero />
      <Header />
      <ContactForm/> */}
      {/* <ContactPage/> */}
      {/* <Desktop/> */}
      <Header/>
      <ContactForm/>
      <OfficeLocation/>
      <Statistics/>
      <ClientLogos/>
      <Ad/>
      {/* <div className=" bg-white"></div> */}
      <Footer/>
    </>
  );
}

export default App;
