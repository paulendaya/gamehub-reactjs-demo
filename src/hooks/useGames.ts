import GameService, { Game, Genre, Platform } from '@/services/game-service'
import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'

interface Error {
  type: string;
  message: string;
}

const useGames = () => {
    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [games, setGames] = useState<Game[]>([]);
    const [errors, setError] = useState<String[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        //genres
        const { request, cancel } = GameService.getGenres();
        request
          .then((res) => {
            let data = res.data.results;
            setGenres(data);
            setLoading(false);
            //console.log(res.data.results);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError([...errors, 'Error fetching genres: (' + err.message + ')']);
            setLoading(false);
          });
        
        //games
        const {gamesRequest, cancelGames} = GameService.getGames();
        gamesRequest
          .then(res => {
            let data = res.data.results;
            setGames(data);
            setLoading(false);
            //console.log(data);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError([...errors, 'Error fetching games: (' + err.message + ')']);
            setLoading(false);
          });

          //platforms
          const {platformsRequest, cancelPlatforms} = GameService.getPlatforms();
          platformsRequest
            .then(res => {
              let data = res.data.results;
              setPlatforms(data);
              setLoading(false);
              //console.log(data);
            })
            .catch((err) => {
              if (err instanceof CanceledError) return;
              setError([...errors, 'Error fetching platforms: (' + err.message + ')']);
              setLoading(false);
            });

          return () => cancel();

      }, []);
  
      return {genres, games, platforms, errors, isLoading, setGenres, setGames, setPlatforms, setError};
}

export default useGames
