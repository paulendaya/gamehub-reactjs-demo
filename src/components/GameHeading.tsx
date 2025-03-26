import { useGenre } from "@/hooks/useGenres";
import { usePlatform } from "@/hooks/usePlatforms";
import useGameQueryStore from "@/stores/gameQueryStore";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  console.log("Re-rendering GameHeading");

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <h1>{heading}</h1>;
};

export default GameHeading;
