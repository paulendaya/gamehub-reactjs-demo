import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import GameHeading from "./components/GameHeading";
import GameList from "./components/GameList";
import GameSorter from "./components/GameSorter";
import GenreFilter from "./components/GenreFilter";
import GenreList from "./components/GenreList";
import Header from "./components/header/Header";
import PlatformsFilter from "./components/PlatformsFilter";
import { ColorModeProvider } from "./components/ui/color-mode";
import useGenres from "./hooks/useGenres";
import useGameQueryStore from "./stores/gameQueryStore";

function App() {
  const { data: genres, isLoading: isLoadingGenres } = useGenres();
  //const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const {
    gameQuery,
    setGenreId,
    setPlatformId,
    setSearchKeyword,
    setOrdering,
  } = useGameQueryStore();
  //console.log(gameQuery);

  return (
    <div>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <Header
            searchOnChange={(keyword) => setSearchKeyword(keyword)}
            searchKeyword={gameQuery.search}
          />

          <div className="row mt-4">
            <div className="col-md-3 d-md-block d-none">
              <h3 className="text-start mb-4">Genres</h3>
              <GenreList
                genres={genres.results}
                onClick={(genre) => setGenreId(genre.id)}
                selectedGenreId={gameQuery.genreId}
                isLoadingGenres={isLoadingGenres}
              />
            </div>
            <div className="col-md-9">
              <GameHeading />
              <div className="my-3">
                <div className="d-flex gap-3 flex-md-row flex-column">
                  <div className="d-md-none d-block flex-md-grow-0 flex-grow-1">
                    <GenreFilter
                      genres={genres.results}
                      selectedGenreId={gameQuery?.genreId}
                      onChange={(selectedGenreId) =>
                        setGenreId(selectedGenreId)
                      }
                    />
                  </div>
                  <div className="flex-md-grow-0 flex-grow-1">
                    <PlatformsFilter
                      selectedPlatformId={gameQuery.platformId}
                      onChange={(platformId) => {
                        setPlatformId(platformId);
                      }}
                    />
                  </div>
                  <div className="flex-md-grow-0 flex-grow-1">
                    <GameSorter
                      selectedSorter={gameQuery.ordering}
                      onChange={(ordering) => setOrdering(ordering)}
                    />
                  </div>
                </div>
              </div>
              <GameList />
            </div>
          </div>
        </ColorModeProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
