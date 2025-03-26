import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId?: number) => void;
  setPlatformId: (platformId?: number) => void;
  setSearchKeyword: (keyword?: string) => void;
  setOrdering: (ordering?: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setGenreId: (genreId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, genreId: genreId },
    })),
  setPlatformId: (platformId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId: platformId },
    })),
  setSearchKeyword: (keyword) =>
    set(() => ({
      gameQuery: { search: keyword },
    })),
  setOrdering: (ordering) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, ordering: ordering },
    })),
}));

export default useGameQueryStore;
