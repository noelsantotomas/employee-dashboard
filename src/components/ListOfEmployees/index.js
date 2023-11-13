import useGet from "@/hooks/useGet";
import { EmployeeRow } from "@/components/ListOfEmployees/EmployeeRow";
import { EmployeeTable, TableHeaderCell, TableBody } from "./styles";

export const ListOfEmployees = ({ employees, info }) => {
  // console.log(employees);
  return (
    <>
      <p className="mt-2 text-sm text-gray-700">{employees.length} results</p>
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
