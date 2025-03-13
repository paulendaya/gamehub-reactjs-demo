import { GameQuery } from "@/hooks/useGames";
import { Genre } from "@/hooks/useGenres";
import { Platform } from "@/hooks/usePlatforms";
import { FetchResponse } from "@/services/api-client";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const queryClient = useQueryClient();
  const platforms = queryClient.getQueryData<FetchResponse<Platform>>([
    "platforms",
  ]); //Access the query data using the query key "platforms" by accessing the queryClient object
  const genres = queryClient.getQueryData<FetchResponse<Genre>>(["genres"]);
  //Access the query data using the query key "genres" by accessing the queryClient object

  const heading = `${
    platforms?.results.find((platform) => platform.id == gameQuery.platformId)
      ?.name || ""
  } ${
    genres?.results.find((genre) => genre.id == gameQuery.genreId)?.name || ""
  } Games`;
  return <h1>{heading}</h1>;
};

export default GameHeading;
