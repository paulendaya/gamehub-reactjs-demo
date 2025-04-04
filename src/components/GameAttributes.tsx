import Game from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  // in this component, we are utilizing the SimpleGrid component to display the attributes in a two-column layout
  // Also, since we are displaying a key-value pair, we are using the DefinitionItem component to display the key and its corresponding value
  // We use <dl>, <dt>, and <dd> tags to structure the attributes and their values
  // This way, the accessibility of the page is improved so the screen reader can read the attributes and their values
  return (
    <div>
      <SimpleGrid columns={2} as="dl" gap={5}>
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text margin={0} key={platform.id}>
              {platform.name}
            </Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore metacritic={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {game.genres?.map((genre) => (
            <Text margin={0} key={genre.id}>
              {genre.name}
            </Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text margin={0} key={publisher.id}>
              {publisher.name}
            </Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </div>
  );
};

export default GameAttributes;
