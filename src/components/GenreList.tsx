import getCroppedImageUrl from "@/services/image-url";
import { Button, Image, VStack } from "@chakra-ui/react";
import GenreItemLoader from "./GenreItemLoader";
import useLocalLoading from "@/hooks/useLocalLoading";
import Genre from "@/entities/Genre";
import useGameQueryStore from "@/stores/gameQueryStore";

interface Props {
  genres: Genre[];
  isLoadingGenres: boolean;
}

const GenreList = ({ genres, isLoadingGenres }: Props) => {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const localLoading = useLocalLoading(isLoadingGenres);

  const imageDimension = {
    width: 600,
    height: 400,
  };

  if (localLoading) {
    return (
      <>
        <VStack gap={1} align={"start"}>
          {genres?.map((genre) => (
            <GenreItemLoader key={genre.id} />
          ))}
        </VStack>
      </>
    );
  }
  return (
    <>
      {genres?.map((genre) => (
        <Button
          className="genre-item d-flex gap-2 mb-4 px-0"
          data-selected={genre.id == selectedGenreId ? true : false}
          variant="ghost"
          key={genre.id}
          onClick={(event) => setGenreId(genre.id)}
        >
          <Image
            rounded="md"
            src={getCroppedImageUrl(genre.image_background, imageDimension)}
            alt={genre.name}
            aspectRatio={1 / 1}
            width="50px"
          />
          <div>{genre.name}</div>
        </Button>
      ))}
    </>
  );
};

export default GenreList;
