import axios from "axios";

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

export const setAuthToken = (token?: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
