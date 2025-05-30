import Platform from "@/entities/Platform";
import Genre from "./Genre";
import Publisher from "./Publishers";

export default interface Game {
  id: number;
  background_image: string;
  slug: string;
  name: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  rating: number;
  description_raw: string;
  publishers: Publisher[];
}
