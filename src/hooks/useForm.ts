import { useEffect, useState } from "react";

export interface UseFormControl<T> {
  setValue: <K extends keyof T>(key: K, value: T[K]) => void;
  getValues: <K extends keyof T>(key?: K) => T[K] | T;
}

interface UseFormProps<T> {
  defaultValues?: T;
}

export function useForm<T>({
  defaultValues,
}: UseFormProps<T> | undefined = {}) {
  const [formValues, setFormValues] = useState<T>(defaultValues || ({} as T));
  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  const setValue = <K extends keyof T>(key: K, value: T[K]) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getValues = <K extends keyof T>(key?: K): T[K] | T => {
    return key ? formValues[key] : formValues;
  };

  const reset = (values?: T) => {
    setFormValues(values || defaultValues || ({} as T));
  };

  const control = {
    setValue,
    getValues,
  };

  return {
    setValue,
    getValues,
    reset,
    control,
  };
}
