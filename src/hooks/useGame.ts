import APIClient from "@/services/api-client";
import { Game } from "./useGames";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getItem(slug),
    // WE use arrow function here to pass the slug as a parameter
    // When a class or a function has a parameter, it is called an arrow function, otherwise, it is called a regular function
    // In the context of React hooks like useQuery, the inline arrow function used in the queryFn parameter in the useGame hook (() => apiClient.getItem(slug)) allows you to pass dynamic parameters to the function at the time the query is executed. This dynamic nature enables you to customize the behavior of the query based on the specific context or data available when the query is triggered.
    staleTime: ms("1d"),
  });
/* useQuery({
    queryKey: ["games", slug],
    queryFn: apiClient.getItem(slug),
    staleTime: ms("1d"),
  }); */

export default useGame;
