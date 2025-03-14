import { GameQuery } from "@/hooks/useGames";
import { useGenre } from "@/hooks/useGenres";
import { usePlatform } from "@/hooks/usePlatforms";
import { FetchResponse } from "@/services/api-client";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <h1>{heading}</h1>;
};

export default GameHeading;
