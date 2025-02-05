import { Genre } from "@/services/game-service";
import { NativeSelectField, NativeSelectRoot } from "./ui/native-select";
import useGenres from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onChange: (id: number) => void;
}

const GenreFilter = ({ selectedGenre, onChange }: Props) => {
  const { data } = useGenres();
  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select Genre"
          value={selectedGenre?.id}
          onChange={(e) => onChange(parseInt(e.currentTarget.value))}
        >
          {data.map((genre) => (
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
