import GameService, { Genre } from "@/services/game-service";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [errorsGenres, setErrorGenres] = useState<String[]>([]);
    const [isLoadingGenres, setLoadingGenres] = useState(true);

    useEffect(() => {
        setLoadingGenres(true);
            //genres
            const { request, cancel } = GameService.getGenres();
            request
              .then((res) => {
                let data = res.data.results;
                setGenres(data);
                setLoadingGenres(false);
                //console.log(res.data.results);
              })
              .catch((err) => {
                if (err instanceof CanceledError) return;
                setErrorGenres([...errorsGenres, 'Error fetching genres: (' + err.message + ')']);
                setLoadingGenres(false);
              });
            }, []);

            return {genres, errorsGenres, isLoadingGenres};
}

export default useGenres;