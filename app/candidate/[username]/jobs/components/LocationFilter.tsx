"use client";

import FilterDropdown from "./FilterDropdown";

interface Props {
  selected: string[];
  onChange: (value: string[]) => void;
}

export default function LocationFilter({ selected, onChange }: Props) {
  return (
    <FilterDropdown
      label="Location"
      options={["Remote", "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune"]}
      selected={selected}
      onChange={onChange}
    />
  );
}
