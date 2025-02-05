import { Platform } from "@/services/game-service";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import usePlatforms from "@/hooks/usePlatforms";

const PlatformsFilter = () => {
  const { data } = usePlatforms();
  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField placeholder="Select Platform">
          {data.map((platform) => (
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
