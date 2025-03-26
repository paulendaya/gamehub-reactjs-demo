import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import usePlatforms, { Platform } from "@/hooks/usePlatforms";

interface Props {
  selectedPlatformId?: number | null; // Change the type of selectedPlatform to Platform
  onChange: (platformId?: number) => void; // Change the type of onChange to accept a Platform object
}

const PlatformsFilter = ({ selectedPlatformId, onChange }: Props) => {
  const { data } = usePlatforms();

  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select Platform"
          value={selectedPlatformId ?? ""} // Assuming selectedPlatform is an object with an id property
          onChange={(e) => onChange(parseInt(e.currentTarget.value))}
        >
          {data?.results.map((platform) => (
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
