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
  handleFilterReset,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search for employee"
        value={searchTerm}
        onChange={handleSearchChange}
        className="pr-2"
      />
      <Dropdown
        value={officeFilter}
        options={offices}
        name="offices"
        id="offices"
        onFilterChange={setOfficeFilter}
        className="mr-5"
      />
      <Dropdown
        value={departmentFilter}
        options={departments}
        name="departments"
        id="departments"
        onFilterChange={setDepartmentFilter}
      />
      <button
        type="button"
        className="relative inline-flex items-center rounded-md bg-red-100 px-3 py-2 text-sm font-semibold text-gray-950 shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => {
          handleFilterReset();
        }}
      >
        Clear filters
      </button>
    </>
  );
};
