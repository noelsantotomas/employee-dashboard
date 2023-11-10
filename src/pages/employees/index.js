import { ListOfEmployees } from "@/components/ListOfEmployees";
import HighlightCard from "@/components/HighlightCard";
import { employees } from "../../../data/employees";
import TextInput from "@/components/TextInput";

export default function EmployeeOverviewPage({ employees, info }) {
  return (
    <>
      <HighlightCard employees={employees} info={info} />
      <TextInput placeholder="Search" />
      <ListOfEmployees employees={employees} info={info} />
    </>
  );
}

export const getServerSideProps = () => {
  return { props: { employees, info: { total: employees.length } } };
};
