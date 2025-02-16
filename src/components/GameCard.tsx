import { Game } from "@/services/game-service";
import { Card, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PlatformList from "./PlatformList";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const imageDimension = {
    width: 600,
    height: 400,
  };
  return (
    <div>
      <Card.Root maxW="sm" overflow="hidden">
        <Image
          src={getCroppedImageUrl(game.background_image, imageDimension)}
          alt={game.name}
          aspectRatio={16 / 12}
        />
        <Card.Body gap="2">
          <div className="d-flex justify-content-between">
            <PlatformList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore metacritic={game.metacritic} />
          </div>
          <Card.Title>{game.name}</Card.Title>

          <h5 className="mt-0 pt-0">{game.rating}</h5>
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default GameCard;
