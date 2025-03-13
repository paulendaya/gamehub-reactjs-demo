/* 
import { Game, GameQuery } from "../useGames";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) => 
    useData<Game>('/games', 
        {
            params: 
                {
                    genres: gameQuery.genre?.id, 
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery?.ordering,
                    search: gameQuery?.search,
                }
        }, [gameQuery]);

export default useGames; */
