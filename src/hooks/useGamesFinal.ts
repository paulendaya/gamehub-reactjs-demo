import GameService, { Game } from "@/services/game-service";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useGamesFinal = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [errorsGames, setErrorGames] = useState<String[]>([]);
    const [isLoadingGames, setLoadingGames] = useState(true);

    useEffect(() => {
        setLoadingGames(true);
        //games
        const {gamesRequest, cancelGames} = GameService.getGames();
        gamesRequest
          .then(res => {
            let data = res.data.results;
            setGames(data);
            setLoadingGames(false);
            //console.log(data);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setErrorGames([...errorsGames, 'Error fetching games: (' + err.message + ')']);
            setLoadingGames(false);
          });

        }, []);

        return {games, errorsGames, isLoadingGames};

}

export default useGamesFinal;