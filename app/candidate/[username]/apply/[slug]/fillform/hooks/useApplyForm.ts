"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ApplyFormData } from "../types/applyForm.types";

const TOTAL_STEPS = 4;

const useApplyForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const form = useForm<ApplyFormData>({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      guardianName: "",
      dob: "",
      age: 0,
      gender: "",
      maritalStatus: "",
      nationality: "",
      mobile: "",
      email: "",
      aadhaar: "",
      pan: "",

      education: [
        {
          qualification: "",
          board: "",
          year: "",
          percentage: "",
        },
      ],

      position: "",
      department: "",
      joiningDate: "",
      expectedSalary: "",

      experience: [
        {
          companyName: "",
          position: "",
          role: "",
          projectName: "",
          startDate: "",
          endDate: "",
          projectDescription: "",
        },
      ],

      declaration: false,
    },
  });

  const nextStep = async () => {
    const isValid = await form.trigger();
    if (isValid && currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const submitForm = (data: ApplyFormData) => {
    console.log("FINAL SUBMIT DATA 👉", data);

    // TODO: Backend API call here
    // await fetch("/api/apply", { method: "POST", body: JSON.stringify(data) })
  };

  return {
    form,
    currentStep,
    nextStep,
    prevStep,
    submitForm,
  };
};

export default useApplyForm;
