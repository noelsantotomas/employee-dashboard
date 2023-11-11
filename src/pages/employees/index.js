import { ListOfEmployees } from "@/components/ListOfEmployees";
import HighlightCard from "@/components/HighlightCards/HighlightCard";
import { employees } from "../../../data/employees";
import TextInput from "@/components/TextInput";
import Container from "@/components/Container";
import HighlightContainer from "@/components/HighlightCards/HighlightContainer";

export default function EmployeeOverviewPage({ employees, info }) {
  return (
    <Container>
      <HighlightContainer>
        <HighlightCard info={info} label="Total Employees" />
        <HighlightCard info={info} label="New Hires" />
        <HighlightCard info={info} label="Avg. Employee Age" />
        <HighlightCard info={info} label="Avg. Employee Tenure" />
      </HighlightContainer>
      <TextInput placeholder="Search" />
      <ListOfEmployees employees={employees} info={info} />
    </Container>
  );
}

export const getServerSideProps = () => {
  return { props: { employees, info: { total: employees.length } } };
};
