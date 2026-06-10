"use client";

import { FiSearch } from "react-icons/fi";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-neutral-100 mb-5">
        <FiSearch size={26} className="text-neutral-500" />
      </div>

      <h3 className="text-lg font-semibold text-neutral-800">
        No profiles found
      </h3>

      <p className="text-sm text-neutral-500 mt-2 max-w-md">
        Try adjusting your search or filters to find the candidates you're
        looking for.
      </p>
    </div>
  );
}
