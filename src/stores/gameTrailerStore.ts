import { create } from "zustand";

interface GameTrailerStore {
  selectedGameTrailerUrl: string;
  setGameTrailerUrl: (url: string) => void;
}

const useGameTrailerStore = create<GameTrailerStore>((set) => ({
  selectedGameTrailerUrl: "",
  setGameTrailerUrl: (url) => set(() => ({ selectedGameTrailerUrl: url })),
  
}));

export default useGameTrailerStore;
