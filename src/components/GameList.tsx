import useGames, { GameQuery } from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import useLocalLoading from "@/hooks/useLocalLoading";

interface Props {
  gameQuery: GameQuery;
}

const GameList = ({ gameQuery }: Props) => {
  const { data, isLoading } = useGames(gameQuery);
  const localLoading = useLocalLoading(isLoading);
  return (
    <div className="game-grid">
      {data?.results.map((game) => (
        <div key={game.id} className="game-item">
          {localLoading ? <GameCardLoader /> : <GameCard game={game} />}
        </div>
      ))}
    </div>
  );
};

export default GameList;
