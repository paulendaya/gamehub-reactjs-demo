import Platform from "@/entities/Platform";
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

interface Props {
  platforms: Platform[];
}

const PlatformList = ({ platforms }: Props) => {
  return (
    <div className="platforms-list d-flex flex-wrap gap-2">
      {platforms.map((platform) => {
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
  );
};

export default PlatformList;
