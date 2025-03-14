import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import platforms from "@/data/platforms";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: platforms,
  });

const usePlatform = (id: number | undefined) => {
  const queryClient = useQueryClient();
  const platforms = queryClient.getQueryData<FetchResponse<Platform>>([
    "platforms",
  ]); //Access the query data using the query key "platforms" by accessing the queryClient object
  return platforms?.results.find((platform) => platform.id == id);
};

export { usePlatform };
export default usePlatforms;
