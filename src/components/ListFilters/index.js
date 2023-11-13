import { Dropdown } from "../Dropdown";

export const ListFilters = ({
  searchTerm,
  handleSearchChange,
  offices,
  officeFilter,
  setOfficeFilter,
  departments,
  departmentFilter,
  setDepartmentFilter,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search for employee"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Dropdown
        value={officeFilter}
        options={offices}
        name="offices"
        id="offices"
        onFilterChange={setOfficeFilter}
      />
      <Dropdown
        value={departmentFilter}
        options={departments}
        name="departments"
        id="departments"
        onFilterChange={setDepartmentFilter}
      />
    </>
  );
};
