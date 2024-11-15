import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export interface IFetchApi {
  url: string;
  method: "get" | "delete" | "post" | "put" | "patch";
  isAuth: boolean;
}

const api: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${yourAuthToken}`
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig<unknown>) => {
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor to handle responses or errors globally
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: unknown) => {
    console.error(error);
  },
);

export async function fetchApi<unknown>(options: IFetchApi): Promise<unknown> {
  // write logic for api
}
