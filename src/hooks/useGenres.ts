import { Genre } from "@/services/game-service";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import useData, { FetchResponse } from "./useData";

const useGenres = () => useQuery<Genre[], Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient
        .get<FetchResponse<Genre>>('/genres')
            .then((res) => res.data.results),
    staleTime: 10_000
});

export default useGenres;