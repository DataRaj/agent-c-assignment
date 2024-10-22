import React from "react";
import { motion } from "framer-motion";
import office from "../../assets/Office.png";
import directions from "../../assets/direction.svg";



const OfficeLocation = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren" }
    }
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full">
      {/* Title Section */}
      <motion.h2 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-16"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Come stop by our office sometime
      </motion.h2>
    <motion.div 
      className="relative w-full min-h-[677px] max-w-[1528px] mx-auto px-4 sm:px-8 lg:px-16 py-24 lg:py-44 mt-10 lg:mt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-stone-950">
        Come stop by our office sometime
        </h2>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={office}
          alt="Office location background"
          className="object-cover w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Content Card */}
      <motion.div 
        className="relative bg-white p-6 sm:p-8 lg:p-11 max-w-[381px] shadow-lg"
        variants={cardVariants}
      >
        <motion.div variants={textVariants}>
          <h3 className="text-3xl lg:text-4xl font-bold text-stone-950">
            New York, USA
          </h3>
        </motion.div>

        <motion.address 
          className="mt-4 text-lg lg:text-2xl opacity-50 not-italic"
          variants={textVariants}
        >
          7626 W. 8th St.<br />
          Massapequa, NY 11758
        </motion.address>

        <motion.div 
          className="mt-6 text-lg lg:text-2xl font-medium"
          variants={textVariants}
        >
          <a 
            href="mailto:info@dsgnr.com"
            className="hover:text-blue-600 transition-colors"
          >
            info@dsgnr.com
          </a>
          <br />
          <a 
            href="tel:+1543890098"
            className="text-stone-950 hover:text-blue-600 transition-colors"
          >
            (543) 890 98
          </a>
        </motion.div>

        <motion.a
          href="#"
          className="flex items-center gap-4 mt-10 lg:mt-14 text-lg lg:text-xl font-semibold uppercase group"
          variants={textVariants}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span>Get Directions</span>
          <motion.img
            src={directions}
            alt="Directions icon"
            className="w-3.5 aspect-[0.93] object-contain stroke-2 stroke-stone-950"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          />
        </motion.a>
      </motion.div>
    </motion.div>
    </section>
  );
};

export default OfficeLocation;