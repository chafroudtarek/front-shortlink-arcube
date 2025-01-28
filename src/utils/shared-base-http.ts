import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

export interface Params {
  [key: string]:
    | boolean
    | string
    | string[]
    | number
    | number[]
    | {
        [key: string]: string[];
      }
    | undefined;
}

export interface HttpParamsType<T = unknown> {
  queryParams?: Params;
  body?: T;
  config?: AxiosRequestConfig;
  headers?: Record<string, string>;
  isUpload?: boolean;
}

class HttpClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      withCredentials: true,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.instance.interceptors.request.use(
      async (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
        }

        return Promise.reject(error);
      }
    );
  }

  async post<TResponse, TRequest = any>(
    url: string,
    paramsData?: HttpParamsType<TRequest>
  ): Promise<TResponse> {
    const { body = {}, config = {}, headers = {} } = paramsData || {};
    
    const response = await this.instance.post<TResponse>(url, body, {
      ...config,
      headers: {
        ...headers,
      },
    });
    
    return response.data;
  }

  async get<T>(url: string, paramsData?: HttpParamsType<T>): Promise<AxiosResponse<T>> {
    const { queryParams = {}, config = {}, headers = {} } = paramsData || {};

    return this.instance.get<T>(url, {
      ...config,
      params: queryParams,
      headers: {
        ...headers,
      },
    });
  }
}

export const httpClient = new HttpClient();
