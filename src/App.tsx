import { useState } from "react";
import Header from "./components/header/Header";
import GenreList from "./components/GenreList";
import { Genre, Platform } from "./services/game-service";
import GameList from "./components/GameList";
import PlatformsFilter from "./components/PlatformsFilter";
import GameSorter from "./components/GameSorter";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";

function App() {
  const [selectedSorter, setSorter] = useState("name");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedPlatform, setPlatform] = useState<Platform | null>(null);
  const [selectedPlatformName, setPlatformName] = useState("");
  const [selectedGenre, setGenre] = useState<Genre | null>(null);

  //handleSelectPlatform of Platform filter
  /* const handleSelectPlatform = (id: number) => {
    if (id) {
      setPlatform(id);
      platforms.forEach((platform) => {
        if (platform.id === id) setPlatformName(platform.name);
      });
    } else {
      setPlatform(0);
      setPlatformName("");
    }
  }; */

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
                onClick={(genre) => {
                  setGenre(genre);
                }}
                selectedGenre={selectedGenre}
              />
            </div>
            <div className="col-md-9">
              <h1>
                {selectedPlatformName} {selectedGenre?.name} Games
              </h1>
              <div className="my-3">
                <div className="d-flex gap-3 flex-md-row flex-column">
                  <div className="d-md-none d-block flex-md-grow-0 flex-grow-1">
                    {/* <GenreFilter
                      selectedGenre={selectedGenre}
                      onChange={(id) => {
                        handleSelectGenre(id);
                      }}
                    /> */}
                  </div>
                  <div className="flex-md-grow-0 flex-grow-1">
                    {/* <PlatformsFilter
                      platforms={platforms}
                      selectedPlatform={selectedPlatform}
                      onChange={(id) => {
                        handleSelectPlatform(id);
                      }}
                    /> */}
                    <PlatformsFilter />
                  </div>
                  <div className="flex-md-grow-0 flex-grow-1">
                    <GameSorter
                      selectedSorter={selectedSorter}
                      onChange={(sorter) => setSorter(sorter)}
                    />
                  </div>
                </div>
              </div>
              <GameList selectedGenre={selectedGenre} />
            </div>
          </div>
        </ColorModeProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
