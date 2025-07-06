import React from "react";
import type { UseFormControl } from "../hooks/useForm";

interface InputProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  control?: UseFormControl<T>;
}

export function Input<T>({
  type = "text",
  className = "",
  label,
  name,
  disabled = false,
  control,
  ...props
}: InputProps<T>) {
  const baseStyles =
    "bg-inputbg rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary";

  const getInputValue = (name?: string) => {
    if (!control || !name) return "";
    const value = control.getValues(name as keyof T);
    return value !== undefined && value !== null ? String(value) : "";
  };

  const parseValue = (value: string, inputType: string) => {
    if (!value) return value;

    switch (inputType) {
      case "number": {
        const numValue = parseFloat(value);
        return isNaN(numValue) ? value : numValue;
      }
      case "checkbox":
        return value === "true";
      default:
        return value;
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (control && name) {
      const parsedValue = parseValue(e.target.value, type);
      control.setValue(name as keyof T, parsedValue as T[keyof T]);
    }
  };

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        className={`${baseStyles} ${className}`}
        id={name}
        disabled={disabled}
        value={getInputValue(name)}
        onChange={onChangeHandler}
        {...props}
      />
    </>
  );
}
