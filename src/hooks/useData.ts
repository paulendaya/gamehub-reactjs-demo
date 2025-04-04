import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

/* const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [errors, setErrors] = useState<String[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        
        apiClient.get<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig
        })
        .then(res => {
            setData(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
                setErrors([...errors, 'Error fetching games: (' + err.message + ')']);
                setLoading(false);
        });

    }, deps ? [...deps] : []);

    return {data, errors, isLoading};

}

export default useData; */
