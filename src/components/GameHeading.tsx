import { useGenre } from "@/hooks/useGenres";
import { usePlatform } from "@/hooks/usePlatforms";
import useGameQueryStore from "@/stores/gameQueryStore";

const GameHeading = () => {
  const { platformId, genreId } = useGameQueryStore((s) => s.gameQuery);

  console.log("Re-rendering GameHeading");
  const platform = usePlatform(platformId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <h1>{heading}</h1>;
};

export default GameHeading;
