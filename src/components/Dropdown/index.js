export const Dropdown = ({ value, options, name, id, onFilterChange }) => {
  return (
    <select
      value={value}
      name={name}
      id={id}
      onChange={(e) => onFilterChange(e.target.value)}
    >
      <option>{value}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
