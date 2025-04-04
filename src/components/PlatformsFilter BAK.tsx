import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import Platform from "@/entities/Platform";

interface Props {
  platforms: Platform[];
  selectedPlatform: number;
  onChange: (id: number) => void;
}

const PlatformsFilter = ({ platforms, selectedPlatform, onChange }: Props) => {
  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select Platform"
          value={selectedPlatform}
          onChange={(e) => onChange(parseInt(e.currentTarget.value))}
        >
          {platforms.map((platform) => (
            <option key={platform.id} value={platform.id}>
              {platform.name}
            </option>
          ))}
        </NativeSelectField>
      </NativeSelectRoot>
    </div>
  );
};

export default PlatformsFilter;
