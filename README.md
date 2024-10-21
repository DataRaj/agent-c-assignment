## Contact Us Page Development
Overview

This project implements a fully functional and responsive Contact Us page based on a Figma design. The page handles form submissions with Redux/Redux Toolkit, validates form inputs, and interacts with a REST API. The project follows clean coding principles with reusable components to ensure scalability and maintainability.
Live Demo:

### Link to deployed project (if any)
### Tools and Technologies Used:

    React: Library for building user interfaces.
    TypeScript: Provides static typing for better code quality and development experience.
    Vite.js: Fast development server and build tool.
    TailwindCSS: Utility-first CSS framework for designing responsive UI quickly.
    Shadcn UI: Component library built on Tailwind for handling UI elements.
    Redux/Redux Toolkit: State management tool for handling form submission and validation logic.
    
### Key Decisions

    Component Structure: The components are designed to be modular and reusable, making it easier to maintain and scale. I separated the form inputs into a reusable component (InputField.tsx) to ensure consistency across the project.

    Clean Code: Used clear variable names and functions for readability, added comments for major logic, and followed best practices for state management.

    Form State Handling: I used Redux Toolkit to manage the state of the form, ensuring that the entire form's state is in one place and can be easily managed and debugged.

### Features Implemented
1. Page Layout and Responsiveness

    The layout is pixel-perfect and matches the Figma design.
    The page is fully responsive, ensuring that it looks great on desktop, tablet, and mobile devices. I used TailwindCSS's responsive utilities to achieve this.

2. Form Fields

### The form contains the following fields:

    Name: A required text input.
    Email: A required email input (with HTML5 validation).
    Website URL: An optional text input for the user's website.
    Project Details: A required textarea for project descriptions (must be at least 20 characters).

3. Form Validation

Form validation is implemented both on the client-side and server-side:

    Name and Email are required fields.
    The Website URL is optional, but if entered, it must be a valid URL.
    Project Details must contain a minimum of 20 characters.

I used HTML5 input types for some validation (e.g., type="email") and managed other custom validations within the form state using Redux.
