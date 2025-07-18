import axios from "axios";
import { useAuthStore } from "../stores/authStore";
import { router } from "../routes";

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

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      router.navigate("/login");
    }
    return Promise.reject(error);
  },
);
