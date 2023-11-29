import { ListOfEmployees } from "@/components/ListOfEmployees";
import HighlightCard from "@/components/HighlightCards/HighlightCard";
import { employees } from "../../../data/employees";
import Container from "@/components/Container";
import HighlightContainer from "@/components/HighlightCards/HighlightContainer";
import { useState } from "react";
import { ListFilters } from "@/components/ListFilters";

export default function EmployeeOverviewPage({
  employees,
  info,
  offices,
  departments,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState([]);
  const [officeFilter, setOfficeFilter] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterReset = () => {
    setOfficeFilter([]);
    setDepartmentFilter([]);
    setSearchTerm("");
  };

  const filteredEmployees = employees.filter((employee) => {
    const searchMatches =
      searchTerm === "" ||
      employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    const officeMatches =
      officeFilter.length === 0 ||
      officeFilter.includes(employee.office_location);
    const departmentMatches =
      departmentFilter.length === 0 ||
      departmentFilter.includes(employee.department);

    return searchMatches && officeMatches && departmentMatches;
  });

  return (
    <Container>
      <HighlightContainer>
        <HighlightCard info={info} label="Total Employees" />
        <HighlightCard info={info} label="New Hires" />
        <HighlightCard info={info} label="Avg. Employee Age" />
        <HighlightCard info={info} label="Avg. Employee Tenure" />
      </HighlightContainer>
      <div className="pt-6 -ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Employees
          </h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Employee
          </button>
        </div>
      </div>
      <ListFilters
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        offices={offices}
        officeFilter={officeFilter}
        setOfficeFilter={setOfficeFilter}
        departments={departments}
        departmentFilter={departmentFilter}
        setDepartmentFilter={setDepartmentFilter}
        handleFilterReset={handleFilterReset}
      />

      <ListOfEmployees
        employees={filteredEmployees}
        offices={offices}
        departments={departments}
        info={info}
      />
    </Container>
  );
}

export const getServerSideProps = () => {
  const offices = Array.from(
    new Set(employees.map((employee) => employee.office_location))
  );
  const departments = Array.from(
    new Set(employees.map((employee) => employee.department))
  );

  // console.log(departments);

  return {
    props: {
      employees,
      info: {
        total: employees.length,
      },
      offices,
      departments,
    },
  };
};
