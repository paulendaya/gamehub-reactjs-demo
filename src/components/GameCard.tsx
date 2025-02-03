import { Game, PlatformParent } from "@/services/game-service";
import { Card, Image } from "@chakra-ui/react";
import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaApple,
  FaGlobe,
  FaLinux,
  FaNeos,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { FaAndroid } from "react-icons/fa6";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { SiAtari, SiCommodore, SiSega, SiWeb3Dotjs } from "react-icons/si";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  /* return (
    <div>
      <Card.Root maxW="sm" overflow="hidden">
        <Image
          src={game.background_image}
          alt={game.name}
          aspectRatio={16 / 12}
        />
        <Card.Body gap="2">
          <div className="d-flex justify-content-between">
            <div className="platforms-list d-flex flex-wrap gap-2">
              {game.parent_platforms.map((result: PlatformParent) => {
                let platformIcon = null;
                switch (result.platform.name) {
                  case "PC":
                    platformIcon = <FaWindows />;
                    break;
                  case "PlayStation":
                    platformIcon = <FaPlaystation />;
                    break;
                  case "Xbox":
                    platformIcon = <FaXbox />;
                    break;
                  case "iOS":
                    platformIcon = <IoLogoAppleAppstore />;
                    break;
                  case "Android":
                    platformIcon = <FaAndroid />;
                    break;
                  case "Apple Macintosh":
                    platformIcon = <FaApple />;
                    break;
                  case "Linux":
                    platformIcon = <FaLinux />;
                    break;
                  case "Nintendo":
                    platformIcon = <BsNintendoSwitch />;
                    break;
                  case "Atari":
                    platformIcon = <SiAtari />;
                    break;
                  case "Commodore / Amiga":
                    platformIcon = <SiCommodore />;
                    break;
                  case "Sega":
                    platformIcon = <SiSega />;
                    break;
                  case "3DO":
                    platformIcon = <SiWeb3Dotjs />;
                    break;
                  case "Neo Geo":
                    platformIcon = <FaNeos />;
                    break;
                  case "Web":
                    platformIcon = <FaGlobe />;
                    break;
                  default:
                    // Handle other platforms here
                    break;
                }
                return <div key={result.platform.id}>{platformIcon}</div>;
              })}
            </div>
            {game.metacritic && (
              <Tag size="sm" colorPalette="teal">
                {game.metacritic}
              </Tag>
            )}
          </div>
          <Card.Title>{game.name}</Card.Title>

          <h5 className="mt-0 pt-0">{game.rating}</h5>
        </Card.Body>
      </Card.Root>
    </div>
  ); */
  return (
    <div>
      <Card.Root maxW="sm" overflow="hidden">
        <Image
          src={game.background_image}
          alt={game.name}
          aspectRatio={16 / 12}
        />
        <Card.Body gap="2">
          <div className="d-flex justify-content-between">
            <div className="platforms-list d-flex flex-wrap gap-2">
              {game.parent_platforms.map(({ platform }) => {
                let platformIcon = null;
                switch (platform.name) {
                  case "PC":
                    platformIcon = <FaWindows />;
                    break;
                  case "PlayStation":
                    platformIcon = <FaPlaystation />;
                    break;
                  case "Xbox":
                    platformIcon = <FaXbox />;
                    break;
                  case "iOS":
                    platformIcon = <IoLogoAppleAppstore />;
                    break;
                  case "Android":
                    platformIcon = <FaAndroid />;
                    break;
                  case "Apple Macintosh":
                    platformIcon = <FaApple />;
                    break;
                  case "Linux":
                    platformIcon = <FaLinux />;
                    break;
                  case "Nintendo":
                    platformIcon = <BsNintendoSwitch />;
                    break;
                  case "Atari":
                    platformIcon = <SiAtari />;
                    break;
                  case "Commodore / Amiga":
                    platformIcon = <SiCommodore />;
                    break;
                  case "Sega":
                    platformIcon = <SiSega />;
                    break;
                  case "3DO":
                    platformIcon = <SiWeb3Dotjs />;
                    break;
                  case "Neo Geo":
                    platformIcon = <FaNeos />;
                    break;
                  case "Web":
                    platformIcon = <FaGlobe />;
                    break;
                  default:
                    // Handle other platforms here
                    break;
                }
                return <div key={platform.id}>{platformIcon}</div>;
              })}
            </div>
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
