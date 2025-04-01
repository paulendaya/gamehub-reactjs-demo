import { Platform } from "@/entities/Platform";

export interface Game {
  id: number;
  background_image: string;
  slug: string;
  name: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  genres: [];
  rating: number;
  description_raw: string;
  publishers: Publisher[];
}
