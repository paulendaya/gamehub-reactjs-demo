import { GameQuery } from "@/hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <h1>{heading}</h1>;
};

export default GameHeading;
