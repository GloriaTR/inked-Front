import "./Filter.css";

interface FilterProps {
  setFilterValue: (filterValue: string) => void;
}

const Filter = ({ setFilterValue }: FilterProps): React.ReactElement => {
  const onChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
  };

  return (
    <select
      id="filter"
      className="filter"
      aria-label="Filter by Read or Unread"
      onChange={onChangeFilter}
    >
      <option hidden>Choose Read/Not Read</option>
      <option value="Read">Read</option>
      <option value="NotRead">Not Read</option>
      <option value="">Show All</option>
    </select>
  );
};

export default Filter;
