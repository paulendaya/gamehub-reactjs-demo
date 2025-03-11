import { Genre } from "@/services/game-service";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import useData, { FetchResponse } from "./useData";
import genres from "@/data/genres";


const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient
        .get<FetchResponse<Genre>>('/genres')
            .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres
});

export default useGenres;