import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import usePlatforms from "@/hooks/usePlatforms";
import { Platform } from "@/services/game-service";

interface Props {
  selectedPlatform: Platform | null; // Change the type of selectedPlatform to Platform
  onChange: (platform: Platform | null) => void; // Change the type of onChange to accept a Platform object
}

const PlatformsFilter = ({ selectedPlatform, onChange }: Props) => {
  const { data } = usePlatforms();

  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select Platform"
          value={selectedPlatform?.id} // Assuming selectedPlatform is an object with an id property
          onChange={(e) => {
            const selectedPlatformId = parseInt(e.currentTarget.value);
            const selectedPlatform = data?.find(
              (platform) => platform.id === selectedPlatformId
            );
            onChange(selectedPlatform ? selectedPlatform : null);
          }}
        >
          {data?.map((platform) => (
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
