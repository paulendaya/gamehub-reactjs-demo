import { Skeleton, SkeletonText } from "./ui/skeleton";

const GameCardLoader = () => {
  return (
    <div>
      <Skeleton height="200px" />
      <SkeletonText noOfLines={3} gap="2" />
    </div>
  );
};

export default GameCardLoader;
