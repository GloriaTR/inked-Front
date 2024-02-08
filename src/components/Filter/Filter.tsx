interface FilterProps {
  setFilterValue: (filterValue: string) => void;
}

const Filter = ({ setFilterValue }: FilterProps): React.ReactElement => {
  const onChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let filterValue = event.target.value;
    if (filterValue === "Read") {
      filterValue = "✔ Read";
    } else if (filterValue === "NotRead") {
      filterValue = "Not Read";
    }
    setFilterValue(filterValue);
  };

  return (
    <select id="filter" className="filter" onChange={onChangeFilter}>
      <option hidden>Choose Read/Not Read</option>
      <option value="Read">Read</option>
      <option value="NotRead">Not Read</option>
      <option value="">Show All</option>
    </select>
  );
};

export default Filter;
