import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/stores/gameQueryStore";

const PlatformsFilter = () => {
  const { data } = usePlatforms();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  return (
    <div>
      <NativeSelectRoot variant="subtle" key="subtle">
        <NativeSelectField
          placeholder="Select Platform"
          value={selectedPlatformId ?? ""} // Assuming selectedPlatform is an object with an id property
          onChange={(e) => setPlatformId(parseInt(e.currentTarget.value))}
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
