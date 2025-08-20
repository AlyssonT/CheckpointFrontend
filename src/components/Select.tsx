import React from "react";
import {
  type FieldValues,
  type Path,
  type UseFormRegister,
} from "react-hook-form";

const baseStyles =
  "bg-inputbg rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary";

type Option = {
  value: string | number;
  label: React.ReactNode;
};

type SelectProps<T extends FieldValues> =
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    className?: string;
    label?: string;
    error?: string;
    register?: UseFormRegister<T>;
    name: Path<T>;
    options: Option[];
  };

export function Select<T extends FieldValues>({
  label,
  name,
  className = "",
  error,
  disabled = false,
  register,
  options,
  ...props
}: SelectProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        className={`${baseStyles} ${className} ${
          error ? "border-red-500" : ""
        }`}
        disabled={disabled}
        {...(register && name ? register(name) : {})}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className={`min-h-4 ${error ? "visible" : "invisible"}`}>
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    </div>
  );
}
