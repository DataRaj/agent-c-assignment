// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../redux/formSlice";
import { RootState, AppDispatch } from "../../redux/store";
// import { motion } from "framer-motion";
import Sidebar from "../../assets/side-image.png";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

import  { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector(
    (state: RootState) => state.form
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data: any) => {
    setClick(true);
    console.log(data);
    try {
      await dispatch(
        submitForm({
          name: data.name,
          email: data.email,
          website_url: data.website,
          project_details: data.projectDetails,
        })
      );

      if (!error) {
        reset();
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  // const handleReset = () => {
  //   dispatch(resetFormState());
  // };

  const inputClasses = "w-full p-4 px-4 text-2xl border front-medium border-gray-800 border-2 mt-6";
  const errorClasses = "text-red-500 text-sm mt-1";
  const succesClasses = "text-green-500 text-sm mt-1";

  return (
    <div className="max-w-6xl mx-auto px-4 mb-12">
      {/* Main container with responsive flex direction */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
        {/* Sidebar container */}
        <div className="w-full lg:w-1/2 bg-[#FEF1E0] mb-8 lg:mb-20">
          <motion.img
            src={Sidebar}
            alt=""
            className="object-contain aspect-[0.58] w-full max-w-[622px] mx-auto lg:mx-0 px-4 lg:px-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          />
        </div>

        {/* Form container */}
        <div className="w-full lg:w-1/2 pt-4 lg:pt-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            We'd love to hear from you
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input
              type="text"
              placeholder="Name*"
              className={inputClasses}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && typeof errors.name.message === "string" && (
              <p className={errorClasses}>{errors.name.message}</p>
            )}

            <input
              type="email"
              placeholder="Email*"
              className={inputClasses}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && typeof errors.email.message === "string" && (
              <p className={errorClasses}>{errors.email.message}</p>
            )}

            <input
              type="url"
              placeholder="Website URL*"
              className={inputClasses}
              {...register("website", {
                required: "Website URL is required",
                pattern: {
                  value: /^https?:\/\/[^\s$.?#].[^\s]*$/i,
                  message: "Invalid URL format"
                }
              })}
            />
            {errors.website && typeof errors.website.message === "string" && (
              <p className={errorClasses}>{errors.website.message}</p>
            )}

            <textarea
              placeholder="Project Details*"
              rows={4}
              className={inputClasses}
              {...register("projectDetails", {
                required: "Project details are required"
              })}
            />
            {errors.projectDetails && typeof errors.projectDetails.message === "string" && (
              <p className={errorClasses}>{errors.projectDetails.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white text-xl lg:text-2xl font-semibold hover:bg-gray-400 hover:text-gray-800 py-4 mt-6 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Send Proposal"}
            </button>
            
            {!errors.projectDetails && !errors.website && !errors.email && !errors.name && click && (
              <p className={succesClasses}>Form submitted successfully!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;