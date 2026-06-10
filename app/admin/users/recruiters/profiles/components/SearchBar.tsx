"use client";

import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";

type Props = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  // debounce search
  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(query);
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="relative w-full">
      <FiSearch className="absolute left-3 top-3.5 text-neutral-400" />

      <input
        type="text"
        placeholder="Search by name, skill, company..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-10 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10"
      />

      {query && (
        <button
          onClick={() => {
            setQuery("");
            onSearch("");
          }}
          className="absolute right-3 top-3.5 text-neutral-400 hover:text-black"
        >
          <FiX />
        </button>
      )}
    </div>
  );
}
