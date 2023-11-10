import { TableRow, TableCell } from "./styles";

export const EmployeeRow = ({ employee }) => {
  return (
    <>
      <TableRow>
        <TableCell>
          <div className="flex items-center">
            <div className="h-11 w-11 flex-shrink-0">
              <img className="h-11 w-11 rounded-full" alt="profile image" />
            </div>
            {employee.name}
          </div>
        </TableCell>
        <TableCell>{employee.manager}</TableCell>
        <TableCell>{employee.position}</TableCell>
        <TableCell>{employee.department}</TableCell>
        <TableCell>{employee.office_location}</TableCell>
      </TableRow>
    </>
  );
};
