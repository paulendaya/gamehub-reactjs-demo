import useGames, { GameQuery } from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";
import useLocalLoading from "@/hooks/useLocalLoading";
import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameList = ({ gameQuery }: Props) => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGames(gameQuery);
  const localLoading = useLocalLoading(isLoading);
  return (
    <>
      <div className="game-grid">
        {data?.pages.map(
          (
            page,
            index // loop through pages of data returned from infinite query
          ) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <div key={game.id} className="game-item">
                  {localLoading ? <GameCardLoader /> : <GameCard game={game} />}
                </div>
              ))}
            </React.Fragment>
          )
        )}
      </div>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameList;
