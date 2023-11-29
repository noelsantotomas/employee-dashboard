import React from "react";
import { render, screen } from "@testing-library/react";
import { ListOfEmployees } from ".";

const mockEmployees = [
  {
    id: 1,
    name: "John Doe",
    manager: "Jane Smith",
    position: "Developer",
    department: "Engineering",
    office_location: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    manager: "Mark Berg",
    position: "Engineering Manager",
    department: "Engineering",
    office_location: "Los Angeles",
  },
];

describe("ListOfEmployees", () => {
  it("renders the correct number of employee rows", () => {
    render(<ListOfEmployees employees={mockEmployees} />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(mockEmployees.length + 1);
  });
  it("renders the correct number of results", () => {
    render(<ListOfEmployees employees={mockEmployees} />);

    expect(screen.getByText(`${mockEmployees.length} results`));
  });
});
