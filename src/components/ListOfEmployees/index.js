import useGet from "@/hooks/useGet";
import { EmployeeRow } from "@/components/ListOfEmployees/EmployeeRow";
import { EmployeeTable, TableHeaderCell, TableBody } from "./styles";
import TextInput from "../TextInput";

export const ListOfEmployees = ({
  employees,
  info,
  searchTerm,
  onSearchChange,
}) => {
  // console.log(employees);
  return (
    <>
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
      <input
        type="text"
        placeholder="Search for employee"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <EmployeeTable>
        <thead>
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Reports to</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Office</TableHeaderCell>
          </tr>
        </thead>
        <TableBody>
          {employees.map((employee) => (
            <EmployeeRow key={employee.id} employee={employee}></EmployeeRow>
          ))}
        </TableBody>
      </EmployeeTable>
    </>
  );
};
