import { useGameTrailers } from "@/hooks/useGame";
import useGameTrailerStore from "@/stores/gameTrailerStore";
import {
  NativeSelectRoot,
  NativeSelectField,
  Box,
  AspectRatio,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data: gameTrailers, isLoading } = useGameTrailers(slug!);

  const { setGameTrailerUrl, selectedGameTrailerUrl } = useGameTrailerStore();
  useEffect(() => {
    if (gameTrailers?.results.length! > 0 && !isLoading) {
      setGameTrailerUrl(gameTrailers?.results[0].data.max!);
      /* videoTrailer.current
        ?.querySelector("source")
        ?.setAttribute("src", gameTrailers?.results[0].data.max!); */
    } else {
      setGameTrailerUrl("");
    }
  }, [gameTrailers]);
  const videoTrailer = useRef<HTMLVideoElement>(null);
  if (gameTrailers?.results.length === 0 && !isLoading) return null;
  return (
    <>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select a Trailer"
          value={selectedGameTrailerUrl ?? ""}
          onChange={(e) => {
            setGameTrailerUrl(e.currentTarget.value);
            videoTrailer.current?.pause();
            videoTrailer.current?.load();
            videoTrailer.current?.play();
          }}
        >
          {gameTrailers?.results.map((trailer) => (
            <option
              key={trailer.id}
              value={trailer.data.max || trailer.data[480]}
            >
              {trailer.name}
            </option>
          ))}
        </NativeSelectField>
      </NativeSelectRoot>
      {selectedGameTrailerUrl && (
        <Box marginY={4}>
          <AspectRatio ratio={16 / 9}>
            <video
              src={selectedGameTrailerUrl}
              controls
              autoPlay
              poster={gameTrailers?.results[0].preview}
              ref={videoTrailer}
            ></video>
          </AspectRatio>
        </Box>
      )}
    </>
  );
};

export default GameTrailer;
