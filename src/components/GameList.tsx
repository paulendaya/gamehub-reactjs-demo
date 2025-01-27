import { Game } from "@/services/game-service";
import React from "react";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";

interface Props {
  games: Game[];
  isLoading: boolean;
}

const GameList = ({ games, isLoading }: Props) => {
  return (
    <div>
      <div className="row">
        {games.map((game) => (
          <div key={game.id} className="col-xl-3 col-md-6 col-6 mb-3">
            {isLoading ? <GameCardLoader /> : <GameCard game={game} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
