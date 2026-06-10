"use client";

import { ReactNode, useState } from "react";

interface TooltipProps {
  children: ReactNode;
}

export function TooltipProvider({ children }: TooltipProps) {
  return <>{children}</>;
}

export function Tooltip({ children }: TooltipProps) {
  return <div className="relative group inline-block">{children}</div>;
}

export function TooltipTrigger({ children }: TooltipProps) {
  return <>{children}</>;
}

export function TooltipContent({ children }: TooltipProps) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-slate-900 text-white text-xs rounded-md px-3 py-2 shadow-lg whitespace-nowrap">
      {children}
    </div>
  );
}
