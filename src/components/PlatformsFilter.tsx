import { Platform } from "@/services/game-service";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";

interface Props {
  platforms: Platform[];
  selectedPlatform: number;
  onChange: (id: number) => void;
}
interface PlatformCollection {
  label: string;
  value: number;
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
