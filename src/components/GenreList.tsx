import { Genre } from "@/services/game-service";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Image, VStack } from "@chakra-ui/react";
import GenreItemLoader from "./GenreItemLoader";
import useGenres from "@/hooks/useGenres";
import useLocalLoading from "@/hooks/useLocalLoading";

interface Props {
  onClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onClick, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const localLoading = useLocalLoading(isLoading);

  const imageDimension = {
    width: 600,
    height: 400,
  };
  const handleClick = (id: number) => {};
  if (localLoading) {
    return (
      <>
        <VStack gap={1} align={"start"}>
          {data.map((genre) => (
            <GenreItemLoader key={genre.id} />
          ))}
        </VStack>
      </>
    );
  }
  return (
    <>
      {data.map((genre) => (
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
