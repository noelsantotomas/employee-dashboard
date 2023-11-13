import { ListOfEmployees } from "@/components/ListOfEmployees";
import HighlightCard from "@/components/HighlightCards/HighlightCard";
import { employees } from "../../../data/employees";
import Container from "@/components/Container";
import HighlightContainer from "@/components/HighlightCards/HighlightContainer";
import { useState } from "react";

export default function EmployeeOverviewPage({ employees, info }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <HighlightContainer>
        <HighlightCard info={info} label="Total Employees" />
        <HighlightCard info={info} label="New Hires" />
        <HighlightCard info={info} label="Avg. Employee Age" />
        <HighlightCard info={info} label="Avg. Employee Tenure" />
      </HighlightContainer>
      <ListOfEmployees
        employees={filteredEmployees}
        info={info}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
    </Container>
  );
}

export const getServerSideProps = () => {
  return { props: { employees, info: { total: employees.length } } };
};
