export const EmployeeRow = ({ employee }) => {
  return (
    <>
      <p>
        {employee.name} | {employee.position}
      </p>
    </>
  );
};
