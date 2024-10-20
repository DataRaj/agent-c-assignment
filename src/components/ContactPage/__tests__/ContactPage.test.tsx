 
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContactPage from "../ContactPage";

describe("ContactPage", () => {
  it("renders the main heading", () => {
    render(<ContactPage />);
    const heading = screen.getByText(/We would love to hear from you./i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the contact form", () => {
    render(<ContactPage />);
    expect(screen.getByPlaceholderText(/Name\*/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email\*/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Website URL\*/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Project Details\*/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Send Proposal/i })
    ).toBeInTheDocument();
  });

  it("renders the office location section", () => {
    render(<ContactPage />);
    expect(screen.getByText(/New York, USA/i)).toBeInTheDocument();
    expect(
      screen.getByText(/7626 W. 8th St. Massapequa, NY 11758/i)
    ).toBeInTheDocument();
  });

  it("renders the statistics section", () => {
    render(<ContactPage />);
    expect(screen.getByText(/350 \+/i)).toBeInTheDocument();
    expect(screen.getByText(/Clients Worldwide/i)).toBeInTheDocument();
    expect(screen.getByText(/20 \+/i)).toBeInTheDocument();
    expect(screen.getByText(/Team Members/i)).toBeInTheDocument();
  });

  it("renders the footer", () => {
    render(<ContactPage />);
    expect(screen.getByText(/Grow Your Business./i)).toBeInTheDocument();
    expect(screen.getByText(/Build Great Products./i)).toBeInTheDocument();
    expect(
      screen.getByText(/Dsgnr. is an award winning creative and design agency/i)
    ).toBeInTheDocument();
  });
});
