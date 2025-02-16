import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import useLocalLoading from "@/hooks/useLocalLoading";
import useGames from "@/hooks/useGames";
import { GameQuery, Genre, Platform } from "@/services/game-service";

interface Props {
  gameQuery: GameQuery;
}

const GameList = ({ gameQuery }: Props) => {
  const { data, isLoading } = useGames(gameQuery);
  const localLoading = useLocalLoading(isLoading);
  return (
    <div className="game-grid">
      {data.map((game) => (
        <div key={game.id} className="game-item">
          {localLoading ? <GameCardLoader /> : <GameCard game={game} />}
        </div>
      ))}
    </div>
  );
};

export default GameList;
