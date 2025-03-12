<<<<<<< HEAD
import { Genre } from "@/services/game-service";
import useData from "./useData";

const useGenres = () => useData<Genre>('/genres');
=======
import genres from "@/data/genres";
import apiClient, { FetchResponse } from "@/services/api-client";
import { Genre } from "@/services/game-service";
import { useQuery } from "@tanstack/react-query";


const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient
        .get<FetchResponse<Genre>>('/genres')
            .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres
});
>>>>>>> master

export default useGenres;