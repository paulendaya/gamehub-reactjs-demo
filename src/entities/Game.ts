import { Platform } from "@/entities/Platform";
import { Genre } from "./Genre";

export interface Game {
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
