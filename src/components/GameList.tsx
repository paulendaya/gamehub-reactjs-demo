import useGames from "@/hooks/useGames";
import useLocalLoading from "@/hooks/useLocalLoading";
import { Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardLoader from "./GameCardLoader";

const GameList = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGames();
  const localLoading = useLocalLoading(isLoading);

  //console.log(gameQuery);
  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0; //use reduce to sum all pages in data.pages

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={() => fetchNextPage()} // fetchNextPage is a function from useGames hook
        hasMore={!!hasNextPage} // use !! to convert undefined to boolean
        loader={<Spinner />}
      >
        <div className="game-grid">
          {data?.pages.map(
            (
              page,
              index // loop through pages of data returned from infinite query
            ) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <div key={game.id} className="game-item">
                    {localLoading ? (
                      <GameCardLoader />
                    ) : (
                      <GameCard game={game} />
                    )}
                  </div>
                ))}
              </React.Fragment>
            )
          )}
        </div>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </>
  );
};

export default GameList;
