import { useState } from "react";
import Header from "./components/header/Header";
import GenreList from "./components/GenreList";
import { Genre, Platform } from "./services/game-service";
import GameList from "./components/GameList";
import PlatformsFilter from "./components/PlatformsFilter";
import GameSorter from "./components/GameSorter";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import GenreFilter from "./components/GenreFilter";
import useGenres from "./hooks/useGenres";

function App() {

  const { data: genres, isLoading: isLoadingGenres } = useGenres();
  
  const [selectedSorter, setSorter] = useState("name");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedPlatform, setPlatform] = useState<Platform | null>(null);
  const [selectedGenre, setGenre] = useState<Genre | null>(null);

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
              <h3 className="text-start mb-4">Genres</h3>
              <GenreList
                genres={genres}
                onClick={(genre) => setGenre(genre)}
                selectedGenre={selectedGenre}
                isLoadingGenres={isLoadingGenres}
              />
            </div>
            <div className="col-md-9">
              <h1>
                {selectedPlatform?.name} {selectedGenre?.name} Games
              </h1>
              <div className="my-3">
                <div className="d-flex gap-3 flex-md-row flex-column">
                  <div className="d-md-none d-block flex-md-grow-0 flex-grow-1">
                    <GenreFilter
                      genres = {genres}
                      selectedGenre={selectedGenre}
                      onChange={(genre) => setGenre(genre)}
                    />
                  </div>
                  <div className="flex-md-grow-0 flex-grow-1">
                    <PlatformsFilter
                      selectedPlatform={selectedPlatform}
                      onChange={(platform) => setPlatform(platform)}
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
              <GameList selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
            </div>
          </div>
        </ColorModeProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
