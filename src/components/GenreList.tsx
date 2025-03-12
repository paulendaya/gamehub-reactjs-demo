import { Genre } from "@/services/game-service";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Image, VStack } from "@chakra-ui/react";
import GenreItemLoader from "./GenreItemLoader";
import useLocalLoading from "@/hooks/useLocalLoading";

interface Props {
  genres: Genre[];
  onClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
  isLoadingGenres: boolean;
}

<<<<<<< HEAD
const GenreList = ({ genres, onClick, selectedGenre, isLoadingGenres }: Props) => {

=======
const GenreList = ({
  genres,
  onClick,
  selectedGenre,
  isLoadingGenres,
}: Props) => {
>>>>>>> master
  const localLoading = useLocalLoading(isLoadingGenres);

  const imageDimension = {
    width: 600,
    height: 400,
  };

  if (localLoading) {
    return (
      <>
        <VStack gap={1} align={"start"}>
<<<<<<< HEAD
          {genres.map((genre) => (
=======
          {genres?.map((genre) => (
>>>>>>> master
            <GenreItemLoader key={genre.id} />
          ))}
        </VStack>
      </>
    );
  }
  return (
    <>
<<<<<<< HEAD
      {genres.map((genre) => (
=======
      {genres?.map((genre) => (
>>>>>>> master
        <Button
          className="genre-item d-flex gap-2 mb-4 px-0"
          data-selected={genre.id == selectedGenre?.id ? true : false}
          variant="ghost"
          key={genre.id}
          onClick={(event) => onClick(genre)}
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
