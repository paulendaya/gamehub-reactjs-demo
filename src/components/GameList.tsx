import { Game } from "@/services/game-service";
import React from "react";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import useLocalLoading from "@/hooks/useLocalLoading";

interface Props {
  games: Game[];
  isLoading: boolean;
}

const GameList = ({ games, isLoading }: Props) => {
  const localLoading = useLocalLoading(isLoading);
  return (
    <div>
      <div className="row">
        {games.map((game) => (
          <div key={game.id} className="col-xl-3 col-md-6 col-sm-6 col-12 mb-3">
            {localLoading ? <GameCardLoader /> : <GameCard game={game} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
