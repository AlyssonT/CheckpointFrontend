export type ActionData<T = undefined> = {
  success: boolean;
  message?: string;
  error?: string;
  errors?: string[];
  data: T;
};
