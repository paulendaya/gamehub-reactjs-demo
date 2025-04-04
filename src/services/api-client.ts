import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null; // next page url
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c9655be224734e5d89fbd2e3d43742e2",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getItem = (id: string | number) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };

  getTrailers = (id: string | number) => {
    return axiosInstance
      .get<FetchResponse<T>>(`${this.endpoint}/${id}/movies`)
      .then((res) => res.data);
  };

  getScrenshots = (id: string) => {
    return axiosInstance
      .get<FetchResponse<T>>(`${this.endpoint}/${id}/screenshots`)
      .then((res) => res.data);
  };
}

export default APIClient;
export { CanceledError };
