import { useState } from "react";
import Header from "./components/header/Header";
import GenreList from "./components/GenreList";
import GameList from "./components/GameList";
import PlatformsFilter from "./components/PlatformsFilter";
import GameSorter from "./components/GameSorter";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import GenreFilter from "./components/GenreFilter";
import useGenres from "./hooks/useGenres";
import GameHeading from "./components/GameHeading";
import { GameQuery } from "./hooks/useGames";

function App() {
  const { data: genres, isLoading: isLoadingGenres } = useGenres();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <Header
            searchOnChange={(keyword) =>
              setGameQuery({ ...gameQuery, search: keyword })
            }
            searchKeyword={gameQuery.search}
          />

          <div className="row mt-4">
            <div className="col-md-3 d-md-block d-none">
              <h3 className="text-start mb-4">Genres</h3>
              <GenreList
                genres={genres.results}
                onClick={(genre) =>
                  setGameQuery({ ...gameQuery, genreId: genre.id })
                }
                selectedGenreId={gameQuery.genreId}
                isLoadingGenres={isLoadingGenres}
              />
            </div>
            <div className="col-md-9">
              <GameHeading gameQuery={gameQuery} />
              <div className="my-3">
                <div className="d-flex gap-3 flex-md-row flex-column">
                  <div className="d-md-none d-block flex-md-grow-0 flex-grow-1">
                    <GenreFilter
                      genres={genres.results}
                      selectedGenreId={gameQuery.genreId}
                      onChange={(selectedGenreId) =>
                        setGameQuery({ ...gameQuery, genreId: selectedGenreId })
                      }
                    />
                  </div>
                  <div className="flex-md-grow-0 flex-grow-1">
                    <PlatformsFilter
                      selectedPlatformId={gameQuery.platformId}
                      onChange={(platformId) => {
                        setGameQuery({ ...gameQuery, platformId: platformId });
                      }}
                    />
                  </div>
                  <div className="flex-md-grow-0 flex-grow-1">
                    <GameSorter
                      selectedSorter={gameQuery.ordering}
                      onChange={(ordering) =>
                        setGameQuery({ ...gameQuery, ordering })
                      }
                    />
                  </div>
                </div>
              </div>
              <GameList gameQuery={gameQuery} />
            </div>
          </div>
        </ColorModeProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
