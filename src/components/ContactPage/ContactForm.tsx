import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { submitForm, resetFormState } from "../../redux/formSlice";
import { RootState, AppDispatch } from "../../redux/store";

const ContactForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading, isSubmitted, error } = useSelector((state: RootState) => state.form);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    dispatch(submitForm({
      name: data.name,
      email: data.email,
      website_url: data.website,
      project_details: data.projectDetails,
    }));
  };

  const handleReset = () => {
    dispatch(resetFormState());
  };

  return (
    <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col grow text-3xl font-medium text-stone-950 max-md:mt-10 max-md:max-w-full"
      >
        <h2 className="self-end text-5xl font-bold text-right">
          We'd love to hear <br /> from you
        </h2>

        {/* Name Input */}
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="px-14 py-8 mt-14 whitespace-nowrap border-2 border-solid bg-white bg-opacity-60 border-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full"
          placeholder="Name*"
          {...register("name", {
            required: "Name is required",
            maxLength: {
              value: 100,
              message: "Max length is 100 characters",
            },
          })}
        />
        {errors.name && typeof errors.name.message === 'string' && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        {/* Email Input */}
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="px-14 py-8 mt-8 whitespace-nowrap border-2 border-solid bg-white bg-opacity-60 border-stone-950 max-md:px-5 max-md:max-w-full"
          placeholder="Email*"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && typeof errors.email.message === 'string' && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        {/* Website Input */}
        <label htmlFor="website" className="sr-only">
          Website URL
        </label>
        <input
          type="url"
          id="website"
          className="px-14 py-8 mt-8 border-2 border-solid bg-white bg-opacity-60 border-stone-950 max-md:px-5 max-md:max-w-full"
          placeholder="Website URL*"
          {...register("website", {
            required: "Website URL is required",
          })}
        />
        {errors.website && typeof errors.website.message === 'string' && <p className="text-red-500 text-sm">{errors.website.message}</p>}

        {/* Project Details */}
        <label htmlFor="project-details" className="sr-only">
          Project Details
        </label>
        <textarea
          id="project-details"
          className="px-14 pt-7 pb-24 mt-8 border-2 border-solid bg-white bg-opacity-60 border-stone-950 max-md:px-5 max-md:pb-28 max-md:max-w-full"
          placeholder="Project Details*"
          {...register("projectDetails", {
            required: "Project details are required",
            maxLength: {
              value: 2000,
              message: "Max length is 2000 characters",
            },
          })}
        ></textarea>
        {errors.projectDetails && typeof errors.projectDetails.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.projectDetails.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="px-16 py-8 mt-12 text-white bg-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          {isLoading ? "Submitting..." : "Send Proposal"}
        </button>

        {/* Success/Error Messages */}
        {isSubmitted && <p className="text-green-500 text-sm mt-5">Form submitted successfully!</p>}
        {error && <p className="text-red-500 text-sm mt-5">Error: {error}</p>}
      </form>

      {/* Reset Form Button */}
      {isSubmitted && <button onClick={handleReset} className="mt-5 text-blue-500">Reset Form</button>}
    </div>
  );
};

export default ContactForm;
