import { Genre } from "@/services/game-service";
import useData from "./useData";

const useGenres = () => useData<Genre>('/genres');

export default useGenres;