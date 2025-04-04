import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <p>Loading ...</p>;
  if (error || !game) throw error;

  return (
    <>
      <Heading as="h1" size="xl">
        {game.name}
      </Heading>
      <ExpandableText maxChars={500}>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer slug={game.slug} />
      <GameScreenshots slug={game.slug} />
    </>
  );
};

export default GameDetailPage;
