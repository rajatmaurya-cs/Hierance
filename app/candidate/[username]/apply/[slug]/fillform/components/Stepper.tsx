import React from "react";

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps: string[] = ["Personal", "Education", "Job Title", "Experience"];

  return (
    <div className="flex items-center justify-between gap-4">
      {steps.map((label, index) => {
        const step = index + 1;
        const isActive = step === currentStep;
        const isDone = step < currentStep;

        return (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors
              ${
                isDone
                  ? "bg-green-600 text-white"
                  : isActive
                    ? "bg-black text-white"
                    : "bg-neutral-200 text-neutral-500"
              }`}
            >
              {step}
            </div>

            <span
              className={`text-sm transition-colors ${
                isActive ? "font-medium text-black" : "text-neutral-500"
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
