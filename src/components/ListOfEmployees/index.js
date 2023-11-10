import useGet from "@/hooks/useGet";
import { EmployeeRow } from "@/components/EmployeeRow";

export const ListOfEmployees = ({ employees }) => {
  console.log(employees);
  return (
    <>
      <h1>Employees</h1>

      {employees.map((employee) => (
        <EmployeeRow key={employee.id} employee={employee}></EmployeeRow>
      ))}
    </>
  );
};
