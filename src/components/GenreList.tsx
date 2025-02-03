import { Genre } from "@/services/game-service";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Image } from "@chakra-ui/react";

interface Props {
  genres: Genre[];
  onClick: (genre: Genre) => void;
  selectedGenre: Genre;
}

const GenreList = ({ genres, onClick, selectedGenre }: Props) => {
  const imageDimension = {
    width: 600,
    height: 400,
  };
  const handleClick = (id: number) => {};
  return (
    <>
      {genres.map((genre) => (
        <Button
          className="genre-item d-flex gap-2 mb-4 px-0"
          data-selected={genre.id == selectedGenre.id ? true : false}
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
