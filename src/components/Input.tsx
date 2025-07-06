import React from "react";
import {
  type FieldValues,
  type Path,
  type UseFormRegister,
} from "react-hook-form";

const baseStyles =
  "bg-inputbg rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary";

type InputProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    label?: string;
    error?: string;
    register?: UseFormRegister<T>;
    name: Path<T>;
  };

export function Input<T extends FieldValues>({
  label,
  name,
  type = "text",
  className = "",
  error,
  disabled = false,
  register,
  ...props
}: InputProps<T>) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        className={`${baseStyles} ${className} ${
          error ? "border-red-500" : ""
        }`}
        disabled={disabled}
        {...(register && name ? register(name) : {})}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
}
