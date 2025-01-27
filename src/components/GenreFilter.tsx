import { Genre } from "@/services/game-service";
import { NativeSelectField, NativeSelectRoot } from "./ui/native-select";

interface Props {
  genres: Genre[];
  selectedGenre: Genre;
  onChange: (id: number) => void;
}

const GenreFilter = ({ genres, selectedGenre, onChange }: Props) => {
  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select Genre"
          value={selectedGenre.id}
          onChange={(e) => onChange(parseInt(e.currentTarget.value))}
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
