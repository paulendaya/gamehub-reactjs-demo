import { Genre } from "@/hooks/useGenres";
import { NativeSelectField, NativeSelectRoot } from "./ui/native-select";

interface Props {
  genres: Genre[] | undefined;
  selectedGenreId?: number;
  onChange: (selectedGenreId?: number) => void;
}

const GenreFilter = ({ genres, selectedGenreId, onChange }: Props) => {
  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select Genre"
          value={selectedGenreId ?? ""}
          onChange={(e) => onChange(parseInt(e.currentTarget.value))}
        >
          {genres?.map((genre) => (
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
