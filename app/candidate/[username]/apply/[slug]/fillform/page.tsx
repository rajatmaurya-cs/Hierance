"use client";

import { useParams } from "next/navigation";
import { FormProvider } from "react-hook-form";
import ApplyLayout from "./components/ApplyLayout";
import Stepper from "./components/Stepper";
import Step1PersonalDetails from "./components/Step1PersonalDetails";
import Step2Education from "./components/Step2Education";
import Step3JobPreferences from "./components/Step3JobPreferences";
import Step4ExperienceDeclaration from "./components/Step4ExperienceDeclaration";
import useApplyForm from "./hooks/useApplyForm";

const ApplyFormPage = () => {
  const { form, currentStep, nextStep, prevStep, submitForm } = useApplyForm();

  const params = useParams();
  const slug = params.slug as string;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1PersonalDetails />;
      case 2:
        return <Step2Education />;
      case 3:
        return <Step3JobPreferences />;
      case 4:
        return <Step4ExperienceDeclaration />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <ApplyLayout
          title={`Apply for ${slug.replaceAll("-", " ")}`}
          subtitle={`Step ${currentStep} of 4`}
          stepper={<Stepper currentStep={currentStep} />}
          footer={
            <div className="flex w-full justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-2 rounded-lg border border-gray-300 text-sm"
                >
                  Back
                </button>
              )}

              {currentStep < 4 && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 rounded-lg bg-black text-white text-sm"
                >
                  Next
                </button>
              )}

              {currentStep === 4 && (
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-green-500 text-white text-sm"
                >
                  Submit Application
                </button>
              )}
            </div>
          }
        >
          {renderStep()}
        </ApplyLayout>
      </form>
    </FormProvider>
  );
};

export default ApplyFormPage;
