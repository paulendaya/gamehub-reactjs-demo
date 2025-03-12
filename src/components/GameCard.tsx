import { Card, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PlatformList from "./PlatformList";
import { RatingIcon } from "./RatingIcon";
import getCroppedImageUrl from "@/services/image-url";
import { Game } from "@/hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const imageDimension = {
    width: 600,
    height: 400,
  };
  return (
    <>
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
          <div>
            <RatingIcon rating={game.rating} />
          </div>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
