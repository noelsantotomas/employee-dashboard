import tw from "tailwind-styled-components";

export const EmployeeTable = tw.table`
min-w-full divide-y divide-gray-300
`;

export const TableHeader = tw.thead`
// display: grid;
// grid-template-columns: repeat(5, 1fr); 
// gap: 10px; 
`;

export const TableHeaderCell = tw.th`
py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0
`;

export const TableBody = tw.tbody`
divide-y divide-gray-200`;
