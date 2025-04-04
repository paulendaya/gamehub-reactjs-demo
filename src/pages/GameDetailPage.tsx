import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { Button, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <p>Loading ...</p>;
  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        <GridItem>
          <Heading as="h1" size="xl">
            {game.name}
          </Heading>
          <ExpandableText maxChars={500}>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
          <Link to={"/"}>
            <Button>Back to Games</Button>
          </Link>
        </GridItem>
        <GridItem>
          <GameTrailer slug={game.slug} />
          <GameScreenshots slug={game.slug} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
