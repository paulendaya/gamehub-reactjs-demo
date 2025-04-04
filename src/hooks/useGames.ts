import APIClient, { FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/stores/gameQueryStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("games");

const useGames = (gameQuery = useGameQueryStore((s) => s.gameQuery)) =>
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
