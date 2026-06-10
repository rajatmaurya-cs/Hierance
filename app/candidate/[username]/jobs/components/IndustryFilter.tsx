"use client";

import FilterDropdown from "./FilterDropdown";

interface Props {
  selected: string[];
  onChange: (value: string[]) => void;
}

export default function IndustryFilter({ selected, onChange }: Props) {
  return (
    <FilterDropdown
      label="Industry"
      options={[
        "Design",
        "Development",
        "Marketing",
        "Finance",
        "Healthcare",
        "EdTech",
        "SaaS",
      ]}
      selected={selected}
      onChange={onChange}
    />
  );
}
