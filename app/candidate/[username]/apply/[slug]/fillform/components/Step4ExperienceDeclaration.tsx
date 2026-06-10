"use client";

import { useFormContext, useFieldArray, FieldError } from "react-hook-form";
import { ApplyFormData } from "../types/applyForm.types";
import { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const Step4ExperienceDeclaration = () => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext<ApplyFormData>();

  const accepted = watch("declaration");

  const { fields, append, remove } = useFieldArray<ApplyFormData, "experience">(
    {
      control,
      name: "experience",
    },
  );

  return (
    <div className="space-y-8">
      <Section title="Experience Background">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="border border-neutral-200 rounded-xl p-5 space-y-4 relative"
          >
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute top-3 right-3 text-red-500"
              >
                ✕
              </button>
            )}

            <Grid>
              <Input
                label="Company Name"
                placeholder="Company name"
                {...register(`experience.${index}.companyName` as const, {
                  required: "Company name is required",
                })}
                error={errors.experience?.[index]?.companyName}
              />

              <Input
                label="Position"
                placeholder="Your position"
                {...register(`experience.${index}.position` as const, {
                  required: "Position is required",
                })}
                error={errors.experience?.[index]?.position}
              />

              <Input
                label="Role in Company"
                placeholder="Your role"
                {...register(`experience.${index}.role` as const, {
                  required: "Role is required",
                })}
                error={errors.experience?.[index]?.role}
              />

              <Input
                label="Project Name"
                placeholder="Project name"
                {...register(`experience.${index}.projectName` as const, {
                  required: "Project name is required",
                })}
                error={errors.experience?.[index]?.projectName}
              />

              <Input
                type="date"
                label="Start Date"
                {...register(`experience.${index}.startDate` as const, {
                  required: "Start date is required",
                })}
                error={errors.experience?.[index]?.startDate}
              />

              <Input
                type="date"
                label="End Date"
                {...register(`experience.${index}.endDate` as const, {
                  required: "End date is required",
                })}
                error={errors.experience?.[index]?.endDate}
              />
            </Grid>

            <Textarea
              label="Project Description"
              placeholder="Describe your project work"
              {...register(`experience.${index}.projectDescription` as const, {
                required: "Project description is required",
              })}
              error={errors.experience?.[index]?.projectDescription}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            append({
              companyName: "",
              position: "",
              role: "",
              projectName: "",
              startDate: "",
              endDate: "",
              projectDescription: "",
            })
          }
          className="text-sm font-medium text-black"
        >
          + Add another experience
        </button>
      </Section>

      <Section title="Declaration">
        <label className="flex gap-3 items-start">
          <input
            type="checkbox"
            {...register("declaration", {
              required: "You must accept the declaration",
            })}
            className="mt-1"
          />
          <span className="text-sm text-neutral-700">
            I hereby declare that the information provided is true and correct.
          </span>
        </label>

        {errors.declaration && (
          <p className="text-xs text-red-500">{errors.declaration.message}</p>
        )}
      </Section>
    </div>
  );
};

export default Step4ExperienceDeclaration;

/* ---------- UI HELPERS ---------- */

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 space-y-4">
    <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
    {children}
  </div>
);

interface GridProps {
  children: ReactNode;
}

const Grid = ({ children }: GridProps) => (
  <div className="grid grid-cols-2 gap-4">{children}</div>
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const Input = ({ label, error, ...props }: InputProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-medium text-neutral-700">{label}</label>
    <input
      {...props}
      className="h-11 rounded-lg border border-neutral-300 px-3
      focus:outline-none focus:ring-2 focus:ring-black/10"
    />
    {error && <p className="text-xs text-red-500">{error.message}</p>}
  </div>
);

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError;
}

const Textarea = ({ label, error, ...props }: TextareaProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-medium text-neutral-700">{label}</label>
    <textarea
      rows={4}
      {...props}
      className="rounded-lg border border-neutral-300 px-3 py-2
      focus:outline-none focus:ring-2 focus:ring-black/10"
    />
    {error && <p className="text-xs text-red-500">{error.message}</p>}
  </div>
);
