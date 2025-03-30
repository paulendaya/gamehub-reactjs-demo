import genres from "@/data/genres";
import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: genres,
  });

const useGenre = (id: number | undefined) => {
  const queryClient = useQueryClient();
  const genres = queryClient.getQueryData<FetchResponse<Genre>>(["genres"]); //Access the query data using the query key "genres" by accessing the queryClient object
  return genres?.results.find((genre) => genre.id == id);
};

export { useGenre };
export default useGenres;
