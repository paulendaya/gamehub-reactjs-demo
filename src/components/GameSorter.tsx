import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";

interface Props {
  selectedSorter: string;
  onChange: (sorter: string) => void;
}

const GameSorter = ({ selectedSorter, onChange }: Props) => {
  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Order by"
          value={selectedSorter}
          onChange={(e) => onChange(e.currentTarget.value)}
        >
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="metacritic">Metacritic</option>
        </NativeSelectField>
      </NativeSelectRoot>
    </div>
  );
};

export default GameSorter;
