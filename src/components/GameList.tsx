import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import useLocalLoading from "@/hooks/useLocalLoading";
import useGames from "@/hooks/useGames";
import { Genre, Platform } from "@/services/game-service";

interface Props {
  selectedPlatform: Platform | null;
  selectedGenre: Genre | null;
}

const GameList = ({ selectedPlatform, selectedGenre }: Props) => {
  const { data, isLoading } = useGames(selectedGenre, selectedPlatform);
  const localLoading = useLocalLoading(isLoading);
  return (
    <div>
      <div className="row">
        {data.map((game) => (
          <div key={game.id} className="col-xl-3 col-md-6 col-sm-6 col-12 mb-3">
            {localLoading ? <GameCardLoader /> : <GameCard game={game} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
