/// <reference types="vitest/globals" />

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { achievements } from "@/data/achievements";
import { caseStudies } from "@/data/caseStudies";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/socialLinks";
import Home from "@/app/page";

describe("portfolio homepage", () => {
  it("renders the startup team leader positioning and primary sections", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /digital growth & client acquisition team lead/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view my work/i })).toBeInTheDocument();
    expect(screen.getByText(/core responsibilities/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/experience/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  it("includes education and availability content for a startup portfolio", () => {
    render(<Home />);

    expect(screen.getByText(/education/i)).toBeInTheDocument();
    expect(screen.getByText(/open to opportunities/i)).toBeInTheDocument();
  });

  it("does not contain placeholder portfolio data or demo URLs", () => {
    const combined = [
      ...education,
      ...experience,
      ...projects,
      ...caseStudies,
      ...achievements,
      ...certifications,
    ]
      .map((entry) => JSON.stringify(entry))
      .join(" ");

    expect(combined).not.toMatch(/add .*here|startup name|example\.com/i);
    expect(socialLinks.portfolio).not.toContain("example.com");
  });

  it("validates required contact form fields", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const companyInput = screen.getByLabelText(/company/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);

    await user.clear(nameInput);
    await user.clear(emailInput);
    await user.clear(companyInput);
    await user.clear(subjectInput);
    await user.clear(messageInput);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText(/please fill in all required fields/i)).toBeInTheDocument();
    expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument();
  });
});
