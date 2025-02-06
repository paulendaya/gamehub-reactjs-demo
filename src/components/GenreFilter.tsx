import { Genre } from "@/services/game-service";
import { NativeSelectField, NativeSelectRoot } from "./ui/native-select";

interface Props {
  genres: Genre[];
  selectedGenre: Genre | null;
  onChange: (genre: Genre | null) => void;
}

const GenreFilter = ({ genres, selectedGenre, onChange }: Props) => {

  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select Genre"
          value={selectedGenre?.id}
          onChange={(e) => {
            const selectedGenreId = parseInt(e.currentTarget.value);
            const selectedGenre = genres.find(genre => genre.id === selectedGenreId);
            onChange(selectedGenre ? selectedGenre : null)
          }}
        >
          {genres.map((genre) => (
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
