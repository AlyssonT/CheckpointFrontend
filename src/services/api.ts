import axios from "axios";
import { useAuthStore } from "../stores/authStore";

export type APIResponse<T = unknown> = {
  data: T;
  statusCode: number;
  message: string;
};

export function throwErrorWithAPIMessage(err: unknown) {
  if (axios.isAxiosError<APIResponse>(err) && err.response) {
    throw Error(err.response.data.message);
  }
  throw Error("Unknown error.");
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().user.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const setAuthToken = (token?: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
