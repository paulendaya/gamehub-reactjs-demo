import apiClient, { FetchResponse } from "@/services/api-client";
import { Game, GameQuery } from "@/services/game-service";
import { useQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery) => 
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient
            .get<FetchResponse<Game>>('/games', {
                params: 
                {
                    genres: gameQuery.genre?.id, 
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery?.ordering,
                    search: gameQuery?.search,
                }
            })
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24h
/*         initialData: genres */
    });

export default useGames;