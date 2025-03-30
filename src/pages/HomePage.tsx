import React from "react";
import GameHeading from "../components/GameHeading";
import GameList from "../components/GameList";
import GameSorter from "../components/GameSorter";
import GenreFilter from "../components/GenreFilter";
import GenreList from "../components/GenreList";
import PlatformsFilter from "../components/PlatformsFilter";
import useGenres from "@/hooks/useGenres";

const Games = () => {
  const { data: genres, isLoading: isLoadingGenres } = useGenres();
  return (
    <>
      <div className="col-md-3 d-md-block d-none">
        <h3 className="text-start mb-4">Genres</h3>
        <GenreList genres={genres.results} isLoadingGenres={isLoadingGenres} />
      </div>
      <div className="col-md-9">
        <GameHeading />
        <div className="my-3">
          <div className="d-flex gap-3 flex-md-row flex-column">
            <div className="d-md-none d-block flex-md-grow-0 flex-grow-1">
              <GenreFilter genres={genres.results} />
            </div>
            <div className="flex-md-grow-0 flex-grow-1">
              <PlatformsFilter />
            </div>
            <div className="flex-md-grow-0 flex-grow-1">
              <GameSorter />
            </div>
          </div>
        </div>
        <GameList />
      </div>
    </>
  );
};

export default Games;
