import { Game, GameQuery, Genre, Platform } from "@/services/game-service";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) => 
    useData<Game>('/games', 
        {
            params: 
                {
                    genres: gameQuery.genre?.id, 
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery?.ordering,
                }
        }, [gameQuery]);

export default useGames;