import APIClient, { FetchResponse } from "@/services/api-client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import { Genre } from "./useGenres";

const apiClient = new APIClient<Game>("games");

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  ordering: string;
  search: string;
}

export interface Game {
  id: number;
  background_image: string;
  slug: string;
  name: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  genres: [];
  rating: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId || null,
          parent_platforms: gameQuery?.platformId || null,
          ordering: gameQuery?.ordering,
          search: gameQuery?.search,
          page: pageParam,
          page_size: 12,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      // if there are more pages, return the next page by incrementing the allPages length
      return lastPage.next ? allPages.length + 1 : undefined; // if next page exists, return length + 1
    },
  });

export default useGames;
