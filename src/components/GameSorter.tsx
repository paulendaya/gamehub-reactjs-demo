import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import useGameQueryStore from "@/stores/gameQueryStore";

const GameSorter = () => {
  const setOrdering = useGameQueryStore((s) => s.setOrdering);
  const selectedOrdering = useGameQueryStore((s) => s.gameQuery.ordering);
  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Order by"
          value={selectedOrdering}
          onChange={(e) => setOrdering(e.currentTarget.value)}
        >
          <option value="name">Name ASC</option>
          <option value="-name">Name DESC</option>
          <option value="added">Added ASC</option>
          <option value="-added">Added DESC</option>
          <option value="rating">Rating (Lowest)</option>
          <option value="-rating">Rating (Highest)</option>
          <option value="metacritic">Metacritic ASC</option>
          <option value="-metacritic">Metacritic DESC</option>
        </NativeSelectField>
      </NativeSelectRoot>
    </div>
  );
};

export default GameSorter;
