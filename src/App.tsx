import { useState } from "react";
import Header from "./components/header/Header";
import GenreList from "./components/GenreList";
import { Genre } from "./services/game-service";
import GameList from "./components/GameList";
import PlatformsFilter from "./components/PlatformsFilter";
import GameSorter from "./components/GameSorter";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import GenreFilter from "./components/GenreFilter";
import useGames from "./hooks/useGames";
import useGenres from "./hooks/useGenres";
import usePlatforms from "./hooks/usePlatforms";

function App() {
  const { games, errorsGames, isLoadingGames } = useGames();
  const { genres, errorsGenres, isLoadingGenres } = useGenres();
  const { platforms, errorsPlatforms, isLoadingPlatforms } = usePlatforms();

  const [selectedSorter, setSorter] = useState("name");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedPlatform, setPlatform] = useState(0);
  const [selectedPlatformName, setPlatformName] = useState("");
  const [selectedGenre, setGenre] = useState<Genre | null>(null);

  // Filtering starts here
  const visibleGames = games.filter((game) => {
    const platformMatches =
      selectedPlatform !== 0
        ? game.parent_platforms.some(
            ({ platform }) => platform.id === selectedPlatform
          )
        : true; // If no platform is selected, consider it a match

    const genreMatches =
      selectedGenre?.id !== 0 && selectedGenre
        ? game.genres.some((genre: Genre) => genre.id === selectedGenre?.id)
        : true; // If no genre is selected, consider it a match

    const searchMatches =
      searchKeyword === "" ||
      game.name.toLowerCase().includes(searchKeyword.toLowerCase());

    return platformMatches && genreMatches && searchMatches; // Only include games that match all conditions
  });
  // Filtering ends here

  // Sorting the visible games based on the selected criterion
  const sortedGames = visibleGames.sort((a, b) => {
    if (selectedSorter === "name") {
      return a.name.localeCompare(b.name);
    } else if (selectedSorter === "metacritic") {
      return (b.metacritic || 0) - (a.metacritic || 0);
    } else if (selectedSorter === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0; // Fallback if no valid criterion is selected
  });

  //handleSelectPlatform of Platform filter
  const handleSelectPlatform = (id: number) => {
    if (id) {
      setPlatform(id);
      platforms.forEach((platform) => {
        if (platform.id === id) setPlatformName(platform.name);
      });
    } else {
      setPlatform(0);
      setPlatformName("");
    }
  };

  //handleSelectGenre of Genre filter
  const handleSelectGenre = (id: number) => {
    if (id) {
      genres.forEach((genre) => {
        if (genre.id === id) setGenre(genre);
      });
    } else {
      setGenre(null);
    }
  };

  //handleSelectPlatform of Platform filter
  const handleSearch = (value: string = "") => {
    setSearchKeyword(value);
  };

  return (
    <div>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <Header searchOnChange={handleSearch} searchKeyword={searchKeyword} />

          <div className="row mt-4">
            <div className="col-md-3 d-md-block d-none">
              {errorsGenres.map((error) => (
                <p className="text-danger">{error}</p>
              ))}
              <h3 className="text-start mb-4">Genres</h3>
              <GenreList
                genres={genres}
                onClick={(genre) => {
                  setGenre(genre);
                }}
                selectedGenre={selectedGenre}
                isLoading={isLoadingGenres}
              />
            </div>
            <div className="col-md-9">
              {errorsGenres.map((error) => (
                <p className="text-danger">{error}</p>
              ))}
              <h1>
                {selectedPlatformName} {selectedGenre?.name} Games
              </h1>
              <div className="my-3">
                <div className="d-flex gap-3 flex-md-row flex-column">
                  <div className="d-md-none d-block flex-md-grow-0 flex-grow-1">
                    <GenreFilter
                      genres={genres}
                      selectedGenre={selectedGenre}
                      onChange={(id) => {
                        handleSelectGenre(id);
                      }}
                    />
                  </div>
                  <div className="flex-md-grow-0 flex-grow-1">
                    <PlatformsFilter
                      platforms={platforms}
                      selectedPlatform={selectedPlatform}
                      onChange={(id) => {
                        handleSelectPlatform(id);
                      }}
                    />
                  </div>
                  <div className="flex-md-grow-0 flex-grow-1">
                    <GameSorter
                      selectedSorter={selectedSorter}
                      onChange={(sorter) => setSorter(sorter)}
                    />
                  </div>
                </div>
              </div>
              <GameList games={visibleGames} isLoading={isLoadingGames} />
            </div>
          </div>
        </ColorModeProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
