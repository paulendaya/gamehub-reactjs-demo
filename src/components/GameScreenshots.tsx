import { useGameScreenshots } from "@/hooks/useGame";
import getCroppedImageUrl from "@/services/image-url";
import { SimpleGrid, Skeleton, Image } from "@chakra-ui/react";

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const { data, isLoading } = useGameScreenshots(slug!);
  const dummyData = [0, 1, 2, 3];

  if (isLoading) {
    return (
      <div>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} marginTop={4}>
          {dummyData.map((item, index) => (
            <Skeleton aspectRatio={16 / 9} key={index} />
          ))}
        </SimpleGrid>
      </div>
    );
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} marginTop={4}>
        {data?.results.map((screenshot, index) => (
          <Image
            src={getCroppedImageUrl(screenshot.image, {
              width: 600,
              height: 400,
            })}
            alt={screenshot.id.toString()}
            aspectRatio={16 / 12}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
