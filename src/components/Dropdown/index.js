export const Dropdown = ({ value, options, name, id, onFilterChange }) => {
  const handleChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    onFilterChange(selectedOptions);
  };

  return (
    <select
      value={value}
      name={name}
      id={id}
      onChange={handleChange}
      multiple
      className="mr-5"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
