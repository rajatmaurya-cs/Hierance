"use client";

import FilterDropdown from "./FilterDropdown";

interface Props {
  selected: string[];
  onChange: (value: string[]) => void;
}

export default function JobTypeFilter({ selected, onChange }: Props) {
  return (
    <FilterDropdown
      label="Job Type"
      options={[
        "Full-Time",
        "Part-Time",
        "Contract",
        "Internship",
        "Freelance",
      ]}
      selected={selected}
      onChange={onChange}
    />
  );
}
