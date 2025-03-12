import { Genre } from "@/services/game-service";
import { NativeSelectField, NativeSelectRoot } from "./ui/native-select";

interface Props {
<<<<<<< HEAD
  genres: Genre[];
=======
  genres: Genre[] | undefined;
>>>>>>> master
  selectedGenre: Genre | null;
  onChange: (genre: Genre | null) => void;
}

const GenreFilter = ({ genres, selectedGenre, onChange }: Props) => {
<<<<<<< HEAD

=======
>>>>>>> master
  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select Genre"
          value={selectedGenre?.id}
          onChange={(e) => {
            const selectedGenreId = parseInt(e.currentTarget.value);
<<<<<<< HEAD
            const selectedGenre = genres.find(genre => genre.id === selectedGenreId);
            onChange(selectedGenre ? selectedGenre : null)
          }}
        >
          {genres.map((genre) => (
=======
            const selectedGenre = genres?.find(
              (genre) => genre.id === selectedGenreId
            );
            onChange(selectedGenre ? selectedGenre : null);
          }}
        >
          {genres?.map((genre) => (
>>>>>>> master
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </NativeSelectField>
      </NativeSelectRoot>
    </div>
  );
};

export default GenreFilter;
