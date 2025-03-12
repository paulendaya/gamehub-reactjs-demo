import apiClient, { FetchResponse } from "@/services/api-client";
import { Platform } from "@/services/game-service";
import { useQuery } from "@tanstack/react-query";
import platforms from "@/data/platforms";


const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () => apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms
});

export default usePlatforms;