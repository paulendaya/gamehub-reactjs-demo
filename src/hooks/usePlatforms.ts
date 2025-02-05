import { Platform } from "@/services/game-service";
import useData from "./useData";

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;