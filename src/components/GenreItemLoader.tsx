import { HStack, Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonText } from "./ui/skeleton";

const GenreItemLoader = () => {
  return (
    <div>
      <HStack gap={1}>
        <Skeleton height="50px" width="50px" marginRight={15} />
        <SkeletonText noOfLines={1} width="100px" />
      </HStack>
    </div>
  );
};

export default GenreItemLoader;
