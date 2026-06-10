"use client";

import FilterDropdown from "./FilterDropdown";

interface Props {
  selected: string[];
  onChange: (value: string[]) => void;
}

export default function SkillsFilter({ selected, onChange }: Props) {
  return (
    <FilterDropdown
      label="Skills"
      options={[
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "UI/UX",
        "Figma",
        "PostgreSQL",
      ]}
      selected={selected}
      onChange={onChange}
    />
  );
}
