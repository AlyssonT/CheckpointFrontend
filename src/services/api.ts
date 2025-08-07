import axios from "axios";
import { router } from "../routes";
import { useAuthStore } from "../stores/authStore";

export type APIResponse<T = unknown> = {
  data: T;
  statusCode: number;
  message: string;
};

export function throwErrorWithAPIMessage(err: unknown): never {
  if (axios.isAxiosError<APIResponse>(err) && err.response) {
    throw Error(err.response.data.message);
  }
  throw Error("Unknown error.");
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      const userStore = useAuthStore.getState();
      if (userStore.user.id !== null) {
        userStore.logout();
      }
      router.navigate("/login");
    }
    return Promise.reject(error);
  },
);
