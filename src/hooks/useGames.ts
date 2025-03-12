import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import { Genre } from "./useGenres";


export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    ordering: string;
    search: string;
  }

export interface Game {
    id: number;
    background_image: string;
    slug: string;
    name: string;
    metacritic: number;
    parent_platforms: {platform: Platform}[],
    genres: [], 
    rating: number;
  }

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
    });

export default useGames;