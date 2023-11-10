import useGet from "@/hooks/useGet";
import { EmployeeRow } from "@/components/ListOfEmployees/EmployeeRow";
import { EmployeeTable, TableHeaderCell, TableBody } from "./styles";

export const ListOfEmployees = ({ employees }) => {
  // console.log(employees);
  return (
    <>
      <h1>List of Employees</h1>
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
