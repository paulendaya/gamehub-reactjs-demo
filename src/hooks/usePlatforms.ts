import GameService, { Platform } from "@/services/game-service";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const usePlatforms = () => {
    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [errorsPlatforms, setErrorPlatforms] = useState<String[]>([]);
    const [isLoadingPlatforms, setLoadingPlatforms] = useState(true);

    useEffect(() => {
        setLoadingPlatforms(true);
        //platforms
          const {platformsRequest, cancelPlatforms} = GameService.getPlatforms();
          platformsRequest
            .then(res => {
              let data = res.data.results;
              setPlatforms(data);
              setLoadingPlatforms(false);
              //console.log(data);
            })
            .catch((err) => {
              if (err instanceof CanceledError) return;
              setErrorPlatforms([...errorsPlatforms, 'Error fetching platforms: (' + err.message + ')']);
              setLoadingPlatforms(false);
            });

        },[]);
    return {platforms, errorsPlatforms, isLoadingPlatforms};
}

export default usePlatforms;