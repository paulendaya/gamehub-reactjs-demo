import { Genre } from "@/entities/Genre";
import { NativeSelectField, NativeSelectRoot } from "./ui/native-select";
import useGameQueryStore from "@/stores/gameQueryStore";

interface Props {
  genres: Genre[] | undefined;
}

const GenreFilter = ({ genres }: Props) => {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select Genre"
          value={selectedGenreId ?? ""}
          onChange={(e) => setGenreId(parseInt(e.currentTarget.value))}
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
